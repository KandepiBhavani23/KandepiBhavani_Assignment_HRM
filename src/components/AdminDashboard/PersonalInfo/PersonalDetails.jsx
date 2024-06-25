import React, { useState } from "react";
import FormInput from "../FormInput";
import { FormProvider, useForm } from "react-hook-form";
import { addDoc, collection, setDoc } from "firebase/firestore";
import { db } from "../../../firebase.js";

const PersonalDetails = () => {
  const { register } = useForm();
  const methods = useForm();
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "personalDetails"), data);
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
    <div className="relative flex flex-col w-full h-full p-6 bg-white rounded-tr-2xl rounded-br-2xl">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Personal Details
      </h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full space-y-4">
            <div className="flex gap-x-5">
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
            <hr />
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-5">
                <FormInput
                  label="Employee Id*"
                  name="employeeId"
                  placeholder="Employee Id"
                  required="Employee ID is required"
                />
                <FormInput
                  label="Other Id"
                  name="otherId"
                  placeholder="Other Id"
                />
              </div>
              <div className="flex gap-x-5">
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
                  required="License Expiry Date Required"
                />
              </div>
            </div>
            <hr />

            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-5">
                <FormInput
                  label="Nationality"
                  name="nationality"
                  placeholder="Nationality"
                  required="Nationality Required"
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
              </div>
              <div className="flex gap-x-5">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Gender
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="male"
                        className="text-base font-semibold text-slate-800"
                        {...register("gender")}
                      />
                      <span className="ml-2 text-base font-semibold text-slate-800">
                        Male
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="female"
                        className="form-radio"
                        {...register("gender")}
                      />
                      <span className="ml-2 text-base font-semibold text-slate-800">
                        Female
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end w-full bottom-2 right-3">
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
      {submitted && (
        <div className="absolute bottom-0 right-0 px-4 py-2 m-4 text-green-900 bg-green-100 rounded">
          Personal details submitted!
        </div>
      )}
    </div>
  );
};

export default PersonalDetails;
