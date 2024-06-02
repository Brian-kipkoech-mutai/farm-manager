import { useEffect, useState } from "react";
import DashBoardPs from "../components/DashBoardPs"




 const DashboardCn=()=>{

    const [finalData,setFinalData]=useState([])
    const [totalPriceWeek,setTotalPriceWeek]=useState(0)
    const [weekTotalKg,setTotalKiloWeek]=useState(0)
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
   const dataSet= JSON.parse(localStorage.getItem('dataSet'));
   const kilos=dataSet.map(({dailyKilos})=>dailyKilos);
   const MappedData=daysOfTheWeek.map((day)=>{
    return kilos.map((dataObject)=>{
        const keys =Object.keys(dataObject);
        const key = keys.find((key)=>key.includes(day))
    if(key){
        return {[day]:dataObject[key]}
    }
    else{
        return null
    }
    }).filter(data=>data!=null)
   })

    
    const CleaneData=MappedData.map((data,i)=>{
        const day=daysOfTheWeek[i];
const kilos=data.map(data=>data[day].kilo).reduce((acc,kilo)=>acc+Number(kilo),0);
const totalPrice=data.map(data=>data[day].price).reduce((acc,price)=>acc+Number(price),0);
       return {
          day: day,
          kilos:kilos,
          totalPrice:totalPrice

        }
    }).map((data,i)=>({...data,day:completeDaysOfTheWWeek[i]}))
  
    setFinalData(CleaneData)
       
    const PriceWeek=CleaneData.reduce((acc,{totalPrice})=>acc+Number(totalPrice),0);
    setTotalPriceWeek(PriceWeek)
     const totalKilosWeek= CleaneData.reduce((acc,{kilos})=>acc+Number(kilos),0);
     setTotalKiloWeek(totalKilosWeek)

    },[])
    
    
    return(

        <DashBoardPs
        {...{finalData,totalPriceWeek,weekTotalKg}}
        />
    )

}

export default DashboardCn;