"use server";

import { logger, OmitMongoDefaultValues } from "@/helpers";
import { connectDB } from "@/lib";
import { Exercise, ExerciseDocument } from "@/models";

export const addExercise = async (
  values: OmitMongoDefaultValues<ExerciseDocument>
) => {
  try {
    await connectDB();
    const exercise = new Exercise(values);
    console.log("exercise", exercise);
    await exercise.save();
    return {
      success: { id: exercise._id, message: "Zadanie zostało dodane." },
    };
  } catch (e) {
    logger(e);
    return {
      error: e,
      message: "Wystąpił błąd podczas dodawania zadania.",
    };
  }
};
