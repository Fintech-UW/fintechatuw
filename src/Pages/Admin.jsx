import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { supabase } from "../lib/supabaseClient";

const formatDate = (value) => {
  if (!value) {
    return "—";
  }
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "—" : date.toLocaleDateString();
};

const Admin = () => {
  useDocumentTitle("Manage Members", "Approve or reject pending Fintech@UW membership requests.");

  const [pending, setPending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [rowState, setRowState] = useState({}); // { [user_id]: { busy: bool, error: string } }

  const loadPending = useCallback(async () => {
    if (!supabase) {
      setLoadError("Auth is not configured.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setLoadError("");

    const { data, error } = await supabase.rpc("admin_list_pending");

    if (error) {
      setLoadError(error.message ?? "Could not load pending members.");
      setPending([]);
    } else {
      setPending(data ?? []);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    void loadPending();
  }, [loadPending]);

  const setStatus = async (userId, newStatus) => {
    if (!supabase) {
      return;
    }

    setRowState((current) => ({
      ...current,
      [userId]: { busy: true, error: "" },
    }));

    const { error } = await supabase.rpc("admin_set_membership_status", {
      target_user_id: userId,
      new_status: newStatus,
    });

    if (error) {
      setRowState((current) => ({
        ...current,
        [userId]: { busy: false, error: error.message ?? "Something went wrong." },
      }));
      return;
    }

    // Success — the row is no longer pending, drop it from the list.
    setPending((current) => current.filter((row) => row.user_id !== userId));
    setRowState((current) => {
      const next = { ...current };
      delete next[userId];
      return next;
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 pt-32 pb-8">
        <h1 className="text-4xl font-bold mb-3">Manage Members</h1>
        <p className="text-gray-600 max-w-3xl">
          Pending membership requests. Approving grants access to the Member Portal.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        {isLoading ? (
          <p className="text-sm text-gray-600">Loading pending members…</p>
        ) : loadError ? (
          <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {loadError}{" "}
            <button
              type="button"
              onClick={() => void loadPending()}
              className="underline font-medium"
            >
              Retry
            </button>
          </div>
        ) : pending.length === 0 ? (
          <p className="text-sm text-gray-600">No pending members right now.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-500">
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Signed up</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pending.map((row) => {
                  const state = rowState[row.user_id] ?? {};
                  return (
                    <tr key={row.user_id} className="border-b border-gray-100 last:border-b-0">
                      <td className="px-4 py-3">{row.email}</td>
                      <td className="px-4 py-3 text-gray-600">{formatDate(row.created_at)}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            type="button"
                            disabled={state.busy}
                            onClick={() => void setStatus(row.user_id, "approved")}
                            className="rounded-md bg-blue-600 text-white px-3 py-1.5 text-xs font-semibold hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
                          >
                            {state.busy ? "Working…" : "Approve"}
                          </button>
                          <button
                            type="button"
                            disabled={state.busy}
                            onClick={() => void setStatus(row.user_id, "rejected")}
                            className="rounded-md border border-gray-300 px-3 py-1.5 text-xs font-semibold hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed transition"
                          >
                            Reject
                          </button>
                          {state.error ? (
                            <span className="text-xs text-red-600">{state.error}</span>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
};

export default Admin;
