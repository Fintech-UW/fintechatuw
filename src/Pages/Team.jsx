import React, { useState } from "react";
import { Link } from "react-router-dom";


const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white shadow-md text-black">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center gap-4">
              <img
                src="/fintechatuw/fintech-at-uw-logo.png"
                style={{ width: "50px", height: "auto" }}
                alt="Fintech Logo"
              />
              <div>
                <h1 className="text-xl font-bold">FinTech Club</h1>
                <h1 className="text-sm">University of Wisconsin–Madison</h1>
              </div>
            </div>
          </Link>
          <ul className="flex gap-6 font-medium">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/team">The Team</Link></li>
            <li className="ml-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfiebjLbKDPSHkEdRyjEW-38mz08c6yZyQXCq60P4JCvg5B5g/viewform?usp=header"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Join
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page heading */}
      <section className="text-center py-16 px-4 mt-32">
        <h1 className="text-5xl font-bold mb-4">Meet The Team</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We're a team of passionate students driving the future of FinTech at UW–Madison.
        </p>
      </section>

      {/*  Founding Committee  */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-2">Founding Committee</h2>
        <p className="text-gray-600 mb-8">The Founding Committee oversees the club's vision, long-term goals, and foundational decisions.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Conan Le */}
          <div 
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "conan" ? null : "conan")}
          >
            <img
              src="/fintechatuw/e-board_images/ConanLe.jpeg"
              alt="Conan Le"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Conan Le</h3>
            <p className="text-sm text-gray-500">Co-President</p>
            <p className="mt-2 text-sm">
            Hi! My name is Conan and I’m a junior. Through my actuarial internship at Northwestern Mutual, I have grown passionate about using financial data to make decisions. 
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            </p>
            {selectedMember === "conan" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
               <p>Majors: Actuarial Science, Finance, and Risk Management & Insurance.</p>
               <p>Hobbies: Eating sushi, Working out, Gambling.</p>
               <a
                  href="https://www.linkedin.com/in/conanle13/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit Conan's LinkedIn
                </a>
          
              </div>
            )}
          </div>

          {/* Jiapeng Zheng */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "Jiapeng" ? null : "Jiapeng")}
          >
            <img
              src="/fintechatuw/e-board_images/JiapengZHENG.jpeg"
              alt="Jiapeng Zheng"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Jiapeng Zheng</h3>
            <p className="text-sm text-gray-500">Co-President</p>
            <p className="mt-2 text-sm">
              Hey, I’m JP and I’m a junior. Through my internship at Northwestern Mutual I have grown to love learning and expanding financial technology.
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Jiapeng" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Majors: Finance and Risk Mangement.</p>
                <p>Hobbies: Gambling, Lifting, Sports.</p>
                <a
                  href="https://www.linkedin.com/in/jiapengzheng/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit JP's LinkedIn
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tech Committee  */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-2">Tech Committee</h2>
        <p className="text-gray-600 mb-8">The Tech Committee builds and manages our digital tools, website, and internal systems.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Saul */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "Saul" ? null : "Saul")}
          >
            <img
              src="/fintechatuw/e-board_images/goodLookingManSaul.jpeg"
              alt="Saul Orbe"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Saul Orbe</h3>
            <p className="text-sm text-gray-500">VP of Technology</p>
            <p className="mt-2 text-sm">
              Hi my name is Saul and I’m a junior. I am passionate about using technology to solve real-world problems and improve financial systems. 
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Saul" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Computer Science </p>
                <p>Hobbies: Gaming and Coding</p>
                <a
                  href="https://www.linkedin.com/in/orbe1/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit Saul's LinkedIn
                </a>
              </div>
            )}
          </div>

          {/* Angel */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
           onClick={() => setSelectedMember(selectedMember === "Angel" ? null : "Angel")}
          >
            <img
              src="/fintechatuw/e-board_images/angelMorales.jpeg"
              alt="Angel Morales"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Angel Morales</h3>
            <p className="text-sm text-gray-500">Mr. Meta</p>
            <p className="mt-2 text-sm">
              Hi my name is Angel and I’m a junior. Through my time at Meta I have become passionate about AI and its applications in finance.
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Angel" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Computer Science</p>
                <p>Hobbies: Gaming, AI, and Coding.</p>
                <a
                  href="https://www.linkedin.com/in/angelmorales0/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit Angel's LinkedIn
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Finance Committee  */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-2">Finance Committee</h2>
        <p className="text-gray-600 mb-8">The Finance Committee oversees budgeting, fundraising, and financial education initiatives.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <p className="text-center text-gray-400 italic col-span-full">Members coming soon...</p>
        </div>
      </section>

      {/*  Operations Committee */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-2">Operations Committee</h2>
        <p className="text-gray-600 mb-8">The Operations Committee manages logistics, club infrastructure, and internal processes.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <p className="text-center text-gray-400 italic col-span-full">Members coming soon...</p>
        </div>
      </section>

      {/* Outreach Committee */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold mb-2">Outreach Committee</h2>
        <p className="text-gray-600 mb-8">The Outreach Committee handles marketing, social media, partnerships, and campus engagement.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <p className="text-center text-gray-400 italic col-span-full">Members coming soon...</p>
        </div>
      </section>

      {/* Footer */}
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
              Email: <a href="mailto:fintechuwmadison@outlook.com"><u>fintechuwmadison@outlook.com</u></a>
            </p>
            <p id="text">
              <span className="location-text">Madison, Wisconsin 53706</span>
              <span className="logo-container">
                <a href="https://www.linkedin.com/company/fintech-uw/" target="_blank" rel="noreferrer">
                  <img src="/fintechatuw/socials-images/linkedin.png" id="linkedin-logo" />
                </a>
                <a href="https://www.instagram.com/fintechuw/" target="_blank" rel="noreferrer">
                  <img src="/fintechatuw/socials-images/instagram.png" id="instagram-logo" />
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
