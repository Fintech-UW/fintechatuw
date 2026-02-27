import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const baseUrl = import.meta.env.BASE_URL ?? "/";
  const sponsorshipPacketUrl = `${baseUrl}docs/sponsorship_packet.pdf`;
  const sponsorshipPacketDisplayUrl = `${sponsorshipPacketUrl}#toolbar=0&navpanes=0`;

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

      {/* Page content */}
      <section className="text-center py-16 px-4 mt-32">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Fintech at UW–Madison is a student-led organization that explores the intersection of finance and technology. 
          We aim to build a collaborative and forward-thinking community of students who are passionate about fintech.
        </p>
      </section>

      {/* Club Highlights Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-sm text-gray-600">
              To empower students through hands-on experiences, real-world applications, and professional development in the fintech space.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">What We Do</h3>
            <p className="text-sm text-gray-600">
              We host workshops, trading competitions, speaker events, and collaborative projects covering topics like blockchain, investing, AI in finance, and more.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Get Involved</h3>
            <p className="text-sm text-gray-600">
              Join our community to stay ahead of fintech trends, connect with peers, and build something impactful together.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Packet */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">Corporate Sponsorship Packet</h2>
        <iframe
          src={sponsorshipPacketDisplayUrl}
          title="FinTech@UW Corporate Sponsorship Packet"
          className="w-full h-[720px] border rounded-xl shadow-md bg-white"
          style={{
              border: "solid 1px #777",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(213, 0, 0, 0.3)",
              maxWidth: "100%",
            }}
        />
        <p className="text-sm text-gray-600 mt-4">
          <a
            href={sponsorshipPacketUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Download the PDF
          </a>
        </p>
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

export default About;
