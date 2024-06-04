import ProfilePs from "@/components/ProfilePs";
import { useEffect, useState } from "react";
import { setDocument, getDocument } from "../fetch_set_Data";

 
 

const ProfileCn=()=>{
 


     const[inputValue,setValue]=useState('');
     
      
     const [usersData,setUsersData]=useState([]);
     

     const handleChange=({target})=>{
        setValue(target.value)
           }
  
    
    
    const dataIndb=async()=>{
        return  await getDocument()
    }
   const handleSubmit= async()=>{
     
      const dataSet=await dataIndb()
            if( dataSet.find(({username})=>username==inputValue)){
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
                
             
          
              
             
            userTemplate.id=`${dataSet.length}${inputValue}`;
            userTemplate.username=inputValue;
        
            const updatedDataSet=[...dataSet,userTemplate];
           
              await setDocument(updatedDataSet);
              setUsersData(updatedDataSet)
              setValue('')
         
        }
        
        const userFilterdData=async()=>{
            const dataSet=await dataIndb()
            return  dataSet.map(({id:userId,username})=>({userId,username}))
        
        }
    const handleDelete= async(id)=>{
    
         ; const dataSet=await dataIndb()
        const filterdData=dataSet.filter(({id:userId})=> userId!=id);

       
        
            await setDocument(filterdData);
         setUsersData( filterdData)
        
         
    }
        

     useEffect(()=>{
        const fetchData = async () => {
            setUsersData(await userFilterdData());
        };
        fetchData();
            
         


     },[])

       
  

    return(

        <ProfilePs
         {...{usersData,handleSubmit,handleChange,inputValue,handleDelete}}
        />
    )
}
export default ProfileCn;