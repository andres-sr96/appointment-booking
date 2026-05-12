"use client";

import Link from "next/link";

export default function PatientNavbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">SANNA</div>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link href="#" className="text-gray-600 hover:text-black transition">
            Home
          </Link>

          <Link href="#" className="font-medium text-blue-600">
            Book
          </Link>

          <Link href="#" className="text-gray-600 hover:text-black transition">
            My Visits
          </Link>

          {/* Notifications */}
          <button className="relative text-gray-200 hover:text-black transition">
            <img
              src="/icons/notification_icon.svg"
              alt="Notifications"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
