"use client";

import { timeSlots } from "@/data/timeSlots";

type Props = {
  selectedTime: string | null;
  setSelectedTime: (time: string) => void;
};

export default function TimeSlotSelection({
  selectedTime,
  setSelectedTime,
}: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Select Preferred Time</h2>
      <div className="flex flex-wrap gap-3">
        {timeSlots.map((slot) => (
          <button
            key={slot}
            onClick={() => setSelectedTime(slot)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedTime === slot
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200"
            }`}
          >
            {slot}
          </button>
        ))}
      </div>

      {/* 
      Testing selected time
      
      {selectedTime && (
        <div className="text-sm text-gray-700">
          Selected Time: <strong>{selectedTime}</strong>
        </div>
      )} */}
    </div>
  );
}
