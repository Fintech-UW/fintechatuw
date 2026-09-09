import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import Navbar from "../components/layout/Navbar";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Login = () => {
  useDocumentTitle("Member Login", "Sign in with your @wisc.edu email to access the Fintech@UW member portal.");

  const {
    session,
    isApproved,
    isLoading,
    isConfigured,
    signIn,
    signUp,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const redirectTarget = useMemo(() => {
    const from = location.state?.from;
    return typeof from === "string" && from !== "/login" ? from : "/member-portal";
  }, [location.state]);

  useEffect(() => {
    if (isLoading || !session) {
      return;
    }

    navigate(isApproved ? redirectTarget : "/pending-approval", { replace: true });
  }, [isApproved, isLoading, navigate, redirectTarget, session]);

  const validateSchoolEmail = (candidateEmail) => candidateEmail.trim().toLowerCase().endsWith("@wisc.edu");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!validateSchoolEmail(email)) {
      setError("Please use your @wisc.edu email.");
      return;
    }

    if (mode === "signup" && password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (mode === "signup" && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      if (mode === "signin") {
        await signIn(email, password);
      } else {
        const data = await signUp(email, password);

        if (data?.session) {
          setMessage("Account created. Your membership is pending approval.");
          navigate("/pending-approval", { replace: true });
        } else {
          setMessage(
            "Account created. Check your email to confirm your account, then sign in while your membership is pending approval.",
          );
        }
      }
    } catch (authError) {
      setError(authError?.message ?? "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <section className="max-w-xl mx-auto px-6 pt-32 pb-16">
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
          <h1 className="text-3xl font-bold mb-2">Member Login</h1>
          <p className="text-sm text-gray-600 mb-6">
            Use your <strong>@wisc.edu</strong> email. New accounts require manual approval before member portal access.
          </p>

          {!isConfigured ? (
            <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              Member login is temporarily unavailable — contact an officer if you need access.
            </div>
          ) : (
            <>
              <div className="inline-flex rounded-lg border border-gray-200 p-1 mb-5">
                <button
                  type="button"
                  onClick={() => setMode("signin")}
                  className={`px-4 py-2 text-sm rounded-md transition ${
                    mode === "signin" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className={`px-4 py-2 text-sm rounded-md transition ${
                    mode === "signup" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    School Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@wisc.edu"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    autoComplete={mode === "signin" ? "current-password" : "new-password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {mode === "signup" ? (
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <input
                      id="confirm-password"
                      type="password"
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(event) => setConfirmPassword(event.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                ) : null}

                {error ? <p className="text-sm text-red-600">{error}</p> : null}
                {message ? <p className="text-sm text-green-700">{message}</p> : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-blue-600 text-white py-2.5 text-sm font-semibold hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
                >
                  {isSubmitting ? "Please wait..." : mode === "signin" ? "Sign In" : "Create Account"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Login;
