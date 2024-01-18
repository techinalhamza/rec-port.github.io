import React from 'react'
import './Skills.css'
import html from '../../assets/html-d8484e8b.png'
import css from '../../assets/css-f0ecea9c.png'
import js from '../../assets/js-ad87d233.png'
import react from '../../assets/react-js-icon-1d5b7448.png'
import tailwind from '../../assets/tailwind-b1493352.png'
import git from '../../assets/git-f810e4da.png'
import bootstrap from '../../assets/bootstrap-icon-css.png'
import jquery from '../../assets/jquery.jpeg'

function Skills__Card() {
  let skillsdata = [ 
    {
      title:"html",
      img:html
    },
    {
      title:"css",
      img:css
    },
    {
      title:"javascript",
      img:js
    },
    {
      title:"react",
      img:react
    },
    {
      title:"tailwind",
      img:tailwind
    },
    {
      title:"bootstrap",
      img:bootstrap
    },
    {
      title:"git",
      img:git
    },
    {
      title:"css",
      img:css
    },
    {
      title:"css",
      img:css
    },
    {
      title:"css",
      img:css
    },
   ]


return (
  <>
 
<div className="skills-items  m-auto gap-5">
      <div className=" bg-[#232d38] card  w-44 py-4  flex flex-col justify-between items-center rounded font-bold tracking-widest" >
        <img src={skillsdata[0].img} className='w-28 h-28' alt="" />
        <h1>{skillsdata[0].title}</h1>
      </div>
      <div className=" bg-[#232d38] card w-44 p-4 flex flex-col justify-between items-center  rounded font-bold tracking-widest" >
        <img src={skillsdata[1].img} className='w-28 h-28' alt="" />
        <h1>{skillsdata[1].title}</h1>
      </div>
      <div className=" bg-[#232d38] card w-44 p-4 flex flex-col justify-between items-center  rounded font-bold tracking-widest" >
        <img src={skillsdata[2].img} className='w-28 h-28' alt="" />
        <h1>{skillsdata[2].title}</h1>
      </div>
      <div className=" bg-[#232d38] card w-44 p-4 flex flex-col justify-between items-center  rounded font-bold tracking-widest" >
        <img src={skillsdata[3].img} className='w-28 h-28' alt="" />
        <h1>{skillsdata[3].title}</h1>
      </div>
      <div className=" bg-[#232d38] card w-44 p-4 flex flex-col justify-between items-center  rounded font-bold tracking-widest" >
        <img src={skillsdata[4].img} className='w-28 h-28' alt="" />
        <h1>{skillsdata[4].title}</h1>
      </div>
      <div className=" bg-[#232d38] card w-44 p-4 flex flex-col justify-between items-center  rounded font-bold tracking-widest" >
        <img src={skillsdata[5].img} className='w-28 h-28' alt="" />
        <h1>{skillsdata[5].title}</h1>
      </div>
      <div className=" bg-[#232d38] card w-44 p-4 flex flex-col justify-between items-center  rounded font-bold tracking-widest" >
        <img src={skillsdata[6].img} className='w-28 h-28' alt="" />
        <h1>{skillsdata[6].title}</h1>
      </div>
      <div className=" bg-[#232d38] card w-44 p-4 flex flex-col justify-between items-center  rounded font-bold tracking-widest" >
        <img src={skillsdata[7].img} className='w-28 h-28' alt="" />
        <h1>{skillsdata[7].title}</h1>
      </div>
      <div className=" bg-[#232d38] card w-44 p-4 flex flex-col justify-between items-center  rounded font-bold tracking-widest" >
        <img src={skillsdata[8].img} className='w-28 h-28' alt="" />
        <h1>{skillsdata[8].title}</h1>
      </div>
      <div className=" bg-[#232d38] card w-44 p-4 flex flex-col justify-between items-center  rounded font-bold tracking-widest" >
        <img src={skillsdata[9].img} className='w-28 h-28' alt="" />
        <h1>{skillsdata[9].title}</h1>
      </div>
      
    </div>

    
  </>
)
}

export default Skills__Card