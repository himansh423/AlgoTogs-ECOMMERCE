import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loaderAction } from "../store/loader";
const BackImage = () => {
  const dispatch = useDispatch();
  const [imgURL, setImageURL] = useState({});
  const getImage = async () => {
    try {
      const res = await axios.get("http://localhost:8080/");
      console.log(res.data);
      setImageURL(res.data[0].img);
      dispatch(loaderAction.backimg());
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imgURL})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "100vh",
          width: "100vw",
          filter: "brightness(0.4)",
        }}
      ></div>
    </>
  );
};

export default BackImage;
