import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const About = () => {
  const baseUrl = import.meta.env.BASE_URL ?? "/";
  const sponsorshipPacketUrl = `${baseUrl}docs/sponsorship_packet.pdf`;
  const sponsorshipPacketDisplayUrl = `${sponsorshipPacketUrl}#toolbar=0&navpanes=0`;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

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

      <Footer />
    </main>
  );
};

export default About;
