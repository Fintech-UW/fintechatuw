import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthNavItems from "../AuthNavItems";

const JOIN_URL =
  "https://linktr.ee/fintechuw?fbclid=PAZXh0bgNhZW0CMTEAAadsdHIdE-4ELJo7VeVNAS-uGD8GcrQOas6_JTAtlrDkqbIgwefiHT-LNhZ5bw_aem_ybNM8nOQMb0hocVQXjWqeg";

const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/resources", label: "Resources" },
  { to: "/team", label: "The Team" },
];

const Navbar = ({ variant = "solid" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isTransparent = variant === "transparent" && !scrolled;

  useEffect(() => {
    if (variant !== "transparent") {
      return undefined;
    }

    const handleScroll = () => setScrolled(window.scrollY > 25);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  useEffect(() => {
    setMenuOpen(false);
  }, [variant]);

  const navClasses = isTransparent
    ? "bg-transparent text-white"
    : "bg-white shadow-md text-black";

  const joinClasses = isTransparent
    ? "border border-white text-white hover:opacity-80"
    : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex h-14 sm:h-16 items-center gap-3">
          <Link to="/" className="flex items-center gap-3 min-w-0 flex-none">
            <img
              src="/fintech-at-uw-logo.png"
              alt="Fintech Logo"
              className="w-10 h-auto sm:w-12 shrink-0"
            />
            <div
              className={`min-w-0 ${
                isTransparent ? "drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]" : ""
              }`}
            >
              <h1 className="text-base sm:text-lg font-bold truncate">FinTech@UW</h1>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="min-w-0 flex-1 hidden md:block">
            <ul className="flex items-center justify-end gap-6 font-medium text-base">
              {NAV_LINKS.map((link) => (
                <li key={link.to} className="shrink-0">
                  <Link to={link.to} className="hover:opacity-80">
                    {link.label}
                  </Link>
                </li>
              ))}
              <AuthNavItems />
              <li className="shrink-0">
                <a href={JOIN_URL} className={`inline-block px-4 py-2 rounded-full transition ${joinClasses}`}>
                  Join
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile controls */}
          <div className="flex-1 flex justify-end items-center gap-2 md:hidden">
            <a href={JOIN_URL} className={`inline-block px-3 py-1.5 rounded-full text-sm transition ${joinClasses}`}>
              Join
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`inline-flex items-center justify-center w-9 h-9 rounded-md ${
                isTransparent ? "text-white" : "text-black"
              }`}
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {menuOpen ? (
          <div id="mobile-nav-menu" className="md:hidden bg-white text-black rounded-b-xl shadow-lg -mx-3 sm:-mx-4 px-3 sm:px-4 pb-3">
            <ul className="flex flex-col divide-y divide-gray-100">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-medium hover:opacity-80"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <AuthNavItems
                linkClassName="block py-3 font-medium hover:opacity-80"
                logoutClassName="block w-full text-left py-3 font-medium hover:opacity-80"
                onNavigate={() => setMenuOpen(false)}
              />
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
