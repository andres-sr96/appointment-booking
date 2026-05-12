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
    <div className="border rounded-xl p-4 bg-white flex items-center justify-between">
      {/* Left side */}
      <div className="space-y-1">
        <p className="font-semibold">{appointment.patientName}</p>
        <p className="text-sm text-gray-500">{appointment.time}</p>
        <p className="text-sm text-gray-400">{appointment.reason}</p>
      </div>

      {/* Middle - status */}
      <div>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            appointment.status === "pending"
              ? "bg-yellow-100 text-yellow-700"
              : appointment.status === "confirmed"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
          }`}
        >
          {appointment.status}
        </span>
      </div>

      {/* Right side - actions */}
      <div className="flex gap-2">
        <button
          onClick={() => onConfirm(appointment.id)}
          className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm"
        >
          Confirm
        </button>

        <button
          onClick={() => onCancel(appointment.id)}
          className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
