import { ContractStats } from './reusables';
import { useState, useEffect } from 'react';
import { getContent } from './utils/cms';
import HTML2React from 'html2react'
const Intro = (props) => {

const [data, setData] = useState({Title: "Deep Space", Body: "This is a fan site. Like a blockchain explorer for your planets."})
const planetsonDisplay = ["310.png","69.png","218.png","109.png","1337.png","123.png","115.png","420.png","266.png"]

  


  return (
    <>
    <div class="flex">
    <div class="mx-auto">     

    <div class="flex flex-wrap align-middle md:justify-center pt-2">

        <div class="sm:w-full lg:w-1/2">
        <h1 class="text-6xl md:text-6xl xl:text-9xl font-bold">{data.Title}</h1>

        <div class="pr-5 py-3">
        <div class="lg:text-base xl:text-lg pb-2 text">    
        {HTML2React(data.Body)}  
        </div>

 </div>
</div>

     <div class="hidden lg:w-1/2 md:flex md:flex-wrap">
    {Array.from({ length: 9 }).map((_, index) => (
      <div key={index} class="p-1 w-1/3">
    <img class="shadow-lg rounded-3xl" src={`https://cloud-cube-us2.s3.amazonaws.com/deepspace/public/planet/image/${planetsonDisplay[index]}`} />
    </div>
  ))}
  </div>
     
      </div>      
      
     
      </div>
     
 </div>


</>
  );
};

export default Intro;
