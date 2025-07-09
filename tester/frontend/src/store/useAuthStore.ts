import {axiosInstance} from "../lib/axios.ts";
import {create} from "zustand"
import { toast } from "react-hot-toast";

export const useAuthStore = create((set)=>({

    authUser:null,
    isCheckingAuth:true,
    isSigning:false,

    checkAuth:async ():Promise<void>=>{
        try {
            const res = await axiosInstance.get("auth/check")
            set({authUser:res.data});

        } catch (error) {
            console.log(`error in checkAuth useAuthStore : `,error);
            set({authUser:null})
        
        }finally{
            set({isCheckingAuth:false});
        }
    },

    signin:async (data:{email:string,password:string})=>{

         set({isSigningIn:true})
        try {
            const res = await axiosInstance.post("/auth/signin",data);
            set({authUser:res.data});
            toast.success("signed In successfully");
            
        } catch (error:any) {
            toast.error(error.response.data.message);
        }finally{
            set({isSigningIn:false})
        }
    }
    
}))
