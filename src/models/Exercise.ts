import mongoose, { Schema, model } from "mongoose";

export enum ExcerciseLevels {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3,
}

const ExerciseSchema = new Schema<ExerciseDocument>(
  {
    category: { required: [true, "Kategoria jest wymagana."], type: String },
    exercise: {
      required: [true, "Treść zadania jest wymagana."],
      type: String,
    },
    level: { required: [true, "Kategoria jest wymagana."], type: Number },
    maxPoints: {
      required: [true, "Maksymalna liczba punktów jest wymagana."],
      type: Number,
    },
    scheme: {
      type: String,
    },
    subExercise: [
      {
        type: String,
      },
    ],
    videoSolution: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Exercise =
  mongoose.models?.Exercise ||
  model<ExerciseDocument>("Exercise", ExerciseSchema);

export interface ExerciseDocument {
  _id: string;
  scheme: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  exercise: string;
  maxPoints: number;
  videoSolution: string;
  level: ExcerciseLevels;
  subExercise: Array<string>;
}

export interface SubExerciseDocument {
  question: string;
  maxPoints: number;
}
