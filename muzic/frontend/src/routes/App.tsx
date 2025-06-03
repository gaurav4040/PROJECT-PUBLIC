
import { useEffect } from "react"
import { Routes,Route,Navigate } from "react-router-dom"


function App() {
  
    useEffect();


    return(
        <div>
          <Routes>
            <Route path="/" />
            <Route path="/home"/>
            <Route path="/signup"/>
            <Route path="/signin"/>
            <Route path="/signout"/>
          </Routes>
        </div>
    )
 
}

export default App
