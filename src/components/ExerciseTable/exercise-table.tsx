"use client";

import { Alert, MathField } from "@/components";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { formatDate } from "@/helpers";
import { ExerciseDocument } from "@/models";
import { Edit } from "lucide-react";
import Link from "next/link";

interface ExerciseTableProps {
  exercises?: ExerciseDocument[];
}

export const ExerciseTable = ({ exercises }: ExerciseTableProps) => {
  if (!exercises || exercises.length === 0) {
    return <Alert title="Brak dostępnych ćwiczeń." type="error" />;
  }

  return (
    <div className="container mx-auto py-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pytanie</TableHead>
            <TableHead>Kategoria</TableHead>
            <TableHead>Poziom</TableHead>
            <TableHead>Odpowiedź</TableHead>
            <TableHead>Punkty</TableHead>
            <TableHead>Rozwiązanie wideo</TableHead>
            <TableHead>Data utworzenia</TableHead>
            <TableHead>Data edycji</TableHead>
            <TableHead>Akcje</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exercises.map(
            ({
              _id,
              category,
              createdAt,
              exercise,
              level,
              updatedAt,
              videoSolution,
            }) => (
              <TableRow key={_id.toString()}>
                <TableCell>
                  <MathField isReadOnly value={exercise.question}></MathField>
                </TableCell>
                <TableCell>{category}</TableCell>
                <TableCell>{level}</TableCell>
                <TableCell>{exercise.answer}</TableCell>
                <TableCell>{exercise.points}</TableCell>
                <TableCell>{videoSolution || "-"}</TableCell>
                <TableCell>{formatDate(createdAt)}</TableCell>
                <TableCell>{formatDate(updatedAt)}</TableCell>
                <TableCell>
                  <Link href={`/exercise/${_id.toString()}`}>
                    <Button size="icon" title="Edytuj" variant="outline">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edytuj</span>
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};
