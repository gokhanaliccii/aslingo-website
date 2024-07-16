import DownloadButton from "../utils/DownloadButton"
import heroImg from '../../assets/heropic.png'
const Slide = () => {
  return (
    <div className=" mb-5 px-10 flex justify-start flex-col md:flex-row">
        <div className=" flex justify-center gap-5 items-baseline flex-col">
            <h2 className=" text-3xl font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className=" text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit maxime labore? Minus pariatur iusto esse harum sapiente hic quas.</p>
            <DownloadButton/>
        </div>
        <div>
            <img src={heroImg} alt="" />
        </div>
    </div>
  )
}

export default Slide