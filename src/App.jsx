import React from "react";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Resources from "./Pages/Resources";
import Login from "./Pages/Login";
import PendingApproval from "./Pages/PendingApproval";
import MemberPortal from "./Pages/MemberPortal";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";


export default function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pending-approval" element={<PendingApproval />} />
          <Route
            path="/member-portal"
            element={
              <ProtectedRoute>
                <MemberPortal />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}
