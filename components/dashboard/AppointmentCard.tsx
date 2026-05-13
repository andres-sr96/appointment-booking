"use client";

import { Appointment } from "@/models/appointment";

type Props = {
  appointment: Appointment;
  onConfirm: (id: string) => void;
  onCancel: (id: string) => void;
};

export default function AppointmentCard({
  appointment,
  onConfirm,
  onCancel,
}: Props) {
  return (
    <div
      className="border-l-4 border-l-[#0040CD] rounded-xl p-4 bg-white flex items-center justify-between shadow-sm transition hover:shadow-md hover:border-l-[#0033A0]"
      style={{ margin: "1.5rem 0" }}
    >
      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-1 font-[Inter]">
        <p className="font-serif font-semibold text-[#191B24]">
          {appointment.patientName}
        </p>

        <p className="text-sm text-[#434655]">
          {appointment.reason}
        </p>

        <p className="text-sm text-[#434655]">
          {appointment.time}
        </p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col items-end gap-2 font-[Inter]">

        {/* Status */}
        <span
          className={`
            text-xs px-3 py-1 rounded-full font-medium
            ${
              appointment.status === "pending"
                ? "bg-yellow-100 text-yellow-700"
                : appointment.status === "confirmed"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
            }
          `}
        >
          {appointment.status}
        </span>

        {/* Buttons row */}
        <div className="flex gap-2">

          <button
            onClick={() => onConfirm(appointment.id)}
            className="px-5 py-2.5 text-sm bg-[#0040CD] text-white rounded-lg font-medium hover:bg-[#0033A0] transition cursor-pointer"
          >
            Confirm
          </button>

          <button
            onClick={() => onCancel(appointment.id)}
            className="px-5 py-2.5 text-sm border border-[#434655]/20 text-[#434655] rounded-lg font-medium hover:border-red-400 hover:text-red-500 transition cursor-pointer"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
}