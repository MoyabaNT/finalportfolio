import { useRef, useState } from 'react'
import { CiCircleList } from "react-icons/ci";
import { useClickAway } from 'react-use' //had to npm i react-use
import { IoArrowBackCircleOutline } from "react-icons/io5";import { BiHomeSmile } from 'react-icons/bi'
import { MdPerson2 } from "react-icons/md";
import { FaRegFilePowerpoint } from "react-icons/fa6";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import Logo from '../assets/gora.png';

const NavBar = () => {
  const [open, setOpen] = useState(false) //useState is used to track UI changes in the DOM
  const ref = useRef(null) //useRef is used simply to store a value that does not affect the DOM if the value changes
  useClickAway(ref, () => setOpen(false)) //checks if the sidebar is clicked and takes action
  const toggleSidebar = () => setOpen(prev => !prev)

  const items = [
    { title: 'Home', Icon: BiHomeSmile, href: 'Home' },
    { title: 'About', Icon: MdPerson2, href: 'About' },
    { title: 'Projects', Icon: FaRegFilePowerpoint, href: 'Projects' },
    { title: 'Contact', Icon: HiOutlineChatBubbleOvalLeftEllipsis, href: 'Contact' },
  ]

  return (
    <div className='bg-pink-50 h-16 fixed top-0 left-0 right-0 z-50 shadow-sm'>
  
      {/**Nav bar */}
      <div className='hidden sm:block  '>
      <ul className='flex fixed top-0 left-0 gap-8 p-4 '>
              {items.map((item) => {
                const { title, href } = item;
                return (
                  <li
                    key={title}
                    className="inline-block transform transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  >
                    <a
                      href={href}
                      className="hover:text-pink-300 font-bold text-pink-400"
                      >
                        <span>{title}</span>
                      </a>
                  </li>
                );
              })}
            </ul>

      </div>

      <button
        onClick={toggleSidebar}
        className='sm:hidden block p-3 text-pink-500'
        aria-label='toggle sidebar'
      >
        <CiCircleList size={30} />
      </button>
      {open && (
        <>
          <div
            aria-hidden='true'
            className='fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(114,111,113,0.2)] backdrop-blur-sm'
          ></div>
          <div
            className="fixed top-0 bottom-0 left-0 z-50 w-full h-screen max-w-xs border-r-2 border-pink-900 bg-pink-100"
            ref={ref}
            aria-label="Sidebar"
          >
            <div className='items-center justify-between p-5 border-b-2 border-pink-900'>
              <button
                onClick={toggleSidebar}
                aria-label="close sidebar"
                className='ml-60'
              >
                <IoArrowBackCircleOutline size={40} />
              </button>
              <div className='flex justify-center items-center'>
                <img 
                src={Logo}
                alt="Logo" 
                className='rounded-full object-cover w-70 mt-2 bg-pink-50'/>
            </div>
              <div>
              </div>
            </div>
            <ul>
              {items.map((item) => {
                const { title, href, Icon } = item;
                return (
                  <li key={title}>
                    <a
                      onClick={toggleSidebar}
                      href={href}
                      className="flex items-center justify-between gap-5 p-5 transition-all border-b-2 hover:bg-gray-700 border-pink-900"
                    >
                      <span>{title}</span>
                      <div>
                        <Icon className='text-2xl' />
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
  }

export default NavBar