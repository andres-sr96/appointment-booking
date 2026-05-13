"use client";

import { Doctor } from "@/models/doctor";

type Props = {
  selectedDoctor: Doctor | null;
  selectedTime: string | null;
};

export default function AppointmentSummary({
  selectedDoctor,
  selectedTime,
}: Props) {
  return (
    <div className="w-full px-6 py-6 space-y-8 font-sans">

      {/* HEADER */}
      <div className="space-y-4 pb-8" style={{ margin: "1rem 0" }}>
        <h2
          className="font-serif text-2xl font-semibold text-[#191B24]"
          style={{ fontFamily: "Source Serif 4, serif" }}
        >
          Appointment Summary
        </h2>
      </div>

      {/* CONTENT */}
      <div className="space-y-6">

        {/* Doctor */}
        <div className="pb-5 border-b border-[#434655]/10">
          <p className="text-sm text-[#434655]" style={{ fontFamily: "Inter, sans-serif" }}>
            Doctor
          </p>
          <p className="font-semibold text-[#191B24] font-sans">
            {selectedDoctor?.name ?? "No doctor selected"}
          </p>
        </div>

        {/* Time */}
        <div className="pb-5 border-b border-[#434655]/10">
          <p className="text-sm text-[#434655]" style={{ fontFamily: "Inter, sans-serif" }}>
            Date & Time
          </p>
          <p className="font-semibold text-[#191B24] font-sans">
            May 12, 2026 at {selectedTime ?? "No time selected"}
          </p>
        </div>

        {/* Location */}
        <div>
          <p className="text-sm text-[#434655]" style={{ fontFamily: "Inter, sans-serif" }}>
            Location
          </p>
          <p className="font-semibold text-[#191B24] font-sans">
            SANNA Center - Downtown Clinic
          </p>
        </div>

      </div>

      <hr
        className="border-t border-[#434655]/30"
        style={{ margin: "1.5rem 0" }}
      />

      {/* FOOTER */}
      <div className="pt-6 border-t border-[#434655]/10 font-sans">

        <div className="flex justify-between items-center mb-8">
          <p className="text-sm text-[#434655]" style={{ fontFamily: "Inter, sans-serif" }}>
            Consultation Fee
          </p>

          <p className="font-semibold text-[#191B24] font-sans">
            $120.00
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0040CD] text-white py-3 rounded-xl font-medium hover:bg-[#0033A0] transition cursor-pointer font-sans"
        >
          Request Appointment
        </button>

      </div>
    </div>
  );
}