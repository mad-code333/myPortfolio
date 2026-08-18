"use client";

import {
  Briefcase,
  Code2,
  Users,
  Trophy,
} from "lucide-react";

import { motion } from "framer-motion";

const stats = [
  {
    icon: Briefcase,
    number: "8+",
    text: "Years Building Software",
  },
  {
    icon: Code2,
    number: "50+",
    text: "Projects Delivered",
  },
  {
    icon: Users,
    number: "20+",
    text: "Global Clients",
  },
  {
    icon: Trophy,
    number: "2",
    text: "Industry Awards",
  },
];

export default function About() {
  return (
    <section id="about"className="relative py-26 bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[300px]
        bg-white-600/20
        blur-[120px]
        rounded-full
      " />

      <div className="
        max-w-6xl
        mx-auto
        px-6
        relative
        z-10
      ">

        {/* About Text */}

        <div className="max-w-3xl">

          <p className="
            text-white-400
            uppercase
            tracking-[4px]
            text-sm
            mb-4
          ">
            About Me
          </p>


          <h2 className="
            text-4xl
            md:text-6xl
            font-bold
            leading-tight
          ">
            Building scalable
            <span className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-white
              to-blue-500
            ">
              {" "}digital products
            </span>
          </h2>


          <p className="
            mt-6
            text-gray-400
            text-lg
            leading-relaxed
          ">
            Senior Full Stack Engineer specializing in React,
            Next.js, Node.js, AI integrations and cloud
            architectures. I create high-performance applications
            that solve real business problems.
          </p>


          <button
            className="
              mt-8
              px-7
              py-3
              rounded-xl
              bg-white
              text-black
              font-medium
              hover:scale-105
              transition
              duration-300
            "
          >
            More About Me →
          </button>

        </div>



        {/* Stats */}

        <div className="
          mt-20
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          {
            stats.map((item,index)=>{

              const Icon=item.icon;

              return (

                <motion.div
                  key={index}
                  initial={{
                    opacity:0,
                    y:30
                  }}

                  whileInView={{
                    opacity:1,
                    y:0
                  }}

                  transition={{
                    delay:index*0.15
                  }}

                  whileHover={{
                    y:-8
                  }}

                  className="
                    group
                    relative
                    p-8
                    rounded-2xl
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    hover:border-white-400/50
                    transition
                  "
                >


                  <div className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-gradient-to-br
                    from-white-500/10
                    to-blue-500/10
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "/>


                  <div className="relative">


                    <Icon
                      size={36}
                      className="
                        text-white-400
                        mb-6
                      "
                    />


                    <h3 className="
                      text-5xl
                      font-bold
                    ">
                      {item.number}
                    </h3>


                    <p className="
                      mt-3
                      text-gray-400
                    ">
                      {item.text}
                    </p>


                  </div>


                </motion.div>

              )

            })
          }


        </div>


      </div>


    </section>
  );
}