import ProfilePs from "@/components/ProfilePs";
import { useEffect, useState } from "react";


const ProfileCn=()=>{
//  localStorage.clear()


     const[inputValue,setValue]=useState('');
     const[newUser,setUser]=useState('');
     const [dataSetMain,setDataSetMain]=useState([]);
     const [usersData,setUsersData]=useState([]);
     

     const handleChange=({target})=>{
        setValue(target.value)
           }
  
   const fetchData=()=>{
            const dataSet= localStorage.getItem('dataSet');
                const pasredData= JSON.parse(dataSet)||[];
               setDataSetMain(pasredData);
                return pasredData;
            }

   const handleSubmit=()=>{
     setUser(inputValue)
            if(fetchData().find(({username})=>username==inputValue)){
                alert(
                    'A user with the same username Already exist pleas choose a diffrent user name'
                )
                return;
            }
           
            const userTemplate={
                id:null,
                username:null,
                dailyKilos:{}
                }
                
             if(!localStorage.getItem('dataSet')){
                const dataSet=[];
                localStorage.setItem('dataSet', JSON.stringify(dataSet))
             }
          
              
             
            userTemplate.id=fetchData().length;
            userTemplate.username=inputValue;
        
            const updatedDataSet=[...fetchData(),userTemplate];
            localStorage.setItem('dataSet',JSON.stringify(updatedDataSet))
         
        }
    const handleDelete=(id)=>{
        console.log(id);
        fetchData();
        const filterdData= dataSetMain.filter(({id:userId})=> userId!=id);
        localStorage.setItem('dataSet',JSON.stringify(filterdData))
        
    
    }
        

     useEffect(()=>{
        
            const usersData=fetchData().map(({id:userId,username})=>({userId,username}))
        console.log(usersData);
           setUsersData(usersData)


     },[newUser])

       
  

    return(

        <ProfilePs
         {...{usersData,handleSubmit,handleChange,inputValue,handleDelete}}
        />
    )
}
export default ProfileCn;