import { useEffect, useState } from "react"
import EntryDialoguePs from "../components/EntrieDialoguePs"




const EntriesDialogueCn=()=>{

    const[kilo,setKilo]=useState('')
    const[date,SetDate]=useState(new Date())
    const[value,setValue]=useState({})
    const[userNameID,setUserandId]=useState([])
    const[isDialogueOpen,setDialogueState]=useState(false)
 
     
  const hadleSubmit=()=>{
    const currentDate=date.toString().substring(0,15);
  
    const { username}=value;
    if(!username){
      alert('choose the employer  or Add one here..(button to profile page)')
      return;
    }
    let price=8*kilo;
      
       const dataSet= JSON.parse(localStorage.getItem('dataSet'));

      const newKilos_price={kilo,price}
      const{id:currentId}=value;

      const updatedDataSet=dataSet.map((user)=>{
 
        const{id:storedId,dailyKilos}=user;

        if(storedId==currentId){
          const updatedKilos = {
            ...dailyKilos,
            [currentDate]: dailyKilos[currentDate]
              ? {
                  kilo:  Number(dailyKilos[currentDate].kilo) + Number(kilo),
                  price:  Number(dailyKilos[currentDate].price) + Number(price),
                }
              : newKilos_price,
          };
          return {...user, dailyKilos:updatedKilos};

        }else{
             return  user
        }

      })
      localStorage.setItem('dataSet',JSON.stringify(updatedDataSet));
      setValue('')
      setKilo('')


  }
  const handleValueChage=(valueCaptured)=> {
    
  
    setValue(valueCaptured)
    
  }
  
   useEffect(()=>{
   const users= JSON.parse(localStorage.getItem('dataSet'))||[];
   const userNameID= users.map(({id,username})=>({id,username}))
      setUserandId(userNameID)
   },[isDialogueOpen])

    return(
  <EntryDialoguePs
  {...{kilo, date,setKilo,SetDate,hadleSubmit,userNameID,isDialogueOpen,setDialogueState,handleValueChage,value}}
  />
    )
}

export default EntriesDialogueCn