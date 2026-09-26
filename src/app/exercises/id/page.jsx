import Image from "next/image";
import React from "react";
import { CiBookmark, CiCalendar } from "react-icons/ci";

const getExerciseData = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
        throw new Error("Failed to fetch exercises");
    }

    return res.json();
};

const ExerciseDetailsPage = async ({ params }) => {
    const { id } = await params;

    const exercises = await getExerciseData();

    const exercise = exercises.find((exercise) => exercise.id === Number(id));

    if (!exercise) {
        return (
            <div className="mx-10 my-10">
                <h2 className="text-3xl font-bold text-white">Exercise not found</h2>
            </div>
        );
    }

    return (
        <section className="my-5 mx-5 flex flex-col gap-8 md:mx-10 lg:flex-row lg:items-start lg:gap-15">
            {/* Image */}
            <div className="w-full lg:w-[40%]">
                <Image
                    src={exercise.image}
                    width={588}
                    height={773}
                    alt={exercise.name}
                    className="w-full object-cover rounded-xl"
                />
            </div>

            {/* Content */}
            <div className="w-full space-y-5 lg:w-1/2">
                <h2 className="text-4xl font-bold">{exercise.name}</h2>

                <p className="text-[#9CA3AF]">{exercise.description}</p>

                <div className="flex flex-wrap gap-2">
                    {exercise.muscleGroups.map((muscle, index) => (
                        <span
                            className="rounded bg-[#C2F800] px-1 text-[10px] font-bold uppercase text-black"
                            key={index}
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-900 bg-[#15171D] space-y-3">
                    <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
                        <span className="text-[9px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                            Equipment
                        </span>
                        <span className="text-xs text-white">{exercise.equipment}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
                        <span className="text-[9px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                            Difficulty
                        </span>
                        <span className="text-xs text-white">{exercise.difficulty}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
                        <span className="text-[9px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                            Sets
                        </span>
                        <span className="text-xs text-white">{exercise.sets}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
                        <span className="text-[9px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                            Reps
                        </span>
                        <span className="text-xs text-white">{exercise.reps}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
                        <span className="text-[9px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                            Duration
                        </span>
                        <span className="text-xs text-white">{exercise.duration} min</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
                        <span className="text-[9px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                            Calories
                        </span>
                        <span className="text-xs text-white">
                            {exercise.caloriesBurned} kcal
                        </span>
                    </div>

                    <div className="flex items-center justify-between px-4 py-3">
                        <span className="text-[9px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                            Rating
                        </span>
                        <span className="text-xs text-white">{exercise.rating}</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white">Instruction</h2>

                    <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-[#9CA3AF]">
                        {exercise.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-5">
                    <button className="btn bg-[#CCFF00] text-black text-sm hover:bg-[#ccff0046]">
                        <CiCalendar />
                        Add to today's plan
                    </button>

                    <button className="btn border text-sm text-white">
                        <CiBookmark />
                        Save for later
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ExerciseDetailsPage;