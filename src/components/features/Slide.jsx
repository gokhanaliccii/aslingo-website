import DownloadButton from "../utils/DownloadButton"
import heroImg from '../../assets/heropic.png'
import AnimatedElement from "../utils/AnimatedElement"
const Slide = () => {
  return (

    
    <div className=" mb-10 px-10 flex justify-center md:justify-start flex-col md:flex-row">
        <div className=" hidden md:visible md:flex justify-center gap-5 items-center md:items-baseline text-center md:text-left flex-col">
            <h2 className=" text-3xl font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className=" text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit maxime labore? Minus pariatur iusto esse harum sapiente hic quas.</p>
            <div className=" flex justify-center sm:justify-start flex-col sm:flex-row gap-5 my-2">
          <DownloadButton/>
          <DownloadButton playstore={true}/>
          </div>
        </div>
        <div>
            <img src={heroImg} alt="" />
        </div>
    </div>
 
  )
}

export default Slide