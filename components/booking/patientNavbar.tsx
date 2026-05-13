"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PatientNavbar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItemClass = (delay: string) => `
    relative font-medium text-[#434655] hover:text-[#0040CD]
    transition-colors duration-200
    ${!isMounted ? "opacity-0 translate-y-2" : ""}
    ${isMounted ? delay : ""}
  `;

  return (
    <nav className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className={`
            text-2xl font-bold tracking-tight text-[#434655]
            ${!isMounted ? "opacity-0 translate-y-2" : ""}
            ${isMounted ? "animate-fade-in" : ""}
          `}
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          SANNA
        </div>
        {/* Navigation */}
        <div className="flex items-center gap-8">
          {/* Home */}
          <Link href="#" className={navItemClass("animate-fade-in-delay-100")}>
            <span className="relative group">
              Home
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#0040CD] transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>

          {/* Book */}
          <Link href="#" className={navItemClass("animate-fade-in-delay-200")}>
            <span className="relative">
              Book
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#0040CD]" />
            </span>
          </Link>

          {/* My Visits */}
          <Link href="#" className={navItemClass("animate-fade-in-delay-300")}>
            <span className="relative group">
              My Visits
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#0040CD] transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>

          {/* Notifications */}
          <button
            className={`
              relative flex items-center justify-center
              ${!isMounted ? "opacity-0 translate-y-2" : ""}
              ${isMounted ? "animate-fade-in-delay-400" : ""}
            `}
            aria-label="Notifications"
          >
            <Image
              src="/icons/notification_icon.png"
              alt="Notifications"
              width={20}
              height={20}
              className="transition-transform duration-200 hover:scale-110"
            />

            {/* Notification Dot */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#0040CD] rounded-full" />
          </button>
        </div>
      </div>
    </nav>
  );
}
