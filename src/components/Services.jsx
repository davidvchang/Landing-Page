import React from 'react'
import ServicesAvailable from './ui/ServicesAvailable'

function Services() {
  return (
    <section className='w-full h-fit py-40 bg-BG-Gray flex flex-row gap-5 justify-center items-center'>


        <div className='w-64 h-fit flex flex-col bg-BG-Blue-Marine gap-4 rounded-sm justify-center pl-14 py-4 text-BG-Gray shadow-md'>
            <span className='text-BG-Secundary-Green'>lorem lorem</span>
            <ul className='flex flex-col gap-2'>
                <ServicesAvailable icon={palomitaGreen} text="lorem"/>
                <ServicesAvailable icon={palomitaGreen} text="lorem"/>
                <ServicesAvailable icon={palomitaGreen} text="lorem"/>
                <ServicesAvailable icon={palomitaGreen} text="lorem"/>
                <ServicesAvailable icon={x} text="lorem"/>
                <ServicesAvailable icon={x} text="lorem"/>
            </ul>

        </div>

        <div className='w-64 h-fit flex flex-col bg-BG-Secundary-Green gap-4 rounded-sm justify-center pl-14 py-6 shadow-md'>
            <span>lorem lorem</span>
            <ul className='flex flex-col gap-2'>
                <ServicesAvailable icon={palomita} text="lorem"/>
                <ServicesAvailable icon={palomita} text="lorem"/>
                <ServicesAvailable icon={palomita} text="lorem"/>
                <ServicesAvailable icon={palomita} text="lorem"/>
                <ServicesAvailable icon={palomita} text="lorem"/>
                <ServicesAvailable icon={palomita} text="lorem"/>
                <ServicesAvailable icon={palomita} text="lorem"/>
                <ServicesAvailable icon={palomita} text="lorem"/>
            </ul>

        </div>

        <div className='w-64 h-fit flex flex-col bg-BG-Blue-Marine gap-4 rounded-sm justify-center pl-14 py-4 text-BG-Gray shadow-md'>
            <span className='text-BG-Secundary-Green'>lorem lorem</span>
            <ul className='flex flex-col gap-2'>
                <ServicesAvailable icon={palomitaGreen} text="lorem"/>
                <ServicesAvailable icon={palomitaGreen} text="lorem"/>
                <ServicesAvailable icon={palomitaGreen} text="lorem"/>
                <ServicesAvailable icon={palomitaGreen} text="lorem"/>
                <ServicesAvailable icon={x} text="lorem"/>
                <ServicesAvailable icon={x} text="lorem"/>
            </ul>

        </div>
    </section>
  )
}

const palomita = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-BG-Blue-Marine">
    <path d="M20 6 9 17l-5-5"/>
</svg>

const palomitaGreen = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-BG-Secundary-Green">
    <path d="M20 6 9 17l-5-5"/>
</svg>

const x = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-BG-Secundary-Green"><path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
</svg>

export default Services