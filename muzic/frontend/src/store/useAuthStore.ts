import { create } from "zustand";
import  axiosInstance  from "../lib/axios.ts";
import { toast } from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  accessToken: null,
  isAuthenticating: false,

    checkAuth: async (): Promise<void> => {
        set({ isCheckingAuth: true });

        try {
            const token = localStorage.getItem("accessToken");
            if (!token) throw new Error("No token found");

            // Set token in Axios header for this call
            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            const res = await axiosInstance.get("/api/me"); // your backend should call Spotify API with the token
            set({ authUser: res.data }); // Spotify user object (e.g., display_name, email, etc.)
        } catch (error) {
            console.warn("❌ checkAuth failed:", error);
            set({ authUser: null });
            localStorage.removeItem("accessToken");
        } finally {
            set({ isCheckingAuth: false });
        }
},
  loginWithSpotify: () => {
    const clientId = "e77110693c1e4f2db0a94e3228d4c804";
    const redirectUri = "https://9efd-103-171-46-19.ngrok-free.app/callback";
    const scope = "user-read-private user-read-email";

    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scope)}`;

    window.location.href = url;
  },

  handleSpotifyCallback: async (code: string) => {
    set({ isAuthenticating: true });
    try {
      const res = await axiosInstance.post("/api/callback", { code });
      const { accessToken, user } = res.data;

      set({ accessToken, authUser: user });
      toast.success("Logged in with Spotify");
    } catch (err: any) { 
        toast.error("Spotify login failed");
        console.error("Spotify callback error:", err);
    } finally {
        set({ isAuthenticating: false });
    }
  },

}));
