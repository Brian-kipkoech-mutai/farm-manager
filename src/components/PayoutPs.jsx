 
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
 const PayoutsPs=({cleandData})=>{

  return(
    
    <div>
  
  <Accordion type="single" collapsible className="mx-auto max-w-sm m-2">
   {
     cleandData.map(({ username,totaLPrice,eachDayData})=>(
       <AccordionItem value={username}  >
    <AccordionTrigger  className=''>{username} <span className="ml-auto pr-2">sh{totaLPrice.toLocaleString('en-US')}</span></AccordionTrigger>
  
    <AccordionContent>
    <Table>
  <TableCaption>{username}'s record for th past seven days</TableCaption>
  <TableHeader>
    <TableRow className=''> 
      <TableHead className="w-[100px]">Day</TableHead>
      <TableHead>Amaount <span>(kg)</span></TableHead>
      <TableHead>Date</TableHead>
     
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
      eachDayData.map(({day,kilo,price,date})=>(
      
        <TableRow key={day}>
        <TableCell className="font-medium text-slate-800">{day}</TableCell>
        <TableCell className="font-base">{kilo}kg</TableCell>
        <TableCell className="font-base text-slate-800">{date}</TableCell>
        <TableCell className="text-right font-medium ">sh{price.toLocaleString('en-US')}</TableCell>
      </TableRow>
      ))
      
    }
  </TableBody>
</Table>

    </AccordionContent>
  </AccordionItem>
     ))
   }
</Accordion>
 </div>
  )

    
 }
 export default PayoutsPs;