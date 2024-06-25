import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmployeeLogin = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.get(
        `https://gorest.co.in/public-api/users?email=${data.email}`
      );

      if (response.data.data.length > 0) {
        const userData = response.data.data[0];
        navigate("/employee-details", { state: { userData } });
      } else {
        setError("email", {
          type: "manual",
          message: "User with this email not found",
        });
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setError("email", {
        type: "manual",
        message: "Failed to fetch user. Please try again later.",
      });
    }
  };

  return (
    <div className="relative flex items-end justify-center w-screen min-h-96">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-xs p-10 rounded-md sm:max-w-sm md:max-w-base lg:max-w-lg bg-slate-100">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-semibold">
            Email:
          </label>
          <input
            type="text"
            placeholder="Enter Your Email"
            id="email"
            className="bg-gray-50 inline-flex border focus:outline-none mb-5 border-gray-300 text-gray-900 text-lg placeholder:text-base placeholder:font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 "
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="absolute font-semibold text-red-500 translate-x-2 translate-y-24 min-h-5">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg text-base uppercase font-semibold px-5 py-2.5 mb-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeLogin;
