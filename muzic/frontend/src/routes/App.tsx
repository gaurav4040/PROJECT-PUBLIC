import { Routes, Route, Navigate } from "react-router-dom"
import { useAuthStore } from "../store/useAuthStore"
import { useEffect } from "react"
import { Purple } from "../pages/Loader.tsx"
import { HomePage } from "../pages/Home.tsx"
import Content from "../pages/Content.tsx"
import Signin from "../pages/Signin.tsx"
import Signup from "../pages/Signup.tsx"
import { DownFooter } from "../pages/Footer.tsx"
import { NavBarHeader } from "../pages/Header.tsx"

function App() {
  const { authUser, checkAuth, isCheckingAuth, isSigning, isSigningUp }:any = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  console.log(`authUser is ${authUser}`)

  if ((isCheckingAuth && !authUser) || isSigning || isSigningUp) {
    return (
      <div className="ml-[40vw] scale-100">
        <Purple />
      </div>
    )
  }

  return (
    <div >
      <NavBarHeader />
        <Routes>
          <Route path="/" element={!authUser ? <HomePage /> : <Navigate to="/home" />} />
          <Route path="/home" element={authUser?<Content />:<HomePage/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>


      <DownFooter />
    </div>
  )
}

export default App
