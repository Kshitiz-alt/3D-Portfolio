import { motion, useInView } from 'motion/react'
import { projects } from './Props'
import { useRef } from 'react'
import './Project.css'


const projectView = {
  initial: {
    y: -200,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2
    }
  }
}
const Projects = () => {
  const ref = useRef();
  const projectpage = useInView(ref)
  return (
    <div className="ProjectScroll flex gap-[20rem] h-screen w-screen overflow-hidden" ref={ref}>
      <motion.div
        variants={projectView}
        initial="initial"
        animate={projectpage ? "animate" : "initial"}


        className="text-white text-center flex gap-[20rem] ">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="Card w-[60rem] relative top-[7rem] left-[10rem]  ">
              <motion.img
              initial={{x:-100,opacity:0}}
              animate={projectpage ? {x:0,opacity:1} : "initial"}
              transition={{duration:1}}
              
              
              src={project.img} alt="" />
              <motion.h3
                initial={{ y: 200, opacity: 0 }}
                animate={projectpage ? { y: 0, opacity: 1 } : "initial"}
                transition={{ duration: 1 }}

                className="border-[1px] text-[1.25rem]">{project.desc}
              </motion.h3>
              <a className="border-[1px] text-[1.5rem] bg-amber-950 relative top-[6px]" href={project.link}>Visit website </a>

            </div>
            <div className="relative left-[80rem] top-[-12rem]">
              <img className="w-[8%]" src="Right.png" alt="" />
            </div>

          </div>

        ))}



      </motion.div>
    </div>
  )
}

export default Projects
