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
  video_solution: string;
  scheme: string;
  question: Date;
  subQuestions: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}
