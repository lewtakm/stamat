"use client";

import { CommonInputProps } from "@/helpers";
import { Control, Controller } from "react-hook-form";
import ReactSelect, { GroupBase, Props } from "react-select";

export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: { control: Control<any> } & CommonInputProps &
    Props<Option, IsMulti, Group>
) => {
  const {
    className,
    control,
    defaultValue,
    isInvalid,
    isRequired,
    label,
    name,
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
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name!}
        render={({ field }) => (
          <ReactSelect
            classNames={{
              control: () =>
                "rounded border border-stroke py-2 pl-3 pr-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input",
              menu: () => "dark:bg-form-input",
              option: (state) =>
                state.isFocused
                  ? "[&&]:bg-slate-600"
                  : "[&&]dark:bg-form-input",
              singleValue: () => "dark:text-white",
            }}
            label={label}
            placeholder="Wybierz..."
            {...props}
            {...field}
          />
        )}
      />
    </div>
  );
};

Select.displayName = "Select";
