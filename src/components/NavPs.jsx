 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faDollarSign,faList,faUser} from '@fortawesome/free-solid-svg-icons'
import EntriesDialogueCn from '@/Containers/EntriesDialogueCn';
 
 
 
 

 
const Nav=({onBtnClick})=>{
   
    
   return(
       <div className=' w-full flex justify-between mt-1   max-w-sm mx-auto '>
         <section className='flex flex-col gap-2' onClick={()=>onBtnClick(0)}>
         <FontAwesomeIcon icon={faHome} className='text-xl text-green-600 hover:text-green-500  active:text-green-900  hover:cursor-pointer' /> 
         <span  className='text-sm text-slate-600'>Dashboard</span>
         </section>
            <EntriesDialogueCn/>
         <section>
     
      </section>

      <section className='flex flex-col gap-2' onClick={()=>onBtnClick(1)}>
      <FontAwesomeIcon icon={faDollarSign}  className='text-xl text-green-600 hover:text-green-500 active:text-green-900 hover:cursor-pointer'/>  
      <span className='text-sm text-slate-600'>Payouts</span>
      </section>

      <section className='flex flex-col gap-2'onClick={()=>onBtnClick(2)} >
      <FontAwesomeIcon icon={faUser} className='text-xl  text-green-600 hover:text-green-500  active:text-green-900 hover:cursor-pointer' />  
      <span className='text-sm text-slate-600'>Profile</span>
      </section>
        
       
     
   
       </div>
   )
}

export default Nav;