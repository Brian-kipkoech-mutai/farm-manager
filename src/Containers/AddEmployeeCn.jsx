import AddEmployeeDialogue from "@/components/AddEmployeeDialogue";



const AddEmployeeCn=({handleSubmit,handleChange,inputValue,errorMsg,isOpen,handleOpenState,handleCancel})=>{
    
     

    return(
     <AddEmployeeDialogue
     {...{handleChange,inputValue,handleSubmit,errorMsg,isOpen,handleOpenState,handleCancel}}
     />
    )
}


export default AddEmployeeCn;