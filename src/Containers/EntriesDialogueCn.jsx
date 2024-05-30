import { useState } from "react"
import EntryDialoguePs from "../components/EntrieDialoguePs"




const EntriesDialogueCn=()=>{

    const[kilo,setKilo]=useState('')
    const[date,SetDate]=useState(new Date())
    const[userInfo,setUserInfo]=useState({})
     
  const hadleSubmit=()=>{
    const {id, username}=userInfo;
    if(!username){
      alert('choose the employer  or Add one here..(button to profile page)')
      return;
    }
    let price=8*kilo;
      const newData={
         id,
         username,
         dailyKilos:{
          date:{kilo,price}
         }
      }
      const{dailyKilos:newKilos}=newData
      const dataSet= JSON.parse(localStorage.getItem('dataSet'));


      dataSet.map((user)=>{
        const{id:storedId,dailyKilos}=user;

        if(storedId==id){
          const Updated={
            ...dailyKilos,
            newKilos
          }
          return user.dailyKilos=Updated;
        }
        else{
             return  user
        }
      })

  }

    return(
  <EntryDialoguePs
  {...{kilo, date,setKilo,SetDate,setUserInfo,hadleSubmit}}
  />
    )
}

export default EntriesDialogueCn