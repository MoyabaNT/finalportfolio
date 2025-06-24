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
    className: 'shadow-lg',
  },
  {
    src: Tailwind,
    alt: 'Tailwind',
    className: 'shadow-md',
  },
  {
    src: Figma,
    alt: 'Figma',
    className: 'shadow-sm',
  },
  {
    src: Nextjs,
    alt: 'Next.js',
    className: 'shadow-lg',
  },
  {
    src: Canva,
    alt: 'Canva',
    className: 'shadow-md',
  },
  {
    src: Firebase,
    alt: 'Firebase',
    className: 'shadow-sm',
  },
  {
    src: JavaScript,
    alt: 'JavaScript',
    className: 'shadow-lg',
  },
  {
    src: html,
    alt: 'HTML',
    className: 'shadow-md',
  },
  {
    src: GitHub,
    alt: 'GitHub',
    className: 'shadow-sm',
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
      <div className="text-[var(--primary-color)]">
        <NavBar />
        <Socials />
      </div>
      <div name="technologies" className="mt-16 w-full h-full py-8 z-50">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <p className="text-4xl text-[var(--primary-color)] font-bold border-b-4 border-[var(--secondary-color)] p-2 inline">
            Tech stack
          </p>
          <p className="py-6 text-lg text-black">View my tech stack below</p>
        </div>
        <div className="fixed top-24 left-0 w-full h-screen flex flex-col items-center justify-center z-10">
          <div
            className="relative"
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
                className={`absolute w-[150px] h-[150px] rounded-xl border-2 border-[var(--accent-color)] bg-[var(--secondary-color)]/50 overflow-hidden ${card.className}`}
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
              className="px-4 py-2 bg-[var(--accent-color)] text-white rounded hover:bg-[var(--button-hover)] transition"
            >
              ◀ Prev
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-[var(--accent-color)] text-white rounded hover:bg-[var(--button-hover)] transition"
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