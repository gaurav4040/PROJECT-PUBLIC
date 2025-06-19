import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";
import toast from "react-hot-toast";

const Signin = () => {
  const { signin }:any = useAuthStore();
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  const validateForm = () => {
    if (!FormData.email.trim()) return toast.error("email required");
    if (!/\S+@\S+\.\S+/.test(FormData.email))
      return toast.error("Invalid email");
    if (!FormData.password.trim()) return toast.error("password required");
    if (FormData.password.length < 6)
      return toast.error("password must be at least 6 characters");

    return true;
  };
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const success = validateForm();

    if (success === true) {
      await signin(FormData);
      navigate("/");
    }
  };

  return (
    <div className=" flex flex-row justify-center w-[100vw] h-[100vh] bg-gradient-to-r from-gray-800 to-black">
      <div className="flex flex-col  justify-center">
        <div className="w-[40vw]   h-[55vh] border border-amber-500">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between"
          >
            <h1 className="text-amber-500 pl-[2%] pt-[2%] ">SignIn</h1>
            <div className="flex flex-col justify-between ml-[10%] w-[80%] h-[100px] mt-[6vh] mb-[3vh] text-xl    text-amber-700">
              <label className="animate-pulse">E-mail</label>
              <input
                type="email"
                placeholder="Email"
                value={FormData.email}
                onChange={(event) => {
                  setFormData({ ...FormData, email: event.target.value });
                }}
                required
                className="w-[80%] p-3  bg-neutral-900/90 border border-neutral-800 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-amber-500 hover:w-[100%] focus:w-[100%] focus:h-[60px] transition-all duration-500 ease-in-out "
              />
            </div>
            <div className="flex flex-col justify-between ml-[10%] w-[80%] h-[100px]   mb-[3vh] text-xl    text-amber-700">
              <label className="animate-pulse">Password</label>
              <input
                type="password"
                placeholder="password"
                value={FormData.password}
                onChange={(event) => {
                  setFormData({ ...FormData, password: event.target.value });
                }}
                required
                className="w-[80%] p-3  bg-neutral-900/90 border border-neutral-800 text-neutral-100 placeholder-neutral-400  focus:outline-none focus:border-amber-500 hover:w-[100%] focus:w-[100%] focus:h-[60px] transition-all duration-500 ease-in-out "
              />
            </div>
            <button
              type="submit"
              className="ml-[10%] w-[65%] !bg-amber-700 hover:!bg-amber-400 text-white py-2 !rounded-none !transition-all duration-700  hover:w-[80%] ease-in-out"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
