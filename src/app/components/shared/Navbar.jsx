"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.png";

const NavBar = () => {
    const pathname = usePathname();

    const isActive = (href) => {
        return pathname === href;
    };

    const activeClass =
        "text-[#C2F800] bg-[#c2f80028] font-bold px-4 py-2 rounded-lg";

    const linkClass =
        "px-4 py-2 rounded-lg hover:text-[#C2F800] transition-colors";

    const Navigation = (
        <>
            <li>
                <Link
                    href="/"
                    className={`${linkClass} ${isActive("/") ? activeClass : ""}`}
                >
                    WorkOuts
                </Link>
            </li>

            <li>
                <Link
                    href="/my-plan"
                    className={`${linkClass} ${isActive("/my-plan") ? activeClass : ""}`}
                >
                    My plan
                </Link>
            </li>
        </>
    );

    return (
        <div className="border-b-2 border-gray-800 mb-5">
            <div className="m-10">
                <div className="navbar">
                    {/* Logo + Mobile Menu */}
                    <div className="navbar-start">
                        {/* Mobile Menu */}
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    aria-label="Menu"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>

                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                            >
                                {Navigation}
                            </ul>
                        </div>

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-4 text-xl">
                            <Image src={Logo} width={28} height={28} alt="FITLOG Logo" />

                            <h2 className="text-xl font-bold">FITLOG</h2>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-2 px-1">{Navigation}</ul>
                    </div>

                    {/* Plan + Saved */}
                    <div className="navbar-end gap-5">
                        {/* Plan */}
                        <Link
                            href="/my-plan"
                            className="flex items-center gap-2 font-semibold hover:text-[#C2F800] transition-colors"
                        >
                            Plan
                            <span className="rounded-full bg-[#C2F800] px-2 py-1 text-sm font-bold text-black">
                                0
                            </span>
                        </Link>

                        {/* Saved */}
                        <Link
                            href="/my-plan"
                            className="flex items-center gap-2 font-semibold transition-colors"
                        >
                            Saved
                            <span className="rounded-full  px-2 py-1 text-sm font-bold border text-white">
                                0
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;