import { useState ,useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import logo from "../../assets/logo.png"
const Header = () => {

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);


  return (
      <header className="text-gray-600 fixed w-full z-10 px-8  bg-bgColor ">
        <div className="container mx-auto flex justify-between  p-5 flex-row items-center">
          <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-0">
          <img className=' white' src={logo}  alt="aslingo" width={50} />
            <span className=" text-xl">ASLingo</span>
          </Link>
          <div className=' hidden md:visible'>

          
          <nav  className="md:mx-auto  flex  items-center text-base justify-center">
           <Link
          activeClass="active font-bold"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{  margin: '0 15px', textDecoration: 'none', cursor: 'pointer' }}
        >
          Home
          </Link>
          <Link
          activeClass="active font-bold"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{  margin: '0 15px', textDecoration: 'none', cursor: 'pointer' }}
        >
          Features
          </Link>
          <Link
          activeClass="active font-bold"
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{  margin: '0 15px', textDecoration: 'none', cursor: 'pointer' }}
        >
          Testimonials
          </Link>
          <Link
          activeClass="active font-bold "
          to="stayInTouch"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className=' cursor-pointer '
          style={{  margin: '0 15px', textDecoration: 'none', cursor: 'pointer' }}
        >
          Stay in Touch
          </Link> 
            {/* <a href="#home"   className={`mr-5 hover:text-black ${activeSection === 'home' ? ' font-bold' : ''}`}>Home</a>
            <a href="#features" className={`mr-5 hover:text-black ${activeSection === 'features' ? ' font-bold' : ''}`}>Features</a>
            <a href="#testimonials" className={`mr-5 hover:text-black ${activeSection === 'testimonials' ? ' font-bold' : ''}`}>Testimonials</a>
            <a href="#stayInTouch" className={`mr-5 hover:text-black ${activeSection === 'stayInTouch' ? ' font-bold' : ''}`}>Stay in Touch</a> */}
          </nav>
          </div>
          <a href='https://apps.apple.com/gb/app/learn-sign-language-aslingo/id6477713401' target='_blank' className="inline-flex text-white items-center bg-cora border-0 py-1 px-3 focus:outline-none hover:bg-cora2 rounded text-base mt-0">
            Get the App
          </a>
        </div>
      </header>
  );
};

export default Header;
