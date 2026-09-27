"use client";

import { CiCalendar } from "react-icons/ci";
import { toast } from "react-toastify";
import { usePlan } from "@/context/PlanContext";

const AddToPlanButton = ({ exercise }) => {
  const { plan, addToPlan } = usePlan();

  const handleAddToPlan = () => {
    const alreadyAdded = plan.some((item) => item.id === exercise.id);

    if (alreadyAdded) {
      toast.info("This exercise is already in today's plan.");
      return;
    }

    addToPlan(exercise);

    toast.success(`${exercise.name} added to today's plan!`);
  };

  return (
    <button
      onClick={handleAddToPlan}
      className="btn bg-[#CCFF00] text-black text-sm hover:bg-[#ccff0046]"
    >
      <CiCalendar />
      Add to today's plan
    </button>
  );
};

export default AddToPlanButton;
