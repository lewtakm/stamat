import mongoose, { model, Schema } from "mongoose";

export enum ExcerciseLevels {
  EASY = 1,
  HARD = 3,
  MEDIUM = 2,
}

const ExerciseSchema = new Schema<ExerciseDocument>(
  {
    category: { required: [true, "Kategoria jest wymagana."], type: String },
    description: {
      required: [true, "Treść zadania jest wymagana."],
      type: String,
    },
    level: {
      required: [true, "Kategoria jest wymagana."],
      type: Number,
    },
    maxPoints: {
      required: [true, "Maksymalna liczba punktów jest wymagana."],
      type: Number,
    },
    subExercises: [
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
  description: string;
  level: number;
  maxPoints: number;
  subExercises?: Array<string>;
  updatedAt: Date;
  videoSolution?: string;
}
