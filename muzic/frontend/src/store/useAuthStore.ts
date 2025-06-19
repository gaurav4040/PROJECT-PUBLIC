import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.ts";
// import { useNavigate } from "react-router-dom";

interface signinData {
  email: string;
  password: string;
}
interface userData {
  fullName: string;
  email: string;
  password: string;
}

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigning: false,
  isSigningUp: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  socket: null,

  checkAuth:async ():Promise<void>=>{
          try {
              const res = await axiosInstance.get("/auth/check");
              
              set({authUser:res.data});
              // get().connectSocket();
            } catch (error) {
                console.log(`error in checkAuth useAuthStore : `,error);
                set({authUser:null})
                
            }finally{
                set({isCheckingAuth:false});
            }
        },
        
    signup:async (data:userData)=>{
        set({isSigningUp:true});
        try {
            const res = await axiosInstance.post("/auth/signup",data);
            set({authUser:res.data});
            toast.success("Account created successfully");
            // get().connectSocket();
            // navigate("/home")
        } catch (err:any) {
            toast.error(err.response.data.message);
        }finally{
            set({isSigningUp:false});
        }
    },
    
    signin:async (data:signinData)=>{
        set({isSigningIn:true})
        try {
            const res = await axiosInstance.post("auth/signin",data);
            set({authUser:res.data});
            toast.success("signed In successfully");
            // get().connectSocket();
            // navigate("/home");
        } catch (error:any) {
            toast.error(error.response.data.message);
        }finally{
            set({isSigningIn:false})
        }
    },

    signOut:async ()=>{

        try {
            await axiosInstance.post("auth/signout");
            set({authUser:null});
            toast.success("signed Out successfully")
            // get().disconnectSocket();
        } catch (error:any) {
            toast.error(error.response.data.message);
        }
    },
}));
