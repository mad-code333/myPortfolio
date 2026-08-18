"use client";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";


const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "johan.nilsson0311@outlook.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+46 76 223 00 89",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Stockholm, Sweden",
  },
];


export default function Contact() {

  return (

    <section
      id="contact"
      className="
      relative
      overflow-hidden
      max-w-7xl
      mx-auto
      px-6
      py-32
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
        right-20
        w-[350px]
        h-[350px]
        bg-purple-600/20
        blur-[120px]
        rounded-full
        "
      />


      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.6
        }}

        className="
        relative
        z-10
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-8
        md:p-12
        grid
        lg:grid-cols-2
        gap-16
        "

      >


        {/* LEFT SIDE */}


        <div>


          <p
          className="
          text-sm
          tracking-[5px]
          uppercase
          text-purple-400
          "
          >
            Contact
          </p>



          <h2
          className="
          mt-5
          text-4xl
          md:text-6xl
          font-bold
          leading-tight
          "
          >

            Let's build
            <span
            className="
            block
            bg-gradient-to-r
            from-purple-400
            to-blue-500
            text-transparent
            bg-clip-text
            "
            >
              something great.
            </span>

          </h2>



          <p
          className="
          mt-6
          text-gray-400
          text-lg
          max-w-md
          leading-relaxed
          "
          >

            Have an idea, product, or technical challenge?
            I help companies build scalable web applications,
            AI-powered products, and modern digital experiences.

          </p>



          {/* Contact Cards */}


          <div
          className="
          mt-10
          space-y-4
          "
          >

          {
            contactInfo.map((item,index)=>{

              const Icon=item.icon;

              return (

                <motion.div

                key={index}

                whileHover={{
                  x:8
                }}

                className="
                flex
                items-center
                gap-5
                p-5
                rounded-2xl
                border
                border-white/10
                bg-black/20
                hover:border-purple-400/40
                transition
                "

                >

                  <div
                  className="
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-purple-500/10
                  text-purple-400
                  "
                  >

                    <Icon size={22}/>

                  </div>


                  <div>

                    <p
                    className="
                    text-xs
                    uppercase
                    text-gray-500
                    tracking-wider
                    "
                    >
                      {item.title}
                    </p>


                    <p
                    className="
                    text-gray-200
                    mt-1
                    "
                    >
                      {item.value}
                    </p>


                  </div>


                </motion.div>

              )

            })
          }


          </div>


        </div>





        {/* RIGHT FORM */}



        <form
        className="
        space-y-6
        "
        >


          <div>

            <label
            className="
            text-sm
            text-gray-400
            "
            >
              Name
            </label>


            <input

            placeholder="John Smith"

            className="
            mt-2
            w-full
            rounded-xl
            bg-black/40
            border
            border-white/10
            px-5
            py-4
            text-white
            outline-none
            focus:border-purple-400
            transition
            "

            />

          </div>





          <div>

            <label
            className="
            text-sm
            text-gray-400
            "
            >
              Email
            </label>


            <input

            placeholder="john@example.com"

            className="
            mt-2
            w-full
            rounded-xl
            bg-black/40
            border
            border-white/10
            px-5
            py-4
            text-white
            outline-none
            focus:border-purple-400
            transition
            "

            />

          </div>






          <div>

            <label
            className="
            text-sm
            text-gray-400
            "
            >
              Message
            </label>


            <textarea

            rows={6}

            placeholder="Tell me about your project..."

            className="
            mt-2
            w-full
            rounded-xl
            bg-black/40
            border
            border-white/10
            px-5
            py-4
            text-white
            outline-none
            resize-none
            focus:border-purple-400
            transition
            "

            />


          </div>






          <button

          className="
          group
          flex
          items-center
          justify-center
          gap-3
          w-full
          rounded-xl
          bg-white
          text-black
          py-4
          font-semibold
          hover:bg-purple-400
          transition
          "

          >

            Send Message


            <ArrowRight

            size={20}

            className="
            group-hover:translate-x-1
            transition
            "

            />


          </button>



        </form>




      </motion.div>


    </section>

  );
}