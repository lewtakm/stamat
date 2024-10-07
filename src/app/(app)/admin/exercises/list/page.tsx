import { Breadcrumb, ExerciseTable } from "@/components";
import { Exercise } from "@/models";

const ExcercisesList = async () => {
  const exercises = await Exercise.find();
  const mappedExercises = exercises.map(
    ({ _id, category, createdAt, exercise, level, updatedAt }) => ({
      _id: _id.toString(),
      category,
      createdAt,
      exercise,
      level,
      updatedAt,
    })
  );

  return (
    <div className="mx-auto">
      <Breadcrumb pageName="Lista zadań" />
      <ExerciseTable exercises={mappedExercises} />
    </div>
  );
};

export default ExcercisesList;
