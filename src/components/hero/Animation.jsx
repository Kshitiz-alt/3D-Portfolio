import { motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1, y: 0, transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  },

};
const Animation = () => {
  return (
    <div className="flex gap-[3rem] Move text-[black]">
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants} className="w-[1.5rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[8rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[16rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[24rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[32rem] bg-black relative z-[10]">a</motion.div>
      </motion.div>
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants} className="w-[1.5rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[8rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[16rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[24rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[32rem] bg-black relative z-[10]">a</motion.div>
      </motion.div>
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants} className="w-[1.5rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[8rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[16rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[24rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[32rem] bg-black relative z-[10]">a</motion.div>
      </motion.div>
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants} className="w-[1.5rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[8rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[16rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[24rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[32rem] bg-black relative z-[10]">a</motion.div>
      </motion.div>
      <motion.div
        className="relative "
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants} className="w-[1.5rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[8rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[16rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[24rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[32rem] bg-black relative z-[10]">a</motion.div>
      </motion.div>
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants} className="w-[1.5rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[8rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[16rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[24rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[32rem] bg-black relative z-[10]">a</motion.div>
      </motion.div>
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants} className="w-[1.5 rem] bg-black relative z-[0]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[8rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[16rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[24rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[32rem] bg-black relative z-[10]">a</motion.div>
      </motion.div>
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants} className="w-[1.5 rem] bg-black relative z-[0]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[8rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[16rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[24rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[32rem] bg-black relative z-[10]">a</motion.div>
      </motion.div>
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants} className="w-[1.5 rem] bg-black relative z-[0]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[8rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[16rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[24rem] bg-black relative z-[10]">a</motion.div>
        <motion.div variants={itemVariants} className="w-[1.5rem] top-[32rem] bg-black relative z-[10]">a</motion.div>
      </motion.div>
    </div>
  )
}

export default Animation
