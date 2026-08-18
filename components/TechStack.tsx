"use client";

import { color, motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaPhp,
  FaICursor,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiPrisma,
  SiKubernetes,
  SiJenkins,
  SiNginx,
  SiPostman,
  SiCursor,
  SiClaude,
  SiGooglecloud,
} from "react-icons/si";

import Reveal from "./Reveal";
import { RiBarChartGroupedFill } from "react-icons/ri";


const stacks = {
  Frontend: [
    {
      name: "React",
      icon: FaReact,
      color: "#61DAFB",
      level: "95%",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#FFFFFF",
      level: "90%",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      level: "90%",
    },
    {
      name: "Redux",
      icon: SiRedux,
      color: "#764ABC",
      level: "85%",
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "#06B6D4",
      level: "95%",
    },
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "#E34F26",
      level: "95%",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "#1572B6",
      level: "90%",
    },
  ],

  Backend: [
    {
      name: "Python",
      icon: FaPython,
      color: "#3776AB",
      level: "85%",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "#339933",
      level: "95%",
    },
    {
      name: "Express",
      icon: SiExpress,
      color: "#FFFFFF",
      level: "90%",
    },
    {
      name: "NestJS",
      icon: SiNestjs,
      color: "#E0234E",
      level: "85%",
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
      color: "#E10098",
      level: "85%",
    },
    {
      name: "Java",
      icon: FaJava,
      color: "#007396",
      level: "70%",
    },
    {
      name:"PHP",
      icon:FaPhp,
      color:'#007396',
      level:"80%"
    }

  ],

  Database: [
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#4169E1",
      level: "90%",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      level: "90%",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#4479A1",
      level: "85%",
    },
    {
      name: "Redis",
      icon: SiRedis,
      color: "#DC382D",
      level: "80%",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "#FFCA28",
      level: "80%",
    },
    {
      name: "Prisma",
      icon: SiPrisma,
      color: "#FFFFFF",
      level: "90%",
    },
    {
      name:"SQL",
      icon:SiMysql,
      color:"#4479A1",
      level:"90%"
    },
  ],

  "Cloud & DevOps": [
    {
      name: "AWS",
      icon: FaAws,
      color: "#FF9900",
      level: "85%",
    },
    {
      name: "Docker",
      icon: FaDocker,
      color: "#2496ED",
      level: "90%",
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
      color: "#326CE5",
      level: "75%",
    },
    {
      name: "CI/CD",
      icon: SiJenkins,
      color: "#D24939",
      level: "80%",
    },
    {
      name: "Nginx",
      icon: SiNginx,
      color: "#009639",
      level: "85%",
    },
    {
      name: "Linux",
      icon: FaLinux,
      color: "#FCC624",
      level: "90%",
    },
    {
      name:"GCP",
      icon:SiGooglecloud,
      color:"#4285F4",
      level:"85%"
    },
  ],

  Tools: [
    {
      name: "Git",
      icon: FaGitAlt,
      color: "#F05032",
      level: "95%",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      color: "#FFFFFF",
      level: "95%",
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "#FF6C37",
      level: "90%",
    },
    {
      name: "Figma",
      icon: FaFigma,
      color: "#F24E1E",
      level: "80%",
    },
    {
      name:"Cursor",
      icon:SiCursor,
      color:"#FFFFFF",
      level:"95%"
    },
    {
      name:"ChatGPT",
      icon:RiBarChartGroupedFill,
      color:"#6c23d2",
      level:"95%"
    },
    {
    name:"Claude AI",
    icon:SiClaude,
    color:"#D97757",
    level:"95%"
    },
  ],
};


const container = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.06,
    },
  },
};


const item = {
  hidden: {
    opacity: 0,
    y: 15,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.35,
    },
  },
};


export default function TechStack() {
  return (
    <section
      id="skills"
      className="
        max-w-7xl
        mx-auto
        px-3
        sm:px-6
        py-8
        min-h-screen
        flex
        flex-col
        justify-center
        border-t
        border-white/10
      "
    >
      <Reveal>

        {/* HEADER */}

        <div className="mb-7">

          <p
            className="
              text-purple-400
              text-xs
              font-medium
              tracking-[4px]
              uppercase
              mb-2
            "
          >
            Skills
          </p>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              bg-gradient-to-r
              from-white
              via-purple-200
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            Tech Stack
          </h2>

          <p
            className="
              text-gray-500
              text-xs
              mt-2
            "
          >
            Technologies I use to build scalable,
            production-ready applications.
          </p>

        </div>


        {/* STACKS */}

        <div className="space-y-5">

          {Object.entries(stacks).map(
            ([category, items]) => (

              <div
                key={category}
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-[165px_1fr]
                  gap-3
                  md:gap-5
                  items-center
                "
              >

                {/* CATEGORY */}

                <h3
                  className="
                    text-gray-300
                    text-sm
                    font-semibold
                    whitespace-nowrap
                  "
                >
                  {category}
                </h3>


                {/* SKILLS */}

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  className="
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-7
                    gap-2
                  "
                >

                  {items.map((skill) => {

                    const Icon = skill.icon;

                    return (
                      <motion.div
                        variants={item}
                        key={skill.name}
                        className="
                          group
                          relative
                          h-[74px]
                          rounded-xl
                          border
                          border-white/10
                          bg-[#080808]
                          px-3
                          py-2
                          overflow-hidden
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-white/20
                          hover:bg-[#0d0d0d]
                        "
                      >

                        {/* ICON + NAME */}

                        <div
                          className="
                            flex
                            items-center
                            gap-3
                            h-full
                            pb-2
                          "
                        >

                          <Icon
                            className="
                              text-2xl
                              shrink-0
                              transition-transform
                              duration-300
                              group-hover:scale-110
                            "
                            style={{
                              color: skill.color,
                            }}
                          />


                          <span
                            className="
                              text-xs
                              text-gray-200
                              font-medium
                              truncate
                            "
                          >
                            {skill.name}
                          </span>

                        </div>


                        {/* PROGRESS BAR */}

                        <div
                          className="
                            absolute
                            bottom-4
                            left-3
                            right-3
                            h-[3px]
                            bg-white/10
                            rounded-full
                            overflow-hidden
                          "
                        >

                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: skill.level,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.8,
                              delay: 0.2,
                            }}
                            className="
                              h-full
                              rounded-full
                              bg-gradient-to-r
                              from-purple-500
                              to-blue-400
                            "
                          />

                        </div>

                      </motion.div>
                    );
                  })}

                </motion.div>

              </div>
            )
          )}

        </div>

      </Reveal>
    </section>
  );
}