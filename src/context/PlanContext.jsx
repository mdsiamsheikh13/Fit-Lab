"use client";

import { createContext, useContext, useState } from "react";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);

    // Add exercise to today's plan
    const addToPlan = (exercise) => {
        setPlan((previousPlan) => {
            const alreadyExists = previousPlan.some(
                (item) => item.id === exercise.id,
            );

            if (alreadyExists) {
                return previousPlan;
            }

            return [...previousPlan, exercise];
        });
    };

    // Remove exercise from today's plan
    const removeFromPlan = (id) => {
        setPlan((previousPlan) =>
            previousPlan.filter((exercise) => exercise.id !== id),
        );
    };

    // Save exercise for later
    const saveForLater = (exercise) => {
        setSaved((previousSaved) => {
            const alreadyExists = previousSaved.some(
                (item) => item.id === exercise.id,
            );

            if (alreadyExists) {
                return previousSaved;
            }

            return [...previousSaved, exercise];
        });
    };

    // Remove exercise from saved list
    const removeFromSaved = (id) => {
        setSaved((previousSaved) =>
            previousSaved.filter((exercise) => exercise.id !== id),
        );
    };

    return (
        <PlanContext.Provider
            value={{
                plan,
                addToPlan,
                removeFromPlan,
                saved,
                saveForLater,
                removeFromSaved,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export const usePlan = () => {
    const context = useContext(PlanContext);

    if (!context) {
        throw new Error("usePlan must be used inside PlanProvider");
    }

    return context;
};