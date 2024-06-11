import { getDocument, setDocument } from "./fetch_set_Data";

const eraseData = async () => {
  try {
    const dataSet = (await getDocument()) || [];
    const filterdData = dataSet.map((data) => {
      return {
        ...data,
        dailyKilos: {},
      };
    });
    await setDocument(filterdData);
  } catch (error) {
    console.warn(`error  in data Errasing attempt ${error}`);
  }
};

const weeklyDataErase = async () => {
  const currentDate = new Date();
  const today = new Date();
  const daysUntilNextSunday = 7 - today.getDay();
  today.setDate(today.getDate() + daysUntilNextSunday);
  today.setHours(23, 59, 59, 999);
  const nextSunady = new Date(today);

  if (!localStorage.getItem("nextEraseDate")) {
    localStorage.setItem("nextEraseDate", nextSunady.toISOString());
  } else {
    const nextDate = new Date(localStorage.getItem("nextEraseDate"));
    if (currentDate >= nextDate) {
      console.log('deleting previous data ' ,{currentDate,nextDate});
      localStorage.setItem("nextEraseDate", nextSunady.toISOString());
      await eraseData();
    }
  }
};

export default weeklyDataErase;
