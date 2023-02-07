import Masonry from 'masonry-layout'
import React, { useEffect } from 'react'

export const ImagesHomeWrapper = () => {


  useEffect(() => {
    let elem = document.querySelector('.masonry')
    let msnry = new Masonry(elem, {
      itemSelector: '.grid-item',
      columnWidth: 300,
      percentPosition: true,
      fitWidth: true
    })

    msnry.layout()

  }, [])



  return (
    <div className='grid items-center masonry' data-masonry='{ "itemSelector": ".grid-item", "columnWidth": "200", "fitWidth": "true"}'>
      <div className="grid-sizer w-1/5"></div>
      <div className='w-full lg:w-2/6 grid-item m-6 '><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className='w-5/6 bg-transparent md:w-1/6 px-4 grid-item md:bg-slate-300 p-2 text-box z-30'>
        <p className='text-xs md:text-lg'>Firmes is a worldwide studio, specialising in content production. Our goal is to guide brands and personal brands through the constantly shifting digital world using a content-first marketing approach. We provide human-centric solutions that foster brand authenticity and create true value to communities</p>
      </div>
      <div className='w-auto h-44 md:h-32 grid-item m-10'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className='w-5/6  md:w-2/6 grid-item m-10'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className='w-3/6  md:w-1/6 grid-item m-10'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className='w-2/6  md:w-2/6 grid-item m-10'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className='w-4/6  md:w-3/6 grid-item mx-80'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className='w-5/6  md:w-2/6 grid-item m-10'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className='w-3/6  md:w-2/6 grid-item m-10'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className='w-4/6  md:w-1/6 grid-item m-10'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
      <div className='w-5/6 md:w-2/6 grid-item m-10'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
    </div>
  )
}
