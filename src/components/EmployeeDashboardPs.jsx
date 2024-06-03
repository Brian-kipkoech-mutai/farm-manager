
// import { Button } from "@/components/ui/button"
 
import {
  Table,
  TableBody,
  
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import DeleteDialogue from "./DeleteDialoguePs";

const EmployeeDashboard=({usersData,handleDelete})=>{
    return(
        <Table>
   
  <TableHeader>
    <TableRow className=''>
      <TableHead className="">Name</TableHead>
      <TableHead className="text-end "> <span className="pr-4"> Action</span></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className='overflow-auto  flex-1'>
   {
     usersData.map(({userId,username},i)=>(
      
    <TableRow key={i}>
      <TableCell className="font-medium" >{username}</TableCell>
      <TableCell className="font-medium text-end"><DeleteDialogue {...{userId,username,handleDelete}}/></TableCell>
       
       
    </TableRow>
   
    ))
   }
   </TableBody>
    
</Table>
    )
}

export default EmployeeDashboard;