import React from "react";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white shadow-md text-black">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Left side: Logo + Titles */}
          <Link to="/"> 
          <div className="flex items-center gap-4">
              <img
                src="/fintechatuw/fintech-at-uw-logo.png"
                style={{ width: "50px", height: "auto" }}
                alt="Fintech Logo"
              />
              <div>
                <h1 className="text-xl font-bold">Fintech Club</h1>
                <h1 className="text-sm">University of Wisconsin–Madison</h1>
              </div>
          </div>
          </Link>
          {/* Right side: Navigation links */}
          <ul className="flex gap-6 font-medium">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/resources">Resources</Link> </li>
            <li><Link to="/team">The Team</Link></li>
          </ul>
        </div>
      </nav>

      {/* Page content */}
      <section className="text-center py-16 px-4 mt-32">
       <p>WORK IN PROGRESS</p>
      </section>
    </main>
  );
};

export default Events;