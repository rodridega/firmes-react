import React from 'react'

export const WorkGallery = ({ images, setImagePreviewActive, description }) => {
  return (
    <div className='md:flex order-4 md:order-3'>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between 3 md:w-2/6">
        <div className="w-full my-4 ">
          <p className="text-xs md:text-xl text-white leading-6">
            {description}
          </p>
        </div>

      </div>
      <div className="columns-1 lg:columns-3 w-full md:w-4/6 gap-4 ">
        {/* {images.map((image) => {
            return (
              <div className="mx-2" key={image}>
                <img src={image} alt={image} />
              </div>
            )
          })} */}

        <div className="mx-2 max-w-full h-72 mb-4 cursor-pointer" onClick={() => setImagePreviewActive(3)} >
          <img src={images[3]} alt={images[3]} className="h-full object-cover" />
        </div>
        <div className="mx-2 max-w-full h-72 mb-4 cursor-pointer" onClick={() => setImagePreviewActive(1)} >
          <img src={images[1]} alt={images[1]} className="h-full object-cover" />
        </div>
        <div className="mx-2 max-w-full h-72 mb-4 cursor-pointer" onClick={() => setImagePreviewActive(2)} >
          <img src={images[2]} alt={images[2]} className="h-full object-cover" />
        </div>
      </div>
    </div>

  )
}
