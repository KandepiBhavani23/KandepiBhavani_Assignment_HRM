import { FormProvider, useForm } from "react-hook-form";
import FormInput from "./FormInput";

const CreateEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const methods = useForm();
  const onSubmit = (data) => console.log("Form Data:", data);

  return (
    <div className="flex flex-col h-full p-6 bg-white rounded-l-none rounded-r-lg shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-slate-800 text-start">
        Add Employee
      </h2>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-wrap w-full gap-x-10">
          <div className="flex w-full gap-4 md:gap-x-10">
            <div className="">
              <label
                htmlFor="employeeImage"
                className="flex items-center justify-center w-40 h-40 text-center border-2 border-gray-300 border-dashed rounded-full cursor-pointer">
                <input
                  type="file"
                  id="employeeImage"
                  className="hidden"
                  {...register("employeeImage")}
                  accept="image/*"
                />
                <span className="text-center text-gray-500">+</span>
              </label>
              <p className="mt-2 text-xs text-gray-500">
                Accepts jpg, png, gif up to 1MB. Recommended dimensions: 200px X
                200px
              </p>
            </div>

            <div className="w-full">
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Employee Full Name*
                </label>
                <div className="flex gap-x-4 md:gap-x-10">
                  <FormInput
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required="First Name is Required"
                  />

                  <FormInput
                    type="text"
                    name="middleName"
                    placeholder="Middle Name"
                  />

                  <FormInput
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required="Last Name is Required"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="employeeId"
                  className="block mb-2 text-sm font-bold text-gray-700">
                  Employee Id
                </label>
                <input
                  type="text"
                  id="employeeId"
                  className="w-1/3 px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
                  {...register("employeeId", {
                    required: "Employee ID is required",
                  })}
                />
                {errors.employeeId && (
                  <p className="absolute mt-1 text-xs text-red-500">
                    {errors.employeeId.message}
                  </p>
                )}
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="createLogin"
                  className="mr-2"
                  {...register("createLogin")}
                />
                <label htmlFor="createLogin" className="text-sm text-gray-700">
                  Create Login Details
                </label>
              </div>

              <div className="flex justify-end w-full">
                <button
                  type="button"
                  className="px-4 py-2 mr-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateEmployee;
