import React, { useState } from "react";
import FormInput from "../FormInput";
import { FormProvider, useForm } from "react-hook-form";
import { addDoc, collection, setDoc } from "firebase/firestore";
import { db } from "../../../firebase.js";

const ContactDetails = () => {
  const methods = useForm();
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "contactDetails"), data);
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
        Contact Details
      </h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full space-y-3">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-lg font-bold text-slate-800">Address</h3>
              <hr />
              <div className="flex gap-x-5">
                <FormInput
                  label="Street 1"
                  name="street1"
                  type="text"
                  placeholder="Enter street 1"
                  required="Street1 Required"
                />
                <FormInput
                  label="Street 2"
                  name="street2"
                  type="text"
                  placeholder="Enter street 2"
                  required="Street2 Required"
                />
                <FormInput
                  label="City"
                  name="city"
                  type="text"
                  placeholder="City"
                  required="City Required"
                />
              </div>
              <div className="flex gap-x-5">
                <FormInput
                  label="State/Province"
                  name="state"
                  type="text"
                  placeholder="Enter state/province"
                  required="State Required"
                />
                <FormInput
                  label="Zip/Postal Code"
                  name="zip"
                  type="text"
                  placeholder="Enter zip/postal code"
                  required="Postal Code Required"
                />
                <FormInput
                  label="Country"
                  name="country"
                  type="select"
                  validation={{
                    options: [
                      { label: "-- Select --", value: "" },
                      { label: "India", value: "India" },
                      { label: "USA", value: "USA" },
                      { label: "Canada", value: "Canada" },
                    ],
                    required: true,
                  }}
                  reruired="Country Required"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <h3 className="text-lg font-bold text-slate-800">Telephone</h3>
              <hr />
              <div className="flex gap-x-5">
                <FormInput
                  label="Home"
                  name="home"
                  type="text"
                  placeholder="Enter phone number"
                  required="Phone Number Required"
                />
                <FormInput
                  label="Mobile "
                  name="mobile"
                  type="text"
                  placeholder="Enter mobile number"
                  required="Mobile Number Required"
                />
                <FormInput
                  label="Work"
                  name="work"
                  type="text"
                  placeholder="Enter work phone number"
                  required="Work Phone Number Required"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <h3 className="text-lg font-bold text-slate-800">Telephone</h3>
              <hr />
              <div className="flex gap-x-5">
                <FormInput
                  label="Work Email"
                  name="workEmail"
                  type="email"
                  placeholder="Enter work email"
                  required="Work Email Required"
                />
                <FormInput
                  label="Other Email"
                  name="otherEmail"
                  type="email"
                  placeholder="Enter other email"
                />
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
          Contact details submitted!
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
