import AddEmployeeDialogue from "@/components/AddEmployeeDialogue";



const AddEmployeeCn=({handleSubmit,handleChange,inputValue})=>{
    
     

    return(
     <AddEmployeeDialogue
     {...{handleChange,inputValue,handleSubmit}}
     />
    )
}


export default AddEmployeeCn;