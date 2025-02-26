import  { useState } from 'react';
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

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import NavBar from './NavBar';

import logodesign from '../assets/portfolio/MyLogo.png';
import PLogo from '../assets/portfolio/PLogo.png';
import Socials from './Socials';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSlideshow, setShowSlideshow] = useState(false);

  const myprojects = [
    {
      id: 1,
      images: [forth, second, third, first, fifth, six],
      title: 'Pack It Buddy',
      message: 'Final year project ~ Find the project here 👌 : https://github.com/MoyabaNT/Systematic-Six-Final-Sprint/tree/main ...Pack It Buddy addresses a significant gap in the moving industry by providing a platform that connects customers with trustworthy moving services, particularly for those in rural areas who are often overlooked. The industry has yet to tap into the potential of offering reliable packing assistance, leaving many customers uncertain about which companies to trust. Our solution bridges this gap by offering a seamless, transparent platform that caters to all customers, including those in temporary housing such as renters in business hubs. Pack It Buddy delivers a user-centric, efficient service that ensures forwarders and customers are easily connected.',
    },
    {
      id: 2,
      images: [num1, num2, num3, num4, num5, num6],
      title: 'ThinkFriday',
      message: 'ThinkFriday is a collaborative project showcasing innovative ideas and teamwork.',
    },
    { id: 3,
      images: [logodesign],
      title: 'logo',
      message: 'SazzyStitches: A vibrant crochet business where creativity and craftsmanship come together. I designed the logo using Canva to perfectly embody the essence of my unique crochet creations. Each stitch tells a story, reflecting the passion and dedication behind every piece. At SazzyStitches, we celebrate the art of crochet, bringing coziness and color to your life through beautifully crafted items.' 
    },
    { id: 4, 
      images: [PLogo],
      title: 'logo',
      message: 'The Pack It Buddy logo was carefully crafted using Canva, where creativity and functionality came together to symbolize the essence of the platform. The design captures the process of clients packing their belongings into boxes, representing the seamless moving experience Pack It Buddy offers. Through Canva`s versatile design tools, I was able to incorporate elements that reflect the app’s role as a bridge between clients and drivers. The clean lines and thoughtful composition of the logo mirrors the efficiency and care they bring to each move, making it visually resonate with the brand’s mission.' },


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
    <div className=''>
      <div className='text-pink-400'>
      <NavBar />
      <Socials />

      </div>
    <div
      name="projects"
      className="mt-16 w-full bg-pink-50 min-h-screen"
      >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <p className="text-4xl font-bold border-b-4 text-pink-400 border-pink-200 p-2 inline">
          Projects
        </p>
        <p className="py-6 text-lg text-black">These are the projects I have worked on</p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-12 text-black font-bold">
          {myprojects.map(({ id, title, images }) => (
            <div
              key={id}
              className={`shadow-md shadow-pink-400 hover:scale-105 duration-500 py-4 rounded-lg ${
                selectedProject === id ? 'scale-110' : ''
              }`}
            >
              <img
                src={images[0]} // Display the first image as thumbnail
                alt={title}
                className="w-44 mx-auto"
              />
              <p className="mt-4 text-base">{title}</p>
              {!selectedProject && (
                <button
                  onClick={() => handleViewClick(id)}
                  className="px-2 py-1 bg-pink-200 rounded"
                >
                  View
                </button>
              )}
            </div>
          ))}
        </div>

        {selectedProjectData && (
          <div className="mt-16 fixed inset-0 z-40 bg-[rgba(114,111,113,0.2)] backdrop-blur-sm bg-opacity-80 flex items-center justify-center">
            <div className="relative text-center">
              {!showSlideshow ? (
                <div> 
                  <button
                    onClick={handleCloseClick}
                    className="absolute top-4 right-4 text-white text-xl bg-red-500 px-4 py-2 rounded-full"
                  >
                    X
                  </button>
                <div className='px-20'>
                  <p className=" z-40 bg-[rgba(202,86,163,0.86)] backdrop-blur-sm text-white p-4 rounded-lg px-16 ">
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
                <div className=''>
                  <img
                    src={selectedProjectData.images[currentImageIndex]} // Display the current image in the slideshow
                    alt="Enlarged"
                    className="w-3/4 h-auto mx-auto"
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

                {/**the logos start here */}

      </div>
    </div>
    </div>

  );
};

export default Projects;
