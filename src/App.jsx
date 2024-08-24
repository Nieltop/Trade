import Top from "./Components/Navigation/Nav"
import Trade from "./Components/Homepage/Home"
import Product from "./Components/Products/Product"
import About from "./Components/About/About"
import Partners from "./Components/Partners/Partners"
import Footer from "./Components/Footer/Footer"
import React, { useEffect, useState} from "react";



function App() {
  const [isLoading, setisLoading] = useState(false);
    let i =5;
    useEffect(()=>{
        setisLoading(true)

        setTimeout(()=>{
            setisLoading(false)
        }, 3000)
    },[])


  return (
    <>

{isLoading ? (
            <center style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
              <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
            <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
            <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
            <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
            <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
        </svg>
        </center>
        ) : (

      <><Top /><Trade /><Product /><About /><Partners /><Footer />
      </>

    )} 
    </>
  )
}

export default App
