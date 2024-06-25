import React from "react";
import FormInput from "../FormInput";
import { FormProvider, useForm } from "react-hook-form";

const PersonalDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const methods = useForm();
  const onSubmit = (data) => console.log("Form Data:", data);

  return (
    <div className="flex flex-col h-full p-6 bg-white">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Personal Details
      </h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full">
            <div className="flex gapx-5">
              <FormInput
                label="Employee Full Name*"
                name="firstName"
                placeholder="First Name"
                required="First name is required"
              />
              <FormInput
                label="Middle Name"
                name="middleName"
                placeholder="Middle Name"
              />
              <FormInput
                label="Last Name"
                name="lastName"
                placeholder="Last Name"
                required="Last name is required"
              />
            </div>
            <FormInput
              label="Employee Id*"
              name="employeeId"
              placeholder="Employee Id"
              required="Employee ID is required"
            />
            <FormInput label="Other Id" name="otherId" placeholder="Other Id" />
            <FormInput
              label="Driver's License Number"
              name="licenseNumber"
              placeholder="Driver's License Number"
              required="Driver's Licence Required"
            />
            <FormInput
              label="License Expiry Date"
              name="licenseExpiryDate"
              type="date"
            />
            <FormInput
              label="Nationality"
              name="nationality"
              placeholder="Nationality"
            />
            <FormInput
              label="Marital Status"
              name="maritalStatus"
              type="select"
              validation={{
                required: "Marital status is required",
                options: [
                  { value: "single", label: "Single" },
                  { value: "married", label: "Married" },
                  { value: "divorced", label: "Divorced" },
                  { value: "widowed", label: "Widowed" },
                ],
              }}
            />
            <FormInput label="Date of Birth" name="dob" type="date" />
            <div className="col-span-3 mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Gender
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="male"
                    className="form-radio"
                    {...register("gender")}
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="female"
                    className="form-radio"
                    {...register("gender")}
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>
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
        </form>
      </FormProvider>
    </div>
  );
};

export default PersonalDetails;
