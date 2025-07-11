import { useState } from 'react';
import PropTypes from 'prop-types';
import first from '../assets/pay.png';
import second from '../assets/quote.png';
import third from '../assets/reque.png';
import forth from '../assets/side.png';
import fifth from '../assets/view.png';
import six from '../assets/direct.png';
import num1 from '../assets/ThinkFriday/num1.png';
import num2 from '../assets/ThinkFriday/num2.png';
import num3 from '../assets/ThinkFriday/num3.png';
import num4 from '../assets/ThinkFriday/num4.png';
import num5 from '../assets/ThinkFriday/num5.png';
import num6 from '../assets/ThinkFriday/num6.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import NavBar from './NavBar';
import Socials from './Socials';
import taxCal from '../assets/BasicnTax/taxCal.png';
import nomoro from '../assets/BasicnTax/nomoro.png';
import results from '../assets/BasicnTax/results.png';
import first1 from '../assets/ForgeTalent/first1.png'
import first3 from '../assets/ForgeTalent/first3.png'
import first4 from '../assets/ForgeTalent/first4.png'
import first6 from '../assets/ForgeTalent/first6.png'
import first8 from '../assets/ForgeTalent/first8.png'
import first9 from '../assets/ForgeTalent/first9.png'
import first10 from '../assets/ForgeTalent/first10.png'
import first12 from '../assets/ForgeTalent/first12.png'
import thoma from "../assets/Full/thoma.png";
import thoma1 from "../assets/Full/thoma1.png";
import thoma2 from "../assets/Full/thoma2.png";
import thoma3 from "../assets/Full/thoma3.png";
import thoma4 from "../assets/Full/thoma4.png";
import thoma5 from "../assets/Full/thoma5.png";
import thoma6 from "../assets/Full/thoma6.png";
import thoma7 from "../assets/Full/thoma7.png";
import thoma8 from "../assets/Full/thoma8.png";
import thoma9 from "../assets/Full/thoma9.png";
import thoma10 from "../assets/Full/thoma10.png";
import thoma11 from "../assets/Full/thoma11.png";


const GlassCard = ({ dataText = '', rotate = 0, image = '', isSelected = false, onClick }) => {
  return (
    <div
      className={`relative w-[clamp(120px,40vw,160px)] sm:w-[180px] h-[200px] bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl flex justify-center items-center transition-all duration-500 rounded-lg -mx-[45px] backdrop-blur-md ${
        isSelected ? 'z-10 scale-110 rotate-0' : 'group-hover/container:rotate-0 group-hover/container:mx-2.5'
      }`}
      style={{ transform: !isSelected ? `rotate(${rotate}deg)` : 'none' }}
    >
      {image && (
        <img src={image} alt={dataText} className="w-full h-full object-cover rounded-lg" />
      )}
      {dataText && (
        <div className="absolute bottom-0 w-full h-10 rounded-lg bg-white flex justify-center items-center text-[var(--primary-color)] font-bold">
          {dataText}
        </div>
      )}
      <button
        onClick={onClick}
        className="absolute top-2 left-2 px-2 py-1 mr-2 bg-[var(--accent-color)]/10 text-[var(--accent-color)] font-bold rounded-md hover:bg-[var(--button-hover)]/20 transition-colors duration-300 text-sm"
      >
        Select
      </button>
    </div>
  );
};

GlassCard.propTypes = {
  dataText: PropTypes.string,
  rotate: PropTypes.number,
  image: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSlideshow, setShowSlideshow] = useState(false);

  const myprojects = [
    {
      id: 1,
      images: [forth, second, third, first, fifth, six],
      title: 'Pack It Buddy',
      message:
        'GitHub Link: https://github.com/MoyabaNT/Systematic-Six-Final-Sprint.   Led a team of five developers, ensuring 100% task completion on time through effective delegation and feedback. Developed a Firebase-powered feature allowing users to submit service requests with instant database updates, enhancing app performance by 30%. Developed a secure, scalable backend using Node.js, express, and Firebase for real-time data management. Built a responsive, user-friendly interface with React Vite and Tailwind CSS for cross-platform compatibility.',
    },
    {
      id: 2,
      images: [num1, num2, num3, num4, num5, num6],
      title: 'ThinkFriday',
      message: 'GitHub Link: https://github.com/MoyabaNT/ForgeFinalWeb.   A collaborative project demonstrating innovative ideas and effective teamwork. Hosted on Netlify, built with React, Vite, and Tailwind CSS, and fully optimized for mobile responsiveness.'
    },
    {
      id: 3,
      images: [first1, first3, first4, first6, first8, first9, first10, first12],
      title: 'Forge Talent',
      message:
        'Led the team using Agile methodologies, creating project timelines, documenting milestones, and tracking tasks for efficient progress and ongoing maintenance. Guided the team to foster skill growth and collaboration, ensuring sustained project success to date. : Built a dynamic application with React Typescript, Tailwind CSS, and a StackAI-powered chatbot for an engaging user experience.',
    },
    {
      id: 4,
      images: [taxCal, nomoro, results],
      title: 'Tax Calculator',
      message:
        'GitHub Link: https://github.com/MoyabaNT/Calculate.   Explore financial empowerment with this intuitive South African Income Tax Calculator. Developed using HTML and CSS, it delivers accurate SARS tax calculations. Ideal for young professionals, entrepreneurs, or anyone curious about their take-home pay, this tool offers engaging, transparent, and visually appealing tax insights. Building this project significantly enhanced my business logic skills, deepening my ability to implement complex financial calculations effectively.',
    },
        {
      id: 5,
      images: [thoma, thoma1, thoma2, thoma3, thoma4, thoma5, thoma6, thoma7, thoma8, thoma9, thoma10, thoma11],
      title: 'SazzyStitches',
      message:
        'GitHub Link: https://github.com/MoyabaNT/Full.  Built a mobile-responsive e-commerce app using React JS, Tailwind CSS, Express, Node.js, and Firebase for learning purposes. Implemented REST APIs with Firebase authentication, restricting cart functionality to verified users in the database. Utilized AI-generated content to practice and enhance skills in full-stack development and API security.',
    }

  ];

  const handleViewClick = (id) => {
    setSelectedProject(id);
    setCurrentImageIndex(0);
    setShowSlideshow(false);
  };

  const handleStartSlideshow = () => {
    setShowSlideshow(true);
  };

  const handleCloseClick = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setShowSlideshow(false);
  };

  const handleNextClick = () => {
    const project = myprojects.find((project) => project.id === selectedProject);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    const project = myprojects.find((project) => project.id === selectedProject);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const selectedProjectData = myprojects.find((project) => project.id === selectedProject);

  return (
    <div className="text-[var(--primary-color)]">
      <NavBar />
      <Socials />
      <div name="projects" className="mt-16 w-full min-h-screen z-50">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
          <p className="text-4xl font-bold border-b-4 text-[var(--primary-color)] border-[var(--secondary-color)] inline">
            Projects
          </p>
          <p className="py-6 text-lg text-black">These are the projects I have worked on</p>

          {/* Flip Cards: Hidden on small screens, visible on md and above */}
          <div className="hidden md:block">
            <div className="container group relative flex flex-wrap justify-center items-center py-8 px-4 sm:px-12">
              {myprojects.map(({ id, title, images }, index) => (
                <GlassCard
                  key={id}
                  dataText={title}
                  rotate={[25, 25, 25, 25, 25][index % 5]}
                  image={images[0]}
                  isSelected={selectedProject === id}
                  onClick={() => handleViewClick(id)}
                />
              ))}
            </div>
          </div>

          {/* Grid Cards: Visible on small screens, hidden on md and above */}
          <div className="block md:hidden">
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-12 text-white">
              {myprojects.map(({ id, title, images }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${
                    selectedProject === id ? 'scale-110' : ''
                  }`}
                >
                  <img src={images[0]} alt={title} className="w-44 mx-auto" />
                  <p className="mt-4 text-base text-[var(--primary-color)] font-bold">{title}</p>
                  {!selectedProject && (
                    <button
                      onClick={() => handleViewClick(id)}
                      className="px-2 py-1 bg-[var(--accent-color)] font-bold rounded hover:bg-[var(--button-hover)]"
                    >
                      View
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Modal for Project Details */}
          {selectedProjectData && (
            <div className="fixed inset-0 z-40 bg-[rgba(114,111,113,0.2)] backdrop-blur-sm bg-opacity-80 flex items-center justify-center">
              <div className="relative text-center">
                {!showSlideshow ? (
                  <div>
                    <button
                      onClick={handleCloseClick}
                      className="absolute top-4 right-4 text-white text-xl bg-red-500 px-4 py-2 rounded-full"
                    >
                      X
                    </button>
                    <div className="px-4 sm:px-20">
                      <p className="z-40 bg-[var(--modal-bg)] backdrop-blur-sm text-white p-4 rounded-lg">
                        {selectedProjectData.message}
                      </p>
                      <button
                        onClick={handleStartSlideshow}
                        className="mt-4 px-4 py-2 bg-[var(--accent-color)] hover:bg-[var(--button-hover)] text-white font-bold rounded"
                      >
                        View project
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <img
                      src={selectedProjectData.images[currentImageIndex]}
                      alt="Enlarged"
                      className="w-full sm:w-3/4 h-auto mx-auto rounded-lg"
                    />
                    <button
                      onClick={handleCloseClick}
                      className="absolute top-4 right-4 text-white text-xl bg-red-500 px-4 py-2 rounded-full"
                    >
                      X
                    </button>
                    <button
                      onClick={handlePrevClick}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-2 rounded-full"
                    >
                      <IoIosArrowBack />
                    </button>
                    <button
                      onClick={handleNextClick}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-2 rounded-full"
                    >
                      <IoIosArrowForward />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;