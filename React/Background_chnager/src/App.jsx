import { useState } from 'react'
import Home from '../components/Home.jsx'
import './App.css'
function App() {


  const[ color,setcolor]=useState('purple')
  return (
    <>
    <div className="Body"style={{backgroundColor:color,height:"700px"}}>

<Home></Home>

   <div className="Button_bar">
    <button onClick={()=>setcolor("red")}>Red</button>
     <button  onClick={()=>setcolor("Green")}>Green</button>
      <button  onClick={()=>setcolor("Blue")}>Blue</button>
       <button  onClick={()=>setcolor("Pink")}>Pink</button>
        <button  onClick={()=>setcolor("Brown")}>Brown</button>
   </div>
    </div>
   
    </>
  )
}

export default App
