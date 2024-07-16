import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="pt-16  bg-cora">
      <footer className="text-gray-600 body-font">
        <div className="container px-5  mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white  tracking-widest text-2xl mb-3">
                ASLingo
              </h2>
              <p className="text-md text-white flex  items-center md:justify-start justify-center">
                <span>
                  <MdEmail />
                </span>
                <span className="ml-1">aslingo@gmail.com</span>
              </p>
              <p className="text-md text-white flex  items-center md:justify-start justify-center">
                <span>
                  <IoCall />
                </span>
                <span className="ml-1">+1 847 562 4427</span>
              </p>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white">First Link</a>
                </li>
                <li>
                  <a className="text-white">Second Link</a>
                </li>
                <li>
                  <a className="text-white">Third Link</a>
                </li>
                <li>
                  <a className="text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white">First Link</a>
                </li>
                <li>
                  <a className="text-white">Second Link</a>
                </li>
                <li>
                  <a className="text-white">Third Link</a>
                </li>
                <li>
                  <a className="text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white  tracking-widest text-lg mb-3">
                Newsletter
              </h2>
              <p className="text-white text-md py-3 md:text-left text-center">
                Stay Up To date
              </p>
              <div className=" bg-bgColor  rounded-md rounded">
                <div className="flex  justify-center items-center">
                  <input
                    type="text"
                    className="border-none py-5 w-40  px-2 rounded focus:outline-none   "
                    placeholder="Your Email"
                  />
                  <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-cora hover:bg-cora2 border-0 py-2  px-4 focus:outline-none rounded">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fffaf3]">
          <p className="text-center py-5">
            ©2024 ASLingo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
