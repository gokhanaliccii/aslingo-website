const EmailSection = () => {
  return (
    <div className="flex mx-20">
      <div>
        <img
          className="  rounded"
          alt="hero"
          width={500}
          src="https://dummyimage.com/720x600"
        />
      </div>
      <div className="flex flex-col  mx-40">
        <h1 className=" text-3xl font-samibold py-2">Its called value</h1>
        <p className="py-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, nemo
          quo! Eum exercitationem pariatur esse dicta minima qui
        </p>
        <div className="border-2 rounded flex w-60 ">
          <input
            type="text"
            placeholder="Your Email"
            className="border-none px-2"
          />
          <button className="text-white rounded py-1 px-2 bg-cora hover:bg-cora2 w-28">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
