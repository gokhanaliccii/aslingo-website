import img from "../../assets/mockup.png";
import AnimatedElement from "../utils/AnimatedElement";
import DownloadButton from "../utils/DownloadButton";
const Cta = () => {
  return (
    <AnimatedElement animationClass="animate__zoomIn">
      <div  className="bg-bgColor flex justify-between flex-col text-center md:text-left md:flex-row gap-5 p-10 md:px-20  items-center ">
          <div className=" flex flex-col items-center md:items-baseline ">
            <h1 className=" text-3xl  font-bold py-2">
              Ready to get started
            </h1>
            <p className="py-3 lg:mr-52 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, esse dicta quo! Eum
              exercitationem pariatur
            </p>
            <div className=" flex flex-col lg:flex-row gap-5 my-2">         
             <DownloadButton/>
             <DownloadButton playstore={true}/>
             </div>
          </div>

            <img
              className=" rounded "
              alt="hero"
              width={400}
              src={img}
            />
      </div>
      </AnimatedElement>
  );
};

export default Cta;