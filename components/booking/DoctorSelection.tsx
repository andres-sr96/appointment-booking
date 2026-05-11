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
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Select a Doctor</h2>

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
