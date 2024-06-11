 const eraseData = async () => {
   try {
     const dataSet = (await getDocument()) || [];
     const filteredData = dataSet.map((data) => {
       return {
         ...data,
         dailyKilos: {},
       };
     });
     await setDocument(filteredData);
   } catch (error) {
     console.warn(`Error in data erasing attempt: ${error}`);
   }
 };

 const weeklyDataErase = async () => {
   const currentDate = new Date();

    
   const today = new Date();
   const dayOfWeek = today.getDay();  
   const daysUntilNextSunday = (7 - dayOfWeek) % 7;
   today.setDate(today.getDate() + daysUntilNextSunday);
   today.setHours(23, 59, 59, 999);
   const nextSunday = new Date(today);

   if (!localStorage.getItem("nextEraseDate")) {
     localStorage.setItem("nextEraseDate", nextSunday.toISOString());
   } else {
     const nextDate = new Date(localStorage.getItem("nextEraseDate"));
     if (currentDate >= nextDate) {
       console.log("Deleting previous data", { currentDate, nextDate });
       localStorage.setItem("nextEraseDate", nextSunday.toISOString());
       await eraseData();
     }
   }
 };

 export default weeklyDataErase;
