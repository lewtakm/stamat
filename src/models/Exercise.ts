import mongoose, { model, Schema } from "mongoose";

export enum ExcerciseLevels {
  EASY = 1,
  HARD = 3,
  MEDIUM = 2,
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
  category: string;
  createdAt: Date;
  exercise: string;
  exerciseDescription: string;
  level: ExcerciseLevels;
  maxPoints: number;
  scheme: string;
  subExercise: Array<string>;
  updatedAt: Date;
  videoSolution: string;
}

export interface SubExerciseDocument {
  maxPoints: number;
  question: string;
}
