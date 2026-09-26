"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePlan } from "@/context/PlanContext";

const MyPlanPage = () => {
    const {
        plan,
        removeFromPlan,
        saved,
        removeFromSaved,
        completed,
        toggleCompleted,
    } = usePlan();

    const [activeTab, setActiveTab] = useState("plan");
    const [sortBy, setSortBy] = useState("default");

    // Sort today's plan or saved exercises
    const currentItems = activeTab === "plan" ? plan : saved;

    const sortedItems = useMemo(() => {
        const items = [...currentItems];

        switch (sortBy) {
            case "name-asc":
                return items.sort((a, b) => a.name.localeCompare(b.name));

            case "name-desc":
                return items.sort((a, b) => b.name.localeCompare(a.name));

            case "duration-asc":
                return items.sort((a, b) => a.duration - b.duration);

            case "duration-desc":
                return items.sort((a, b) => b.duration - a.duration);

            case "calories-asc":
                return items.sort((a, b) => a.caloriesBurned - b.caloriesBurned);

            case "calories-desc":
                return items.sort((a, b) => b.caloriesBurned - a.caloriesBurned);

            default:
                return items;
        }
    }, [currentItems, sortBy]);

    // Today's plan statistics
    const totalExercises = plan.length;

    const totalDuration = plan.reduce(
        (total, exercise) => total + Number(exercise.duration || 0),
        0,
    );

    const totalCalories = plan.reduce(
        (total, exercise) => total + Number(exercise.caloriesBurned || 0),
        0,
    );

    const handleRemoveFromPlan = (exercise) => {
        removeFromPlan(exercise.id);

        alert(`${exercise.name} has been removed from your plan.`);
    };

    const handleRemoveFromSaved = (exercise) => {
        removeFromSaved(exercise.id);

        alert(`${exercise.name} has been removed from your saved workouts.`);
    };

    return (
        <section className="mx-5 my-10 md:mx-10">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white">MY PLAN</h1>

                <p className="mt-2 text-[#9CA3AF]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Statistics */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {/* Exercises */}
                <div className="rounded-xl border border-gray-900 bg-[#15171D] p-5">
                    <p className="text-xs uppercase tracking-wide text-[#9CA3AF]">
                        Total Exercises
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {totalExercises}
                    </h2>
                </div>

                {/* Duration */}
                <div className="rounded-xl border border-gray-900 bg-[#15171D] p-5">
                    <p className="text-xs uppercase tracking-wide text-[#9CA3AF]">
                        Total Duration
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {totalDuration} min
                    </h2>
                </div>

                {/* Calories */}
                <div className="rounded-xl border border-gray-900 bg-[#15171D] p-5">
                    <p className="text-xs uppercase tracking-wide text-[#9CA3AF]">
                        Total Calories
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {totalCalories} kcal
                    </h2>
                </div>
            </div>

            {/* Tabs + Sort */}
            <div className="mb-6 flex flex-col gap-4 border-b border-gray-800 pb-4 md:flex-row md:items-center md:justify-between">
                {/* Tabs */}
                <div className="flex gap-2">
                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${activeTab === "plan"
                                ? "bg-[#C2F800] text-black"
                                : "text-[#9CA3AF] hover:text-white"
                            }`}
                    >
                        Today's Plan
                        <span className="ml-2">{plan.length}</span>
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${activeTab === "saved"
                                ? "bg-[#C2F800] text-black"
                                : "text-[#9CA3AF] hover:text-white"
                            }`}
                    >
                        Saved
                        <span className="ml-2">{saved.length}</span>
                    </button>
                </div>

                {/* Sort */}
                <div className="flex items-center gap-3">
                    <label htmlFor="sort" className="text-sm text-[#9CA3AF]">
                        Sort by:
                    </label>

                    <select
                        id="sort"
                        value={sortBy}
                        onChange={(event) => setSortBy(event.target.value)}
                        className="rounded-lg border border-gray-800 bg-[#15171D] px-3 py-2 text-sm text-white outline-none"
                    >
                        <option value="default">Default</option>
                        <option value="name-asc">Name A-Z</option>
                        <option value="name-desc">Name Z-A</option>
                        <option value="duration-asc">Duration Low-High</option>
                        <option value="duration-desc">Duration High-Low</option>
                        <option value="calories-asc">Calories Low-High</option>
                        <option value="calories-desc">Calories High-Low</option>
                    </select>
                </div>
            </div>

            {/* Empty State */}
            {sortedItems.length === 0 ? (
                <div className="rounded-xl border border-gray-900 bg-[#15171D] p-10 text-center">
                    <h2 className="text-xl font-bold text-white">
                        {activeTab === "plan" ? "Your plan is empty" : "No saved workouts"}
                    </h2>

                    <p className="mt-2 text-[#9CA3AF]">
                        {activeTab === "plan"
                            ? "Add some exercises to start your workout plan."
                            : "Save exercises for later and they will appear here."}
                    </p>

                    <Link href="/exercises" className="btn mt-5 bg-[#CCFF00] text-black">
                        Browse Exercises
                    </Link>
                </div>
            ) : (
                /* Exercise List */
                <div className="flex flex-col gap-5">
                    {sortedItems.map((exercise) => {
                        const isCompleted = completed.includes(exercise.id);

                        return (
                            <div
                                key={exercise.id}
                                className={`flex flex-col overflow-hidden rounded-xl border bg-[#15171D] md:flex-row ${isCompleted ? "border-[#C2F800]" : "border-gray-900"
                                    }`}
                            >
                                {/* Image */}
                                <div className="w-full md:w-64">
                                    <Image
                                        src={exercise.image}
                                        width={200}
                                        height={300}
                                        alt={exercise.name}
                                        className={`h-full min-h-56 w-full object-cover ${isCompleted ? "opacity-60" : ""
                                            }`}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col justify-between gap-5 p-5">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h2
                                                className={`text-xl font-bold ${isCompleted
                                                        ? "text-[#9CA3AF] line-through"
                                                        : "text-white"
                                                    }`}
                                            >
                                                {exercise.name}
                                            </h2>

                                            {activeTab === "plan" && isCompleted && (
                                                <span className="rounded bg-[#C2F800] px-2 py-1 text-[10px] font-bold uppercase text-black">
                                                    Done
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Exercise information */}
                                    <div className="flex flex-wrap gap-5 text-xs text-[#9CA3AF]">
                                        <span>{exercise.sets} sets</span>

                                        <span>{exercise.reps} reps</span>

                                        <span>{exercise.duration} min</span>

                                        <span>{exercise.caloriesBurned} kcal</span>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-wrap gap-3">
                                        <Link href={`/exercises/${exercise.id}`} className="btn">
                                            View Details
                                        </Link>

                                        {activeTab === "plan" && (
                                            <>
                                                <button
                                                    onClick={() => toggleCompleted(exercise.id)}
                                                    className={`btn ${isCompleted
                                                            ? "border border-gray-600 text-[#9CA3AF]"
                                                            : "bg-[#CCFF00] text-black"
                                                        }`}
                                                >
                                                    {isCompleted ? "Mark as Undone" : "Mark as Done"}
                                                </button>

                                                <button
                                                    onClick={() => handleRemoveFromPlan(exercise)}
                                                    className="btn border border-red-500 text-red-500"
                                                >
                                                    Remove
                                                </button>
                                            </>
                                        )}

                                        {activeTab === "saved" && (
                                            <button
                                                onClick={() => handleRemoveFromSaved(exercise)}
                                                className="btn border border-red-500 text-red-500"
                                            >
                                                X
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default MyPlanPage;
