import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
import { useState } from "react"

const DeleteDialoguePs=({username,userId,handleDelete})=>{
  const[isOpen,setOpen]=useState(false)
    return(
<Dialog open={isOpen} onOpenChange={setOpen}   >
  <DialogTrigger className='hover:bg-red-600 bg-red-500 active:bg-red text-white  px-4 py-2 rounded-md'> Delete </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription className='font-base text-slate-600'>
        This action cannot be undone. This will permanently delete  <span className="font-bold ">{username}</span>  and remove All data from our server.
      </DialogDescription>
    </DialogHeader>
    <div className="flex justify-between gap-2  ">
      <Button  className="flex-1 shadow-card-foreground active:bg-green-900 bg-transparent text-slate-800 active:text-white hover:text-white">cancel</Button>
      <Button className="flex-1 bg-red-500 hover:bg-red-600 active:bg-red-800 shadow-red-950  "
       onClick={()=> {
        setOpen(false)
        handleDelete(userId)
        console.log('user id ,',userId);
       }}
      >Continue</Button>
    </div>
  </DialogContent>
   
</Dialog>

    )
}

export default DeleteDialoguePs;