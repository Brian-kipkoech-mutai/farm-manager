import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
 
import { Moon, Sun } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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

const ProfilePs =()=>{
  return(
    <div className="h-full p-2 max-w-sm w-full mx-auto flex flex-col gap-4 ">
       <section className="w-full flex  flex-col gap-4 ">
   <header className="mx-auto w-fit text-xl text-slate-800 ">Account</header>
       <section className="flex justify-between ">
       <section>
       <Avatar className='w-20 h-20 mb-2'>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>BR</AvatarFallback>
</Avatar>
 <h2 className="text-lg font-semibold text-slate-800">Brian</h2>
 <h3 className="text-muted-foreground text-green-700 "> @Gusman</h3>
       </section>
       <section>
       <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
       </section>
  
       </section>

       </section>
       <section className="flex-1 overflow-auto flex flex-col ">
        <h2 className="text-center text-lg font-medium text-slate-800">Manage Workers</h2>
        <Table>
   
  <TableHeader>
    <TableRow className=''>
      <TableHead className="">Name</TableHead>
      <TableHead className="text-end "> <span className="pr-4"> Action</span></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className='overflow-auto  flex-1'>
   {
    ['Daizy','Joan','Diana',"Mary"].map((name)=>(
      
    <TableRow>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell className="font-medium text-end"><Button className='hover:bg-red-600 bg-red-500 active:bg-red'>Delete</Button></TableCell>
       
       
    </TableRow>
   
    ))
   }
   </TableBody>
    
</Table>

       </section>
       <section>
       <Dialog className='max-w-sm '>
  <DialogTrigger>
  <Button  className='active:bg-green-800 mb-3'>Add new employee</Button>

  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Employee Onboarding</DialogTitle>
      <DialogDescription>
         Fill in the new employee Data belo
      </DialogDescription>
    </DialogHeader>
    <div className=" flex flex-col gap-4">
    <section>
      <Label htmlFor="new-employee-name">name</Label>
      <Input id='new-employee-name'></Input>
    </section>
    <section className="flex justify-between gap-2">
    <Button className='flex-1 bg-transparent hover:bg-green-100  text-slate-800  active:bg-green-800 active:text-white'>Cancel</Button>
      <Button className='flex-1 active:bg-green-800' >Confirm</Button>
    </section>
    </div>
  </DialogContent>
</Dialog>
        </section>
    </div>
  )
}

export  default ProfilePs;