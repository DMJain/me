"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from 'next/image'

const skills = [
  {
    name: "JavaScript",
    src: '/icons/javascript.svg'
  },
  {
    name: "TypeScript",
    src: '/icons/typescript.svg'
  },
  {
    name: "Java",
    src: '/icons/java.svg'
  },
  {
    name: "HTML",
    src: "/icons/html.svg"
  },
  {
    name: "CSS",
    src: "/icons/css.svg"
  },
  {
    name: "React",
    src: "/icons/react.svg"
  },
  {
    name: "Next.js",
    src: "/icons/nextjs.svg"
  },
  {
    name: "Express.js",
    src: "/icons/express.svg"
  },
  {
    name : "Node.js",
    src: "/icons/nodejs.svg"
  },
  {
    name: "Socket.io",
    src: "/icons/socketio.svg"
  },
  {
    name: "Redux",
    src: "/icons/redux.svg"
  },
  {
    name: "Tailwind CSS",
    src: "/icons/tailwindcss.svg"
  },
  {
    name: "Spring",
    src: "/icons/spring.svg"
  },
  {
    name: "Spring Boot",
    src: "/icons/spring.svg"
  },
  {
    name: "Docker",
    src: "/icons/docker.svg"
  },
  {
    name: "MongoDB",
    src: "/icons/mongodb.svg"
  },
  {
    name: "MySQL",
    src: "/icons/mysql.svg"
  },
  {
    name: "GIT",
    src: "/icons/git.svg"
  },
  {
    name: "Webpacks",
    src: "/icons/webpack.svg"
  },
  {
    name: "JWT",
    src: "/icons/jwt.svg"
  },
  {
    name: "AWS",
    src: "/icons/aws.svg"
  },
  {
    name: "SQL",
    src: null
  },
  {
    name: "NoSQL",
    src: null
  },
  {
    name: "RESTful API",
    src: null
  },
  {
    name : "System Design",
    src: null
  },
  {
    name: "Microservices",
    src: null
  }
]


const Skill = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="w-full bg-muted/50 py-20">
      <div className="container w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 "
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center text-lg py-2 px-4 border border-muted-foreground rounded-full background-secondary-foreground cursor-default hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                  {skill.src && <div><Image 
                    src={skill.src}
                    alt={skill.name}
                    width={18}
                    height={18}
                    className="inline-block mr-2"
                  /> </div>}
                  <span>{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skill;