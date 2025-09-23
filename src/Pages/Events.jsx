import React from "react";
import { Link } from "react-router-dom";
import "./footer_styles.css";

const Events = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* NAV (always white, shadow, blue Join) */}
      <nav className="fixed w-full top-0 z-50 bg-white shadow-md text-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex h-14 sm:h-16 items-center gap-3">
            {/* Left: brand */}
            <Link to="/" className="flex items-center gap-3 min-w-0 flex-none">
              <img
                src="/fintechatuw/fintech-at-uw-logo.png"
                alt="Fintech Logo"
                className="w-10 h-auto sm:w-12 shrink-0"
              />
              <div className="min-w-0">
                <h1 className="text-base sm:text-lg font-bold truncate">Fintech Club</h1>
                <h2 className="text-xs sm:text-sm truncate">
                  University of Wisconsin–Madison
                </h2>
              </div>
            </Link>

            {/* Middle/Right: links */}
            <div className="min-w-0 flex-1">
              <ul
                className="
                  nav-strip
                  flex items-center gap-4 sm:gap-6 font-medium text-sm sm:text-base
                  overflow-x-auto no-scrollbar whitespace-nowrap
                  md:justify-end
                "
              >
                <li className="shrink-0">
                  <Link to="/about" className="hover:opacity-80">About</Link>
                </li>
                <li className="shrink-0">
                  <Link to="/events" className="hover:opacity-80">Events</Link>
                </li>
                <li className="shrink-0">
                  <Link to="/resources" className="hover:opacity-80">Resources</Link>
                </li>
                <li className="shrink-0">
                  <Link to="/team" className="hover:opacity-80">The Team</Link>
                </li>

                {/* Desktop Join */}
                <li className="hidden md:block shrink-0">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfiebjLbKDPSHkEdRyjEW-38mz08c6yZyQXCq60P4JCvg5B5g/viewform?usp=header"
                    className="inline-block px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Join
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Join */}
            <div className="flex-none md:hidden">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfiebjLbKDPSHkEdRyjEW-38mz08c6yZyQXCq60P4JCvg5B5g/viewform?usp=header"
                className="inline-block px-3 py-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition text-sm"
              >
                Join
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <section className="text-center px-4 pt-32 pb-16">
        <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
        <div className="flex justify-center pt-5">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&title=FinTech%40UW%20Events&src=Y19lNmI4YzZjZjQwNThhNGVjYmQ3MjYxYzg5MmQ2YjZkYWZiN2Y2NGZlZTMyYzc3ZTEzYmIzNGNiNzBiMzg4NWZmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23d50000&color=%230b8043"
            style={{
              border: "solid 1px #777",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(213, 0, 0, 0.3)",
              maxWidth: "100%",
            }}
            width="1000"
            height="600"
            title="FinTech@UW Events Calendar"
          />
        </div>
      </section>

      {/* Footer Content */}
      <section>
        <div className="footer">
          <div className="footer-inside">
            <p id="text"><Link to="/team">The Team</Link></p>
            <p id="text"><Link to="/about">Our Mission</Link></p>
            <p id="text-padding-bottom"><Link to="/resources">Resources</Link></p>
          </div>
          <div className="footer-inside-right">
            <p id="text-club-name"><Link to="/"><strong>FinTech@UW</strong></Link></p>
            <p id="text-email">
              Email:{" "}
              <a href="mailto:fintechuwmadison@outlook.com">
                <u>fintechuwmadison@outlook.com</u>
              </a>
            </p>
            <p id="text">
              <span className="location-text">Madison, Wisconsin 53706</span>
              <span className="logo-container">
                <a
                  href="https://www.linkedin.com/company/fintech-uw/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/fintechatuw/socials-images/linkedin.png"
                    id="linkedin-logo"
                    alt="LinkedIn"
                  />
                </a>
                <a
                  href="https://www.instagram.com/fintechuw/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/fintechatuw/socials-images/instagram.png"
                    id="instagram-logo"
                    alt="Instagram"
                  />
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
