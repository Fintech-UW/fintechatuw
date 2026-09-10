import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const AdminRoute = ({ children }) => {
  const { session, isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 text-gray-800 flex items-center justify-center px-4">
        <p className="text-sm sm:text-base text-gray-600">Checking access...</p>
      </main>
    );
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/member-portal" replace />;
  }

  return children;
};

export default AdminRoute;
