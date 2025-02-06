
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

import Earth from './Earth/Earth'
import './Services.css'

const textVariants1 = {
  initial: {
    x: -100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const listVariants1 = {
  initial: {
    x: -200,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2
    }
  }
}



const Services = () => {
  const ref = useRef()
  const whenInView = useInView(ref)



  return (
    <section className="text-white">
      <div className="w-1/2 text-[4rem] relative z-[1] " ref={ref}  >
        <div className="flex gap-[20rem]  justify-center items-center">
          <div className=" relative top-[5rem] left-[-10rem] Front  ">
            <motion.h1
              variants={textVariants1}
              initial="initial"

              animate={whenInView ? "animate" : "initial"}

            >
              FrontEnd
            </motion.h1>
            <motion.p
              variants={listVariants1}
              initial="initial"

              animate={whenInView ? "animate" : "initial"}


              className="w-[20rem] mt-[5rem] gap-[4rem] h-[10vh] flex FrontImages ">
              <img className="Images" src="Html.png" alt="" />
              <img className="Images" src="Css.png" alt="" />
              <img className="Images" src="Javascript.png" alt="" />
              <img className="Images" src="React.png " alt="" />

            </motion.p>
          </div>


        </div>
        <div className="flex gap-[20rem] relative top-[2rem] justify-center items-center ">
          <div className=" relative top-[10rem] left-[-10rem] Back  ">
            <motion.h1
              variants={textVariants1}

              animate={whenInView ? "animate" : "initial"}

            >
              BackEnd
            </motion.h1>
            <motion.p
              variants={listVariants1}
              initial="initial"

              animate={whenInView ? "animate" : "initial"}


              className="w-[20rem] mt-[5rem] gap-[4rem] h-[10vh] flex FrontImages ">
              <img className="Images" src="Node.png" alt="" />
              <img className="Images" src="Sql.png" alt="" />


            </motion.p>
          </div>
        </div>
        <div className="flex gap-[20rem] relative top-[4rem] justify-center items-center ">
          <div className=" relative top-[15rem] left-[-10rem] Front mb-[5rem]">
            <motion.h1

              variants={textVariants1}

              animate={whenInView ? "animate" : "initial"}

            >
              Tools
            </motion.h1>
            <motion.p
              variants={listVariants1}
              initial="initial"

              animate={whenInView ? "animate" : "initial"}

              className="w-[20rem] mt-[5rem] gap-[4rem]  h-[10vh] mb-[5rem] flex ToolsImages  ">
              <img className="Images" src="Tailwind.png" alt="" />
              <img className="Images" src="Vscode.png" alt="" />
              <img className="Images" src="Git.png" alt="" />
              <img className="Images" src="Bootstrap.png" alt="" />


            </motion.p>

          </div>



        </div>
       
      </div>
      <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}

          className="relative left-[1rem] z-[2]  bottom-[-27rem]" href="#Projects">
          <img className="relative w-[3%] ml-[2rem] bottom-[2rem] image" src="DropDown.png" alt="" />

      </motion.a>

      <div className="w-1/2 absolute top-[45rem] cursor-pointer ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h3 className="Swipe relative text-[2rem] z-[1] top-[38rem] left-[44rem]">  &lt; &nbsp; Swipe &nbsp; &gt; </h3>
          <Earth/>
        </motion.div>


      </div>

    </section>
  )
}

export default Services
