// src/Components/NavBar.jsx
import { useRef, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CiCircleList } from 'react-icons/ci';
import { useClickAway } from 'react-use';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { MdPerson2 } from 'react-icons/md';
import { FaRegFilePowerpoint } from 'react-icons/fa6';
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';
import { GiStoneStack } from 'react-icons/gi';
import Logo from '../assets/gora.png';
import { ThemeContext } from '../Context/ThemeContext';

const NavBar = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleSidebar = () => setOpen((prev) => !prev);

  const items = [
    { title: 'About', Icon: MdPerson2, href: '/About' },
    { title: 'Projects', Icon: FaRegFilePowerpoint, href: '/Projects' },
    { title: 'Stack', Icon: GiStoneStack, href: '/Stack' },
    { title: 'Contact', Icon: HiOutlineChatBubbleOvalLeftEllipsis, href: '/Contact' },
  ];

  const themes = [
    { name: 'pink', label: 'Pink' },
    { name: 'blue', label: 'Blue' },
    { name: 'green', label: 'Green' },
    { name: 'red', label: 'Red' },
    { name: 'purple', label: 'Purple' },
    { name: 'brown', label: 'brown' },
    { name: 'navy-blue', label: 'navy-blue' },
    { name: 'emerald', label: 'emerald' },
    { name: 'slate', label: 'slate' },
  ];

  return (
    <div className="h-16 fixed top-0 left-0 right-0 z-50 shadow-sm bg-[var(--primary-color)]">
      {/* Desktop Navbar */}
      <div className="hidden sm:flex items-center p-4">
        <Link to='/Home'>
        <img
          src={Logo}
          alt="Logo"
          className="rounded-full object-cover w-10 h-10 mr-4 bg-[var(--accent-color)]/50"
        />
        </Link>

        <ul className="flex gap-6">
          {items.map((item) => (
            <li
              key={item.title}
              className="transform transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <Link
                to={item.href}
                className="font-bold text-white hover:text-[var(--accent-color)]"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center">
          <select
            id="theme-select"
            value={theme}
            onChange={(e) => changeTheme(e.target.value)}
            className="bg-white text-gray-700 p-1 rounded-full border border-[var(--secondary-color)]s"
          >
            {themes.map((t) => (
              <option key={t.name} value={t.name}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <div className="sm:hidden flex items-center p-4 text-white">
        <button
          onClick={toggleSidebar}
          className="text-white"
          aria-label="toggle sidebar"
        >
          <CiCircleList size={30} />
        </button>
        <Link to="/Home"
          className="ml-auto rounded-full object-cover w-10 h-10 bg-[var(--accent-color)]/10"
        >
        <img
          src={Logo}
          alt="Logo"
        />
        </Link>
      </div>

      {/* Mobile Sidebar */}
      {open && (
        <>
          <div
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-[rgba(114,111,113,0.2)] backdrop-blur-sm"
          ></div>
          <div
            className="fixed top-0 bottom-0 left-0 z-50 w-full max-w-xs border-r-2 border-[var(--primary-color)] bg-[var(--accent-color)]/60 "
            ref={ref}
            aria-label="Sidebar"
          >
            <div className="p-5 border-b-2 border-[var(--secondary-color)]">
              <button
                onClick={toggleSidebar}
                aria-label="close sidebar"
                className="ml-auto text-white"
              >
                <IoArrowBackCircleOutline size={40} />
              </button>
              <div className="flex justify-center">
                <img
                  src={Logo}
                  alt="Logo"
                  className="rounded-full object-cover w-20 mt-2 bg-[var(--accent-color)]/50"
                />
              </div>
            </div>
            <ul>
              {items.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    onClick={toggleSidebar}
                    className="flex items-center justify-between gap-5 p-5 border-b-2 border-[var(--secondary-color)] hover:bg-gray-200 text-white"
                  >
                    <span>{item.title}</span>
                    <item.Icon className="text-2xl" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex justify-center p-4">
              <div
                id="mobile-theme-select"
                className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2"
              >
                {themes.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => changeTheme(t.name)}
                    className={`p-1 rounded-lg border ${
                    theme === t.name
                    ? 'border-[var(--accent-color)] bg-[var(--secondary-color)] text-[var(--primary-color)]'
                    : 'border-[var(--primary-color)] bg-gray-100 text-gray-700'
                    } hover:bg-[var(--button-hover)] hover:text-white transition-colors`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;