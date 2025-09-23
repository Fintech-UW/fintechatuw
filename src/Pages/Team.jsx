import React, { useState } from "react";
import { Link } from "react-router-dom";


const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
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

      {/* Page heading */}
      <section className="text-center py-16 px-4 mt-32">
        <h1 className="text-5xl font-bold mb-4">Meet The Team</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We're a team of passionate students driving the future of FinTech at UW–Madison.
        </p>
      </section>

      {/* Leadership Committee  */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-2">Leadership Committee</h2>
        <p className="text-gray-600 mb-8">The Leadership Committee oversees the club's vision, long-term goals, and foundational decisions.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Conan Le */}
          <div 
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "conan" ? null : "conan")}
          >
            <img
              src="/fintechatuw/e-board_images/CL.png"
              alt="Conan Le"
              className="w-32 h-32 mx-auto rounded-full object-cover object-center mb-4"
            />
            <h3 className="text-xl font-semibold">Conan Le</h3>
            <p className="text-sm text-gray-500">Co-President</p>
            <p className="mt-2 text-sm">
            Hi! My name is Conan, and I’m a junior. During my actuarial internship at Northwestern Mutual, I developed a passion for using financial data to drive decision-making.
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            </p>
            {selectedMember === "conan" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
               <p>Majors: Actuarial Science, Finance, and Risk Management & Insurance</p>
               <p>Hobbies: Lifting, Hiking, Classical Piano</p>
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
              src="/fintechatuw/e-board_images/JP.png"
              alt="Jiapeng Zheng"
              className= "w-32 h-32 mx-auto rounded-full object-cover object-center"
            />
            <h3 className="text-xl font-semibold">Jiapeng Zheng</h3>
            <p className="text-sm text-gray-500">Co-President</p>
            <p className="mt-2 text-sm">
            Hey, I’m Jp, and I’m a junior. Through my internship at Northwestern Mutual, I have grown to love expanding my knowledge of fintech.
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Jiapeng" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Majors: Finance and Risk Mangement</p>
                <p>Hobbies: Gambling, Lifting, Sports</p>
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
          {/* Angel */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
           onClick={() => setSelectedMember(selectedMember === "Angel" ? null : "Angel")}
          >
            <img
              src="/fintechatuw/e-board_images/angel morales.png"
              alt="Angel Morales"
              className="w-32 h-32 mx-auto rounded-full object-cover object-center mb-4"
            />
            <h3 className="text-xl font-semibold">Angel Morales</h3>
            <p className="text-sm text-gray-500">Mr. Meta</p>
            <p className="mt-2 text-sm">
              Hi, my name is Angel, and I’m a junior. Through my time at Meta, I have become passionate about AI and its applications in finance.
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Angel" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Computer Science</p>
                <p>Hobbies: Gaming, AI, and Coding</p>
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
          {/* Sara Rodock */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
           onClick={() => setSelectedMember(selectedMember === "Sara" ? null : "Sara")}
          >
            <img
              src="/fintechatuw/e-board_images/sara rodock.png"
              alt="Sara Rodock"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Sara Rodock</h3>
            <p className="text-sm text-gray-500">Advisor</p>
            <p className="mt-2 text-sm">
              Hi, my name is Sara, and I’m the club advisor. 
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Sara" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                
                <a
                  href="https://www.linkedin.com/in/sara-rodock-8a0a9132/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit Sara's LinkedIn
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
              src="/fintechatuw/e-board_images/saul orbe.jpeg"
              alt="Saul Orbe"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Saul Orbe</h3>
            <p className="text-sm text-gray-500">VP of Technology</p>
            <p className="mt-2 text-sm">
              Hi, my name is Saul, and I’m a junior. I am passionate about using technology to solve real-world problems and improve financial systems. 
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
          {/* Anish */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
           onClick={() => setSelectedMember(selectedMember === "Anish" ? null : "Anish")}
          >
            <img
              src="/fintechatuw/e-board_images/anish mantri.png"
              alt="Anish Mantri"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Anish Mantri</h3>
            <p className="text-sm text-gray-500">Chair of Technology</p>
            <p className="mt-2 text-sm">
              Hi, my name is Anish, and I'm a sophomore. I am passionate about using technology to predict financial markets.
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Anish" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Computer Science, Data Science</p>
                <p>Hobbies: Sports, Lifting, Gaming</p>
                <a
                  href="https://www.linkedin.com/in/anishmantri/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit Anish's LinkedIn
                </a>
              </div>
            )}
          </div>
          {/* Micheal */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
           onClick={() => setSelectedMember(selectedMember === "Michael" ? null : "Michael")}
          >
            <img
              src="/fintechatuw/e-board_images/michael tang.png"
              alt="Michael Tang"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Michael Tang</h3>
            <p className="text-sm text-gray-500">Chair of Technology</p>
            <p className="mt-2 text-sm">
              Hi, my name is Michael, and I'm a junior. I am passionate about using machine learning to research finance.
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Michael" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Computer Science, Data Science</p>
                <p>Hobbies: Trying new foods, Tennis, Basketball</p>
                <a
                  href="https://www.linkedin.com/in/michael-tang-76bab729a/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit Michael's LinkedIn
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
          {/* Nate */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "Nate" ? null : "Nate")}
          >
            <img
              src="/fintechatuw/e-board_images/nate twente.png"
              alt="Nate Twente"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Nate Twente</h3>
            <p className="text-sm text-gray-500">VP of Finance</p>
            <p className="mt-2 text-sm">
              Hi, my name is Nate, and I’m a junior. I am passionate about expanding student interest in financial literacy and technology.
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Nate" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Acturial Science, Finance </p>
                <p>Hobbies: Golfing, Running, Watching Sports</p>
                <a
                  href="https://www.linkedin.com/in/nate-twente-39447822a/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit Nate's LinkedIn
                </a>
              </div>
            )}
          </div>
          {/* Bryant */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
           onClick={() => setSelectedMember(selectedMember === "Bryant" ? null : "Bryant")}
          >
            <img
              src="/fintechatuw/e-board_images/bryant wright.png"
              alt="Bryant Wright"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Bryant Wright</h3>
            <p className="text-sm text-gray-500">Chair of Finance</p>
            <p className="mt-2 text-sm">
              Hi, my name is Bryant, and I'm a Junior. I am deeply interested in exploring the analytical aspects of finance.
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Bryant" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Finance, Accounting</p>
                <p>Hobbies: Watching Basketball, Running, Reading</p>
                <a
                  href="https://www.linkedin.com/in/bryant-wright-51892b31b/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit Bryant's LinkedIn
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/*  Operations Committee */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-2">Operations Committee</h2>
        <p className="text-gray-600 mb-8">The Operations Committee manages logistics, club infrastructure, and internal processes.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Brody */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "Brody" ? null : "Brody")}
          >
            <img
              src="/fintechatuw/e-board_images/brody kerscher.png"
              alt="Brody"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Brody Kerscher</h3>
            <p className="text-sm text-gray-500">VP of Operations</p>
            <p className="mt-2 text-sm">
            Hi, my name is Brody, and I’m a junior. I am passionate about expanding my knowledge of financial technology and helping others do the same.
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Brody" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Acturial Science, Risk Mangement & Insurance </p>
                <p>Hobbies: Golf, Basketball, Watching movies</p>
                <a
                  href="https://www.linkedin.com/in/brody-kerscher-26b512294/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit Brody's LinkedIn
                </a>
              </div>
            )}
          </div>
          {/* Genaro */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
           onClick={() => setSelectedMember(selectedMember === "Genaro" ? null : "Genaro")}
          >
            <img
              src="/fintechatuw/e-board_images/genaro camas.png"
              alt="Genaro Camas"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Genaro Camas</h3>
            <p className="text-sm text-gray-500">Chair of Operations</p>
            <p className="mt-2 text-sm">
            Hi, my name is Genaro, and I'm a junior. I am interested in learning about the operational side of managing a club and also in gaining more knowledge about fintech.
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Genaro" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Biology</p>
                <p>Hobbies: Playing Sports, Hanging out with friends</p>
                <a
                  href="https://www.linkedin.com/in/genarocamas/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit Genaro's LinkedIn
                </a>
              </div>
            )}
          </div>
          {/* Carter  */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
           onClick={() => setSelectedMember(selectedMember === "Carter" ? null : "Carter")}
          >
            <img
              src="/fintechatuw/e-board_images/carter fellows.png"
              alt="Carter Fellows"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Carter Fellows</h3>
            <p className="text-sm text-gray-500">Chair of Operations</p>
            <p className="mt-2 text-sm">
            Hi, my name is Carter, and I'm a junior. I am interested in building this club from the ground up and gaining experience in leadership and management
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Carter" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Marketing, Real Estate</p>
                <p>Hobbies: Skiing</p>
                <a
                  href="https://www.linkedin.com/in/carter-fellows-00376b329/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit Carter's LinkedIn
                </a>
              </div>
            )}
          </div>

          
        </div>
      </section>

      {/* Outreach Committee */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold mb-2">Outreach Committee</h2>
        <p className="text-gray-600 mb-8">The Outreach Committee handles marketing, social media, partnerships, and campus engagement.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Arnav */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "Arnav" ? null : "Arnav")}
          >
            <img
              src="/fintechatuw/e-board_images/arnav gupta.png"
              alt="Brody"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Arnav Gupta</h3>
            <p className="text-sm text-gray-500">VP of Outreach</p>
            <p className="mt-2 text-sm">
              Hi, my name is Arnav, and I’m a junior. I am highly interested in AI and other technologies used in the financial industry.
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Arnav" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Data Science, Economics </p>
                <p>Hobbies: Cornhole, Running, Basketball</p>
                <a
                  href="https://www.linkedin.com/in/arnav---gupta/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit Arnav's LinkedIn
                </a>
              </div>
            )}
          </div>
          {/* Dora */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
           onClick={() => setSelectedMember(selectedMember === "Dora" ? null : "Dora")}
          >
            <img
              src="/fintechatuw/e-board_images/dora tsai.png"
              alt="Dora Tsai"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Dora Tsai</h3>
            <p className="text-sm text-gray-500">Chair of Outreach</p>
            <p className="mt-2 text-sm">
            Hi, my name is Dora, and I’m a junior. I joined this club because I’m excited to be part of a community that encourages exploring new interests in fintech.            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Dora" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Data Science, Sports Communication</p>
                <p>Hobbies: Eating </p>
                <a
                  href="https://www.linkedin.com/in/dora-t-a672692a8/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit Dora's LinkedIn
                </a>
              </div>
            )}
          </div>
          {/* Eli  */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
           onClick={() => setSelectedMember(selectedMember === "Eli" ? null : "Eli")}
          >
            <img
              src="/fintechatuw/e-board_images/eli olson.png"
              alt="Eli Olson"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Eli Olson</h3>
            <p className="text-sm text-gray-500">Chair of Outreach</p>
            <p className="mt-2 text-sm">
            Hi, my name is Eli, and I'm a junior. I am interested in a club that helps me reach my goals of learning more about business and STEM, and the fintech club is just the right one!
            </p>
            <p className="text-red-500 font-bold">
              Click to learn more about me!
            </p>
            {selectedMember === "Eli" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Electrical Engineering</p>
                <p>Hobbies: Eating, Doomscrolling</p>
                <a
                  href="https://www.linkedin.com/in/eli-olson-821b8b372/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                    Visit Eli's LinkedIn
                </a>
              </div>
            )}
          </div>

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
