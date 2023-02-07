import Masonry from 'masonry-layout'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const WorKPicker = () => {

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

    const navitage = useNavigate()


    const handlePick = () => {
        navitage("work-detail/:id")
    }


    return (
        <div className='grid items-center masonry' data-masonry='{ "itemSelector": ".grid-item", "columnWidth": "200", "fitWidth": "true"}'>
            <div className="grid-sizer w-1/5"></div>
            <div className='w-full lg:w-2/6 grid-item m-6 cursor-pointer hover:scale-105 transition-all' onClick={handlePick}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
            <div className='w-auto h-44 md:h-32 grid-item m-10 cursor-pointer hover:scale-105 transition-all' onClick={handlePick}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
            <div className='w-5/6  md:w-2/6 grid-item m-10 cursor-pointer hover:scale-105 transition-all' onClick={handlePick}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
            <div className='w-3/6  md:w-1/6 grid-item m-10 cursor-pointer hover:scale-105 transition-all' onClick={handlePick}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
            <div className='w-2/6  md:w-2/6 grid-item m-10 cursor-pointer hover:scale-105 transition-all' onClick={handlePick}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
            <div className='w-4/6  md:w-3/6 grid-item mx-80 cursor-pointer hover:scale-105 transition-all' onClick={handlePick}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
            <div className='w-5/6  md:w-2/6 grid-item m-10 cursor-pointer hover:scale-105 transition-all' onClick={handlePick}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
            <div className='w-3/6  md:w-2/6 grid-item m-10 cursor-pointer hover:scale-105 transition-all' onClick={handlePick}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
            <div className='w-4/6  md:w-1/6 grid-item m-10 cursor-pointer hover:scale-105 transition-all' onClick={handlePick}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
            <div className='w-5/6 md:w-2/6 grid-item m-10 cursor-pointer hover:scale-105 transition-all' onClick={handlePick}><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" /></div>
        </div>
    )
}
