"use client";

import { doctors } from "@/data/doctors";
import { useState } from "react";

type Props = {
  selectedDoctorId: string;
  onSelectedDoctor: (id: string) => void;
};

export default function DoctorSidebar({
  selectedDoctorId,
  onSelectedDoctor,
}: Props) {
  const [activeTab, setActiveTab] = useState("appointments");

  const doctor = doctors.find((d) => d.id === selectedDoctorId);

  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "appointments", label: "Appointments" },
    { id: "patients", label: "Patients" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div className="w-full px-6 space-y-12">

      {/* Doctor Profile */}
      <div className="mb-10">
        <div className="flex items-center gap-4">

          <img
            src={doctor?.profileImage}
            alt="Doctor"
            className="w-20 h-20 rounded-full object-cover border border-[#434655]/20"
          />

          <div>
            <p className="font-serif text-lg font-bold text-[#0040CD]">
              {doctor?.name}
            </p>

            <p className="text-sm text-[#434655] mt-1">
              {doctor?.specialty}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-3" style={{ margin: "1rem 0" }}>

        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`
              w-full text-left px-4 py-3 rounded-xl
              transition-all duration-200 cursor-pointer border font-medium

              ${
                activeTab === tab.id
                  ? "bg-[#0040CD] text-white border-[#0040CD]"
                  : "bg-white text-[#434655] border-[#434655]/10 hover:border-[#0040CD] hover:text-[#0040CD]"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}