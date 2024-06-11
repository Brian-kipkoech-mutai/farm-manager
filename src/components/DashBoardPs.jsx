import Nav from "./NavPs";
import DayCard from "./DayCardPs";
import { Skeleton } from "./ui/skeleton";

const DashBoardPs = ({
  finalData,
  totalPriceWeek,
  weekTotalKg,
  loadingParent,
}) => {
  return loadingParent ? (
    <div className=" flex flex-col mx-auto gap-2 w-full text-grey-800 max-w-sm h-full m-2">
      <div className="text-2xl text-grey-800  w-full  ">Payment</div>
      <section className="grid grid-cols-2 gap-2 w-full max-w-sm ">
        <div className="bg-green-50 rounded-lg p-2  grid place-items-center border border-green-300  text-muted-foreground font-semibold">
          <section>total price this week </section>
          <section className="text-2xl font-bold mt-2  text-slate-700">
            <Skeleton className="h-8 w-28 "></Skeleton>
          </section>
        </div>
        <div className="bg-green-50 rounded-lg p-2 grid place-items-center  border border-green-300 text-muted-foreground font-semibold">
          <section>
            total <span className="font-semibold text-slate-800">kg</span> this
            week{" "}
          </section>
          <section className="text-2xl font-bold mt-2  text-slate-700 ">
            <Skeleton className="h-8 w-28 "></Skeleton>
          </section>
        </div>

        <div className="bg-green-50 rounded-lg p-2 grid  pl-4 col-span-2  border border-green-300 text-muted-foreground font-semibold">
          <section>totall paid from feb</section>
          <section className="text-2xl font-bold mt-2 text-slate-700">
            <Skeleton className="h-8 w-28 "></Skeleton>
          </section>
        </div>
      </section>
      <section className="w-full max-w-sm  flex flex-col gap-3 flex-1 overflow-auto ">
        <header className=" text-xl">Daily payout</header>
        {[...Array(7)].map((_, i) => (
          <div className="flex justify-between" key={i}>
            <section className="">
              <div className="font-semibold text-slate-700 ">
                <Skeleton className="h-8"></Skeleton>{" "}
              </div>
              <div className="text-green-600  text-sm">kg harvested</div>
            </section>
            <section className="text-green-600">
              <Skeleton className="h-8 w-20"></Skeleton>
            </section>
          </div>
        ))}
      </section>
    </div>
  ) : (
    <div className=" flex flex-col mx-auto gap-2 w-full text-grey-800 max-w-sm h-full m-2">
      <div className="text-2xl text-grey-800  w-full  ">Payment</div>
      <section className="grid grid-cols-2 gap-2 w-full max-w-sm ">
        <div className="bg-green-50 rounded-lg p-2  grid place-items-center border border-green-300  text-muted-foreground font-semibold">
          <section>total price this week </section>
          <section className="text-2xl font-bold mt-2  text-slate-700">
            sh{totalPriceWeek.toLocaleString("en-US")}
          </section>
        </div>
        <div className="bg-green-50 rounded-lg p-2 grid place-items-center  border border-green-300 text-muted-foreground font-semibold">
          <section>
            total <span className="font-semibold text-slate-800">kg</span> this
            week{" "}
          </section>
          <section className="text-2xl font-bold mt-2  text-slate-700 ">
            {weekTotalKg} kg
          </section>
        </div>

        <div className="bg-green-50 rounded-lg p-2 grid  pl-4 col-span-2  border border-green-300 text-muted-foreground font-semibold">
          <section>totall paid from feb</section>
          <section className=" mt-2  ">
              pending ...
          </section>
        </div>
      </section>
      <section className="w-full max-w-sm  flex flex-col gap-3 flex-1 overflow-auto ">
        <header className=" text-xl">Daily payout</header>
        {/* { Array.from({length:10},(_,i)=><DayCard key={i}/>)} */}
        {finalData.map(({ day, kilos, totalPrice }, i) => (
          <DayCard key={i} {...{ day, kilos, totalPrice }} />
        ))}
      </section>
    </div>
  );
};

export default DashBoardPs;
