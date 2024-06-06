
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
import { Skeleton } from "./ui/skeleton";

const EmployeeDashboard=({usersData,handleDelete,loading})=>{
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
     
     loading?
      [...Array(3)].map((_,i)=>(
        <TableRow key={i}>
        <TableCell className="font-medium"><Skeleton className="h-10"></Skeleton></TableCell>
        <TableCell className="font-medium text-end"><Skeleton className=' active:bg-red bg-red-100  h-10 w-20 rounded-md ml-auto'></Skeleton></TableCell>
      </TableRow>
      )
      
      
     )
      : usersData.map(({userId,username},i)=>(
      
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