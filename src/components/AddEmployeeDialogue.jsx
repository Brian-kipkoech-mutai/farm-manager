import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Label } from "@radix-ui/react-label"
  import { Input } from "./ui/input"
  import { Button } from "@/components/ui/button"
 import React, { useState } from "react"
  


  const AddEmployeeDialogue=({handleChange,inputValue,handleSubmit})=>{
    const [isOpen,setOpen]=useState(false)
   
    return(
       <div> 
                <Dialog className='max-w-sm ' open={isOpen} onOpenChange={setOpen} >
        <DialogTrigger  className='active:bg-green-800 mb-3 bg-green-600 p-2 px-4 rounded-md text-white font-semibold' onClick={()=> setOpen(true)}>
     
        Add new employee
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Employee Onboarding</DialogTitle>
            <DialogDescription>
               Fill in the new employee Data below
            </DialogDescription>
          </DialogHeader>
          <div className=" flex flex-col gap-4">
          <section className="flex flex-col gap-2 ">
            <Label htmlFor="new-employee-name" className="font-bold text-slate-700 ">name</Label>
            <Input id='new-employee-name' placeholder='username' onChange={handleChange} value={inputValue}></Input>
          </section>
          <section className="flex justify-between gap-2">
          <Button className='flex-1 bg-transparent hover:bg-green-100  text-slate-800  active:bg-green-800 active:text-white' >Cancel</Button>
            <Button className='flex-1 active:bg-green-800' onClick={()=>{
              handleSubmit()
             setOpen(false)
            }} >Confirm</Button>
          </section>
          </div>
        </DialogContent>
      </Dialog>

       
      </div>
     )

  }

  export default AddEmployeeDialogue;