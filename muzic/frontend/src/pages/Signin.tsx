import { useAuthStore } from "../store/useAuthStore.ts";


const Signin = () => {
  const loginWithSpotify = useAuthStore((s:any) => s.loginWithSpotify);

  return (
    <div className="flex flex-col items-center justify-center w-[100vw] min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Welcome to <span className="bg-gradient-to-r from-blue-600 via-purple-900 to-pink-800 bg-clip-text text-transparent">
        MuzicApp</span></h1>
      <p className="mb-4 bg-gradient-to-r from-blue-600 via-purple-900 to-pink-800 bg-clip-text text-transparent">Sign in to enjoy personalized music experience</p>
      <button
        onClick={loginWithSpotify}
        className="!bg-white hover:!bg-green-600 hover:text-white !transition-all duration-500 px-6 py-2 rounded text-lg text-black !border-none"
      >
        Continue with Spotify
      </button>
    </div>
  );
};

export default Signin;