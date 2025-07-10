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
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/resources">Resources</Link> </li>
            <li><Link to="/team">The Team</Link></li>
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
                alt="Conan Le"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Conan Le</h3>
              <p className="text-sm text-gray-500">Co-President</p>
              <p className="mt-2 text-sm">
                Hi! My name is Conan and I’m a sophomore majoring in Actuarial Science, Finance, and Risk Management & Insurance.
                I’m an incoming actuarial intern at Northwestern Mutual, and am passionate about using financial data to make decisions.
                In my free time, I like to lift, gamble, and cook!
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
            Hey, I’m JP and I’m a sophomore double majoring in Finance and Risk Management. This summer, I’ll be with Northwestern Mutual
             as an Investment Strategy Intern for fixed income and equity markets. I’m a big fan of FinTech and inspired by how it’s
              transforming the way people invest and build wealth.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <img
              src="/fintechatuw/e-board_images/goodLookingManSaul.jpeg"
              alt="Member Name"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Saul Orbe</h3>
            <p className="text-sm text-gray-500">VP of Technology</p>
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

      {/* Footer Content */}
      <section>
        <div class="footer">
          <div class="footer-inside">
            <p id="text"><Link to="/team">The Team</Link></p>
            <p id="text"><Link to="/about">Our Mission</Link></p>
            <p id="text-padding-bottom"><Link to="/resources">Resources</Link></p>
          </div>
          <div class="footer-inside-right">
            <p id="text-club-name"><Link to="/"><strong>UW-Madison Fintech Club</strong></Link></p>
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

export default Team;