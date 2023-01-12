import React from 'react'
import { WorkPreview } from './index'

export const WorkGallery = () => {
  return (
    <section className="flex flex-col text-white mb-8">
    <div className="flex justify-center items-center my-10">
     <WorkPreview />
    </div>
    <div className="flex justify-between items-center">
      <div>
        <h4 className="mb-4">PREVIOUS PROJECT</h4>
        <div>
          <img src="https://via.placeholder.com/250x150" alt="" />
        </div>
      </div>
      <div className="w-1/5">
        <img src="/src/assets/logo.png" alt="logo" className="w-full" />
      </div>
      <div>
        <h4 className="text-end mb-4">NEXT PROJECT</h4>
        <div>
          <img src="https://via.placeholder.com/250x150" alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}
