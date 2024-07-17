import img from "../../assets/banner-email.png";
import EmailForm from "../utils/EmailForm";

const EmailSection = () => {
  return (
    <div className=" bg-cora text-white  flex justify-between flex-col md:flex-row text-center md:text-left gap-5  items-center p-10">
        <div className=" flex-1">
          <img className="  rounded" alt="hero" width={350} src={img} />
        </div>
      <div className=" flex-1">
        <h1 className=" text-3xl font-bold py-2">Its called value</h1>
        <p className="py-3 lg:mr-60 ">
          Lorem ipsum dolor sit amet consectetur, esse dicta quo! Eum
          exercitationem pariatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, consequuntur.
        </p>
        {/* here  */}
        <EmailForm/>
      </div>
    </div>
  );
};

export default EmailSection;
