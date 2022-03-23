import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Loading from './pages/Loading';

function App() {
  const[loading,setLoading]=useState(true)
const [foods,setFoods]=useState([])
  const foodData = async ()=> {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${process.env.REACT_APP_KEY}`)

    const data = await api.json()
  setFoods(data.recipes)
  }
  useEffect(() => {
    foodData()
setTimeout(()=>{
  setLoading(false)
},1000)
  }, [])
  return (
    <>

    {
      loading?
      
      <Loading/>:
      <Home foods={foods}/>
    }
    
      </>
    
  );
}

export default App;
