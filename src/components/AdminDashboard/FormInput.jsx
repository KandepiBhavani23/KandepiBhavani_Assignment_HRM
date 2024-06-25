import React from "react";
import { useFormContext } from "react-hook-form";

const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  required,
  validation,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full col-span-3 mb-4">
      <label className="block mb-2 text-sm font-bold text-gray-700">
        {label}
      </label>
      {type === "select" ? (
        <select
          {...register(name, { required, ...validation })}
          className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500">
          {validation?.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="grid w-full grid-cols-1 px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
          {...register(name, { required, ...validation })}
        />
      )}
      {errors[name] && (
        <p className="absolute mt-1 text-xs text-red-500">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
