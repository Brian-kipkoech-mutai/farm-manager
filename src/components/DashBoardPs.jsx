import Nav from './NavPs'
import DayCard from "./DayCardPs";
 




const DashBoard=()=>{
    return(
    <div className=" flex flex-col mx-auto gap-2 w-full text-grey-800 max-w-sm h-full">
        <div className="text-2xl text-grey-800  w-full  ">Payment</div>
         <section className="grid grid-cols-2 gap-2 w-full max-w-sm ">
         <div className="bg-green-100 rounded-lg p-2  grid place-items-center border border-green-300  "><section>total this week </section>
             <section className="text-2xl font-bold mt-2">sh1,200</section>
        </div>
         <div className="bg-green-100 rounded-lg p-2 grid place-items-center  border border-green-300">
         <section>Last payout </section>
             <section className="text-2xl font-bold mt-2">sh300</section>
         </div>
         
         <div className="bg-green-100 rounded-lg p-2 grid  pl-4 col-span-2  border border-green-300">
            <section>totall paid from feb</section>
            <section className="text-2xl font-bold mt-2">sh3,000</section>
         </div>
         </section>
         <section className="w-full max-w-sm  flex flex-col gap-3 flex-1 overflow-auto ">
            <header className=" text-xl">Daily payout</header>
        { Array.from({length:10},(_,i)=><DayCard key={i}/>)}
        
         </section>
    </div>
    )
}

export default DashBoard;