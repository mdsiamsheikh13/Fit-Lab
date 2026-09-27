"use client";

import { CiBookmark } from "react-icons/ci";
import { toast } from "react-toastify";
import { usePlan } from "@/context/PlanContext";

const SaveForLaterButton = ({ exercise }) => {
  const { saved, saveForLater } = usePlan();

  const handleSaveForLater = () => {
    const alreadySaved = saved.some((item) => item.id === exercise.id);

    if (alreadySaved) {
      toast.info("This exercise is already saved for later.");
      return;
    }

    saveForLater(exercise);

    toast.success(`${exercise.name} saved for later!`);
  };

  return (
    <button
      onClick={handleSaveForLater}
      className="btn border text-sm text-white"
    >
      <CiBookmark />
      Save for later
    </button>
  );
};

export default SaveForLaterButton;
