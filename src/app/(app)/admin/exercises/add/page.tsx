"use client";

import "katex/dist/katex.min.css";
import { Card, TextArea } from "@/components";
import { useState } from "react";
import Latex from "react-latex-next";

const AddExercise = () => {
  const [exercise, setExercise] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setExercise(e.target.value);

  return (
    <Card title="Dodaj zadanie">
      <div className="flex flex-col gap-5.5 p-6.5">
        <TextArea
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          label="Treść zadania"
          onChange={handleOnChange}
          placeholder="Wpisz treść zadania w latexie"
          rows={9}
        />
      </div>
      {exercise && (
        <div className="flex flex-col gap-5.5 p-6.5">
          <Latex>{exercise}</Latex>
        </div>
      )}
    </Card>
  );
};

export default AddExercise;
