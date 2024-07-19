import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import EmailForm from "../utils/EmailForm";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="pt-5    bg-cora body-font">
      <div className="container p-5 mx-auto">
        <div className="flex gap-5 md:gap-0 flex-wrap md:text-left text-center md:justify-around">
          <div className="lg:w-1/4 md:w-1/2 w-full   px-4">
            <h2 className="title-font font-medium text-slateGray  tracking-widest text-2xl mb-3">
              ASLingo
            </h2>
            <p className="text-md  flex text-white  items-center md:justify-start justify-center">
              <span>
                <MdEmail />
              </span>
              <span className="ml-1">aslingo@gmail.com</span>
            </p>
            <p className="text-md  text-white flex  pt-2 items-center md:justify-start justify-center">
              <span>
                <IoCall />
              </span>
              <span className="ml-1">+1 847 562 4427</span>
            </p>
            <div className="py-3 flex items-center md:justify-start justify-center">
              <a
                href="https://www.tiktok.com/@aslingoo" target="_blank"
                className="border-2 mr-2 rounded-full w-10 h-10 cursor-pointer flex items-center justify-center 2 hover:text-black text-white   hover:border-black :border-white "
              >
                <FaTiktok size={"20px"} />
              </a>
              <a
                href="https://www.instagram.com/aslingo_app/?igsh=MXR3N2QzOHlobnV3OQ%3D%3D&utm_source=qr" target="_blank"
                className="border-2 mx-2 rounded-full w-10 h-10 cursor-pointer flex items-center justify-center 2 hover:text-black text-white   hover:border-black :border-white "
              >
                <FiInstagram size={"20px"} />
              </a>
              {/* <a
                href=""
                className="border-2 mx-2 rounded-full w-10 h-10 cursor-pointer flex items-center justify-center 2 hover:text-black text-white   hover:border-black :border-white "
              >
                <MdEmail size={"20px"} />
              </a> */}
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full  px-4">
            <h2 className="title-font font-medium text-slateGray  tracking-widest text-lg ">
              Newsletter
            </h2>
            <p className=" text-md text-white  py-3 md:text-left text-center">
              Stay Up To date
            </p>
            <div className=" my-5 mx-auto w-[80%] md:w-full">
              <EmailForm />
            </div>
          </div>
        </div>
      </div>

      <p className="text-center py-5 bg-slateGray text-white">
        ©2024 <a href="/">ASLingo.</a> All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
