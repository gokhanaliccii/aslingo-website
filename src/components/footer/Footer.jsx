import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import EmailForm from "../utils/EmailForm";

const Footer = () => {
  return (

      <footer className=" pt-16 text-white   bg-cora body-font">
        <div className="container p-5  mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium   tracking-widest text-2xl mb-3">
                ASLingo
              </h2>
              <p className="text-md  flex   items-center md:justify-start justify-center">
                <span>
                  <MdEmail />
                </span>
                <span className="ml-1">aslingo@gmail.com</span>
              </p>
              <p className="text-md  flex  pt-2 items-center md:justify-start justify-center">
                <span>
                  <IoCall />
                </span>
                <span className="ml-1">+1 847 562 4427</span>
              </p>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a >First Link</a>
                </li>
                <li>
                  <a >Second Link</a>
                </li>
                <li>
                  <a >Third Link</a>
                </li>
                <li>
                  <a >Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a >First Link</a>
                </li>
                <li>
                  <a >Second Link</a>
                </li>
                <li>
                  <a >Third Link</a>
                </li>
                <li>
                  <a >Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg ">
                Newsletter
              </h2>
              <p className=" text-md py-3 md:text-left text-center">
                Stay Up To date
              </p>             
              <EmailForm/>
            </div>
          </div>
        </div>
 
          <p className="text-center py-5 bg-slateGray">
            ©2024 ASLingo. All rights reserved.
          </p>
      
      </footer>
   
  );
};

export default Footer;
