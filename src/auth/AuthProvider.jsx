import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthContext } from "./AuthContext";
import { hasSupabaseEnv, supabase } from "../lib/supabaseClient";

const SESSION_START_KEY = "ftuw_session_started_at";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

const clearSessionStart = () => {
  localStorage.removeItem(SESSION_START_KEY);
};

const setSessionStartNow = () => {
  localStorage.setItem(SESSION_START_KEY, String(Date.now()));
};

const setSessionStartIfMissing = () => {
  if (!localStorage.getItem(SESSION_START_KEY)) {
    setSessionStartNow();
  }
};

const isSessionExpired = () => {
  const stored = localStorage.getItem(SESSION_START_KEY);
  if (!stored) {
    return false;
  }

  const startedAt = Number(stored);
  if (!Number.isFinite(startedAt)) {
    return true;
  }

  return Date.now() - startedAt > SESSION_TTL_MS;
};

async function fetchProfile(userId) {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("user_id, email, role, membership_status, created_at, approved_at")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const applySession = useCallback(async (nextSession, { enforceTtl = true } = {}) => {
    if (!nextSession) {
      setSession(null);
      setUser(null);
      setProfile(null);
      clearSessionStart();
      return;
    }

    if (enforceTtl && isSessionExpired()) {
      await supabase?.auth.signOut();
      setSession(null);
      setUser(null);
      setProfile(null);
      clearSessionStart();
      return;
    }

    setSession(nextSession);
    setUser(nextSession.user);
    setSessionStartIfMissing();

    try {
      const profileData = await fetchProfile(nextSession.user.id);
      setProfile(profileData);
    } catch {
      setProfile(null);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function bootstrapAuth() {
      if (!hasSupabaseEnv || !supabase) {
        if (isMounted) {
          setIsLoading(false);
        }
        return;
      }

      setIsLoading(true);
      const { data } = await supabase.auth.getSession();
      await applySession(data?.session ?? null, { enforceTtl: true });

      if (isMounted) {
        setIsLoading(false);
      }
    }

    void bootstrapAuth();

    if (!hasSupabaseEnv || !supabase) {
      return () => {
        isMounted = false;
      };
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      void applySession(nextSession, { enforceTtl: true });
      if (isMounted) {
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [applySession]);

  const signIn = useCallback(
    async (email, password) => {
      if (!supabase) {
        throw new Error("Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
      }

      const normalizedEmail = email.trim().toLowerCase();
      const { data, error } = await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
      });

      if (error) {
        throw error;
      }

      setSessionStartNow();
      await applySession(data.session, { enforceTtl: false });
      return data;
    },
    [applySession],
  );

  const signUp = useCallback(
    async (email, password) => {
      if (!supabase) {
        throw new Error("Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
      }

      const normalizedEmail = email.trim().toLowerCase();
      const { data, error } = await supabase.auth.signUp({
        email: normalizedEmail,
        password,
      });

      if (error) {
        throw error;
      }

      if (data.session) {
        setSessionStartNow();
        await applySession(data.session, { enforceTtl: false });
      }

      return data;
    },
    [applySession],
  );

  const signOut = useCallback(async () => {
    if (supabase) {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
    }

    clearSessionStart();
    setSession(null);
    setUser(null);
    setProfile(null);
  }, []);

  const value = useMemo(
    () => ({
      session,
      user,
      profile,
      isApproved: profile?.membership_status === "approved",
      isLoading,
      isConfigured: hasSupabaseEnv,
      signIn,
      signUp,
      signOut,
    }),
    [isLoading, profile, session, signIn, signOut, signUp, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
