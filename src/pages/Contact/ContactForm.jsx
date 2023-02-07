import React from 'react'
import ContactInput from './ContactInput'

export const ContactForm = () => {
    return (
        <>

            <div className='w-2/5'>
                <form className='p-4 md:w-1/2 bg-firmes-form w-full relative'>
                    <ContactInput label={"First Name"} required={false}/>

                </form>
                <form className='p-4 md:w-1/2 bg-firmes-form w-full relative bottom-20 left-1/3'>
                    <ContactInput label={"First Name"} required={false}/>
                </form>
            </div>
            <div className='w-4/5 '>
                <form className='p-4 md:w-1/2 bg-firmes-form w-full relative'>
                    <ContactInput label={"Email *"} required={true} />

                </form>
                <form className='p-4 md:w-1/2 bg-firmes-form w-full relative bottom-20 left-1/3'>
                    <ContactInput label={"Subject *"} required={true}/>
                </form>
            </div>
            <div className='w-4/5 flex justify-center items-center'>
                <form className='p-4 md:w-1/2 bg-firmes-form flex justify-center items-start flex-col '>
                    <label className="block text-lg m-2">
                        Message *
                    </label>
                    <textarea rows="5" cols="30" name='message' className='block w-full rounded-md border border-solid border-gray-300 p-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'></textarea>
                </form>
            </div>
        </>
    )
}
