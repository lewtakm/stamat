import { CommonInputProps } from "@/helpers";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    CommonInputProps {
  icon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    errorMessage,
    icon,
    isInvalid = false,
    isRequired,
    label,
    ...restProps
  } = props;

  return (
    <div className="max-w-full">
      {label ? (
        <label
          className={`mb-2.5 block font-medium ${
            isInvalid ? "text-red" : "text-black dark:text-white"
          } `}
        >
          {label}
          {isRequired ? <span className="text-red">*</span> : null}
        </label>
      ) : null}
      <div className="relative">
        <input
          className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none  focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white  ${
            isInvalid
              ? "text-red border-red dark:text-red focus:border-red dark:focus:border-red placeholder-red"
              : "text-black dark:text-white focus:border-primary dark:focus:border-primary"
          }`}
          ref={ref}
          {...restProps}
        />
        {errorMessage ? (
          <div className="mt-2 text-red dark:text-red text-xs">
            {errorMessage}
          </div>
        ) : null}

        {icon ? <span className="absolute right-4 top-4">{icon}</span> : null}
      </div>
    </div>
  );
});

Input.displayName = "Input";
