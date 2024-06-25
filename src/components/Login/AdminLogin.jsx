import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { username, password } = data;
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem("auth", "true");
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-screen mt-20">
      <h1 className="mb-5 text-xl font-semibold">Admin Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-xs p-10 rounded-md sm:max-w-sm md:max-w-base lg:max-w-lg bg-slate-100">
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-lg font-semibold">
            UserName:
          </label>
          <input
            type="text"
            placeholder="Enter Your UserName"
            id="usename"
            className="bg-gray-50 inline-flex border focus:outline-none mb-5 border-gray-300 text-gray-900 text-lg placeholder:text-base placeholder:font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 "
            {...register("username", { required: "UserName is required" })}
          />
          {errors.username && (
            <p className="absolute font-semibold text-red-500 translate-x-2 translate-y-24 min-h-5">
              {errors.username.message}
            </p>
          )}

          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="password" className="text-lg font-semibold">
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              id="password"
              className="bg-gray-50 inline-flex border focus:outline-none mb-5 border-gray-300 text-gray-900 text-lg placeholder:text-base placeholder:font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 "
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="absolute font-semibold text-red-500 translate-x-2 translate-y-24 min-h-5">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="mt-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg text-base uppercase font-semibold px-5 py-2.5 mb-2">
          LogIn
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
