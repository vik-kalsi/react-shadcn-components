//import { useState } from 'react'

import { Button } from "@/components/ui/button"
import { AccordionDemo } from './components/AccordionDemo.tsx'
import { DialogCloseButton } from './components/DialogDemo.tsx'
import { CardDemo } from './components/CardDemo.tsx'
import { OTPDemo } from './components/OTPDemo.tsx'
import { SwitchDemo } from './components/SwitchDemo.tsx'
import { CalendarDemo } from './components/CalendarDemo.tsx'
import { RadioDemo } from './components/RadioDemo.tsx'
import { CommandDemo } from './components/CommandDemo.tsx'
import { SkeletonDemo } from './components/SkeletonDemo.tsx'



function App() {

  return (
    <>
      <div className="grid justify-center min-h-screen bg-sky-400">
        
        <div className="space-y-32 my-6">
          <div className="border-4 border-black p-4">
            <Button>Click me</Button>
          </div>


          <div className="border-4 border-black p-4">
            <AccordionDemo />
          </div>


          <div className="border-4 border-black p-4">
            <DialogCloseButton />
          </div>


          <div className="border-4 border-black p-4">
            <CardDemo />
          </div>


          <div className="border-4 border-black p-4">
            <OTPDemo />
            <OTPDemo />
            <OTPDemo />
          </div>


          <div className="border-4 border-black p-4">
            <SwitchDemo />
            <SwitchDemo />
          </div>



          <div className="border-4 border-black p-4">
            <CalendarDemo />
          </div>


          <div className="border-4 border-black p-4">
            <RadioDemo />
          </div>


          <div className="border-4 border-black p-4">
            <CommandDemo />
          </div>


          <div className="border-4 border-black p-4">
            <SkeletonDemo />
          </div>



        </div>
      </div>
    </>
  )
}



export default App