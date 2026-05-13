"use client";

import { Doctor } from "@/models/doctor";
import { doctors } from "@/data/doctors";
import DoctorCard from "./DoctorCard";

type Props = {
  selectedDoctor: Doctor | null;
  setSelectedDoctor: (doctor: Doctor) => void;
};

export default function DoctorSelection({
  selectedDoctor,
  setSelectedDoctor,
}: Props) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-[#191B24]">
          Book an Appointment
        </h2>
        <p className="text-sm text-[#434655] leading-relaxed max-w-xl">
          Complete the steps below to secure your clinical consultation
        </p>
      </div>

      {/* Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#191B24]">
          Select a Doctor
        </h3>

        <div className="grid gap-3">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              isSelected={selectedDoctor?.id === doctor.id}
              onSelect={setSelectedDoctor}
            />
          ))}
        </div>
      </div>
      {/* 
      Testing selected doctor
      
      {selectedDoctor && (
        <div className="mt-4 text-sm text-gray-700">
          Selected: <strong>{selectedDoctor.name}</strong>
        </div>
      )} */}
    </div>
  );
}
