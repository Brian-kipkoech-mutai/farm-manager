
import Nav from "./components/NavPs"
import { useState } from "react"
 
import ProfileCn from "./Containers/ProfileCn"
 
import DashboardCn from "./Containers/DashboardCn"
import PayoutsCs from "./Containers/PayoutsCs"
 
 
 

 

function App() {
  const[activeIndex,setActiveIndex]=useState(0)
   const handleBtnClick=(index)=>{
     setActiveIndex(index)
   }
    

  return (
    < div className="h-svh flex  flex-col p-2">
     <div className="flex-1 overflow-auto overflow-x-hidden ">
      
     {
      activeIndex==0?<DashboardCn/>:activeIndex==1?<PayoutsCs/> :<ProfileCn/>
     }
        
     </div>
      <Nav onBtnClick={(index)=>handleBtnClick(index)}/>
    </div>
  )
}

export default App
