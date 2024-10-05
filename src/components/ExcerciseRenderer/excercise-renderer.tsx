import { Card, MathField } from "@/components";
import { ExerciesBody } from "@/models";
import "mathlive";

interface ExerciseRendererProps {
  exercise?: ExerciesBody;
  level?: { label: string; value: string };
  subExercises?: Array<ExerciesBody>;
  title: string;
}

export const ExerciseRenderer = (props: ExerciseRendererProps) => {
  const { exercise, level, subExercises, title } = props;

  if (!exercise) {
    return;
  }

  const { question } = exercise;
  return (
    <Card title={title}>
      Poziom trudności zadania: {level?.label}
      <MathField isPreview value={question} />
    </Card>
  );
};
