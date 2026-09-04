import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import Navbar from "../components/layout/Navbar";

const PendingApproval = () => {
  const { session, profile, isApproved, isLoading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isApproved) {
      navigate("/member-portal", { replace: true });
    }
  }, [isApproved, isLoading, navigate]);

  if (!isLoading && !session) {
    return <Navigate to="/login" replace />;
  }

  const membershipStatus = profile?.membership_status ?? "pending";
  const isRejected = membershipStatus === "rejected";

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <section className="max-w-2xl mx-auto px-6 pt-32 pb-16">
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
          <h1 className="text-3xl font-bold mb-2">
            {isRejected ? "Membership Needs Review" : "Membership Pending Approval"}
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            {isRejected
              ? "Your account is currently not approved for the portal. Contact the officers for an updated decision."
              : "Your account is created, but an officer must approve membership before portal access."}
          </p>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 space-y-2">
            <p>
              <strong>Status:</strong> {membershipStatus}
            </p>
            <p>
              <strong>Email:</strong> {profile?.email ?? session?.user?.email ?? "Unavailable"}
            </p>
            <p>
              Questions? Email{" "}
              <a className="text-blue-600 underline" href="mailto:fintechuwmadison@outlook.com">
                fintechuwmadison@outlook.com
              </a>
              .
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-block rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
            >
              Back to Home
            </Link>
            <button
              type="button"
              onClick={() => {
                void signOut();
              }}
              className="inline-block rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PendingApproval;
