"use client";

import { Breadcrumb, Card } from "@/components";
import { MathField } from "@/components/MathField/math-field";
import "mathlive";
import { MathfieldElement } from "mathlive";
import { ChangeEvent, useState } from "react";

const AddExercise = () => {
  const [exercise, setExercise] = useState("");

  const handleOnChange = (e: ChangeEvent<MathfieldElement>) => {
    setExercise(e.target.value);
  };

  return (
    <div className="mx-auto">
      <Breadcrumb pageName="Dodaj zadanie" />
      <div className="flex w-full flex-col gap-5.5">
        <Card title="Dodaj zadanie">
          <div className="flex w-full flex-col gap-5.5">
            <MathField
              className="h-50"
              label="Treść zadania"
              onInput={handleOnChange}
              value={exercise}
            />
            <MathField onInput={handleOnChange} value={exercise} />
          </div>
        </Card>
        <Card title="Podgląd zadania">
          <MathField isPreview value={exercise} />
        </Card>
      </div>
    </div>
  );
};

export default AddExercise;
