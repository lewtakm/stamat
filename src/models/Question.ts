import mongoose, { model, Schema } from "mongoose";

export interface SubQuestionDocument {
  question: string;
  maxPoints: number;
}

export interface QuestionDocument {
  _id: string;
  category: string;
  level: number;
  maxPoints: number;
  videoSolution: string;
  scheme: string;
  question: string;
  subQuestions: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}

const QuestionSchema = new Schema<QuestionDocument>(
  {
    category: {
      type: String,
      required: [true, "Kategoria jest wymagana."],
    },
    level: {
      type: Number,
      required: [true, "Kategoria jest wymagana."],
    },
    maxPoints: {
      type: Number,
      required: [true, "Maksymalna liczba punktów jest wymagana."],
    },
    videoSolution: {
      type: String,
    },
    scheme: {
      type: String,
    },
    question: {
      type: String,
      required: [true, "Treść pytania jest wymagana."],
    },
    subQuestions: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Question =
  mongoose.models?.Question ||
  model<QuestionDocument>("Question", QuestionSchema);
