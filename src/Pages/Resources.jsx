import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white shadow-md text-black">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo + Titles */}
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
                      <li className="ml-6">
                          <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfiebjLbKDPSHkEdRyjEW-38mz08c6yZyQXCq60P4JCvg5B5g/viewform?usp=header"
                            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                        >Join</a>
                      </li>
                    </ul>
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
