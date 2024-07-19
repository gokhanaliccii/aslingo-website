import img from "../../assets/banner-email.png";
import AnimatedElement from "../utils/AnimatedElement";
import EmailForm from "../utils/EmailForm";

const EmailSection = () => {
  return (
    <AnimatedElement animationClass="animate__zoomIn">
    <div id="stayInTouch" className=" bg-cora text-white  flex justify-center gap-5 md:gap-32 items-center flex-col md:flex-row text-center md:text-left p-10">
        <div >
          <img className="  rounded w-[350px]" alt="hero" src={img} />
        </div>
      <div>
        <h1 className=" text-3xl font-bold py-2">Its called value</h1>
        <p className="py-3 pb-8 text-lg max-w-96 ">
          Lorem ipsum dolor sit amet consectetur, esse dicta quo! Eum
          exercitationem pariatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, consequuntur.
        </p>
        <EmailForm/>
      </div>
    </div>
    </AnimatedElement>
  );
};

export default EmailSection;
