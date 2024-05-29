import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
 
import { Moon, Sun } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { useTheme } from "@/components/theme-provider"
const ProfilePs =()=>{
  return(
    <div className="h-full p-2 max-w-sm w-full mx-auto flex flex-col gap-4 ">
       <section className="w-full flex  flex-col gap-4 ">
   <header className="mx-auto w-fit text-xl text-slate-800 ">Account</header>
       <section className="flex justify-between items-center">
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
       <section>
        <h2 className="text-center text-lg font-medium text-slate-800">Manage Workers</h2>
       </section>
    </div>
  )
}

export  default ProfilePs;