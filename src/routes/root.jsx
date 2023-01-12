import React, { useEffect } from 'react'
import { FirmesLayout } from '../components/Layout/FirmesLayout';
import { MouseTracker } from '../components/UI/MouseTracker'

export const Root = () => {


  useEffect(() => {
    const tracker = document.querySelector(".tracker");
    console.log(tracker);
    document.body.addEventListener("mousemove", (e) => {
      tracker.style.left = `${e.clientX}px`;
      tracker.style.top = `${e.clientY}px`;
    });
  }, [])
  
  
  return (
    <div className='bg-firmes-black'>
      <MouseTracker />
      <FirmesLayout />
    </div>
  )
}
