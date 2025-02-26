import NavBar from "./NavBar";
import Socials from "./Socials";

const ContactMeHere = () => {
  return (
    <div>
      <div className='text-pink-400'>
      <NavBar />
      <Socials />
      </div>
    <div
      name="contact"
      className="mt-16 w-full h-screen bg-pink-50 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl text-pink-400 font-bold inline border-b-3 border-pink-200">
            Contact me
          </p>
          <p className="py-4 sm:py-6 text-pink-400">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bgdyorga"
            method="POST"
            className="flex flex-col w-full sm:w-3/4 md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-pink-300 rounded-md text-black focus:outline-none"
            required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-pink-300 rounded-md text-black focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 border-pink-300 rounded-md text-black focus:outline-none"
              required
            ></textarea>
            <button className="text-white bg-pink-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Lets talk
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>

  );
};

export default ContactMeHere;
