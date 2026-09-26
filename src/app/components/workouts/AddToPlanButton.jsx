"use client";

import { CiCalendar } from "react-icons/ci";
import { usePlan } from "@/context/PlanContext";

const AddToPlanButton = ({ exercise }) => {
    const { plan, addToPlan } = usePlan();

    const handleAddToPlan = () => {
        const alreadyAdded = plan.some((item) => item.id === exercise.id);

        if (alreadyAdded) {
            alert("This exercise is already in your today's plan.");
            return;
        }

        addToPlan(exercise);
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