 
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
  
 const Payouts=()=>{

  return(
    <div>
  
  <Accordion type="single" collapsible className="mx-auto max-w-md">
   {
    Array.from(['Daizy','Joan','Nancy,','daizy'],(name,i)=>(
      <AccordionItem value={`item${i+1}`}  >
    <AccordionTrigger  className=''>{name} <span className="ml-auto pr-2">sh300</span></AccordionTrigger>
  
    <AccordionContent>
    <Table>
  <TableCaption>{name}'s record for th past seven days</TableCaption>
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
      Array.from({length:7},()=>(
        <TableRow>
        <TableCell className="font-medium text-slate-800">Monday</TableCell>
        <TableCell className="font-base">30kg</TableCell>
        <TableCell className="font-base text-slate-800">{new Date().toDateString()}</TableCell>
        <TableCell className="text-right font-medium ">sh200</TableCell>
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
 export default Payouts;