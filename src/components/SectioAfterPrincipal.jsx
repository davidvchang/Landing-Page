import React from 'react'
import DivSAP from './ui/DivSAP'
import ButtonFooter from './ui/ButtonFooter'
import Div2SAP from './ui/Div2SAP'

function SectioAfterPrincipal() {
  return (
    <section className='flex flex-row w-full h-fit py-10 bg-BG-Gray justify-center items-start gap-16'>

      <div className='flex flex-col gap-5 items-end w-6/12 '>
        <span className='text-BG-Secundary-Green font-semibold text-xl w-96'>Lorem</span>
        <DivSAP/>
        <DivSAP/>
        <DivSAP/>

        <div className='flex flex-row gap-3 w-96 justify-center'>
            <button>
                {atras}
            </button>

            <ButtonFooter/>
            <ButtonFooter/>
            <ButtonFooter/>
            <ButtonFooter/>
            <ButtonFooter/>

            <button>
                {next}
            </button>
        </div>
      </div>

      <div className='flex flex-col items-start gap-5 w-6/12 '>
        <span className='text-BG-Secundary-Green font-semibold text-xl'>lorem</span>
        <Div2SAP 
            title="Lorem" 
            parrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Div2SAP 
            title="Lorem" 
            parrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Div2SAP 
            title="Lorem" 
            parrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Div2SAP 
            title="Lorem" 
            parrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </section>
  )
}

const atras = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left hover:scale-110">
    <path d="m15 18-6-6 6-6"/>
</svg>

const next = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right hover:scale-110">
    <path d="m9 18 6-6-6-6"/>
</svg>

export default SectioAfterPrincipal
