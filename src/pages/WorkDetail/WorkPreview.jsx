import React from 'react'

export const WorkPreview = ({image, video}) => {
  return (

    <div className="w-full order-2 md:order-1">
      <img className='w-full' src={image} alt={image} />
      {/* <iframe width="100%" height="800px" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  )
}
