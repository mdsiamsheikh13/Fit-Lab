import Image from "next/image";
import Link from "next/link";
import React from "react";

const getExerciseData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch exercises");
  }

  return res.json();
};

const ExercisePage = async () => {
  const exercises = await getExerciseData();

  return (
    <section className="mx-5 my-10 md:mx-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">Exercises</h1>
        <p className="mt-2 text-[#9CA3AF]">
          Explore exercises and find the right workout for you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {exercises.map((exercise) => (
          <Link
            href={`/exercises/${exercise.id}`}
            key={exercise.id}
            className="overflow-hidden rounded-xl border border-gray-900 bg-[#15171D] transition hover:border-[#C2F800]"
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={exercise.image}
                width={588}
                height={773}
                alt={exercise.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-4 p-5">
              <div>
                <h2 className="text-xl font-bold text-white">
                  {exercise.name}
                </h2>

                <p className="mt-2 line-clamp-2 text-sm text-[#9CA3AF]">
                  {exercise.description}
                </p>
              </div>

              {/* Muscle groups */}
              <div className="flex flex-wrap gap-2">
                {exercise.muscleGroups.map((muscle, index) => (
                  <span
                    key={index}
                    className="rounded bg-[#C2F800] px-2 py-1 text-[10px] font-bold uppercase text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Exercise info */}
              <div className="flex items-center justify-between border-t border-gray-800 pt-4 text-xs text-[#9CA3AF]">
                <span>{exercise.difficulty}</span>
                <span>{exercise.duration} min</span>
                <span>{exercise.caloriesBurned} kcal</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExercisePage;
