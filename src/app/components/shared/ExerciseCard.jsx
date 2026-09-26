import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";

const ExerciseCard = ({ exercise }) => {
    return (
        <Link
            href={`/exercises/${exercise.id}`}
            className="block rounded-xl bg-[#15171D] transition-transform hover:-translate-y-1"
        >
            <Image
                src={exercise.image}
                width={390}
                height={190}
                alt={exercise.name}
                className="h-[220px] w-full rounded-t-xl object-cover pb-2"
            />

            <div className="space-y-2 p-5">
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

                <h3 className="text-lg uppercase">{exercise.name}</h3>

                <p className="text-[12px] text-[#9CA3AF]">{exercise.equipment}</p>

                <hr className="my-3 border-t border-gray-600" />

                <div className="flex flex-wrap justify-between gap-2 text-[12px] text-[#9CA3AF]">
                    <p className="flex items-center gap-2">
                        <FaRegClock />
                        {exercise.duration} min
                    </p>

                    <p className="flex items-center gap-2">
                        <IoIosLeaf />
                        {exercise.caloriesBurned} kcal
                    </p>

                    <p className="flex items-center gap-2">
                        <FaRegStar />
                        {exercise.rating}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ExerciseCard;