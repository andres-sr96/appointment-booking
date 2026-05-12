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
  const doctor = doctors.find((d) => d.id == selectedDoctorId);

  return (
    <div className="h-screen border p-4 flex flex-col gap-6">
      {/* Doctor profile */}
      <div className="flex flex-col items-center text-center gap-2">
        <img
          src={doctor?.profileImage}
          alt="Doctor"
          className="w-20 h-20 rounded-full object-cover"
        />

        <div>
          <p className="font-semibold">{doctor?.name}</p>
          <p className="text-sm text-gray-500">{doctor?.specialty}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-2 mt-4">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`text-left px-3 py-2 rounded ${
            activeTab === "dashboard" ? "bg-gray-200" : "hover:bg-gray-100"
          }`}
        >
          Dashboard
        </button>

        <button
          onClick={() => setActiveTab("appointments")}
          className={`text-left px-3 py-2 rounded ${
            activeTab === "appointments"
              ? "bg-gray-200 font-medium"
              : "hover:bg-gray-100"
          }`}
        >
          Appointments
        </button>

        <button
          onClick={() => setActiveTab("patients")}
          className={`text-left px-3 py-2 rounded ${
            activeTab === "patients" ? "bg-gray-200" : "hover:bg-gray-100"
          }`}
        >
          Patients
        </button>

        <button
          onClick={() => setActiveTab("settings")}
          className={`text-left px-3 py-2 rounded ${
            activeTab === "settings" ? "bg-gray-200" : "hover:bg-gray-100"
          }`}
        >
          Settings
        </button>
      </div>
    </div>
  );
}
