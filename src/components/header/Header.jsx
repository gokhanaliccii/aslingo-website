import { useState ,useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import logo from "../../assets/logo.png"
import logoWhite from "../../assets/logo-white.png"
import 'animate.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) { // Adjust this value as needed
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);


  return (
      <header className={`${isScrolled?" shadow-lg ":"bg-bgColor *:text-gray-600"} bg-bgColor  fixed w-full z-10 px-8 animate__animated animate__slideInDown  `}>
        <div className="container mx-auto flex justify-between  p-5 py-2 flex-row items-center">
          <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-0">
          <img className=' white' src={logo}  alt="aslingo" width={50} />
            {/* <span className={`${isScrolled?"text-white":"text-gray-600"} text-xl`} >ASLingo</span> */}
            <span className="text-xl" >ASLingo</span>
          </Link>
          <div className=' hidden md:visible'>

          
          <nav  className="md:mx-auto select-none  flex  items-center text-base justify-center">
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
          offset={-50}
          duration={500}
          className=' cursor-pointer '
          style={{  margin: '0 15px', textDecoration: 'none', cursor: 'pointer' }}
        >
          Stay in Touch
          </Link>        
          </nav>
          </div>
          <a href='https://apps.apple.com/gb/app/learn-sign-language-aslingo/id6477713401' target='_blank' className="bg-cora inline-flex text-white items-center  border-0 py-1 px-3 focus:outline-none hover:bg-cora2 rounded text-base mt-0">
            Get the App
          </a>
        </div>
      </header>
  );
};

export default Header;
