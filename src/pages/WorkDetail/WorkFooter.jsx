import React from 'react'
import { Link } from 'react-router-dom'

export const WorkFooter = () => {
    return (
        <footer className="w-3/4 md:w-1/5 py-12 md:py-36 flex flex-col items-center justify-between order-6 md:order-5">
            <Link to={"/"}>
                <img src="/src/assets/logo.png" alt="logo" className="w-full" />
            </Link>
            <p className='text-white text-sm md:text-2xl'>wearefirmes@gmail.com</p>
        </footer>
    )
}
