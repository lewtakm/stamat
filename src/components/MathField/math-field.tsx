import { MathfieldElement } from "mathlive";
import { ChangeEvent, FormEvent, forwardRef } from "react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface MathFieldProps {
  className?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  isPreview?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  label?: string;
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
      isInvalid,
      isPreview,
      isReadOnly,
      isRequired,
      label,
      value,
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
        <math-field
          // @ts-ignore
          class={`text-3xl w-full ${
            isPreview
              ? ""
              : "rounded-lg border-[1.5px] border-stroke focus:border-primary active:border-primary dark:focus:border-primary dark:border-form-strokedark dark:bg-form-input disabled:bg-whiter disabled:cursor-default"
          } bg-transparent py-3 px-5 text-black outline-none transition dark:text-white max-w-full ${className}`}
          read-only={isReadOnly || isPreview}
          ref={ref}
          {...props}
        >
          {value}
        </math-field>
      </div>
    );
  }
);

MathField.displayName = "MathField";
