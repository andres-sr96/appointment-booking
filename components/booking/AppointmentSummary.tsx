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
    <div className="w-full px-6 py-6 space-y-8">
      {/* HEADER */}
      <div className="space-y-4 pb-8" style={{ margin: "1rem 0" }}>
        <h2 className="text-2xl font-semibold text-[#191B24]">
          Appointment Summary
        </h2>
      </div>

      {/* CONTENT */}
      <div className="space-y-6">
        {/* Doctor */}
        <div className="pb-5 border-b border-[#434655]/10">
          <p className="text-sm text-[#434655] mb-1">Doctor</p>
          <p className="font-bold text-[#191B24]">
            {selectedDoctor?.name ?? "No doctor selected"}
          </p>
        </div>

        {/* Time */}
        <div className="pb-5 border-b border-[#434655]/10">
          <p className="text-sm text-[#434655] mb-1">Date & Time</p>
          <p className="font-bold text-[#191B24]">
            May 12, 2026 at {selectedTime ?? "No time selected"}
          </p>
        </div>

        {/* Location */}
        <div>
          <p className="text-sm text-[#434655] mb-1">Location</p>
          <p className="font-bold text-[#191B24]">
            SANNA Center - Downtown Clinic
          </p>
        </div>
      </div>
      <hr
        className="border-t border-[#434655]/30"
        style={{ margin: "1.5rem 0" }}
      />

      {/* FOOTER */}
      <div className=" pt-6 border-t border-[#434655]/10">
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm text-[#434655]">Consultation Fee</p>
          <p className="font-semibold text-[#191B24]">$120.00</p>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0040CD] text-white py-3 rounded-xl font-medium hover:bg-[#0033A0] transition cursor-pointer"
        >
          Request Appointment
        </button>
      </div>
    </div>
  );
}
