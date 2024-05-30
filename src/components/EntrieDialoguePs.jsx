import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
 
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
 
 import { CalendarIcon } from "@radix-ui/react-icons"
 import { format, setDate } from "date-fns"
  
 import { cn } from "@/lib/utils"
 import { Button } from "@/components/ui/button"
 import { Calendar } from "@/components/ui/calendar"
 import {
   Popover,
   PopoverContent,
   PopoverTrigger,
 } from "@/components/ui/popover"
 
 import { useEffect, useState } from 'react';
 import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
 


  const EntryDialogue=({kilo, date,setKilo,SetDate,setUserInfo,hadleSubmit})=>{
    // const [date, setDate] = useState(new Date())
  //  const[kilo,setKilo]=useState('')
   const[isDialogueOpen,setDialogueState]=useState(false)
    return(

        <Dialog className='rounded-lg   max-w-sm' open={isDialogueOpen} onOpenChange={setDialogueState}>
        <DialogTrigger onClick={()=>setDialogueState(true)}>
         <div className='flex flex-col gap-2' >
        <FontAwesomeIcon icon={faList} className='text-xl text-green-600 hover:text-green-500 active:text-green-900 hover:cursor-pointer' /> 
          <span className='text-sm text-slate-600'>Entries</span>
         </div></DialogTrigger>
        <DialogContent>
          <DialogHeader className='flex  flex-col gap-2 '>
            <DialogTitle className=' text-left'>Daily harvest</DialogTitle>
            <DialogDescription>
               Add today's harvest below
            </DialogDescription>
          </DialogHeader>
          <div className='flex flex-col gap-2'>
            <div>
            <Label htmlFor='kilos'>Kilo <span>(kg)</span></Label>
             <Input id='kilos' type='text' onChange={(e)=>setKilo(e.target.value)}  value={kilo} className=' text-slate-800' />
            </div>
             <Popover>
            <PopoverTrigger asChild>
             
             <div>
              <div>
              <Label htmlFor='triger-popover'>Pick Date</Label>
              </div>
             <Button
                variant={"outline"}
                className={cn( 
                  " text-slate-800 w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date{date}</span>}
              </Button>
             </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={SetDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          </div>
          <div>
            <Label htmlFor="empoyee-list">Choose Employee</Label>
          <Select >
        <SelectTrigger className="w-full " id="employee-list">
          <SelectValue placeholder="Select Name"  />
        </SelectTrigger>
        <SelectContent className=''>
          <SelectItem value="light" className="  active:text-green-800" onClick={()=>setUserInfo({id:"id",username:'username'})}>Diana</SelectItem>
          <SelectItem value="dark" className=" active:text-green-800">Nancy</SelectItem>
          <SelectItem value="system" className=" active:text-green-800">Joan</SelectItem>
        </SelectContent>
      </Select>
      
          </div>
          <div className='w-full flex justify-between gap-2'>
            <Button className='flex-1 bg-transparent hover:bg-green-100 text-slate-800  active:bg-green-800 active:text-white'>Cancel</Button>
            <Button className='flex-1 active:bg-green-800' onClick={()=>{
              setDialogueState(false)
              hadleSubmit()}
            }>Submit</Button>
          </div>
          
        </DialogContent>
      </Dialog>
      
    )
  }
  export default EntryDialogue;