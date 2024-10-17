import Main from "./components/Main"
import Footer from "./components/Footer"
import Sidebar from "./components/sidebar"
import { useState, useEffect } from "react"

function App() {
  const [data, setdata]= useState(null)
  const [loading,setloading]= useState(false)

  const [ShowModal, setShowModal] = useState(true)

  // Fixing the toggle logic here
  function showModal(){
    setShowModal(prevState => !prevState) // Correctly toggles the state based on previous value
  }
  
  useEffect(()=>{ 
    const API_KEY= import.meta.env.VITE_NASA_API_KEY
    async function fetchAPIdata(){
      const url='https://api.nasa.gov/planetary/apod' + `?api_key=${API_KEY}`
      try{
        const res= await fetch(url)
        const apidata= await res.json()
        setdata(apidata)
        console.log(apidata);
        
      }
      catch(err){
        console.log(err.message)
      }
    }
    fetchAPIdata()
  },[])
  return (
    <>
      {data ? (<Main data={data}/>) : (
        <div className="loadingstate">
          <i className="fa-solid fa-gear"></i>
        </div>
      )
      }
      {data && (<Footer data={data} showModal={showModal} />)}

      {ShowModal && (<Sidebar data={data}showModal={showModal}/>)}
    </>
  )
}

export default App
