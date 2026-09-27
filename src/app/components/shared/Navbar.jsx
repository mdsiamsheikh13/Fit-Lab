"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../../../assets/logo.png";
import { usePlan } from "@/context/PlanContext";

const NavBar = () => {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const isActive = (href) => {
    return pathname === href;
  };

  const activeClass =
    "text-[#C2F800] bg-[#c2f80028] font-bold px-4 py-2 rounded-lg";

  const linkClass =
    "px-4 py-2 rounded-lg hover:text-[#C2F800] transition-colors";

  return (
    <div className="mb-5 border-b-2 border-gray-800">
      <div className="mx-5 my-5 md:mx-10">
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
                className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <li>
                  <Link
                    href="/"
                    className={isActive("/") ? activeClass : linkClass}
                  >
                    Workouts
                  </Link>
                </li>

                <li>
                  <Link
                    href="/my-plan"
                    className={isActive("/my-plan") ? activeClass : linkClass}
                  >
                    My Plan
                  </Link>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 text-xl">
              <Image src={Logo} width={28} height={28} alt="FITLOG Logo" />

              <h2 className="text-xl font-bold">FITLOG</h2>
            </Link>
          </div>

          {/* Desktop Page Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1">
              <li>
                <Link
                  href="/"
                  className={isActive("/") ? activeClass : linkClass}
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className={isActive("/my-plan") ? activeClass : linkClass}
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Plan + Saved Counters */}
          <div className="navbar-end gap-3 md:gap-5">
            {/* Plan */}
            <Link
              href="/my-plan?tab=plan"
              className="flex items-center gap-2 font-semibold transition-colors hover:text-[#C2F800]"
            >
              <span>Plan</span>

              <span className="rounded-full bg-[#C2F800] px-2 py-1 text-sm font-bold text-black">
                {plan.length}
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan?tab=saved"
              className="flex items-center gap-2 font-semibold transition-colors hover:text-[#C2F800]"
            >
              <span>Saved</span>

              <span className="rounded-full border border-gray-700 px-2 py-1 text-sm font-bold text-white">
                {saved.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;




