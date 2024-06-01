import PayoutsPs from "@/components/PayoutPs";
import { useEffect, useState } from "react";

 


const PayoutsCs=()=>{

    const[cleandData,setCleanedData]=useState([]);
    const daysOfTheWeek=[
        'Mon',
        'Tue',
        'wed',
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
    const dataSet= JSON.parse(localStorage.getItem('dataSet'));
   
 

    const mappedData=dataSet.map(({username,dailyKilos})=>{
    const totaLPrice=Object.values(dailyKilos).map(({price})=>Number(price)).reduce((acc,price)=>acc+price,0);
    const eachDayData=daysOfTheWeek.map((currentDay,i)=>{
    
     return{
      day:completeDaysOfTheWWeek[i],
      kilo:dailyKilos[Object.keys(dailyKilos).find((day=>day.includes(currentDay)))]?.kilo||null,
      price:dailyKilos[Object.keys(dailyKilos).find((day=>day.includes(currentDay)))]?.price||null
 
     }
    }).filter(({kilo})=>kilo!=null);
 
     return{
     username,
     totaLPrice,
     eachDayData
     }
    })
    
 setCleanedData(mappedData);
 
   },[])



    return(
        <PayoutsPs {...{cleandData}}/>
         
    )
}
export default PayoutsCs;