import ProfilePs from "@/components/ProfilePs";
import { useEffect, useState } from "react";
import { setDocument, getDocument } from "../fetch_set_Data";

const ProfileCn = () => {
  const [inputValue, setValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [usersData, setUsersData] = useState([]);

  const handleChange = ({ target }) => {
    setValue(target.value);
    setErrorMsg("");
  };

  const handleCancel = () => {
    setValue("");
    setOpen(false);
  };

  const handleOpenState = (boolen) => {
    console.log("called  for boolen");
    setOpen(boolen);
  };

  const dataIndb = async () => {
    return await getDocument();
  };
  const handleSubmit = async () => {
    if (!inputValue) {
      setErrorMsg("Input username !");
      return;
    }
    handleOpenState(false);
    setLoading(true);

    const dataSet = await dataIndb();
    if (dataSet.find(({ username }) => username == inputValue)) {
      setLoading(false);
      alert(
        "A user with the same username Already exist pleas choose a diffrent user name"
      );
      return;
    }

    const userTemplate = {
      id: null,
      username: null,
      dailyKilos: {},
    };

    userTemplate.id = `${dataSet.length}${inputValue}`;
    userTemplate.username = inputValue;

    const updatedDataSet = [...dataSet, userTemplate];

    await setDocument(updatedDataSet);
    setUsersData(updatedDataSet);
    setValue("");
    setLoading(false);
  };

  const userFilterdData = async () => {
    const dataSet = await dataIndb();
    return dataSet.map(({ id: userId, username }) => ({ userId, username }));
  };
  const handleDelete = async (id) => {
    setLoading(true);

    const dataSet = await dataIndb();
    const filterdData = dataSet.filter(({ id: userId }) => userId != id);

    await setDocument(filterdData);
    setUsersData(await userFilterdData());

    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setUsersData(await userFilterdData());
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <ProfilePs
      {...{
        usersData,
        handleSubmit,
        handleChange,
        inputValue,
        handleDelete,
        errorMsg,
        isOpen,
        handleOpenState,
        handleCancel,
        loading,
      }}
    />
  );
};
export default ProfileCn;
