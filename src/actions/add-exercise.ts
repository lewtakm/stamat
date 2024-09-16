"use server";

import { logger } from "@/helpers";
import { connectDB } from "@/lib";
import { Exercise, ExerciseDocument } from "@/models";

export const addExercise = async (values: ExerciseDocument) => {
  try {
    await connectDB();

    const exercise = new Exercise(values);
    console.log(values);
    await exercise.save();
  } catch (e) {
    logger(e);
  }
};
