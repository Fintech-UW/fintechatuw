import React from "react";

const TeamMemberCard = ({ member, isExpanded, onToggle }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  };

  const stopPropagation = (event) => event.stopPropagation();

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <img
        src={member.photo}
        alt={member.name}
        className="w-32 h-32 mx-auto rounded-full object-cover object-center mb-4"
      />
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="text-sm text-gray-500">{member.role}</p>
      <p className="mt-2 text-sm">{member.bio}</p>
      <p className="text-red-500 font-bold">
        {isExpanded ? "Click to show less" : "Click to learn more about me!"}
      </p>

      {isExpanded ? (
        <div className="mt-4 text-sm text-gray-600 space-y-2">
          {member.details?.map((detail) => (
            <p key={detail.label}>
              {detail.label} {detail.value}
            </p>
          ))}

          {member.linkedinUrl ? (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              onClick={stopPropagation}
              className="text-blue-500 hover:underline"
            >
              Visit {member.firstName}'s LinkedIn
            </a>
          ) : null}

          {member.linkedinUrl && member.email ? <br /> : null}

          {member.email ? (
            <a
              href={`https://outlook.office.com/mail/deeplink/compose?to=${member.email}`}
              target="_blank"
              rel="noreferrer"
              onClick={stopPropagation}
              className="text-blue-500 hover:underline"
            >
              Email {member.firstName}
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default TeamMemberCard;
