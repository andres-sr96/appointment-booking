"use client";

import { Doctor } from "@/models/doctor";

type Props = {
  selectedDoctor: Doctor | null;
  selectedTime: string | null;
  onSubmit: () => void;
};

export default function AppointmentSummary({
  selectedDoctor,
  selectedTime,
  onSubmit,
}: Props) {
  return (
    <div className="space-y-6 border rounded-xl p-6 bg-white">
      <h2 className="text-xl font-semibold">Appointment Summary</h2>
      {/* Doctor Selected */}
      <div>
        <p className="text-sm text-gray-500">Doctor</p>
        <p className="font-medium">
          {selectedDoctor?.name ?? "No doctor selected"}
        </p>
      </div>

      {/* Time Selected */}
      <div>
        <p className="text-sm text-gray-500">Date & Time</p>
        <p className="font-medium">
          May 12, 2026 at {selectedTime ?? "No time selected"}
        </p>
      </div>

      {/* Location */}
      <div>
        <p className="text-sm text-gray-500">Location</p>
        <p className="font-medium">CareBook Medical Center - Downtown Clinic</p>
      </div>

      <hr />
      {/* Fee */}
      <div>
        <p className="text-sm text-gray-500">Consultation Fee</p>
        <p className="font-medium">$120.00</p>
      </div>

      {/* Submit */}
      <button
        onClick={onSubmit}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Request Appointment
      </button>
    </div>
  );
}
