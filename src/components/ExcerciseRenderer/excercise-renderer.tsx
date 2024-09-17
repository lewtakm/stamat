import { Card, MathField } from "@/components";
import "mathlive";

interface ExerciseRendererProps {
  description: string;
  level?: any;
  subExercises?: Array<string>;
  title: string;
}

export const ExerciseRenderer = (props: ExerciseRendererProps) => {
  const { description, level, subExercises, title } = props;
  return (
    <Card title={title}>
      Poziom trudności zadania: {level?.label}
      <MathField isPreview value={description} />
    </Card>
  );
};
