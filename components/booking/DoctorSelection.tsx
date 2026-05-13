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
    <div className="w-full px-6 py-6 space-y-12">

      {/* HEADER */}
      <div className="space-y-4 pb-8">
        <h2 className="font-serif text-3xl font-semibold text-[#191B24]">
          Book an Appointment
        </h2>

        <p className="text-sm text-[#434655] leading-relaxed max-w-xl">
          Complete the steps below to secure your clinical consultation
        </p>
      </div>

      {/* SECTION */}
      <div className="space-y-6">

        {/* TITLE */}
        <div className="space-y-3">
          <h3 className="font-serif text-2xl font-semibold text-[#191B24]">
            Select Doctor
          </h3>
        </div>

        <hr
          className="border-t border-[#434655]/30"
          style={{ margin: "1.5rem 0" }}
        />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
    </div>
  );
}