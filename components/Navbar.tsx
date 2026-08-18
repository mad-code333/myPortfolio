"use client";

import { 
  useEffect, 
  useState 
} from "react";

import {
  Download,
  Menu,
  X
} from "lucide-react";

import { motion } from "framer-motion";


const navItems=[
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Blog",
  "Contact"
];


export default function Navbar(){

const [active,setActive]=useState("Home");
const [scroll,setScroll]=useState(false);
const [mobile,setMobile]=useState(false);



useEffect(()=>{

const handleScroll=()=>{

setScroll(window.scrollY > 40);


const sections =
navItems.map(item =>
document.getElementById(
item.toLowerCase()
));


const current =
sections
.reverse()
.find(
section =>
section &&
section.offsetTop <= window.scrollY + 150
);


if(current){

setActive(
current.id.charAt(0).toUpperCase()
+
current.id.slice(1)
);

}

};


window.addEventListener(
"scroll",
handleScroll
);


return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

}


},[]);





return(

<header

className="
fixed
top-0
left-0
w-full
z-50
px-5
pt-5
"

>


<motion.div

initial={{
y:-100
}}

animate={{
y:0
}}

transition={{
duration:.6
}}

className={`

max-w-7xl
mx-auto

rounded-2xl

border

transition-all
duration-500

${
scroll

?

"bg-black/80 backdrop-blur-2xl border-white/10 shadow-2xl"

:

"bg-white/[0.03] backdrop-blur-xl border-white/10"

}

`}

>


<div

className="
h-20
px-6
flex
items-center
justify-between
"

>


{/* Logo */}


<a

href="#home"

className="
text-3xl
font-black
tracking-tight
"

>

<span

className="
bg-gradient-to-r
from-purple-400
via-blue-400
to-cyan-400
text-transparent
bg-clip-text
"

>
JH
</span>


</a>







{/* Desktop Menu */}



<nav

className="
hidden
lg:flex
items-center
gap-9
"

>


{
navItems.map(item=>(


<a

key={item}

href={`#${item.toLowerCase()}`}

onClick={()=>
setActive(item)
}


className={`

relative
text-sm
font-medium
transition

pb-2

${
active===item

?

"text-white"

:

"text-gray-400 hover:text-white"

}

`}

>


{item}



<span

className={`

absolute
bottom-0
left-0

h-[2px]

bg-gradient-to-r
from-purple-400
to-blue-400

transition-all
duration-500


${
active===item

?

"w-full"

:

"w-0"

}

`}

/>



</a>


))

}


</nav>







{/* Resume Button */}



<div

className="
hidden
lg:block
"

>

<a

href="/resume.pdf"

download="Johan_Nilsson_Resume.pdf"

className="
group

flex
items-center
gap-2

px-6
py-3

rounded-xl

bg-white
text-black

font-semibold
text-sm

hover:scale-105

transition

"

>


Download Resume


<Download

size={17}

className="
group-hover:translate-y-1
transition
"

/>


</a>


</div>







{/* Mobile Button */}



<button

onClick={()=>
setMobile(!mobile)
}

className="
lg:hidden
text-white
"

>


{
mobile
?

<X size={28}/>

:

<Menu size={28}/>

}


</button>




</div>







{/* Mobile Menu */}


{

mobile &&

<motion.nav

initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
}}

className="
lg:hidden
px-6
pb-6
space-y-5
"

>


{
navItems.map(item=>(


<a

key={item}

href={`#${item.toLowerCase()}`}

onClick={()=>{
setActive(item);
setMobile(false);
}}

className="
block
text-gray-300
hover:text-white
transition
"

>

{item}

</a>


))

}


<a

href="/resume.pdf"

className="
flex
items-center
justify-center
gap-2

bg-white
text-black

rounded-xl
py-3

font-semibold

"

>

Download Resume

<Download size={17}/>

</a>


</motion.nav>


}



</motion.div>


</header>


)

}