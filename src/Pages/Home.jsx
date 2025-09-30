import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* Safety + small tweaks */}
      <style>{`
        html, body, #root { max-width: 100%; overflow-x: hidden; }
        * { box-sizing: border-box; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Desktop: keep nav links + Join together on the right */
        @media (min-width: 768px) {
          .nav-strip { overflow: visible !important; white-space: normal !important; }
        }

        /* Company logos sizing */
        .company-logo { height: 22px; }
        @media (min-width: 640px) { .company-logo { height: 38px; } }
        @media (min-width: 768px) { .company-logo { height: 52px; } }

      `}</style>

      <section
        style={{
          backgroundImage: `url('/fintechatuw/UWMemU.jpg')`,
          width: "100%",
          minHeight: "85vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative"
      >
         {/* NAV */}
        <nav
          className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white shadow-md text-black"
              : "bg-transparent text-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-4">
            <div className="flex h-14 sm:h-16 items-center gap-3">
              {/* Left: brand */}
              <Link to="/" className="flex items-center gap-3 min-w-0 flex-none">
                <img
                  src="/fintechatuw/fintech-at-uw-logo.png"
                  alt="Fintech Logo"
                  className="w-10 h-auto sm:w-12 shrink-0"
                />
                <div
                  className={`${
                    !scrolled
                      ? "drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
                      : ""
                  } min-w-0`}
                >
                  <h1 className="text-base sm:text-lg font-bold truncate">
                    FinTech@UW
                  </h1>
                  
                </div>
              </Link>

              {/* Links */}
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
                      className={`inline-block px-4 py-2 rounded-full transition ${
                        scrolled
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "border border-white text-white hover:opacity-80"
                      }`}
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
                  className={`inline-block px-3 py-1.5 rounded-full text-sm transition ${
                    scrolled
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-white text-white hover:opacity-80"
                  }`}
                >
                  Join
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">
            Welcome to FinTech@UW
          </h1>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]">
            Innovating finance, one student at a time.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-12 px-5 sm:py-20 sm:px-12 md:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5">What We Do</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-700">
          Fintech@UW is a student organization focused on the intersection of finance and technology.
          We empower students through hands-on workshops, networking events, and collaborative projects.
          Whether you're into coding, crypto, banking, or startups — there's a place here for you.
        </p>
      </section>

      {/* Why It Matters */}
      <section className="bg-gray-100 py-12 px-5 sm:py-20 sm:px-12 md:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5">Why It Matters</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-700">
          The financial world is changing — fast. From decentralized finance to algorithmic trading,
          today's finance professionals need to understand technology. We're here to help students stay
          ahead, learn real skills, and explore career opportunities that blend both fields.
        </p>
      </section>

      {/* Join */}
      <section className="bg-blue-100 py-12 px-5 sm:py-20 sm:px-12 md:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5">Join Us</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-700 mb-5">
          Ready to become a part of the Fintech@UW community? Fill out the form below to get started!
        </p>
        <div className="text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfiebjLbKDPSHkEdRyjEW-38mz08c6yZyQXCq60P4JCvg5B5g/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 transition"
          >
            Fill Out the Form to Join
          </a>
        </div>
      </section>

      {/* Logos */}
      <section className="overflow-hidden bg-white py-12 px-5 sm:py-20 sm:px-12 md:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Companies our members have received offers from</h2>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-6 sm:gap-10 w-max"
            style={{ animation: "scrollLeft 40s linear infinite", whiteSpace: "nowrap" }}
          >
            {[
              "meta.png","netflix.png","amazon.png","mastercard.png","c-1-logo.png","vikings.png",
              "northwestern.png","humana.png","aon.png","americanFamily.png","allstate.png",
              "bhsi-logo.png","munich.png","m3.png","TDS.png","Skyward.png",
              "meta.png","netflix.png","amazon.png","mastercard.png","c-1-logo.png","vikings.png",
              "northwestern.png","humana.png","aon.png","americanFamily.png","allstate.png",
              "bhsi-logo.png","munich.png","m3.png","TDS.png","Skyward.png"
            ].map((logo, i) => (
              <img
                key={i}
                src={`/fintechatuw/company_logos/${logo}`}
                alt={logo}
                className="company-logo w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scrollLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

{/* Footer Content */}
       <section>
              <div class="footer">
                <div class="footer-inside">
                  <p id="text"><Link to="/team">The Team</Link></p>
                  <p id="text"><Link to="/about">Our Mission</Link></p>
                  <p id="text-padding-bottom"><Link to="/resources">Resources</Link></p>
                </div>
                <div class="footer-inside-right">
                  <p id="text-club-name"><Link to="/"><strong>FinTech@UW</strong></Link></p>
                  <p id="text-email">Email: <a href="mailto:fintechuwmadison@outlook.com"><u>fintechuwmadison@outlook.com</u></a></p>
                  <p id="text">
                    <span className="location-text">Madison, Wisconsin 53706       </span> {/* Added whitespace to improve appearance */}
                    <span className="logo-container">
                      <a href="https://www.linkedin.com/company/fintech-uw/" target="_blank"><img src="/fintechatuw/socials-images/linkedin.png" id="linkedin-logo" /></a>
                      <a href="https://www.instagram.com/fintechuw/" target="_blank"><img src="/fintechatuw/socials-images/instagram.png" id="instagram-logo" /></a>
                    </span>
                  </p>   
                </div>
              </div>
            </section>




    </main>
  );
};
