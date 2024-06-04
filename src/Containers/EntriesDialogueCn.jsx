import { useEffect, useState } from "react"
import EntryDialoguePs from "../components/EntrieDialoguePs"
import { getDocument, setDocument } from "@/fetch_set_Data"




const EntriesDialogueCn=()=>{

    const[kilo,setKilo]=useState('')
    const[date,SetDate]=useState(new Date())
    const[value,setValue]=useState({})
    const[userNameID,setUserandId]=useState([])
    const[isDialogueOpen,setDialogueState]=useState(false)
    const[quality,setQuality]=useState(null);
    const [erroMsg,setErroMsg]=useState('');
 
     
  const hadleSubmit= async()=>{
    const currentDate=date.toString().substring(0,15);
  
    const { username}=value;
    if(!username){
      setErroMsg('Pleas select Employee username!')
       return;
    }
    if(!quality){
      setErroMsg('please  select Quality!')
      return;
    }
    let price=quality*kilo;
      
       const dataSet= await getDocument();

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
       
      await setDocument(updatedDataSet);
      setValue('')
      setKilo('')

      setDialogueState(false)
  }
  const handleValueChage=(valueCaptured)=> {
    setErroMsg(null)
    erroMsg=='Pleas select Employee username!'&&setErroMsg(null);
    setValue(valueCaptured)

    
  }
  const handleQulityChange=(value)=>{
    setQuality(value)
     erroMsg=='please  select Quality!'&&setErroMsg(null);
  }
  
   useEffect(()=>{
   const fetchDt=async()=>{
    const users= await getDocument()||[];
    const userNameID= users.map(({id,username})=>({id,username}))
       setUserandId(userNameID)
   }
   fetchDt()
   },[isDialogueOpen])

    return(
  <EntryDialoguePs
  {...{kilo, date,setKilo,SetDate,hadleSubmit,userNameID,isDialogueOpen,setDialogueState,handleValueChage,value,handleQulityChange,erroMsg}}
  />
    )
}

export default EntriesDialogueCn