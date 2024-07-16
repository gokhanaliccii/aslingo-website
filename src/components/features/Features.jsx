import CarouselComponent from "./CarouselComponent";
import scribble from "../../assets/scribble.png"
import { RiWechatFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
const Features = () => {
  return (
    <div id="features" className="bg-bgColor">
      <div className="flex items-center justify-center">
        <div className=" relative">

        <div className=" text-cora2 text-center rounded py-1 px-2 border-cora2 border-2 w-28">
          Feature
        </div>
        <img width={70} src={scribble} className=" absolute top-[-15px] right-[-80px]  image-cora" alt="" />
        </div>
      </div>

      <h1 className="text-center text-3xl font-bold py-12">
        Impressive Feature
      </h1>
     
        <section className=" pt-0 p-10 mx-auto max-w-screen-xl ">
         
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center  items-center mb-4 w-10 h-10 rounded lg:h-12 lg:w-12 ">
                  <RiWechatFill color="#ff7a4f" size={80} />                
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold  text-center">Real life
                conversations</h3>
                <p className="text-gray-500 text-center">
                ASLingo provides an immersive learning experience where you can engage in authentic ASL conversations, simulating real-world scenarios to enhance your language skills.
                </p>
              </div>

              <div>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center   items-center mb-4 w-10 h-10 rounded bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">                
                    <GiTeacher color="#ff7a4f"  size={80} />
                  </div>
                </div>
                <h3 className="mb-2 text-xl text-center font-bold ">Personalised learning</h3>
                <p className="text-gray-500 text-center">
                 ASLingo offers a personalised learning journey based on your proficiency level, interests, and learning style. With adaptive lessons and progress tracking, you'll stay motivated and make steady progress towards fluency.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center  items-center mb-4 w-10 h-10 rounded bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                 
                    <GoGoal color="#ff7a4f"  size={80}  />
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-bold text-center">
                Practice with flashcards & quizzes
                </h3>
                <p className="text-gray-500 text-center">
                Practice with flashcards and quizzes. Reinforce what you've learned with interactive flashcards and quizzes in our app, and master ASL with confidence.
                </p>
              </div>
            </div>
        </section>
     
      <CarouselComponent />
    </div>
  );
};

export default Features;
