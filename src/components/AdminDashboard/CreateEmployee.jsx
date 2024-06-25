import { FormProvider, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import { useState } from "react";
import { addDoc, collection, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const CreateEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const methods = useForm();
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "createemployee"), data);
      await setDoc(docRef, data);

      setSubmitted(true);
      methods.reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      console.log("Form Data saved successfully:", data);
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };

  return (
    <div className="flex flex-col h-full p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="mb-6 text-2xl font-bold text-slate-800 text-start">
        Add Employee
      </h2>
      <hr className="mb-5" />

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
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Create Login Details
                  </span>
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
      {submitted && (
        <div className="absolute bottom-0 right-0 px-4 py-2 m-4 text-green-900 bg-green-100 rounded">
          New Employee Created
        </div>
      )}
    </div>
  );
};

export default CreateEmployee;
