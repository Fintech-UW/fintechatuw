import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
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

      {/* Page Heading */}
      <section className="text-center py-16 px-4 mt-32">
        <h1 className="text-5xl font-bold mb-4">FinTech Resources</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Tools, guides, and articles to help you explore the world of financial technology.
        </p>
      </section>

      {/* Resources Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example Resource Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Intro to FinTech</h3>
            <p className="text-sm mb-3">A beginner’s guide covering core topics like payments, blockchain, and digital banking.</p>
            <a href="https://www.investopedia.com/terms/f/fintech.asp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
              View Resource →
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI in Finance</h3>
            <p className="text-sm mb-3">Explore how artificial intelligence is transforming financial analysis and trading.</p>
            <a href="https://www.forbes.com/sites/forbestechcouncil/2021/08/10/ai-and-the-future-of-fintech/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
              View Resource →
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Credit & Consumer Apps</h3>
            <p className="text-sm mb-3">Understand credit scoring systems and personal finance tools like Mint and Credit Karma.</p>
            <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
              View Resource →
            </a>
          </div>

          {/* Add more cards as needed */}
        </div>
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

export default Resources;
