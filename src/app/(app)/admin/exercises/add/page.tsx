"use client";

import { Card } from "@/components";
import "mathlive";
import { MathfieldElement } from "mathlive";
import { ChangeEvent, useRef, useState } from "react";

const AddExercise = () => {
  const mathFieldRef = useRef<MathfieldElement>(null);
  const [exercise, setExercise] = useState("");

  const handleOnChange = (e: ChangeEvent<MathfieldElement>) => {
    setExercise(e.target.value);
  };

  return (
    <div className="flex w-full flex-col gap-5.5">
      <Card title="Dodaj zadanie">
        <math-field
          // @ts-ignore
          class="text-3xl w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          onInput={handleOnChange}
          ref={mathFieldRef}
        >
          {exercise}
        </math-field>
      </Card>
      <Card title="Podgląd zadania">
        <math-field
          // @ts-ignore
          class="text-3xl w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition  dark:border-form-strokedark dark:bg-form-input dark:text-white"
          read-only
        >
          {exercise}
        </math-field>
      </Card>
    </div>
  );
};

export default AddExercise;
