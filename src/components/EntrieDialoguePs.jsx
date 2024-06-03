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
 
 
 import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
 


  const EntryDialoguePs=({kilo, date,setKilo,SetDate,handleValueChage,hadleSubmit,userNameID,isDialogueOpen,setDialogueState,value,handleQulityChange,erroMsg})=>{
     
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
               {erroMsg? <span className='font-bold text-red-600 underline uppercase underline-offset-4 w-fit mx-auto block'>{erroMsg}</span>:"Add today's harvest below"}  
            </DialogDescription>
          </DialogHeader>
          <div className='flex flex-col gap-2'>
            <div>
            <Label htmlFor='kilos'>Kilo <span>(kg)</span></Label>
             <Input id='kilos' type='number' onChange={(e)=>setKilo(Number(e.target.value))}  value={kilo} className=' text-slate-800' />
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
                {date ? format(date, "PPP") : <span>Pick a date{date }</span>}
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
            <Label htmlFor="empoyee-list">Select employee</Label>
      <Select  onValueChange={handleValueChage} >
        <SelectTrigger className="w-full " id="employee-list">
          <SelectValue placeholder="Select Name"  />
           <span className='mr-auto'>{value.username}</span>
           
        </SelectTrigger>
        <SelectContent className="shadow-popover-foreground">
          {userNameID.map(({id,username})=><SelectItem key={id} value={{id,username}} className="  active:text-green-800" >{username}</SelectItem>)}
        </SelectContent>
      </Select>
      

          </div>
          <div>
          <Label htmlFor="quality">Select Quality</Label>
      <Select  onValueChange={handleQulityChange} >
        <SelectTrigger className="w-full " id="quality">
          <SelectValue placeholder="Select quality"  />
           <span className='mr-auto'>{null}</span>
           
        </SelectTrigger>
        <SelectContent className="shadow-popover-foreground">
        <SelectItem key={'k.t.d.a'} value={9} className="  active:text-green-800" >{'K.T.D.A'}</SelectItem>
        <SelectItem key={'siomo'} value={7} className="  active:text-green-800" >{'Siomo'}</SelectItem>
        </SelectContent>
      </Select>
      
          </div>
          <div className='w-full flex justify-between gap-2'>
            <Button className='flex-1 bg-transparent hover:bg-green-100 text-slate-800  active:bg-green-800 active:text-white'>Cancel</Button>
            <Button className='flex-1 active:bg-green-800' onClick={()=>{
               
              hadleSubmit()}
            }>Submit</Button>
          </div>
          
        </DialogContent>
      </Dialog>
      
    )
  }
  export default EntryDialoguePs;