

"use client";

const colors=["red", "yellow", "green"]

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Briefcase } from "lucide-react";

import Reveal from "./Reveal";


const experiences = [

{
year:"07/2024 – 04/2026",
role:"Senior AI Full Stack Engineer",
company:"Celonis",
location:"Munich,Germany",

stack:[
"Next.js",
"TypeScript",
"Node.js",
"AWS",
"PostgreSQL",
"Docker",
"LangChain",
"OpenAI APIs"
],

description:
`I have built enterprise AI-powered applications using OpenAI APIs, LangChain, React, Next.js, TypeScript, Python, Node.js, AWS, Docker, and scalable cloud architectures.`
},


{
year:"02/2019 – 03/2020",
role:"Full Stack Engineer",
company:"Factorial",
location:"Barcelona, Spain",

stack:[
"React",
"Next.js",
"MongoDB",
"PostgreSQL",
"Docker"
],

description:
'I have developed SaaS platforms with React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, and automated cloud deployment solutions.'},


{
year:"02/2019 – 03/2020",
role:"Software Engineer",
company:"Stravito",
location:"Stockholm, Sweden",

stack:[
"React",
"TypeScript",
"MySQL",
"Python",
"Node.js"
],

description:
"I have created enterprise SaaS solutions using React, TypeScript, Node.js, Python, GraphQL, AI integrations, and cloud-native technologies."
}

];



const cardAnimation = {

hidden:{
opacity:0,
x:-40
},

show:{
opacity:1,
x:0,

transition:{
duration:0.6
}

}

};



export default function Experience(){


return (

<section

id="experience"

className="
max-w-7xl
mx-auto
px-8
py-24
border-t
border-white/10
"

>


<Reveal>


<div className="
flex
items-center
justify-between
mb-12
">


<h2

className="
text-xl
font-semibold
tracking-wide
"

>

EXPERIENCE

<span className="text-purple-400">
.
</span>

</h2>



<a

href="#"

className="
group
flex
items-center
gap-2
text-sm
text-gray-400

hover:text-white

transition

"

>

View Full Experience

<ArrowUpRight

size={16}

className="
group-hover:translate-x-1
group-hover:-translate-y-1
transition
"

/>


</a>


</div>





<div

className="
relative
"

>


{/* Timeline line */}

<div

className="
absolute
left-[11px]
top-0
h-full
w-[2px]

bg-white/10

"

/>





<div className="space-y-12">


{
experiences.map((exp,index)=>(


<motion.div

key={index}

variants={cardAnimation}

initial="hidden"

whileInView="show"

viewport={{
once:true,
amount:0.2
}}

className="
relative
pl-12
"


>


{/* Timeline Dot */}

<div

className="
absolute
left-0
top-2

h-6
w-6

rounded-full

bg-black

border
border-purple-400

flex
items-center
justify-center

"

>


<div

className="
h-2
w-2

rounded-full

bg-purple-400

animate-pulse

"

/>


</div>





{/* Experience Card */}


<div

className="
group

rounded-xl

border
border-white/10

bg-white/[0.03]

p-6


hover:border-purple-400/40

hover:bg-white/[0.06]

transition-all
duration-500

"


>



<div

className="
flex
flex-col
md:flex-row

md:items-center
md:justify-between

gap-3

mb-4

"

>


<div>


<div

className="
flex
items-center
gap-2

text-purple-400
text-sm
mb-2

"

>


<Briefcase size={15}/>

{exp.year}


</div>



<h3

className="
text-xl
font-semibold

text-white

"

>

{exp.role}

</h3>



<p

className="
text-gray-400
mt-1

"

>

{exp.company}

</p>


</div>



<div

className="
flex
items-center
gap-1

text-sm
text-gray-400

"

>


<MapPin size={15}/>

{exp.location}


</div>



</div>





<p

className="
text-gray-300

leading-relaxed

max-w-3xl

"

>

{exp.description}

</p>





{/* Tech Stack */}


<div

className="
flex
flex-wrap
gap-2
mt-5

"

>


{
exp.stack.map(
(skill)=>(


<span

key={skill}

className="

px-3
py-1

rounded-full

text-xs

bg-white/[0.05]

border
border-white/10

text-gray-300


group-hover:border-purple-400/30

transition

"

>

{skill}

</span>


)

)

}


</div>



</div>



</motion.div>


))

}


</div>


</div>


</Reveal>


</section>


)

}