import { RiReactjsLine } from "react-icons/ri"
import { FaLaravel } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { motion } from "motion/react"
//import { animate } from "motion"

const iconVariants = (duration) => ({
    intial:{y:-10},
    initial2:{y:10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    },
    animate2:{
        y:[-10,10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial2"
            animate="animate2"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaLaravel className="text-7xl text-red-800" />
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial2"
            animate="animate2"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className="text-7xl text-blue-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript  className="text-7xl text-yellow-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial2"
            animate="animate2"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql style={{ color: '#00758f' }} className="text-7xl" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies