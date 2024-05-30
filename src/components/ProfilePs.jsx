import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ToggleTheme from "./toggleThemePs"
import EmployeeDashboard from "./EmployeeDashboardPs"
import AddEmployeeCn from "@/Containers/AddEmployeeCn"
 
const ProfilePs =({usersData,handleSubmit,handleChange,inputValue,handleDelete})=>{
  console.log('userData',usersData);
  
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
    <ToggleTheme/>
       </section>
        
       </section>

       </section>
       <section className="flex-1 overflow-auto flex flex-col ">
        <h2 className="text-center text-lg font-medium text-slate-800">Manage Workers</h2>
         
      <EmployeeDashboard {...{usersData,handleDelete}}/>
       </section>
       <section>
       <div className="w-fit mx-auto">
       <AddEmployeeCn {...{handleSubmit,handleChange,inputValue}}/>
       </div>
        </section>
    </div>
  )
}

export  default ProfilePs;