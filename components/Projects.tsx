"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import Reveal from "./Reveal";

const projects = [
    {
    title: "EverShop E-commerce Platform",

    category: "FULL STACK • E-COMMERCE",

    description:
        "Open-source e-commerce platform with product management, shopping cart, checkout, payments, orders and a customizable admin dashboard.",

    image: "/project1.png",

    tags: [
        "Node.js",
        "TypeScript",
        "React",
        "GraphQL",
        "PostgreSQL",
        "Tailwind CSS",
    ],

    github: "#",
    demo: "https://evershop.io",

    featured: true,
    },

  {
      title: "SaaS-Automation Platform",

    category: "Investment Management Platform",

    description:
      "Modern investment management platform for venture capital and private equity teams to manage deal flow, portfolios, investors, CRM, reporting and investment workflows.",

    image: "/project2.png",

    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
    ],

    github: "#",
    demo: "https://jj-zapflow.vercel.app",

    featured: true,
  },

  {
    title: "Zerp - Modular ERP & Business Management Platform",

    category: "ERP / SaaS",

    description:
      "Modern open-source ERP and SaaS platform built to manage complete business operations, including CRM, HRM, accounting, inventory, sales, purchasing, projects, POS, AI assistance, and workflow automation through a modular and scalable architecture.",

    image: "/zerp.png",

    tags: [
      "Laravel",
      "PHP",
      "React",
      "TypeScript",
      "Inertia.js",
      "MySQL",
      "REST API",
      "Tailwind CSS",
      "Docker",
      "Redis",
    ],

    github: "https://github.com/zerp-pk/zerp",

    live: "https://zerp.pk/",
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        max-w-6xl
        mx-auto
        px-6
        py-16
        border-t
        border-white/10
      "
    >
      <Reveal>

        {/* =========================
            HEADER
        ========================== */}

        <div
          className="
            flex
            justify-between
            items-end
            mb-8
          "
        >
          <div>
            <p
              className="
                text-purple-400
                text-[11px]
                tracking-[4px]
                uppercase
                mb-2
              "
            >
              Portfolio
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
              Featured Projects
            </h2>
          </div>

          <a
            href="#"
            className="
              text-xs
              text-gray-400
              hover:text-white
              transition
            "
          >
            View all →
          </a>
        </div>


        {/* =========================
            PROJECT GRID
        ========================== */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-5
          "
        >

          {projects.map((project, index) => (

            <motion.article
              key={project.title}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}

              whileHover={{
                y: -6,
              }}

              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-purple-400/30
                hover:shadow-xl
                hover:shadow-purple-500/10
              "
            >

              {/* =========================
                  IMAGE
              ========================== */}

              <div
                className="
                  relative
                  h-52
                  md:h-56
                  overflow-hidden
                "
              >

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 0}

                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "

                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Dark Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/20
                    to-transparent
                  "
                />


                {/* Purple Hover Glow */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-purple-500/0
                    group-hover:bg-purple-500/10
                    transition
                    duration-700
                  "
                />


                {/* Featured */}

                {project.featured && (

                  <div
                    className="
                      absolute
                      top-3
                      left-3
                      px-3
                      py-1
                      rounded-full
                      text-[10px]
                      font-medium
                      bg-purple-500/20
                      border
                      border-purple-400/40
                      text-purple-200
                      backdrop-blur-md
                    "
                  >
                    Featured
                  </div>

                )}

              </div>


              {/* =========================
                  CONTENT
              ========================== */}

              <div className="p-5">

                {/* Category */}

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[2px]
                    text-purple-400
                    mb-2
                  "
                >
                  {project.category}
                </p>


                {/* Title */}

                <h3
                  className="
                    text-lg
                    font-semibold
                    text-white
                    mb-2
                    group-hover:text-purple-300
                    transition
                  "
                >
                  {project.title}
                </h3>


                {/* Description */}

                <p
                  className="
                    text-xs
                    text-gray-400
                    leading-relaxed
                    mb-4
                    line-clamp-3
                  "
                >
                  {project.description}
                </p>


                {/* =========================
                    TAGS
                ========================== */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-1.5
                    mb-5
                  "
                >

                  {project.tags.map((tag) => (

                    <span
                      key={tag}
                      className="
                        px-2.5
                        py-1
                        rounded-full
                        text-[10px]
                        bg-white/[0.06]
                        border
                        border-white/10
                        text-gray-300
                        hover:border-purple-400/40
                        hover:text-purple-200
                        transition
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>


                {/* =========================
                    BUTTONS
                ========================== */}

                <div className="flex gap-2">

                  {/* GitHub */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-3.5
                      py-2
                      rounded-lg
                      border
                      border-white/20
                      text-xs
                      text-gray-200
                      hover:bg-white
                      hover:text-black
                      hover:border-white
                      transition-all
                    "
                  >
                    <FaGithub />

                    Code
                  </a>


                  {/* Live */}

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-3.5
                      py-2
                      rounded-lg
                      bg-white
                      text-black
                      text-xs
                      font-medium
                      hover:scale-105
                      hover:bg-purple-100
                      transition-all
                    "
                  >
                    <FaExternalLinkAlt />

                    Live
                  </a>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </Reveal>
    </section>
  );
}