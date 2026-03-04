import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const AuthNavItems = ({
  linkClassName = "hover:opacity-80",
  logoutClassName = "hover:opacity-80",
}) => {
  const { session, isApproved, signOut } = useAuth();

  return (
    <>
      <li className="shrink-0">
        {session ? (
          <Link to={isApproved ? "/member-portal" : "/pending-approval"} className={linkClassName}>
            {isApproved ? "Member Portal" : "Approval Status"}
          </Link>
        ) : (
          <Link to="/login" className={linkClassName}>
            Login
          </Link>
        )}
      </li>

      {session ? (
        <li className="shrink-0">
          <button
            type="button"
            onClick={() => {
              void signOut();
            }}
            className={logoutClassName}
          >
            Logout
          </button>
        </li>
      ) : null}
    </>
  );
};

export default AuthNavItems;
