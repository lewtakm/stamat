import mongoose, { Schema, model } from "mongoose";

const QuestionSchema = new Schema<QuestionDocument>(
  {
    category: { required: [true, "Kategoria jest wymagana."], type: String },
    level: { required: [true, "Kategoria jest wymagana."], type: Number },
    maxPoints: {
      required: [true, "Maksymalna liczba punktów jest wymagana."],
      type: Number,
    },
    question: {
      required: [true, "Treść pytania jest wymagana."],
      type: String,
    },
    scheme: {
      type: String,
    },
    subQuestions: [
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

export const Question =
  mongoose.models?.Question ||
  model<QuestionDocument>("Question", QuestionSchema);

export interface QuestionDocument {
  _id: string;
  level: number;
  scheme: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  question: string;
  maxPoints: number;
  videoSolution: string;
  subQuestions: Array<string>;
}

export interface SubQuestionDocument {
  question: string;
  maxPoints: number;
}
