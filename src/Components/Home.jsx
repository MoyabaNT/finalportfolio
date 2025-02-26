import { Link } from "react-router-dom";
import HeroImage from "../assets/nthabi.jpeg";
import NavBar from "./NavBar";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className='text-pink-400'>
      <NavBar />

      </div>
      <div
        name="home"
        className="mt-16 h-screen w-full bg-pink-50"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="md:text-6xl text-5xl font-bold text-pink-400 text-center md:text-left">
              Aspirant Full Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md text-center md:text-left">
              A current passionate Front-End developer with a love for learning,
              I bring a touch of charm and excellence to every line of code I
              write in the ever-evolving world of IT. 🌸
            </p>

            {/* Portfolio Button for large screens */}
            <div className="hidden md:flex">
              <Link
                to="/Projects"
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-300 to-pink-400 cursor-pointer"
              >
                Projects
                <span className="group-hover:rotate-90 duration-300">
                  <FaArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>

          {/* Portfolio Button for small screens */}
          <div className="flex md:hidden mb-4">
            <Link
              to="/Projects"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-300 to-pink-400 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-full h-3/4 object-cover p-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
