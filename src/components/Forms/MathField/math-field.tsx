import { CommonInputProps } from "@/helpers";
import { MathfieldElement } from "mathlive";
import { ChangeEvent, FormEvent, forwardRef } from "react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface MathFieldProps extends CommonInputProps {
  className?: string;
  isPreview?: boolean;
  isReadOnly?: boolean;
  onInput?: (e: ChangeEvent<MathfieldElement>) => void;
  value?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "math-field": DetailedHTMLProps<
        HTMLAttributes<MathfieldElement>,
        MathfieldElement
      >;
    }
  }
}

export const MathField = forwardRef<MathfieldElement, MathFieldProps>(
  (props, ref) => {
    const {
      className,
      errorMessage,
      isInvalid,
      isPreview,
      isReadOnly,
      isRequired,
      label,
      value,
    } = props;

    return (
      <div className="max-w-full flex flex-col">
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
        <math-field
          // @ts-ignore
          class={`text-3xl w-full ${
            isPreview
              ? ""
              : "rounded-lg border-[1.5px] dark:border-form-strokedark dark:bg-form-input disabled:bg-whiter disabled:cursor-default"
          } bg-transparent py-3 px-5 text-black outline-none transition dark:text-white max-w-full ${
            isInvalid
              ? "!text-red !border-red dark:text-red focus:border-red dark:focus:border-red placeholder-red"
              : "border-stroke focus:border-primary active:border-primary dark:focus:border-primary"
          } ${className}`}
          read-only={isReadOnly || isPreview}
          ref={ref}
          {...props}
        >
          {value}
        </math-field>
        {errorMessage ? (
          <div className="mt-2 text-red dark:text-red text-xs">
            {errorMessage}
          </div>
        ) : null}
      </div>
    );
  }
);

MathField.displayName = "MathField";
