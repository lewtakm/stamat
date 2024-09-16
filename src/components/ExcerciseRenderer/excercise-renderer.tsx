import { Card } from "@/components";
import "mathlive";

interface ExerciseRendererProps {
  description: string;
  excercise: string;
}

export const ExerciseRenderer = (props: ExerciseRendererProps) => {
  const { description, excercise } = props;
  return <Card title="Zadanie 1">Renderer</Card>;
};
