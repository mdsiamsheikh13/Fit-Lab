import Image from "next/image";
import React from "react";
// import BannerImg from "../../../../public/banner.png";

const Banner = () => {
    return (
        <section className="m-10">
            <div className="flex flex-col items-center justify-between rounded-xl bg-[#15171D] sm:flex-row h-auto sm:h-120">
                <div className="w-full space-y-4 p-6 sm:w-150 sm:p-10 md:p-12 lg:p-15">
                    <p className="text-[#C2F800] text-[11px] uppercase">
                        Workout Library
                    </p>

                    <h2 className="w-[350px] text-3xl font-bold text-white sm:w-[450px] sm:text-4xl md:w-[550px] md:text-5xl lg:w-[600px] lg:text-6xl">
                        TRAIN WITH INTENT. LOG
                        <br />
                        EVERY SET.
                    </h2>

                    <p className="text-[#9CA3AF]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.
                    </p>

                    <button className="rounded-md bg-[#C2F800] p-2 text-black">
                        Browse Workouts
                    </button>
                </div>

                <div className="shrink-0">
                    <Image
                        src="/banner.png"
                        width={335}
                        height={335}
                        alt="Banner Image"
                        className="w-60 sm:w-72 md:w-[300px] lg:w-[335px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;