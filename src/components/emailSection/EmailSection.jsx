import img from "../../assets/img.png";

const EmailSection = () => {
  return (
    <div className="bg-bgColor flex justify-center grid md:grid-cols-2  px-2 items-center py-10">
      <div className=" ">
        <div>
          <img className="  rounded" alt="hero" width={500} src={img} />
        </div>
      </div>
      <div className="">
        <h1 className=" text-3xl font-bold py-2">Its called value</h1>
        <p className="py-3 lg:mr-60 ">
          Lorem ipsum dolor sit amet consectetur, esse dicta quo! Eum
          exercitationem pariatur
        </p>
        <div className="border-2 border-cora rounded-md flex justify-between lg:w-[24rem] md:w-[22rem] sm:w-[20rem] w-[18rem]  ">
          <input
            type="text"
            placeholder="Your Email"
            className="border-none px-2"
          />
          <button className="text-white text-sm rounded py-1 px-1 bg-cora hover:bg-cora2 md:w-28 w-20 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
