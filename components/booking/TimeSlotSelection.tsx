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
    <div className="w-full px-6 py-6 space-y-12">

      {/* Title */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-[#191B24]">
          Select Preferred Time
        </h2>

        <hr className="border-t border-[#434655]/30" style={{ margin: "1.5rem 0" }}/>
      </div>

      {/* Slots */}
      <div className="flex flex-wrap gap-3">
        {timeSlots.map((slot) => {
          const isSelected = selectedTime === slot;

          return (
            <button
              key={slot}
              type="button"
              onClick={() => setSelectedTime(slot)}
              className={`
                px-4 py-2 rounded-full border
                transition-colors duration-150
                text-sm font-medium cursor-pointer

                ${
                  isSelected
                    ? "border-[#0040CD] bg-[#0040CD] text-white"
                    : "border-[#434655] text-[#434655] hover:border-[#0040CD]"
                }
              `}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
}