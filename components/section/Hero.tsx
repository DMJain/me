"use client"

import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center ">
      <div className="container flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-game text-4xl md:text-6xl"
        >
          Hello World!
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground"
        >
          {`"`}<TypeAnimation
            sequence={[
              'I\'m a Full Stack Developer.',
              1000,
              'I build web applications.',
              1000,
              'I create backend services.',
              
              'I love solving problems.',
              1000,
              'I create beautiful designs.',
              1000,
              'I write clean code.',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />{`"`}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col gap-4 items-center"
        >
          <p className="text-lg text-muted-foreground max-w-2xl">
            Passionate about creating elegant solutions and delivering exceptional user experiences.
            Currently looking for great oppurtunities to contribute.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero;