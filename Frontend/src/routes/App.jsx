import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './App.css';
import { useSelector } from 'react-redux';
import LoaderC from '../components/Loader';

function App() {
  const { loading } = useSelector((state) => state.loader);
  return (
    <>

    <Header/>
    {loading?<LoaderC/>:null}
    <Outlet />
    <Footer/>
    
    </>
  )
}

export default App
