import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import Nav from './components/Nav';
import image1 from "./assets/image 1.png";
import image2 from "./assets/image 2.png";
import image3 from "./assets/image 3.png";
import image4 from "./assets/image 4.png";
import image5 from "./assets/image 5.png";
import image6 from "./assets/image 6.png";
import image7 from "./assets/image 7.png";
import image8 from "./assets/image 8.png";
const App = () => {
  return (
    <div className='min-h-screen w-ful bg-black flex flex-wrap justify-around items-center'>
      <Nav/>
    <div className='min-h-screen w-screen  bg-black flex flex-wrap justify-around items-center gap-5 '>
      <div className="w-full max-w-sm overflow-hidden p-5  text-white rounded-2xl bg-white/15 backdrop-blur-xl">
       <img src={image1} className='h-75 w-full rounded-2xl'/>
       <div className="pt-5">
        <h2 className='text-2xl font-extrabold'>AI Chatbots</h2>
        <p>Intelligent conversational agents that understand context and provide human-like interactions.</p>
        <div className='mt-3 flex justify-around items-center p-3'>
          <button className='text-[#8B30E6] flex items-center gap-3 font-medium hover:scale-105 hover:cursor-pointer transition-all duration-100'>Learn More <SlArrowRight /></button>
        </div>
       </div>
      </div>

      <div className="w-full max-w-sm p-5  text-white rounded-2xl bg-white/15 backdrop-blur-xl">
       <img src={image2} className='h-75 w-full rounded-2xl'/>
       <div className="pt-5">
        <h2 className='text-2xl font-extrabold'>AI Agents</h2>
        <p>Autonomous task automation that works independently to achieve your goals.</p>
        <div className='mt-3 flex justify-around items-center p-3'>
          <button className='text-[#8B30E6] flex items-center gap-3 font-medium hover:scale-105 hover:cursor-pointer transition-all duration-100'>Learn More <SlArrowRight /></button>
        </div>
       </div>
      </div>

      <div className="w-full max-w-sm p-5  text-white rounded-2xl bg-white/15 backdrop-blur-xl">
       <img src={image3} className='h-75 w-full rounded-2xl'/>
       <div className="pt-5">
        <h2 className='text-2xl font-extrabold'>AI Agents Workflow</h2>
        <p>Complex process automation with multi-agent orchestration and collaboration.</p>
        <div className='mt-3 flex justify-around items-center p-3'>
          <button className='text-[#2A74E2] flex items-center gap-3 font-medium hover:scale-105 hover:cursor-pointer transition-all duration-100'>Learn More <SlArrowRight /></button>
        </div>
       </div>
      </div>

      <div className="w-full max-w-sm p-5  text-white rounded-2xl bg-white/15 backdrop-blur-xl">
       <img src={image4} className='h-75 w-full rounded-2xl'/>
       <div className="pt-5">
        <h2 className='text-2xl font-extrabold'>MCP Tools</h2>
        <p>Model COntext protocol tools for seamless integration with your tech stack.</p>
        <div className='mt-3 flex justify-around items-cente p-3'>
          <button className='text-[#08D389] flex items-center gap-3 font-medium hover:scale-105 hover:cursor-pointer transition-all duration-100'>Learn More <SlArrowRight /></button>
        </div>
       </div>
      </div>

      <div className="w-full max-w-sm p-5  text-white rounded-2xl bg-white/15 backdrop-blur-xl">
       <img src={image5} className='h-75 w-full rounded-2xl'/>
       <div className="pt-5">
        <h2 className='text-2xl font-extrabold'>AI Knowledge Bases</h2>
        <p>Intelligent data understanding that learns from your documents and data.</p>
        <div className='mt-3 flex justify-around items-center p-3'>
          <button className='text-[#08D389] flex items-center gap-3 font-medium hover:scale-105 hover:cursor-pointer transition-all duration-100'>Learn More <SlArrowRight /></button>
        </div>
       </div>
      </div>

      <div className="w-full max-w-sm p-5 text-white rounded-2xl bg-white/15 backdrop-blur-xl">
       <img src={image6} className='h-75 w-full rounded-2xl'/>
       <div className="pt-5">
        <h2 className='text-2xl font-extrabold'>All-in-One AI</h2>
        <p>Acess every AI model in one unified platform for maximum flexibility.</p>
        <div className='mt-3 flex justify-around items-center p-3'>
          <button className='text-[#7520BE] flex items-center gap-3 font-medium hover:scale-105 hover:cursor-pointer transition-all duration-100'>Learn More <SlArrowRight /></button>
        </div>
       </div>
      </div>

      <div className="w-full max-w-sm p-5  text-white rounded-2xl bg-white/15 backdrop-blur-xl">
       <img src={image7} className='h-75 w-full rounded-2xl'/>
       <div className="pt-5">
        <h2 className='text-2xl font-extrabold'>API</h2>
        <p>Powerful developer tools and Restful APLS for seamless integration.</p>
        <div className='mt-3 flex justify-around items-center p-3'>
          <button className='text-[#BC4F0B] flex items-center gap-3 font-medium hover:scale-105 hover:cursor-pointer transition-all duration-100'>Learn More <SlArrowRight /></button>
        </div>
       </div>
      </div>

      <div className="w-full max-w-sm p-5  text-white rounded-2xl bg-white/15 backdrop-blur-xl">
       <img src={image8} className='h-75 w-full rounded-2xl'/>
       <div className="pt-5">
        <h2 className='text-2xl font-extrabold'>AI Agency</h2>
        <p>White-Label solution to resell AI service under your brands.</p>
        <div className='mt-3 flex justify-around items-center p-3'>
          <button className='text-[#1C5BC2] flex items-center gap-3 font-medium hover:scale-105 hover:cursor-pointer transition-all duration-100'>Learn More <SlArrowRight /></button>
        </div>
       </div>
      </div>

    </div>
    </div>
  )
}

export default App
