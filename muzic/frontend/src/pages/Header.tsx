import { Home, User, Briefcase, FileText, LogInIcon, AtSignIcon } from 'lucide-react'
import { NavBar } from "../components/ui/tubelight-navbar.tsx"
import { useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore.ts';
import { Purple } from './Loader.tsx';



 export function NavBarHeader() {

  const {authUser,checkAuth,isCheckingAuth,isSigningIn,isSigningUp}:any = useAuthStore();

    useEffect(()=>{
      checkAuth();
    },[checkAuth])

    if((isCheckingAuth&&!authUser)||isSigningIn||isSigningUp){
      return(
        <div className="ml-[49vw] scale-150">
        <Purple/>
      </div>
      )
    }

  

  const navItems1 = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText },
    {name:'signIn',url:'/signin',icon:LogInIcon  },
    {name:'signup',url:'/signup',icon:AtSignIcon  }
  ]
  const navItems2 = [
    { name: 'Home', url: '/home', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText },
    {name:'profile',url:'/profile',icon:LogInIcon  },
  ]

  const navItems = authUser?navItems2:navItems1;

  return (
    <div className="bg-transparent">
      <NavBar items={navItems} />
    </div>
  )
}
