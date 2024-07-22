import heroImage from "../../assets/heropic.png";
import DownloadButton from "../utils/DownloadButton";
import { useInView } from 'react-intersection-observer';
import 'animate.css';
const Hero = () => {
  return (
    <section id="home" className="px-10 pb-10 md:pb-0 text-gray-600 body-font bg-bgColor">
      <div className="container mx-auto flex px-5 py-16 pb-0 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-0 mt-10 md:mt-0 items-center text-center animate__animated animate__backInLeft">
          <h1 style={{lineHeight:1.3}} className="title-font sm:text-4xl text-3xl mb-4 max-w-[500px] font-bold  text-cora tracking-wide">
            Discover Sign Language Fun, Fast, and Easy Learning
          </h1>
        
          <p className="mb-4 max-w-[500px] text-lg  leading-relaxed text-gray-500">
            Immersive Learning Experience Dive into real-life 
            conversations, personalised learning paths,  and engaging
            flashcards.
          </p>
          <div className=" flex justify-center flex-col sm:flex-row gap-5 my-2">
          <DownloadButton/>
          <DownloadButton playstore={true}/>
          </div>
            
        </div>
       
        <div className="lg:max-w-lg  md:pt-0 lg:w-full md:w-1/2 w-5/6 animate__animated animate__bounceInDown ">
          <img
            className="object-cover pt-10 object-center rounded"
            alt="hero"
            src={heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
