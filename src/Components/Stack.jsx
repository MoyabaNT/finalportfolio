import html from '../assets/html.png';
import Figma from '../assets/figma.png';
import GitHub from '../assets/github.png';
import Nextjs from '../assets/nextjs.png';
import Tailwind from '../assets/tailwind.png';
import JavaScript from '../assets/javascript.png';
import REactimage from '../assets/react.png';
import Firebase from '../assets/firebase.png';
import Canva from '../assets/canva.png';
import NavBar from './NavBar';
import Socials from './Socials';
import { useState } from "react";

const cards = [
  {
    src: REactimage,
    alt: 'React',
    className: 'border-pink-500 bg-pink-100 shadow-lg',
  },
  {
    src: Tailwind,
    alt: 'Tailwind',
    className: 'border-blue-500 bg-blue-50 shadow-md',
  },
  {
    src: Figma,
    alt: 'Figma',
    className: 'border-purple-500 bg-purple-100 shadow-sm',
  },
  {
    src: Nextjs,
    alt: 'Next.js',
    className: 'border-gray-800 bg-gray-100 shadow-lg',
  },
  {
    src: Canva,
    alt: 'Canva',
    className: 'border-green-500 bg-green-50 shadow-md',
  },
  {
    src: Firebase,
    alt: 'Firebase',
    className: 'border-yellow-500 bg-yellow-100 shadow-sm',
  },
  {
    src: JavaScript,
    alt: 'JavaScript',
    className: 'border-orange-500 bg-orange-50 shadow-lg',
  },
  {
    src: html,
    alt: 'HTML',
    className: 'border-red-500 bg-red-100 shadow-md',
  },
  {
    src: GitHub,
    alt: 'GitHub',
    className: 'border-black bg-gray-200 shadow-sm',
  },
];

const Stack = () => {
  const [rotation, setRotation] = useState(0);
  const totalCards = cards.length;
  const angleStep = 360 / totalCards;

  const handleNext = () => {
    setRotation((prev) => prev - angleStep);
  };

  const handlePrev = () => {
    setRotation((prev) => prev + angleStep);
  };

  return (
    <div>
      <div className="text-pink-400">
        <NavBar />
        <Socials />
      </div>
      <div name="technologies" className="mt-16 bg-pink-50 w-full h-full py-8">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <p className="text-4xl text-pink-400 font-bold border-b-4 border-pink-300 p-2 inline">Tech stack</p>
          <p className="py-6 text-lg text-black">View my tech stack below</p>
        </div>
        <div className="fixed top-30 left-0 w-full h-screen flex flex-col items-center justify-center z-10">
        <div>
          
        </div>
        <div
          className="relative "
          style={{
            width: "150px",
            height: "150px",
            transformStyle: "preserve-3d",
            transform: `perspective(1000px) rotateX(-18deg) rotateY(${rotation}deg)`,
            transition: "transform 1s ease-in-out",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute w-[150px] h-[150px] rounded-xl border-2 overflow-hidden ${card.className}`}
              style={{
                transform: `rotateY(${angleStep * index}deg) translateZ(250px)`,
              }}
            >
              <img
                src={card.src}
                alt={card.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
                          {/* Buttons */}
                  <div className="mt-30 flex gap-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
            >
              ◀ Prev
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
            >
              Next ▶
            </button>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Stack;