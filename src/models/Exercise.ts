import mongoose, { model, Schema } from "mongoose";

export enum ExcerciseLevels {
  EASY = 1,
  HARD = 3,
  MEDIUM = 2,
}

const ExerciseSchema = new Schema<ExerciseDocument>(
  {
    category: {
      default: 1,
      required: [true, "Kategoria jest wymagana."],
      type: Number,
    },
    exercise: {
      answer: {
        required: [true, "Odpowiedź jest wymagana."],
        type: String,
      },
      points: {
        required: [true, "Maksymalna liczba punktów jest wymagana."],
        type: Number,
      },
      question: {
        required: [true, "Opis zadania jest wymagany."],
        type: String,
      },
    },
    subExercises: [
      {
        answer: {
          required: [true, "Odpowiedź jest wymagana."],
          type: String,
        },
        points: {
          required: [true, "Maksymalna liczba punktów jest wymagana."],
          type: Number,
        },
        question: {
          required: [true, "Opis zadania jest wymagany."],
          type: String,
        },
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

export interface ExerciesBody {
  answer: string;
  points: number;
  question: string;
}

export interface ExerciseDocument {
  _id: string;
  category: number;
  createdAt: Date;
  exercise: ExerciesBody;
  level: number;
  subExercises?: Array<ExerciesBody>;
  updatedAt: Date;
  videoSolution?: string;
}
