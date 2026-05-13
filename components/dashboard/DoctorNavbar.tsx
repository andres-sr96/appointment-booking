"use client";

import Image from "next/image";
import { doctors } from "@/data/doctors";

type Props = {
  selectedDoctorId: string;
  onSelectedDoctor: (id: string) => void;
};

export default function DoctorNavbar({
  selectedDoctorId,
  onSelectedDoctor,
}: Props) {
  const doctor = doctors.find((d) => d.id === selectedDoctorId);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-[#434655]/10">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-bold tracking-tight text-[#434655]"
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          SANNA
        </div>

        {/* Right side */}
        <div className="flex items-center gap-8">
          {/* Doctor Dropdown */}
          <div className="relative group">
            {/* Selected doctor */}
            <div className="flex items-center gap-3 cursor-pointer bg-white hover:bg-[#F7F8FA] px-3 transition border border-[#434655]/10">
              <Image
                src={doctor?.profileImage || "/default-doctor.png"}
                alt="Doctor"
                width={44}
                height={44}
                className="rounded-full object-cover border border-[#434655]/20"
              />

              {/* Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-[#434655] group-hover:text-[#0040CD] transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown menu */}
            <div
              className="
                absolute right-0 mt-4 w-72
                bg-white rounded-2xl
                border border-[#434655]/10
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                opacity-0 invisible
                translate-y-2
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0
                transition-all duration-200
                overflow-hidden
              "
            >
              {/* Header */}
              <div className="px-4 py-3 border-b border-[#434655]/10 bg-[#F7F8FA]">
                <p className="text-xs uppercase tracking-wide text-[#434655] font-medium">
                  Switch Doctor
                </p>
              </div>

              {/* Doctors */}
              <div className="py-2">
                {doctors.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => onSelectedDoctor(d.id)}
                    className={`
                      w-full px-4 py-3 flex items-center gap-3 text-left
                      transition cursor-pointer
                      hover:bg-[#F7F8FA]
                      ${selectedDoctorId === d.id ? "bg-[#0040CD]/5" : ""}
                    `}
                  >
                    <Image
                      src={d.profileImage}
                      alt={d.name}
                      width={42}
                      height={42}
                      className={`
                        rounded-full object-cover border
                        ${
                          selectedDoctorId === d.id
                            ? "border-[#0040CD]"
                            : "border-[#434655]/20"
                        }
                      `}
                    />

                    <div className="flex-1">
                      <p
                        className={`
                          text-sm font-semibold
                          ${
                            selectedDoctorId === d.id
                              ? "text-[#0040CD]"
                              : "text-[#191B24]"
                          }
                        `}
                      >
                        {d.name}
                      </p>

                      <p className="text-xs text-[#434655] mt-1">
                        {d.specialty}
                      </p>
                    </div>

                    {/* Selected indicator */}
                    {selectedDoctorId === d.id && (
                      <div className="w-2 h-2 rounded-full bg-[#0040CD]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
