import React from "react";
import ExerciseCard from "../shared/ExerciseCard";

const getExerciseData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const Exercises = async () => {
  const exerciseData = await getExerciseData();

  return (
    <section className="mx-5 my-10 space-y-5 sm:mx-6 md:mx-8 lg:mx-10">
      <div>
        <h2 className="text-3xl font-bold text-white">THE LIBRARY</h2>

        <p className="text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-15">
        {exerciseData.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </section>
  );
};



export default Exercises;
