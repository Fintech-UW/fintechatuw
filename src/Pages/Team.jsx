import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TeamMemberCard from "../components/TeamMemberCard";
import useDocumentTitle from "../hooks/useDocumentTitle";

const COMMITTEES = [
  {
    id: "leadership",
    name: "Leadership Committee",
    description:
      "The Leadership Committee oversees the club's vision, long-term goals, and foundational decisions.",
    members: [
      {
        id: "anish",
        firstName: "Anish",
        name: "Anish Mantri",
        photo: "/e-board_images/Mantri_Anish.png",
        role: "President",
        bio: "Hi, my name is Anish, and I'm a junior. I am passionate about using technology to predict financial markets.",
        details: [
          { label: "Majors:", value: "Computer Science, Data Science" },
          { label: "Hobbies:", value: "Sports, Lifting, Gaming" },
        ],
        linkedinUrl: "https://www.linkedin.com/in/anishmantri/",
        email: "agmantri@wisc.edu",
      },
      {
        id: "sara",
        firstName: "Sara",
        name: "Sara Rodock",
        photo: "/e-board_images/Rodock_Sara.png",
        role: "Advisor",
        bio: "Hi, my name is Sara, and I'm the club advisor.",
        details: [],
        linkedinUrl: "https://www.linkedin.com/in/sara-rodock-8a0a9132/",
        email: "rodock@wisc.edu",
      },
    ],
  },
  {
    id: "tech",
    name: "Tech Committee",
    description:
      "The Tech Committee builds and manages our digital tools, website, and internal systems.",
    members: [
      {
        id: "christian",
        firstName: "Christian",
        name: "Christian Cortez",
        photo: "/e-board_images/Cortez_Christian.png",
        role: "VP of Technology",
        bio: "Hi, my name is Christian, and I'm a junior. I am passionate about the intersection of software engineering, data, and financial systems, and I'm especially excited by how technology can make financial tools more efficient, accessible, and scalable.",
        details: [
          { label: "Major:", value: "Computer Science, Data Science" },
          {
            label: "Hobbies:",
            value: "Building software projects, learning new backend skills, investing, soccer, cooking, working out",
          },
        ],
        linkedinUrl: "https://www.linkedin.com/in/christian--cortez/",
        email: "ccortez6@wisc.edu",
      },
      {
        id: "ashley",
        firstName: "Ashley",
        name: "Ashley Lin",
        photo: "/e-board_images/Lin_Ashley.png",
        role: "Chair of Technology",
        bio: "Hi, my name is Ashley, and I'm a sophomore. I am interested in how full-stack development and data analytics intersect, and I am passionate about building tools that make personal finance and investing intuitive for everyone.",
        details: [
          { label: "Major:", value: "Data Science, Computer Science" },
          { label: "Hobbies:", value: "Baking, Going on Walks, Reading Deeply Moving Books" },
        ],
        linkedinUrl: "https://www.linkedin.com/in/ashley-lin-56104b302/",
        email: "alin77@wisc.edu",
      },
    ],
  },
  {
    id: "finance",
    name: "Finance Committee",
    description: "The Finance Committee oversees budgeting, fundraising, and financial education initiatives.",
    members: [
      {
        id: "tyler",
        firstName: "Tyler",
        name: "Tyler Hood",
        photo: "/e-board_images/Hood_Tyler.png",
        role: "VP of Finance",
        bio: "Hi, my name is Tyler, and I'm a sophomore. I am passionate about the analytical and technical side of business and leveraging systems to solve problems.",
        details: [
          { label: "Major:", value: "Finance, Data Science" },
          { label: "Hobbies:", value: "Guitar, food" },
        ],
        linkedinUrl: "http://linkedin.com/in/tylerhood1",
        email: "tjhood@wisc.edu",
      },
      {
        id: "frederick",
        firstName: "Frederick",
        name: "Frederick Deng",
        photo: "/e-board_images/Deng_Frederick.png",
        role: "Chair of Finance",
        bio: "Hi, my name is Frederick, and I'm a junior. I am interested in learning more about the field of financial technology (and, admittedly, passionate about the free food).",
        details: [
          { label: "Major:", value: "Real Estate, Finance" },
          { label: "Hobbies:", value: "Basketball, running, prediction markets" },
        ],
        linkedinUrl: "https://www.linkedin.com/in/frederickdeng25",
        email: "fdeng22@wisc.edu",
      },
    ],
  },
  {
    id: "operations",
    name: "Operations Committee",
    description: "The Operations Committee manages logistics, club infrastructure, and internal processes.",
    members: [
      {
        id: "james",
        firstName: "James",
        name: "James Pangga",
        photo: "/e-board_images/Pangga_James.png",
        role: "VP of Operations",
        bio: "Hi, my name is James, and I'm a sophomore. I am passionate about building a community that intertwines business and technology, and helping develop this club further.",
        details: [
          { label: "Major:", value: "Finance, Information Systems" },
          { label: "Hobbies:", value: "Lifting, volleyball, fashion" },
        ],
        linkedinUrl: "https://www.linkedin.com/in/jamespangga/",
        email: "jpangga@wisc.edu",
      },
      {
        id: "sarah",
        firstName: "Sarah",
        name: "Sarah Crowe",
        photo: "/e-board_images/Crowe_Sarah.png",
        role: "Chair of Operations",
        bio: "Hi, my name is Sarah, and I'm a junior. I am passionate about exploring the intersection of finance and technology, while continuing to broaden my technical skills for both personal and professional growth.",
        details: [
          { label: "Major:", value: "Personal Finance" },
          { label: "Hobbies:", value: "Tennis, running, walking my dog, going to the beach" },
        ],
        linkedinUrl: "https://www.linkedin.com/in/crowe-sarah",
        email: "sdcrowe@wisc.edu",
      },
      {
        id: "siddhant",
        firstName: "Siddhant",
        name: "Siddhant Choudhary",
        photo: "/e-board_images/Choudhary_Siddhant.png",
        role: "Chair of Operations",
        bio: "Hi, my name is Siddhant, and I'm a junior. I am interested in how technology is rapidly transforming finance and exploring how those systems evolve.",
        details: [
          { label: "Major:", value: "Computer Science, Mathematics" },
          { label: "Hobbies:", value: "Listening to music, soccer, volleyball, video games, chill nights in with friends" },
        ],
        linkedinUrl: "https://www.linkedin.com/in/choudhary-siddhant",
        email: "schoudhary27@wisc.edu",
      },
    ],
  },
];

const Team = () => {
  useDocumentTitle("The Team", "Meet the officers leading Fintech@UW at UW–Madison.");

  const [selectedMember, setSelectedMember] = useState(null);

  const toggleMember = (id) => {
    setSelectedMember((current) => (current === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Page heading */}
      <section className="text-center py-16 px-4 mt-32">
        <h1 className="text-5xl font-bold mb-4">Meet The Team</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We're a team of passionate students driving the future of FinTech at UW-Madison.
        </p>
      </section>

      {COMMITTEES.map((committee, index) => (
        <section
          key={committee.id}
          className={`max-w-6xl mx-auto px-6 ${index === COMMITTEES.length - 1 ? "pb-20" : "pb-16"}`}
        >
          <h2 className="text-3xl font-semibold mb-2">{committee.name}</h2>
          <p className="text-gray-600 mb-8">{committee.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {committee.members.map((member, memberIndex) => {
              // If a committee has an odd number of members, the last card
              // would otherwise sit alone in the left column with dead space
              // beside it. Center it and cap its width instead. Driven by the
              // member count, not any specific committee/person, so this
              // applies automatically if any committee's roster changes.
              const isOddOneOut =
                committee.members.length % 2 === 1 &&
                memberIndex === committee.members.length - 1;

              return (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  isExpanded={selectedMember === member.id}
                  onToggle={() => toggleMember(member.id)}
                  className={isOddOneOut ? "sm:col-span-2 sm:max-w-md sm:mx-auto" : ""}
                />
              );
            })}
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
};

export default Team;
