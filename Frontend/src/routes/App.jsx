import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./App.css";
import { useSelector } from "react-redux";
import LoaderC from "../components/Loader";

function App() {
  // const { loading } = useSelector((store) => store.loader);
  // const handlePosition = () => {
  //   if (loading) {
  //     return "fixed";
  //   }
  //   return "unset";
  // };
  return (
    <div
    //  style={{ position: handlePosition() }}
     >
      <Header />
      {/* {loading ? <LoaderC /> : null} */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
