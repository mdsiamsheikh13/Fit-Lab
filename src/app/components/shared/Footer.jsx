import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t-2 border-gray-800 my-5">
            <div className="footer sm:footer-horizontal  text-neutral-content items-center justify-between py-10 m-3 ">
                <Link href="/" className="flex items-center gap-4 text-xl">
                    <Image src={Logo} width={28} height={28} alt="FITLOG Logo" />

                    <h2 className="text-xl font-bold">FITLOG</h2>
                </Link>
                <p className="text-[#6B7280]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;