"use server";

import { logger, OmitMongoDefaultValues } from "@/helpers";
import { connectDB } from "@/lib";
import { Exercise, ExerciseDocument } from "@/models";

type OmitDefault<T> = Omit<T, "createdAt" | "updatedAt">;
export const addExercise = async (
  values: OmitMongoDefaultValues<ExerciseDocument>
) => {
  try {
    await connectDB();
    console.log(values);
    const exercise = new Exercise(values);
    console.log("exercise", exercise);
    // await exercise.save();
  } catch (e) {
    logger(e);
    return {
      error: {
        email: "Wystąpił błąd podczas dodawania zadania.",
      },
    };
  }
};
