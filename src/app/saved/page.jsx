"use client";

import Image from "next/image";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";

const SavedPage = () => {
    const { saved, removeFromSaved } = usePlan();

    return (
        <section className="mx-5 my-10 md:mx-10">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white">Saved Workouts</h1>

                <p className="mt-2 text-[#9CA3AF]">
                    {saved.length} saved workout{saved.length !== 1 ? "s" : ""}
                </p>
            </div>

            {saved.length === 0 ? (
                <div className="rounded-xl border border-gray-900 bg-[#15171D] p-10 text-center">
                    <h2 className="text-xl font-bold text-white">No saved workouts</h2>

                    <p className="mt-2 text-[#9CA3AF]">
                        Save exercises for later and they will appear here.
                    </p>

                    <Link href="/exercises" className="btn mt-5 bg-[#CCFF00] text-black">
                        Browse Exercises
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col gap-5">
                    {saved.map((exercise) => (
                        <div
                            key={exercise.id}
                            className="flex flex-col overflow-hidden rounded-xl border border-gray-900 bg-[#15171D] md:flex-row"
                        >
                            {/* Image */}
                            <div className="w-full md:w-64">
                                <Image
                                    src={exercise.image}
                                    width={588}
                                    height={773}
                                    alt={exercise.name}
                                    className="h-full min-h-56 w-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col justify-between gap-5 p-5">
                                <div>
                                    <h2 className="text-xl font-bold text-white">
                                        {exercise.name}
                                    </h2>

                                    <p className="mt-2 text-sm text-[#9CA3AF]">
                                        {exercise.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-5 text-xs text-[#9CA3AF]">
                                    <span>{exercise.sets} sets</span>
                                    <span>{exercise.reps} reps</span>
                                    <span>{exercise.duration} min</span>
                                    <span>{exercise.caloriesBurned} kcal</span>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <Link href={`/exercises/${exercise.id}`} className="btn">
                                        Details
                                    </Link>

                                    <button
                                        onClick={() => {
                                            removeFromSaved(exercise.id);
                                            alert(
                                                `${exercise.name} has been removed from your saved workouts.`,
                                            );
                                        }}
                                        className="btn border border-red-500 text-red-500"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default SavedPage;