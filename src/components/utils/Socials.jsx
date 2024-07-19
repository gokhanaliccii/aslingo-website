import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import EmailForm from "../utils/EmailForm";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Socials = () => {
  return (
    <div className="py-3 flex items-center md:justify-start justify-center">
    <a
      href="https://www.tiktok.com/@aslingoo" target="_blank"
      className="border-2 mr-2 rounded-full w-10 h-10 cursor-pointer flex items-center justify-center 2 hover:text-slateGray md:hover:text-cora md:hover:border-cora text-white   hover:border-slateGray  "
    >
      <FaTiktok size={"20px"} />
    </a>
    <a
      href="https://www.instagram.com/aslingo_app/?igsh=MXR3N2QzOHlobnV3OQ%3D%3D&utm_source=qr" target="_blank"
      className="border-2 mx-2 rounded-full w-10 h-10 cursor-pointer flex items-center justify-center 2 hover:text-slateGray md:hover:text-cora md:hover:border-cora text-white   hover:border-slateGray "
    >
      <FiInstagram size={"20px"} />
    </a>
    <a
      href="mailto:aslingo@gmail.com"
      className="border-2 mx-2 rounded-full w-10 h-10 cursor-pointer flex items-center justify-center 2 hover:text-slateGray md:hover:text-cora md:hover:border-cora text-white   hover:border-slateGray"
    >
      <MdEmail size={"20px"} />
    </a>
  </div>
  )
}

export default Socials