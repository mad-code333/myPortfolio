"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";

import { LuMail, LuSparkles } from "react-icons/lu";


const socials = [
  {
    icon: FaGithub,
    link:"#"
  },
  {
    icon: FaLinkedin,
    link:"#"
  },
  {
    icon: FaTwitter,
    link:"#"
  },
  {
    icon: LuMail,
    link:"#"
  },
];


const technologies=[
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "AI",
  "Cloud",
];


export default function Hero(){

return (

<section
id="home"
className="
relative
min-h-screen
flex
items-center
overflow-hidden
border-b
border-white/10
bg-black
"
>


{/* Background Effects */}

<div
className="
absolute
top-1/4
right-0
w-[600px]
h-[600px]
bg-purple-600/20
rounded-full
blur-[150px]
"
/>


<div
className="
absolute
bottom-0
left-0
w-[400px]
h-[400px]
bg-blue-500/10
rounded-full
blur-[130px]
"
/>



<div
className="
max-w-7xl
mx-auto
px-6
lg:px-10
grid
lg:grid-cols-2
gap-16
items-center
w-full
relative
z-10
"
>



{/* LEFT CONTENT */}


<motion.div

initial={{
opacity:0,
x:-50
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

>



{/* Badge */}


<div
className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
border
border-white/10
bg-white/5
text-sm
text-gray-300
mb-8
"
>

<LuSparkles
className="text-purple-400"
/>

Available for new opportunities

</div>





<h1
className="
text-5xl
md:text-7xl
font-bold
leading-[1.05]
"
>

Building

<span
className="
block
bg-gradient-to-r
from-purple-400
via-blue-400
to-cyan-400
bg-clip-text
text-transparent
"
>
Digital Products
</span>


That Scale

</h1>




<h2
className="
mt-6
text-2xl
md:text-3xl
font-semibold
text-gray-200
"
>

MAD-CODE
</h2>



<p
className="
mt-3
text-lg
text-purple-300
"
>
Senior Full Stack Engineer
</p>




<p
className="
mt-6
max-w-xl
text-gray-400
leading-8
text-lg
"
>

I design and build scalable web applications,
AI-powered platforms, and cloud-native systems
using modern technologies like React, Next.js,
Node.js, TypeScript and AWS.

</p>





{/* Buttons */}


<div
className="
flex
flex-wrap
gap-5
mt-10
"
>


<button
className="
group
flex
items-center
gap-3
px-7
py-4
rounded-xl
bg-white
text-black
font-semibold
hover:scale-105
transition
"
>

View Projects

<FaArrowRight
className="
group-hover:translate-x-1
transition
"
/>

</button>



<button
className="
flex
items-center
gap-3
px-7
py-4
rounded-xl
border
border-white/20
bg-white/5
hover:bg-white
hover:text-black
transition
"
>

Contact Me

</button>


</div>







{/* Tech Stack */}


<div
className="
mt-10
flex
flex-wrap
gap-3
"
>

{
technologies.map((tech)=>(

<span
key={tech}
className="
px-4
py-2
rounded-full
text-sm
bg-white/5
border
border-white/10
text-gray-300
backdrop-blur
"
>
{tech}
</span>

))
}


</div>





{/* Social */}


<div
className="
mt-10
flex
gap-6
"
>


{
socials.map((item,index)=>{

const Icon=item.icon;

return (

<a
key={index}
href="#"
className="
text-gray-400
hover:text-purple-400
transition
"
>

<Icon size={23}/>

</a>

)

})
}


</div>




</motion.div>









{/* RIGHT SIDE IMAGE */}



<motion.div

initial={{
opacity:0,
scale:.85
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

className="
relative
flex
justify-center
"

>


{/* Outer Ring */}


<div
className="
absolute
w-[420px]
h-[420px]
rounded-full
border
border-white/10
animate-pulse
"
/>


<div
className="
absolute
w-[340px]
h-[340px]
rounded-full
bg-gradient-to-tr
from-purple-500/30
to-blue-500/20
blur-xl
"
/>




{/* Image */}


<motion.img

src="/profile.png"

alt="Senior Full Stack Engineer"

animate={{
y:[0,-15,0]
}}

transition={{
duration:5,
repeat:Infinity,
ease:"easeInOut"
}}

className="
relative
z-10
w-[430px]
lg:w-[520px]
drop-shadow-2xl
"

/>





{/* Floating Card */}


<motion.div

animate={{
y:[0,10,0]
}}

transition={{
duration:3,
repeat:Infinity
}}

className="
absolute
bottom-10
left-0
lg:left-10
px-5
py-4
rounded-2xl
bg-white/10
border
border-white/10
backdrop-blur-xl
"

>


<p
className="
text-sm
text-gray-400
"
>
Experience
</p>


<p
className="
text-2xl
font-bold
"
>
8+ Years
</p>


</motion.div>






</motion.div>




</div>


</section>

)

}