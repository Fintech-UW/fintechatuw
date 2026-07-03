import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthNavItems from "../components/AuthNavItems";

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
                src="/fintech-at-uw-logo.png"
                alt="Fintech Logo"
                className="w-10 h-auto sm:w-12 shrink-0"
              />
              <div className="min-w-0">
                <h1 className="text-base sm:text-lg font-bold truncate">FinTech@UW</h1>
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
                <AuthNavItems />

                {/* Desktop Join */}
                <li className="hidden md:block shrink-0">
                  <a
                    href="https://linktr.ee/fintechuw?fbclid=PAZXh0bgNhZW0CMTEAAadsdHIdE-4ELJo7VeVNAS-uGD8GcrQOas6_JTAtlrDkqbIgwefiHT-LNhZ5bw_aem_ybNM8nOQMb0hocVQXjWqeg"
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
                href="https://linktr.ee/fintechuw?fbclid=PAZXh0bgNhZW0CMTEAAadsdHIdE-4ELJo7VeVNAS-uGD8GcrQOas6_JTAtlrDkqbIgwefiHT-LNhZ5bw_aem_ybNM8nOQMb0hocVQXjWqeg"
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
          We're a team of passionate students driving the future of FinTech at UW-Madison.
        </p>
      </section>

      {/* Leadership Committee */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-2">Leadership Committee</h2>
        <p className="text-gray-600 mb-8">
          The Leadership Committee oversees the club's vision, long-term goals, and foundational decisions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Anish Mantri */}
          <div
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "Anish" ? null : "Anish")}
          >
            <img
              src="/e-board_images/Mantri_Anish.png"
              alt="Anish Mantri"
              className="w-32 h-32 mx-auto rounded-full object-cover object-center mb-4"
            />
            <h3 className="text-xl font-semibold">Anish Mantri</h3>
            <p className="text-sm text-gray-500">President</p>
            <p className="mt-2 text-sm">
              Hi, my name is Anish, and I'm a junior. I am passionate about using technology to predict financial markets.
            </p>
            <p className="text-red-500 font-bold">Click to learn more about me!</p>
            {selectedMember === "Anish" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Majors: Computer Science, Data Science</p>
                <p>Hobbies: Sports, Lifting, Gaming</p>
                <a
                  href="https://www.linkedin.com/in/anishmantri/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Anish's LinkedIn
                </a>
                <br />
                <a
                  href="https://outlook.office.com/mail/deeplink/compose?to=agmantri@wisc.edu"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Email Anish
                </a>
              </div>
            )}
          </div>

          {/* Sara Rodock */}
          <div
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "Sara" ? null : "Sara")}
          >
            <img
              src="/e-board_images/Rodock_Sara.png"
              alt="Sara Rodock"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Sara Rodock</h3>
            <p className="text-sm text-gray-500">Advisor</p>
            <p className="mt-2 text-sm">Hi, my name is Sara, and I'm the club advisor.</p>
            <p className="text-red-500 font-bold">Click to learn more about me!</p>
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
                <br />
                <a
                  href="https://outlook.office.com/mail/deeplink/compose?to=rodock@wisc.edu"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Email Sara
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tech Committee */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-2">Tech Committee</h2>
        <p className="text-gray-600 mb-8">
          The Tech Committee builds and manages our digital tools, website, and internal systems.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {/* Christian Cortez */}
          <div
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "Christian" ? null : "Christian")}
          >
            <img
              src="/e-board_images/Cortez_Christian.png"
              alt="Christian Cortez"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Christian Cortez</h3>
            <p className="text-sm text-gray-500">VP of Technology</p>
            <p className="mt-2 text-sm">
              Hi, my name is Christian, and I'm a junior. I am passionate about the intersection of
              software engineering, data, and financial systems, and I'm especially excited by how
              technology can make financial tools more efficient, accessible, and scalable.
            </p>
            <p className="text-red-500 font-bold">Click to learn more about me!</p>
            {selectedMember === "Christian" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Computer Science, Data Science</p>
                <p>Hobbies: Building software projects, learning new backend skills, investing, soccer, cooking, working out</p>
                <a
                  href="https://www.linkedin.com/in/christian--cortez/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Christian's LinkedIn
                </a>
                <br />
                <a
                  href="https://outlook.office.com/mail/deeplink/compose?to=ccortez6@wisc.edu"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Email Christian
                </a>
              </div>
            )}
          </div>

          {/* Ashley Lin */}
          <div
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "Ashley" ? null : "Ashley")}
          >
            <img
              src="/e-board_images/Lin_Ashley.png"
              alt="Ashley Lin"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Ashley Lin</h3>
            <p className="text-sm text-gray-500">Chair of Technology</p>
            <p className="mt-2 text-sm">
              Hi, my name is Ashley, and I'm a sophomore. I am interested in how full-stack
              development and data analytics intersect, and I am passionate about building tools
              that make personal finance and investing intuitive for everyone.
            </p>
            <p className="text-red-500 font-bold">Click to learn more about me!</p>
            {selectedMember === "Ashley" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Data Science, Computer Science</p>
                <p>Hobbies: Baking, Going on Walks, Reading Deeply Moving Books</p>
                <a
                  href="https://www.linkedin.com/in/ashley-lin-56104b302/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Ashley's LinkedIn
                </a>
                <br />
                <a
                  href="https://outlook.office.com/mail/deeplink/compose?to=alin77@wisc.edu"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Email Ashley
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Finance Committee */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-2">Finance Committee</h2>
        <p className="text-gray-600 mb-8">
          The Finance Committee oversees budgeting, fundraising, and financial education initiatives.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {/* Tyler Hood */}
          <div
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "Tyler" ? null : "Tyler")}
          >
            <img
              src="/e-board_images/Hood_Tyler.png"
              alt="Tyler Hood"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Tyler Hood</h3>
            <p className="text-sm text-gray-500">VP of Finance</p>
            <p className="mt-2 text-sm">
              Hi, my name is Tyler, and I'm a sophomore. I am passionate about the analytical and
              technical side of business and leveraging systems to solve problems.
            </p>
            <p className="text-red-500 font-bold">Click to learn more about me!</p>
            {selectedMember === "Tyler" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Finance, Data Science</p>
                <p>Hobbies: Guitar, food</p>
                <a
                  href="http://linkedin.com/in/tylerhood1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Tyler's LinkedIn
                </a>
                <br />
                <a
                  href="https://outlook.office.com/mail/deeplink/compose?to=tjhood@wisc.edu"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Email Tyler
                </a>
              </div>
            )}
          </div>

          {/* Frederick Deng */}
          <div
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "Frederick" ? null : "Frederick")}
          >
            <img
              src="/e-board_images/Deng_Frederick.png"
              alt="Frederick Deng"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Frederick Deng</h3>
            <p className="text-sm text-gray-500">Chair of Finance</p>
            <p className="mt-2 text-sm">
              Hi, my name is Frederick, and I'm a junior. I am interested in learning more about
              the field of financial technology (and, admittedly, passionate about the free food).
            </p>
            <p className="text-red-500 font-bold">Click to learn more about me!</p>
            {selectedMember === "Frederick" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Real Estate, Finance</p>
                <p>Hobbies: Basketball, running, prediction markets</p>
                <a
                  href="https://www.linkedin.com/in/frederickdeng25"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Frederick's LinkedIn
                </a>
                <br />
                <a
                  href="https://outlook.office.com/mail/deeplink/compose?to=fdeng22@wisc.edu"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Email Frederick
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Operations Committee */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold mb-2">Operations Committee</h2>
        <p className="text-gray-600 mb-8">
          The Operations Committee manages logistics, club infrastructure, and internal processes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {/* James Pangga */}
          <div
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "James" ? null : "James")}
          >
            <img
              src="/e-board_images/Pangga_James.png"
              alt="James Pangga"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">James Pangga</h3>
            <p className="text-sm text-gray-500">VP of Operations</p>
            <p className="mt-2 text-sm">
              Hi, my name is James, and I'm a sophomore. I am passionate about building a community
              that intertwines business and technology, and helping develop this club further.
            </p>
            <p className="text-red-500 font-bold">Click to learn more about me!</p>
            {selectedMember === "James" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Finance, Information Systems</p>
                <p>Hobbies: Lifting, volleyball, fashion</p>
                <a
                  href="https://www.linkedin.com/in/jamespangga/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit James's LinkedIn
                </a>
                <br />
                <a
                  href="https://outlook.office.com/mail/deeplink/compose?to=jpangga@wisc.edu"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Email James
                </a>
              </div>
            )}
          </div>

          {/* Siddhant Choudhary */}
          <div
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            onClick={() => setSelectedMember(selectedMember === "Siddhant" ? null : "Siddhant")}
          >
            <img
              src="/e-board_images/Choudhary_Siddhant.png"
              alt="Siddhant Choudhary"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Siddhant Choudhary</h3>
            <p className="text-sm text-gray-500">Chair of Operations</p>
            <p className="mt-2 text-sm">
              Hi, my name is Siddhant, and I'm a junior. I am interested in how technology is
              rapidly transforming finance and exploring how those systems evolve.
            </p>
            <p className="text-red-500 font-bold">Click to learn more about me!</p>
            {selectedMember === "Siddhant" && (
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>Major: Computer Science, Mathematics</p>
                <p>Hobbies: Listening to music, soccer, volleyball, video games, chill nights in with friends</p>
                <a
                  href="https://www.linkedin.com/in/choudhary-siddhant"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Siddhant's LinkedIn
                </a>
                <br />
                <a
                  href="https://outlook.office.com/mail/deeplink/compose?to=schoudhary27@wisc.edu"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Email Siddhant
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
                  <img src="/socials-images/linkedin.png" id="linkedin-logo" />
                </a>
                <a href="https://www.instagram.com/fintechuw/" target="_blank" rel="noreferrer">
                  <img src="/socials-images/instagram.png" id="instagram-logo" />
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