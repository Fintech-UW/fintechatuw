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
          backgroundImage: `url('/fintechatuw/coverMain.png')`,
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
                src="/fintechatuw/fintech-at-uw-logo.png"
                style={{ width: "50px", height: "auto" }}
                alt="Fintech Logo"
              />
              <div className={`${!scrolled ? "text-shadow-lg/100" : ""}`}>
                <h1 className="text-xl font-bold">FinTech Club</h1>
                <h1 className="text-sm">University of Wisconsin–Madison</h1>
              </div>
            </div>
            </Link>
            {/* Right side: Navigation links */}
            <ul className={`flex gap-6 font-medium ${!scrolled ? "text-shadow-lg/100" : ""}`}>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/team">The Team</Link></li>
              <li className="ml-6">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfiebjLbKDPSHkEdRyjEW-38mz08c6yZyQXCq60P4JCvg5B5g/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-full transition font-semibold ${
                    scrolled
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : ""
                  }`}
                >Join</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-shadow-lg/100">
            Welcome to FinTech@UW 
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

      {/* Join Us Section */}
      <section className="bg-blue-100 py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Join Us</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-6">
          Ready to become a part of the FinTech@UW community? Fill out the form below to get started!
        </p>

        {/* Link to Google Form */}
        <div className="text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfiebjLbKDPSHkEdRyjEW-38mz08c6yZyQXCq60P4JCvg5B5g/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
          >
            Fill Out the Form to Join
          </a>
        </div>
      </section>

    {/* Company Logo Carousel */}
      <section className="overflow-hidden bg-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Companies our members have got offers from</h2>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-10 w-max"
            style={{
              animation: "scrollLeft 40s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            {[
               "meta.png", "netflix.png","amazon.png", "mastercard.png", "c-1-logo.png", "vikings.png","northwestern.png","humana.png", "aon.png", "americanFamily.png",
               "allstate.png", "bhsi-logo.png", "munich.png", "m3.png", "TDS.png", "Skyward.png",
              "meta.png", "netflix.png","amazon.png","mastercard.png", "c-1-logo.png", "vikings.png","northwestern.png","humana.png", "aon.png",  "americanFamily.png", 
              "allstate.png", "bhsi-logo.png", "munich.png", "m3.png", "TDS.png", "Skyward.png"
            ].map((logo, i) => (
               <div key={i} className="h-20 w-32 flex items-center justify-center">
                  <img
                    src={`/fintechatuw/company_logos/${logo}`}
                    alt={logo}
                    className="max-h-full max-w-full object-contain mx-auto"
                  />
                </div>
              ))}
            </div>
        </div>

        <style>
          {`
            @keyframes scrollLeft {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </section>

      {/* Footer */}
      <footer></footer>
      
      {/* Footer Content */}
      <section>
        <div class="footer">
          <div class="footer-inside">
            <p id="text"><Link to="/team">The Team</Link></p>
            <p id="text"><Link to="/about">Our Mission</Link></p>
            <p id="text-padding-bottom"><Link to="/resources">Resources</Link></p>
          </div>
          <div class="footer-inside-right">
            <p id="text-club-name"><Link to="/"><strong>UW-Madison FinTech Club</strong></Link></p>
            <p id="text-email">Email: <a href="mailto:fintechuwmadison@outlook.com"><u>fintechuwmadison@outlook.com</u></a></p>
            <p id="text">
              <span className="location-text">Madison, Wisconsin 53706       </span> {/* Added whitespace to improve appearance */}
              <span className="logo-container">
              <img src="/fintechatuw/socials-images/linkedin.png" id="linkedin-logo" />
                <img src="/fintechatuw/socials-images/instagram.png" id="instagram-logo" />
              </span>
            </p>   
          </div>
        </div>
      </section>
    </main>
  );
}

