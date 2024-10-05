"use client";

import { addExercise } from "@/actions";
import {
  Breadcrumb,
  Button,
  Card,
  ExerciseRenderer,
  Input,
  Select,
} from "@/components";
import { MathField } from "@/components";
import { logger } from "@/helpers";
import { ExcerciseLevels, ExerciseDocument } from "@/models";
import { exerciseSchema } from "@/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import "mathlive";
import { MathfieldElement } from "mathlive";
import { ChangeEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ExerciseInputs = { level: { label: string; value: string } } & Pick<
  ExerciseDocument,
  "category" | "exercise" | "subExercises" | "videoSolution"
>;

const levelOptions = [
  { label: "Łatwe", value: "1" },
  { label: "Średnie", value: "2" },
  { label: "Trudne", value: "3" },
];

const AddExercise = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
  } = useForm<ExerciseInputs>({
    mode: "onChange",
    resolver: yupResolver(exerciseSchema),
  });

  useEffect(() => {
    register("level", { value: { label: "Łatwe", value: "1" } });
    register("category", { value: 1 });
  }, [register]);

  const exercise = getValues("exercise");
  const subExercises = getValues("subExercises");
  const level = watch("level");

  useEffect(() => console.log(level, exercise), [exercise, level]);

  const handleOnQuestionChange = (e: ChangeEvent<MathfieldElement>) => {
    setValue("exercise.question", e.target.value, { shouldValidate: true });
  };

  const handleOnAnswerChange = (e: ChangeEvent<MathfieldElement>) => {
    setValue("exercise.answer", e.target.value, { shouldValidate: true });
  };

  const onSubmit: SubmitHandler<ExerciseInputs> = async (data) => {
    console.log(data);
    const { level, ...restData } = data;
    try {
      setIsLoading(true);

      const response = await addExercise({
        ...restData,
        level: Number(level.value),
      });

      console.log("response", response);
      if (response?.error) {
        setError(response.error);
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
              isInvalid={Boolean(errors.exercise?.question)}
              isRequired
              label="Treść zadania"
              onInput={handleOnQuestionChange}
              {...register("exercise.question")}
            />
            <MathField
              className="h-50"
              isInvalid={Boolean(errors.exercise?.answer)}
              isRequired
              label="Odpowiedź"
              onInput={handleOnAnswerChange}
              {...register("exercise.answer")}
            />
            <Select
              control={control}
              isInvalid={Boolean(errors.level)}
              isRequired
              label="Poziom trudności"
              name="level"
              options={levelOptions}
              placeholder="Wybierz poziom trudności zadania"
            />
            <Input
              errorMessage={errors.exercise?.points?.message}
              isInvalid={Boolean(errors.exercise?.points?.message)}
              isRequired
              label="Liczba punktów"
              placeholder="Wpisz liczbe punktów za zadanie"
              type="number"
              {...register("exercise.points")}
            />
            <Button isLoading={isLoading} type="submit">
              Dodaj zadanie
            </Button>
          </form>
        </Card>

        <ExerciseRenderer
          exercise={exercise}
          level={level}
          subExercises={subExercises}
          title="Podgląd zadania"
        />
      </div>
    </div>
  );
};

export default AddExercise;
