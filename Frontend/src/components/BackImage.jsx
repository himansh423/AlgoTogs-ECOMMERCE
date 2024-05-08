import axios from "axios";
import { useEffect, useState } from "react";

const BackImage = () => {
 
  const [imgURL,setImageURL] = useState({});
  
  const getImage = async () => {
    try {
      const res = await axios.get("http://localhost:8080/");
      console.log(res.data);
      setImageURL(res.data[0].img);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
      <div style={{ backgroundImage: `url(${imgURL})`,
    backgroundSize: "cover",
    // backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "100vh",
    width: "100vw",
    filter: "brightness(0.4)"}}></div>
    </>
  );
}

export default BackImage;
