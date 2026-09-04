import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Events = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
      <Navbar />

      {/* Page content */}
      <section className="text-center px-4 pt-32 pb-16">
        <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
        <div className="flex justify-center pt-5">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&title=FinTech%40UW%20Events&src=Y19lNmI4YzZjZjQwNThhNGVjYmQ3MjYxYzg5MmQ2YjZkYWZiN2Y2NGZlZTMyYzc3ZTEzYmIzNGNiNzBiMzg4NWZmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23d50000&color=%230b8043"
            style={{
              border: "solid 1px #777",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(213, 0, 0, 0.3)",
              maxWidth: "100%",
            }}
            width="1000"
            height="600"
            title="FinTech@UW Events Calendar"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Events;
