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
import Profile from "../pages/Profile.tsx"
import MainLayout from "./mainLayout.tsx"
import Callback from "../pages/Callback.tsx"

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
        <Routes >
          

          {authUser?<Route>
              <Route element={<MainLayout/>}  >
                <Route path="/" element={<Content/>} />
                <Route path="/home" element={<Content />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/callback" element={<Callback/>} />
              </Route>  

          </Route>:<Route>
                <Route path="/" element={<HomePage/>} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />

            </Route>
            }


        </Routes>


      <DownFooter />
    </div>
  )
}

export default App
