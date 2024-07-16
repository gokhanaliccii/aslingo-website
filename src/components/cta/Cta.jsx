import img from "../../assets/heroImg.png";
const Cta = () => {
  return (
  
      <div  id="stayInTouch"  className="bg-bgColor   grid md:grid-cols-2  px-2 items-center py-10">
        <div className=" flex  items-center flex-col">
          <div>
            <h1 className=" text-3xl lg:mx-20 font-bold py-2">
              Ready to get started
            </h1>
            <p className="py-3 lg:ml-20 lg:mr-52">
              Lorem ipsum dolor sit amet consectetur, esse dicta quo! Eum
              exercitationem pariatur
            </p>
            <div className="lg:ml-16 ">
              <button className="bg-cora inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-cora2 focus:outline-none">
                <span className="ml-4 flex items-start   flex-col leading-none">
                  <span className="text-lg text-white mb-1">Download App</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6 mx-3"
                  viewBox="0 0 305 305"
                >
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center ">
          <div>
            <img
              className=" rounded"
              alt="hero"
              width={200}
              height={100}
              src={img}
            />
          </div>
        </div>
      </div>
 
  );
};

export default Cta;