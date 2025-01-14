'use client'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from 'next/image'
import { BackgroundGradient } from "../ui/background-gradient"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="md:p-20 p-5 w-full">
      <div className="container w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col-reverse xl:flex-row gap-12 items-center"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground mb-6 text-justify">
            Hi there! 👋 I'm a Software Developer with a passion for building innovative and user-friendly 
            web applications. With expertise in the MERN stack, Spring Boot, System Design, Real-time 
            Collabration tool, and containerized environments, I love turning complex challenges into 
            elegant solutions. Currently pursuing my Master's in Computer Science at Woolf University 
            (Scaler Neovarsity), I'm always exploring new ways to create impactful digital experiences.
            <br /><br />
            Before transitioning to software development, I worked as a QA Engineer, where I sharpened my 
            attention to detail and delivered high-quality software solutions. Now, I bring that precision into 
            crafting robust, scalable, and intuitive applications.
            <br /><br />
            I'm actively seeking exciting software development opportunities and am available for an immediate 
            start. Let's connect and create something extraordinary! 🚀
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            </div>
          </div>

          <div className="w-1/2 h-1/2 ">
          <BackgroundGradient className="rounded-full max-w-xl bg-white dark:bg-zinc-900">
            <Image 
              src="/image.png"
              alt='TheresPromptForIt Logo'
              width={500}
              height={500}
              className="rounded-full w-full h-full" 
            />
          </BackgroundGradient>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About;