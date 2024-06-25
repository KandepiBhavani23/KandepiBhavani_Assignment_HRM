import React from "react";
import FormInput from "../FormInput";
import { FormProvider, useForm } from "react-hook-form";

const JobDetails = () => {
  const methods = useForm();
  const onSubmit = (data) => console.log("Form Data:", data);

  return (
    <div className="relative flex flex-col w-full h-full p-6 bg-white">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">Job Details</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-5">
              <FormInput
                label="Joined Date"
                name="joinedDate"
                type="date"
                required="Joined date is required"
              />
              <FormInput
                label="Job Title"
                name="jobTitle"
                type="select"
                required="Job title is required"
                validation={{
                  options: [
                    { value: "", label: "Select a Job Title" },
                    { value: "developer", label: "Developer" },
                    { value: "designer", label: "Designer" },
                    { value: "manager", label: "Manager" },
                  ],
                }}
              />
              <FormInput
                label="Job Specification"
                name="specification"
                type="text"
                placeholder="Not Defined"
              />
            </div>
            <div className="flex gap-x-5">
              <FormInput
                label="Job Category"
                name="jobCategory"
                type="select"
                required="Job category is required"
                validation={{
                  options: [
                    { value: "", label: "Select a Job Category" },
                    { value: "full-time", label: "Full-Time" },
                    { value: "part-time", label: "Part-Time" },
                    { value: "intern", label: "Intern" },
                  ],
                }}
              />
              <FormInput
                label="Sub Unit"
                name="subUnit"
                type="select"
                required="Sub unit is required"
                validation={{
                  options: [
                    { value: "", label: "Select a Sub Unit" },
                    { value: "development", label: "Development" },
                    { value: "design", label: "Design" },
                    { value: "marketing", label: "Marketing" },
                  ],
                }}
              />
              <FormInput
                label="Location"
                name="location"
                type="select"
                required="Location is required"
                validation={{
                  options: [
                    { value: "", label: "Select a Location" },
                    { value: "ny", label: "New York" },
                    { value: "sf", label: "San Francisco" },
                    { value: "la", label: "Los Angeles" },
                  ],
                }}
              />
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <div className="flex w-1/3 gap-x-5">
              <FormInput
                label="Employment Status"
                name="employmentStatus"
                type="select"
                required="Employment status is required"
                validation={{
                  options: [
                    { value: "", label: "Select Employment Status" },
                    { value: "permanent", label: "Permanent" },
                    { value: "contract", label: "Contract" },
                    { value: "freelance", label: "Freelance" },
                  ],
                }}
              />
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
    </div>
  );
};

export default JobDetails;
