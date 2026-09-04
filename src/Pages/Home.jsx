import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Home() {
  // Ordered by approximate prestige; includes all available logo files
  const logosOrdered = [
    "microsoft-word.svg",
    "amazon.png",
    "meta.png",
    "netflix.png",
    "mastercard.png",
    "oliver-wyman.png",
    "PwC.png",
    "kpmg.png",
    "American-Express.png",
    "allianz.png",
    "c-1-logo.png",
    "IBM.png",
    "munich.png",
    "aon.png",
    "milliman.png",
    "Kimberly-Clark.png",
    "northwestern.png",
    "allstate.png",
    "americanFamily.png",
    "humana.png",
    "vikings.png",
    "bhsi-logo.png",
    "TDS.png",
    "Skyward.png",
    "m3.png",
    "cardinal_health.png"
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Safety + small tweaks */}
      <style>{`
        html, body, #root { max-width: 100%; overflow-x: hidden; }
        * { box-sizing: border-box; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Offer wheel logo sizing: fixed height + auto width to keep visible spacing consistent */
        .logo-cell { display: inline-flex; align-items: center; justify-content: center; height: 64px; flex: 0 0 auto; }
        @media (min-width: 640px) { .logo-cell { height: 80px; } }
        @media (min-width: 768px) { .logo-cell { height: 96px; } }
        .logo-img { height: 100%; width: auto; max-width: clamp(120px, 18vw, 220px); display: block; object-fit: contain; }

      `}</style>

      <Navbar variant="transparent" />

      <section
        style={{
          backgroundImage: `url('/coverImage.png')`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative"
      >
        {/* HERO */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">
            Welcome to FinTech@UW
          </h1>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]">
            The first FinTech club at UW-Madison.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-12 px-5 sm:py-20 sm:px-12 md:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5">What We Do</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-700">
          Fintech@UW is a student organization focused on the intersection of finance and technology.
          Our mission is to create an enduring FinTech community at UW Madison while equipping our members
          with practical experience and expertise to utilize fintech for their personal and professional growth.
        </p>
      </section>

      {/* Why It Matters */}
      <section className="bg-gray-100 py-12 px-5 sm:py-20 sm:px-12 md:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5">Why It Matters</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-700">
          The financial world is changing quickly. Today's professionals need to be able to blend
          their financial expertise with technical ability. We're here to create a network where
          students can connect with one another, develop applicable skills, and explore career
          opportunities that blend both fields.
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
            className="flex items-center gap-6 sm:gap-10 w-max"
            style={{ animation: "scrollLeft 13.2s linear infinite", whiteSpace: "nowrap" }}
          >
            {[...logosOrdered, ...logosOrdered].map((logo, i) => (
              <div key={i} className="logo-cell">
                <img
                  src={`/company_logos/${logo}`}
                  alt={logo}
                  className="logo-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
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

      <Footer />
    </main>
  );
};
