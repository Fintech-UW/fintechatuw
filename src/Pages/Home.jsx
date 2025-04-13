import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="">
      <section
        style={{
          backgroundImage: `url('/UWMemU.jpg')`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <nav
          className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            {/* Left side: Logo + Titles */}
            <Link to="/"> 
            <div className="flex items-center gap-4">
              <img
                src="/fintech-at-uw-logo.png"
                style={{ width: "50px", height: "auto" }}
                alt="Fintech Logo"
              />
              <div className={`${!scrolled ? "text-shadow-lg/100" : ""}`}>
                <h1 className="text-xl font-bold">Fintech Club</h1>
                <h1 className="text-sm">University of Wisconsin–Madison</h1>
              </div>
            </div>
            </Link>
            {/* Right side: Navigation links */}
            <ul
              className={`flex gap-6 font-medium ${!scrolled ? "text-shadow-lg/100" : ""}`}
            >
              <li>About</li>
              <li>Events</li>
              <li>Resources</li>
              <li>
                <Link to="/team">The Team</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-shadow-lg/100">
            Welcome to Fintech Club
          </h1>
          <p className="mt-4 text-xl md:text-2xl max-w-2xl text-white text-shadow-lg/100">
            Innovating finance, one student at a time.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-6">What We Do</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          Fintech@UW is a student organization focused on the intersection of finance and
          technology. We empower students through hands-on workshops, networking events,
          and collaborative projects. Whether you're into coding, crypto, banking, or
          startups — there's a place here for you.
        </p>
      </section>

      {/* Why It Matters Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Why It Matters</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          The financial world is changing — fast. From decentralized finance to algorithmic
          trading, today's finance professionals need to understand technology. We're here
          to help students stay ahead, learn real skills, and explore career opportunities
          that blend both fields.
        </p>
      </section>

      <footer></footer>
    </main>
  );
}

