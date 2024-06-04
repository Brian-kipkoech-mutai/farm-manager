import PayoutsPs from "@/components/PayoutPs";
import { getDocument } from "@/fetch_set_Data";
import { useEffect, useState } from "react";

 


const PayoutsCs=()=>{

    const[cleandData,setCleanedData]=useState([]);
    const daysOfTheWeek=[
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
    ]
    const completeDaysOfTheWWeek=[
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Sartuday",
        "Sunday",
    ]

    
   useEffect(()=>{
      const fetchData=async()=>{
        const dataSet= await getDocument()||[];


       
 

        const mappedData=dataSet.map(({username,dailyKilos})=>{
        const totaLPrice=Object.values(dailyKilos).map(({price})=>Number(price)).reduce((acc,price)=>acc+price,0);
        const eachDayData=daysOfTheWeek.map((currentDay,i)=>{
        const key=Object.keys(dailyKilos).find((day=>day.includes(currentDay)))
         return{
          day:completeDaysOfTheWWeek[i],
          kilo:dailyKilos[key] ?.kilo||null,
          price:dailyKilos[key]?.price||null,
          date:key
     
         }
        }).filter(({kilo})=>kilo!=null);
     
         return{
         username,
         totaLPrice,
         eachDayData
         }
        })
        
     setCleanedData(mappedData);
     
    
      }
      fetchData()

},[])



    return(
        <PayoutsPs {...{cleandData}}/>
         
    )
}
export default PayoutsCs;