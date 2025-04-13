import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
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
            <li>About</li>
            <li>Events</li>
            <li>Resources</li>
            <li>
              <Link to="/team">The Team</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page content */}
      <section className="text-center py-16 px-4 mt-32">
        <h1 className="text-5xl font-bold mb-4">Meet The Team</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We're a team of passionate students driving the future of FinTech at UW–Madison.
        </p>
      </section>

      {/* Team Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Sample Card */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <img
              src="/fintechatuw/e-board_images/ConanLe.jpeg"
              alt="Member Name"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Conan Le</h3>
            <p className="text-sm text-gray-500">Co-President</p>
            <p className="mt-2 text-sm">
              Brief bio or what they do in the club.
            </p>
          </div>

          {/* Add more cards here... */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <img
              src="/fintechatuw/e-board_images/JiapengZHENG.jpeg"
              alt="Member Name"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Jiapeng Zheng</h3>
            <p className="text-sm text-gray-500">Co-President</p>
            <p className="mt-2 text-sm">
              Brief bio or what they do in the club.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <img
              src="/fintechatuw/e-board_images/goodLookingManSaul.jpeg"
              alt="Member Name"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Saul Orbe</h3>
            <p className="text-sm text-gray-500">Software Lead</p>
            <p className="mt-2 text-sm">
              Brief bio or what they do in the club.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <img
              src="/fintechatuw/e-board_images/angelMorales.jpeg"
              alt="Member Name"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Angel Morales</h3>
            <p className="text-sm text-gray-500">Mr. Meta</p>
            <p className="mt-2 text-sm">
              Brief bio or what they do in the club.
            </p>
          </div>

         
        </div>
      </section>
    </main>
  );
};

export default Team;