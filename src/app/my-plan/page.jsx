"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { FiCheck, FiX } from "react-icons/fi";

import { usePlan } from "@/context/PlanContext";

const MyPlanPage = () => {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    toggleCompleted,
    isCompleted,
  } = usePlan();

  const searchParams = useSearchParams();

  // Active tab
  const [activeTab, setActiveTab] = useState("plan");

  // Sort option
  const [sortBy, setSortBy] = useState("default");

  // Read tab from URL
  useEffect(() => {
    const tab = searchParams.get("tab");

    if (tab === "saved") {
      setActiveTab("saved");
    } else {
      setActiveTab("plan");
    }
  }, [searchParams]);

  // Get exercises for current tab
  const currentExercises = activeTab === "plan" ? plan : saved;

  // Sort exercises
  const sortedExercises = useMemo(() => {
    const exercises = [...currentExercises];

    switch (sortBy) {
      case "name-asc":
        return exercises.sort((a, b) => a.name.localeCompare(b.name));

      case "name-desc":
        return exercises.sort((a, b) => b.name.localeCompare(a.name));

      case "duration-asc":
        return exercises.sort(
          (a, b) => Number(a.duration) - Number(b.duration),
        );

      case "duration-desc":
        return exercises.sort(
          (a, b) => Number(b.duration) - Number(a.duration),
        );

      case "calories-asc":
        return exercises.sort(
          (a, b) => Number(a.caloriesBurned) - Number(b.caloriesBurned),
        );

      case "calories-desc":
        return exercises.sort(
          (a, b) => Number(b.caloriesBurned) - Number(a.caloriesBurned),
        );

      default:
        return exercises;
    }
  }, [currentExercises, sortBy]);

  // Summary calculations
  const totalDuration = currentExercises.reduce(
    (total, exercise) => total + Number(exercise.duration || 0),
    0,
  );

  const totalCalories = currentExercises.reduce(
    (total, exercise) => total + Number(exercise.caloriesBurned || 0),
    0,
  );

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSortBy("default");
  };

  // Remove exercise from today's plan
  const handleRemoveFromPlan = (exercise) => {
    removeFromPlan(exercise.id);

    toast.success(`${exercise.name} removed from today's plan.`);
  };

  // Remove exercise from saved
  const handleRemoveFromSaved = (exercise) => {
    removeFromSaved(exercise.id);

    toast.success(`${exercise.name} removed from saved.`);
  };

  // Mark exercise as done
  const handleToggleDone = (exercise) => {
    const completed = isCompleted(exercise.id);

    toggleCompleted(exercise.id);

    if (completed) {
      toast.info(`${exercise.name} marked as not done.`);
    } else {
      toast.success(`${exercise.name} marked as done!`);
    }
  };

  return (
    <section className="mx-5 my-10 md:mx-10">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">My Plan</h1>

        <p className="mt-2 text-[#9CA3AF]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Summary */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Exercises */}
        <div className="rounded-xl border border-gray-900 bg-[#15171D] p-5">
          <p className="text-sm text-[#9CA3AF]">Exercises</p>

          <p className="mt-2 text-3xl font-bold text-white">
            {currentExercises.length}
          </p>
        </div>

        {/* Duration */}
        <div className="rounded-xl border border-gray-900 bg-[#15171D] p-5">
          <p className="text-sm text-[#9CA3AF]">Minutes</p>

          <p className="mt-2 text-3xl font-bold text-white">
            {totalDuration}

            <span className="ml-1 text-base font-normal text-[#9CA3AF]">
              min
            </span>
          </p>
        </div>

        {/* Calories */}
        <div className="rounded-xl border border-gray-900 bg-[#15171D] p-5">
          <p className="text-sm text-[#9CA3AF]">Calories</p>

          <p className="mt-2 text-3xl font-bold text-white">
            {totalCalories}

            <span className="ml-1 text-base font-normal text-[#9CA3AF]">
              kcal
            </span>
          </p>
        </div>
      </div>

      {/* Tabs + Sort */}
      <div className="mb-8 flex flex-col gap-4 border-b border-gray-800 pb-4 md:flex-row md:items-center md:justify-between">
        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => handleTabChange("plan")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              activeTab === "plan"
                ? "bg-[#C2F800] text-black"
                : "bg-[#15171D] text-[#9CA3AF] hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => handleTabChange("saved")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              activeTab === "saved"
                ? "bg-[#C2F800] text-black"
                : "bg-[#15171D] text-[#9CA3AF] hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm text-[#9CA3AF]">
            Sort by
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-lg border border-gray-800 bg-[#15171D] px-3 py-2 text-sm text-white outline-none focus:border-[#C2F800]"
          >
            <option value="default">Default</option>
            <option value="name-asc">Name: A → Z</option>
            <option value="name-desc">Name: Z → A</option>
            <option value="duration-asc">Duration: Low → High</option>
            <option value="duration-desc">Duration: High → Low</option>
            <option value="calories-asc">Calories: Low → High</option>
            <option value="calories-desc">Calories: High → Low</option>
          </select>
        </div>
      </div>

      {/* Empty State */}
      {currentExercises.length === 0 ? (
        <div className="rounded-xl border border-gray-900 bg-[#15171D] p-10 text-center">
          <h2 className="text-xl font-bold text-white">
            {activeTab === "plan" ? "Your plan is empty" : "No saved exercises"}
          </h2>

          <p className="mt-2 text-[#9CA3AF]">
            {activeTab === "plan"
              ? "Add some exercises to start your workout plan."
              : "Save exercises that you want to come back to later."}
          </p>

          <Link href="/exercises" className="btn mt-5 bg-[#CCFF00] text-black">
            Go to WorkOuts
          </Link>
        </div>
      ) : (
        /* Exercise List */
        <div className="flex flex-col gap-5">
          {sortedExercises.map((exercise) => {
            const completed =
              activeTab === "plan" ? isCompleted(exercise.id) : false;

            return (
              <div
                key={exercise.id}
                className={`flex flex-col overflow-hidden rounded-xl border bg-[#15171D] transition md:flex-row ${
                  completed ? "border-[#C2F800]" : "border-gray-900"
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-64">
                  <Image
                    src={exercise.image}
                    width={588}
                    height={773}
                    alt={exercise.name}
                    className={`h-full min-h-56 w-full object-cover ${
                      completed ? "opacity-60" : ""
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between gap-5 p-5">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h2
                        className={`text-xl font-bold ${
                          completed ? "text-[#C2F800]" : "text-white"
                        }`}
                      >
                        {exercise.name}
                      </h2>

                      {/* Completed Badge */}
                      {completed && (
                        <span className="shrink-0 rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold text-black">
                          Done
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm text-[#9CA3AF]">
                      {exercise.description}
                    </p>
                  </div>

                  {/* Exercise Info */}
                  <div className="flex flex-wrap gap-5 text-xs text-[#9CA3AF]">
                    <span>{exercise.sets} sets</span>
                    <span>{exercise.reps} reps</span>
                    <span>{exercise.duration} min</span>
                    <span>{exercise.caloriesBurned} kcal</span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Details */}
                    <Link href={`/exercises/${exercise.id}`} className="btn">
                      Details
                    </Link>

                    {/* Today's Plan Actions */}
                    {activeTab === "plan" && (
                      <>
                        {/* Mark as Done */}
                        <button
                          onClick={() => handleToggleDone(exercise)}
                          className={`btn gap-2 ${
                            completed
                              ? "border border-[#C2F800] bg-transparent text-[#C2F800]"
                              : "bg-[#C2F800] text-black hover:bg-[#C2F800]"
                          }`}
                        >
                          <FiCheck />

                          {completed ? "Done" : "Mark as Done"}
                        </button>

                        {/* Remove X */}
                        <button
                          onClick={() => handleRemoveFromPlan(exercise)}
                          aria-label={`Remove ${exercise.name} from plan`}
                          title="Remove from plan"
                          className="btn btn-square border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                        >
                          <FiX />
                        </button>
                      </>
                    )}

                    {/* Saved Actions */}
                    {activeTab === "saved" && (
                      <button
                        onClick={() => handleRemoveFromSaved(exercise)}
                        aria-label={`Delete ${exercise.name} from saved`}
                        title="Delete from saved"
                        className="btn btn-square border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      >
                        <FiX />
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
