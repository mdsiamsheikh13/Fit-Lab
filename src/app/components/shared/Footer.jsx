import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t-2 border-gray-800 ">
            <div className="mx-10 my-5">
                <div className="mx-3 flex flex-col items-center my-5 justify-between gap-4 py-8 sm:flex-row sm:py-10">
                    <Link href="/" className="flex items-center gap-3 text-xl">
                        <Image src="/logo.png" width={28} height={28} alt="FITLOG Logo" />

                        <h2 className="text-xl font-bold">FITLOG</h2>
                    </Link>

                    <p className="text-center text-sm text-[#6B7280] sm:text-base">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;