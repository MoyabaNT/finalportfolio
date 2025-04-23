import { useState } from 'react';
import PropTypes from 'prop-types';

const GlassCard = ({ dataText = '', rotate = 0, svgPath = '', viewBox = '0 0 512 512', isSelected = false, onClick }) => {
  return (
    <div
      className={`relative w-[180px] h-[200px] bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl flex justify-center items-center transition-all duration-500 rounded-lg -mx-[45px] backdrop-blur-md ${
        isSelected ? 'z-10 scale-110 rotate-0' : 'group-hover/container:rotate-0 group-hover/container:mx-2.5'
      }`}
      style={{ transform: !isSelected ? `rotate(${rotate}deg)` : 'none' }}
    >
      {svgPath && (
        <svg viewBox={viewBox} height="1em" xmlns="http://www.w3.org/2000/svg" className="text-5xl fill-white">
          <path d={svgPath} />
        </svg>
      )}
      {dataText && (
        <div className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white font-arial">
          {dataText}
        </div>
      )}
      <button
        onClick={onClick}
        className="absolute top-2 right-2 px-2 py-1 bg-white/10 text-white rounded-md hover:bg-white/20 transition-colors duration-300 text-sm"
      >
        Select
      </button>
    </div>
  );
};

GlassCard.propTypes = {
  dataText: PropTypes.string,
  rotate: PropTypes.number,
  svgPath: PropTypes.string,
  viewBox: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

const TheCards = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const cards = [
    {
      dataText: 'Github',
      rotate: -30,
      viewBox: '0 0 496 512',
      svgPath:
        'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
    },
    {
      dataText: 'Code',
      rotate: -5,
      viewBox: '0 0 640 512',
      svgPath:
        'M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z',
    },
    {
      dataText: 'Earn',
      rotate: 25,
      viewBox: '0 0 576 512',
      svgPath:
        'M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z',
    },
  ];

  return (
    <div className="container group relative flex justify-center items-center min-h-screen max-w-screen bg-gray-900">
      {cards.map((card, index) => (
        <GlassCard
          key={index}
          dataText={card.dataText}
          rotate={card.rotate}
          svgPath={card.svgPath}
          viewBox={card.viewBox}
          isSelected={selectedCardIndex === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};

export default TheCards;