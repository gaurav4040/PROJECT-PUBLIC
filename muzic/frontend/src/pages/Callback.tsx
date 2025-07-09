import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const handleSpotifyCallback = useAuthStore((state:any) => state.handleSpotifyCallback);
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      handleSpotifyCallback(code).then(() => navigate("/home"));
    }
  }, []);

  return <div>Logging you in via Spotify...</div>;
};

export default Callback;
