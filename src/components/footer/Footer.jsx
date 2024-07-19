
import Socials from "../utils/Socials";

const Footer = () => {
  return (
    <footer >
      <div className="container pt-5 bg-cora visible md:hiddenImp p-5 mx-auto">
        <div className="flex gap-5 md:gap-0 flex-wrap md:text-left text-center justify-around">
          <div className="lg:w-1/4 md:w-1/2 w-full   px-4">
            <h2 className="title-font font-medium text-slateGray  tracking-widest text-2xl mb-3">
              ASLingo
            </h2>
            {/* <p className="text-md  flex text-white  items-center md:justify-start justify-center">
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
            </p> */}
           <Socials/>
          </div>
         
          {/* <div className="lg:w-1/4 md:w-1/2 w-full  px-4">
            <h2 className="title-font font-medium text-slateGray  tracking-widest text-lg ">
              Newsletter
            </h2>
            <p className=" text-md text-white  py-3 md:text-left text-center">
              Stay Up To date
            </p>
            <div className=" my-5 mx-auto w-[80%] md:w-full">
              <EmailForm />
            </div>
          </div> */}
        </div>
      </div>

      {/* <p className="text-center py-5 bg-slateGray text-white">
        ©2024 <a href="/">ASLingo.</a> All rights reserved.
      </p> */}
      <div className=" text-center md:text-left py-5 bg-slateGray text-white md:flex md:justify-between md:px-10 md:items-center">
       <p> ©2024 <a href="/">ASLingo.</a> All rights reserved.</p>
       <div className=" hidden md:visible"><Socials/></div>
       <div  className=" hidden md:visible ">
        <a className=" hover:text-cora hover:underline" href="/">Privacy policy</a>
        <a className=" pl-5 hover:text-cora hover:underline" href="/">Terms of use</a>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
