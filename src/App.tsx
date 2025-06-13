//import { useState } from 'react'
import { Button } from "@/components/ui/button"

import { AccordionDemo } from './components/AccordionDemo.tsx'

import { DialogCloseButton } from './components/DialogDemo.tsx'



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid justify-center">
        <h1>Good Evening</h1>
        <Button>Click me</Button>

        <AccordionDemo />

        <DialogCloseButton />
      </div>
    </>
  )
}

export default App
