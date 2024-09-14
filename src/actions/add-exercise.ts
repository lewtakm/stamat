"use server";

import { logger } from "@/helpers";
import { connectDB } from "@/lib";
import { Exercise, ExerciseDocument } from "@/models";

export const addExercise = async (values: ExerciseDocument) => {
  const { category, level, scheme } = values;

  try {
    await connectDB();

    const exercise = new Exercise({
      category,
      level,
      scheme,
    });

    await exercise.save();
  } catch (e) {
    logger(e);
  }
};
