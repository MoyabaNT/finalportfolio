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

const Stack = () => {
  const techs = [
    { id: 1, src: html, title: 'HTML', style: 'shadow-orange-500' },
    { id: 2, src: JavaScript, title: 'JavaScript', style: 'shadow-yellow-400' },
    { id: 3, src: REactimage, title: 'React', style: 'shadow-blue-600' },
    { id: 4, src: Tailwind, title: 'Tailwind', style: 'shadow-sky-400' },
    { id: 5, src: Nextjs, title: 'Next JS', style: 'shadow-gray-800' },
    { id: 6, src: GitHub, title: 'GitHub', style: 'shadow-gray-400' },
    { id: 7, src: Firebase, title: 'Firebase', style: 'shadow-amber-400' },
    { id: 8, src: Figma, title: 'Figma', style: 'shadow-purple-400' },
    { id: 9, src: Canva, title: 'Canva', style: 'shadow-blue-300' },
  ];

  return (
    <div>
        <div>
            <NavBar />
        </div>
    <div name="technologies" className="mt-16 bg-pink-50 w-full h-full py-8">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <p className="text-4xl text-pink-400 font-bold border-b-4 border-pink-300 p-2 inline">Technologies</p>
        <p className="py-6 text-lg text-black">These are my technologies</p>
      </div>
      <div className="'/
       w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-12 text-black">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
          >
            <img src={src} alt={title} className="w-20 mx-auto" />
            <p className="mt-4 text-base">{title}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default Stack;