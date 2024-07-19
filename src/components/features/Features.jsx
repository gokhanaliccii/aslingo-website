import Carousels from "./Carousels";
import scribble from "../../assets/scribble.png"
import { RiWechatFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { GoGoal } from "react-icons/go";

import Slide from "./Slide";
import AnimatedElement from "../utils/AnimatedElement";
const Features = () => {
  return (
    <section id="features" className=" bg-bgColor pb-6">
    <div  className=" bg-bgColor px-10  ">
      <AnimatedElement animationClass="animate__bounceInUp" >

      
      {/* <div className="flex items-center justify-center">
        <div className=" relative">

        <div className=" text-cora text-center rounded py-1 px-2 border-cora border-2 w-28">
          Feature
        </div>
        <img width={70} src={scribble} className=" absolute top-[-15px] right-[-80px]  " alt="scribble" />
        </div>
      </div> */}

      <h1 className="text-center text-3xl font-bold pt-0 md:pt-5 py-12 ">
        Impressive Feature
      </h1>
      </AnimatedElement>
      <AnimatedElement animationClass="animate__bounceInUp">
  
        <div className=" pt-0 p-10 mx-auto max-w-screen-xl ">
         
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center  items-center mb-4 w-14 h-14 lg:w-20 lg:h-20 rounded  ">
                  <RiWechatFill color="#ff7a4f" size={80} />                
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold  text-center">Real life
                conversations</h3>
                <p className="text-gray-500 text-center">
                Engage in authentic ASL conversations, simulating real-world scenarios to enhance your language skills.
                </p>
              </div>

              <div>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center   items-center mb-4 w-14 h-14 lg:w-20 lg:h-20 rounded bg-primary-100  dark:bg-primary-900">                
                    <GiTeacher color="#ff7a4f"  size={80} />
                  </div>
                </div>
                <h3 className="mb-2 text-xl text-center font-bold ">Personalised learning</h3>
                <p className="text-gray-500 text-center">
                 Personalised learning journey based on your proficiency level, interests, and learning style. With adaptive lessons and progress tracking.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center  items-center mb-4 w-14 h-14 lg:w-20 lg:h-20 rounded bg-primary-100 dark:bg-primary-900">
                 
                    <GoGoal color="#ff7a4f"  size={80}  />
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-bold text-center">
                Practice with flashcards & quizzes
                </h3>
                <p className="text-gray-500 text-center">
                Practice with flashcards and quizzes. Reinforce what you've learned with interactive flashcards and quizzes.
                </p>
              </div>
            </div>
    </div>
          
    </AnimatedElement>
        </div>
    <Carousels/>
    </section>


 
  );
};

export default Features;
