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
import logodesign from '../assets/portfolio/MyLogo.png';
import PLogo from '../assets/portfolio/PLogo.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import NavBar from './NavBar';
import Socials from './Socials';
import taxCal from '../assets/BasicnTax/taxCal.png';
import nomoro from '../assets/BasicnTax/nomoro.png';
import results from '../assets/BasicnTax/results.png';

const GlassCard = ({ dataText = '', rotate = 0, image = '', isSelected = false, onClick }) => {
  return (
    <div
      className={`relative w-[clamp(120px,40vw,160px)] sm:w-[180px] h-[200px] bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl flex justify-center items-center transition-all duration-500 rounded-lg -mx-[45px] backdrop-blur-md ${
        isSelected ? 'z-10 scale-110 rotate-0' : 'group-hover/container:rotate-0 group-hover/container:mx-2.5'
      }`}
      style={{ transform: !isSelected ? `rotate(${rotate}deg)` : 'none' }}
    >
      {image && (
        <img
          src={image}
          alt={dataText}
          className="w-full h-full object-cover rounded-lg"
        />
      )}
      {dataText && (
        <div className="absolute bottom-0 w-full h-10 rounded-lg bg-white flex justify-center items-center text-pink-400 font-bold">
          {dataText}
        </div>
      )}
      <button
        onClick={onClick}
        className="absolute top-2 left-2 px-2 py-1 mr-2 bg-pink-700/5 text-pink-500 font-bold rounded-md hover:bg-pink-900/20 transition-colors duration-300 text-sm"
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
        'Pack It Buddy: Transform the way you move with Pack It Buddy, our innovative final-year project designed to revolutionize the moving industry. Addressing a critical gap in the market, Pack It Buddy connects customers—especially those in underserved rural areas—with reliable, trustworthy moving services. By offering a seamless, transparent platform, we empower everyone, from urban renters to temporary residents, to access efficient packing and moving solutions. Our user-centric design ensures forwarders and clients are effortlessly linked, delivering a streamlined experience that redefines reliability and convenience in the moving process.',
    },
    {
      id: 2,
      images: [num1, num2, num3, num4, num5, num6],
      title: 'ThinkFriday',
      message:
        'ThinkFriday: A collaborative project showcasing innovative ideas and teamwork.',
    },
    {
      id: 3,
      images: [logodesign],
      title: 'SazzyStitches Logo',
      message:
        'SazzyStitches: A vibrant crochet business where creativity and craftsmanship come together. I designed the logo using Canva to perfectly embody the essence of my unique crochet creations. Each stitch tells a story, reflecting the passion and dedication behind every piece. At SazzyStitches, we celebrate the art of crochet, bringing coziness and color to your life through beautifully crafted items.',
    },
    {
      id: 4,
      images: [PLogo],
      title: 'Pack It Buddy Logo',
      message:
        'The Pack It Buddy logo was carefully crafted using Canva, where creativity and functionality came together to symbolize the essence of the platform. The design captures the process of clients packing their belongings into boxes, representing the seamless moving experience Pack It Buddy offers. Through Canva`s versatile design tools, I was able to incorporate elements that reflect the app’s role as a bridge between clients and drivers. The clean lines and thoughtful composition of the logo mirrors the efficiency and care they bring to each move, making it visually resonate with the brand’s mission.',
    },
    {
      id: 5,
      images: [taxCal, nomoro, results],
      title: 'Tax Calculator',
      message:
        'Dive into the world of financial empowerment with this sleek and intuitive South African Income Tax Calculator! Built with HTML and CSS, it brings the South African Revenue Service (SARS) tax calculations to life. Whether you’re a young professional, a seasoned entrepreneur, or just curious about your take-home pay, this tool makes tax calculations engaging, transparent, and visually stunning.',
    },
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
    <div className="text-pink-400">
      <NavBar />
      <Socials />
      <div name="projects" className="mt-16 w-full min-h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
          <p className="text-4xl font-bold border-b-4 text-pink-400 border-pink-200 inline">
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
                  <img
                    src={images[0]}
                    alt={title}
                    className="w-44 mx-auto"
                  />
                  <p className="mt-4 text-base text-pink-600 font-bold">{title}</p>
                  {!selectedProject && (
                    <button
                      onClick={() => handleViewClick(id)}
                      className="px-2 py-1 bg-pink-500 font-bold rounded"
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
                    <div className="px-4 sm:px- Kub20">
                      <p className="z-40 bg-[rgba(202,86,163,0.86)] backdrop-blur-sm text-white p-4 rounded-lg">
                        {selectedProjectData.message}
                      </p>
                      <button
                        onClick={handleStartSlideshow}
                        className="mt-4 px-4 py-2 bg-[rgba(202,86,163,0.86)] hover:bg-pink-500 hover:font-bold text-white rounded"
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