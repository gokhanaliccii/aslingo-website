import img from "../../assets/mockup.png";
import DownloadButton from "../utils/DownloadButton";
const Cta = () => {
  return (
  
      <div  id="stayInTouch"  className="bg-bgColor flex justify-between flex-col md:flex-row p-10 md:px-20  items-center ">
          <div className=" flex flex-col items-baseline">
            <h1 className=" text-3xl font-bold py-2">
              Ready to get started
            </h1>
            <p className="py-3 lg:mr-52 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, esse dicta quo! Eum
              exercitationem pariatur
            </p>
         <DownloadButton/>
          </div>

            <img
              className=" rounded "
              alt="hero"
              width={400}
              src={img}
            />
      </div>
 
  );
};

export default Cta;