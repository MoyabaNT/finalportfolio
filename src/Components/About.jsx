import fun from '../assets/nna.jpeg';
import NavBar from './NavBar';


const Home = () => {

  return (
    <div>
      <div className="min-h-screen mt-16 bg-pink-50">
        {/* Side bar */}
        <div className='text-pink-400'>
      <NavBar />

      </div>
        <div className='p-4 text-center font-bold text-pink-400 text-4xl'>
            <h1>About Nthabii</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 p-10 ">
            <div className="w-80 ">
                <img src={fun} alt="the people" className="rounded-full hover:shadow-lg shadow-pink-400"/>
            </div>
            <div className="h-70 hover:mr-4 transform transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-4 hover:shadow-md shadow-pink-400 rounded-4xl border-r-1 border-l-1 border-pink-200">
                <h1 className="text-2xl font-bold text-pink-400 p-2">who am I ? </h1>
                <p className="">
                A Front-End Developer who thrive on designing, developing, and managing innovative technology solutions that address complex business challenges. I enjoy blending creativity with technical expertise to bring ideas to life, whether it is building dynamic applications with JavaScript, crafting seamless cross-platform mobile experiences using React Native, or designing modern, responsive websites with Tailwind CSS.                </p>
            </div>
            <div className="mt-20 hover:ml-4 transform transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-4 hover:shadow-md shadow-pink-400 rounded-4xl border-l-1 border-r-1 border-pink-200">
            <h1 className="text-2xl font-bold text-pink-400 p-2">Vision</h1>

                <p>
                My vision is to consistently deliver innovative and impactful solutions that go beyond expectations. I strive to create seamless, user-friendly experiences by combining robust backend development with Firebase, efficient data management with MySQL, and compelling visual design using Canva and Figma. My goal is to contribute to projects that prioritize excellence, creativity, and a strong user focus, making a meaningful impact within dynamic and forward-thinking teams.            
                </p>

                </div>
        </div>
            <div className=" md:flex justify-center p-16">
                <h1 className="text-2xl font-bold text-pink-400 p-6">Summary</h1>
                <p>
                 I find fulfillment in transforming ideas into functional, impactful solutions through clean and efficient code. I’m driven by the challenge of problem-solving and the satisfaction that comes with creating seamless, user-friendly experiences. My love for coding keeps me motivated to learn, adapt, and continuously improve my skills, allowing me to bring both creativity and precision to every project I take on.                </p>
            </div>

      </div>
    </div>
  );
};

export default Home;
