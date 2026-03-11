import React from 'react';
import ayoub from "../../assets/team/ayoub.svg";
// import amari from "../../assets/team/essa.svg";
// import hamid from "../../assets/team/hamid.svg";
import simo from "../../assets/team/simo.svg";
import nour from "../../assets/team/Zeus.svg";
// import omar from "../../assets/team/omar.svg";
// import amine from "../../assets/team/amine.svg";
// import smallLogo from "../../assets/team/smallLogo.png";
import user from "../../assets/team/user.svg";

const teamMembers = [
  {
    name: "Ayoub EL Montassir",
    role: "Chief Executive Officer - Founder",
    image: ayoub,
  },
  {
    name: "Mohamed Elkhalfi",
    role: "Co-Founder, Mobile apps Developer",
    image: simo,  
   },
  {
    name: "Redoine Elmfadel",
    role: "Marketing Specialist",
    image: user,
  },
  {
    name: "Mohamed Nour",
    role: "UI UX Designer , Art creator",
    image: nour,
    
  },
  {
    name: "Salah Hajouji",
    role: "Filmmaker - Video editor & Photographer",
    image: user,
  },
  // {
  //   name: "Youssef Oujakar",
  //   role: "Filmmaker - Video editor & Photographer",
  //   image: user,
  // },
];

const TeamSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Lemon:wght@400&family=Poppins:wght@300;400;500;600;700&display=swap');

        .stroked-text {
          -webkit-text-stroke: 2px black;
          text-stroke: 2px white;
          text-shadow:
            -2px -2px 0 white,
            2px -2px 0 white,
            -2px 2px 0 white,
            2px 2px 0 white,
            -2px 0 0 white,
            2px 0 0 white,
            0 -2px 0 white,
            0 2px 0 white;
        }

        .font-Lemon {
          font-family: 'Lemon', cursive;
        }

        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="lg:text-7xl text-4xl font-medium font-poppins text-black">Meet the team</h1>
          <p className="lg:text-4xl text-2xl text-white mt-2 -rotate-2 font-Lemon italic tracking-tight leading-[0.9] stroked-text">
            Maybe you know them
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative w-full">
          {/* SVG Wave */}
          <svg
            className="absolute -top-[150px] h-[500px] left-0 w-full z-0"
            viewBox="0 0 690 200"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C120,0 240,200 360,100 C480,0 600,200 720,100 C840,0 960,200 1080,100 C1200,0 1320,200 1440,100"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* First Row - 3 members */}
          <div className="flex justify-center items-start mb-40 relative z-10">
            <div className="flex items-start space-x-40">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div key={index} className="text-center flex-shrink-0 group">
                  <div className="relative w-44 h-44 rounded-full overflow-hidden mb-8 mx-auto bg-white shadow-2xl ring-4 ring-white transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl leading-tight">{member.name}</h3>
                  <p className="text-base text-gray-600 max-w-56 leading-relaxed">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - 4 members */}
          <div className="flex justify-center items-start relative z-10">
            <div className="flex items-start space-x-32">
              {teamMembers.slice(3).map((member, index) => (
                <div key={index} className="text-center flex-shrink-0 group">
                  <div className="relative w-44 h-44 rounded-full overflow-hidden mb-8 mx-auto bg-white shadow-2xl ring-4 ring-white transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl leading-tight">{member.name}</h3>
                  <p className="text-base text-gray-600 max-w-56 leading-relaxed">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="absolute w-400px lg:hidden block">
          <svg
            className="absolute -top-[150px] h-[500px] left-0 w-full z-0"
            viewBox="0 0 690 200"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C120,0 240,200 360,100 C480,0 600,200 720,100 C840,0 960,200 1080,100 C1200,0 1320,200 1440,100"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="lg:hidden relative">
          <div className="flex flex-col items-center space-y-20 relative z-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center flex-shrink-0 group">
                <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto bg-white shadow-2xl ring-4 ring-white transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  {member.smalllogo && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                      <img src={member.smalllogo} className="w-8 h-8 rounded-full" alt="WedoTech Logo" />
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg leading-tight">{member.name}</h3>
                <p className="text-base text-gray-600 max-w-72 leading-relaxed px-4">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
