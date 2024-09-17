"use client";

import { addExercise } from "@/actions";
import {
  Breadcrumb,
  Button,
  Card,
  ExerciseRenderer,
  Select,
} from "@/components";
import { MathField } from "@/components";
import { logger } from "@/helpers";
import { ExcerciseLevels, ExerciseDocument } from "@/models";
import { exerciseSchema } from "@/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import "mathlive";
import { MathfieldElement } from "mathlive";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ExerciseInputs = Pick<
  ExerciseDocument,
  | "category"
  | "description"
  | "level"
  | "maxPoints"
  | "subExercises"
  | "videoSolution"
>;

const levelOptions = [
  { label: "Łatwe", value: "1" },
  { label: "Średnie", value: "2" },
  { label: "Trudne", value: "3" },
];

const AddExercise = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
    setError,
    setValue,
    watch,
  } = useForm<ExerciseInputs>({ resolver: yupResolver(exerciseSchema) });

  const description = watch("description");
  const subExercises = watch("subExercises");
  const level = watch("level");

  const handleOnDescriptionChange = (e: ChangeEvent<MathfieldElement>) => {
    setValue("description", e.target.value);
  };

  const onSubmit: SubmitHandler<ExerciseInputs> = async (data) => {
    try {
      setIsLoading(true);

      const response = await addExercise(data);

      if (response?.error.email) {
        // setError("email", { message: response.error.email });
        return;
      } else {
        reset();
      }
    } catch (err) {
      logger(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto">
      <Breadcrumb pageName="Dodaj zadanie" />
      <div className="flex w-full flex-col gap-5.5">
        <Card title="Dodaj zadanie">
          <form
            className="flex w-full flex-col gap-5.5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <MathField
              className="h-50"
              isRequired
              label="Treść zadania"
              onInput={handleOnDescriptionChange}
              {...register("description")}
            />
            <Select
              control={control}
              isRequired
              label="Poziom trudności"
              name="level"
              options={levelOptions}
              placeholder="Wybierz poziom trudności zadania"
            />
            <Button isLoading={isLoading} type="submit">
              Dodaj zadanie
            </Button>
          </form>
        </Card>

        <ExerciseRenderer
          description={description}
          level={level}
          subExercises={subExercises}
          title="Podgląd zadania"
        />
      </div>
    </div>
  );
};

export default AddExercise;
