import {Routes,Route,Navigate} from "react-router-dom"
import { Home } from "../pages/Home"
import { Content } from "../pages/Content"
import { Signin } from "../pages/signin"
import {Loader} from "../pages/Loader"
import { useAuthStore } from "../store/useAuthStore"
import { useEffect } from "react"

function App() {
  
  const {authUser,isCheckingAuth,checkAuth}:any = useAuthStore();
  
  useEffect(()=>{
      checkAuth();
    },[checkAuth])
    
  setInterval(()=>{
      console.log(`authUser is ${authUser}`)
    },1000);

  if((isCheckingAuth&&!authUser)){
    return (
      <div>
        <Loader />
      </div>
    )
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={authUser===null?<Home/>:<Navigate to="/home"/>}/>
        <Route path="/home" element={<Content/>}/>
        <Route  path="signin" element={<Signin/>}/>
      </Routes>
    </div>
  )
}

export default App
