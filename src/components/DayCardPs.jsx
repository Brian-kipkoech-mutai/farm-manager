
  

  const DayCard=({day,kilos,totalPrice})=>{
    return (
      <div className="flex justify-between">
        <section className="">
          <div className="font-semibold text-slate-700 ">{day}</div>
          <div className="text-green-600  text-sm">{kilos} kg harvested</div>
        </section>
        <section className="text-green-600">
          sh{totalPrice.toLocaleString("en-US")}
        </section>
      </div>
    );
 }

 export default DayCard