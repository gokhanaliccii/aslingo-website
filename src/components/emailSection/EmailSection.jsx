import img from "../../assets/banner-email.png";

const EmailSection = () => {
  return (
    <div className=" bg-cora text-white  flex justify-between flex-col md:flex-row text-center md:text-left gap-5  items-center px-10 p-20">
        <div className=" flex-1">
          <img className="  rounded" alt="hero" width={350} src={img} />
        </div>
      <div className=" flex-1">
        <h1 className=" text-3xl font-bold py-2">Its called value</h1>
        <p className="py-3 lg:mr-60 ">
          Lorem ipsum dolor sit amet consectetur, esse dicta quo! Eum
          exercitationem pariatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, consequuntur.
        </p>
        <div className=" mx-auto md:m-0  bg-white rounded-lg flex justify-between lg:w-[24rem] md:w-[22rem] sm:w-[20rem] w-[18rem]  ">
          <input
            type="text"
            placeholder="Your Email"
            className="border-none rounded-xl  outline-none text-black p-3 w-full"
          />
          <button className="text-sm rounded-r-lg py-1 px-1 bg-slateGray text-white w-32  ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
