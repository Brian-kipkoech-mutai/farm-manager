import { Button } from "@/components/ui/button"
import DashBoard from "./components/DashBoardPs"
import Payouts from "./components/PayoutPs"
import Nav from "./components/NavPs"
import { useState } from "react"
import ProfilePs from "./components/ProfilePs"
import ProfileCn from "./Containers/ProfileCn"
 
 
 

 

function App() {
  const[activeIndex,setActiveIndex]=useState(0)
   const handleBtnClick=(index)=>{
     setActiveIndex(index)
   }
    

  return (
    < div className="h-svh flex  flex-col p-2">
     <div className="flex-1 overflow-auto overflow-x-hidden ">
      
     {
      activeIndex==0?<DashBoard/>:activeIndex==1?<Payouts/>:<ProfileCn/>
     }
        
     </div>
      <Nav onBtnClick={(index)=>handleBtnClick(index)}/>
    </div>
  )
}

export default App
