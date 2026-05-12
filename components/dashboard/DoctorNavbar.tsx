"use client";

import { doctors } from "@/data/doctors";

type Props = {
  selectedDoctorId: string;
  onSelectedDoctor: (id: string) => void;
};

export default function DoctorNavbar({
  selectedDoctorId,
  onSelectedDoctor,
}: Props) {
  const doctor = doctors.find((d) => d.id === selectedDoctorId);
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 border-b">
      {/* Logo */}
      <div className="font-bold text-lg">SANNA</div>

      {/* Doctor selector */}
      <div className="relative group cursor-pointer">
        <img
          src={doctor?.profileImage}
          className="w-10 h-10 rounded-full"
          alt="Doctor"
        />

        {/* Dropdown */}
        <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border rounded-lg shadow-md w-48">
          {doctors.map((d) => (
            <div
              key={d.id}
              onClick={() => onSelectedDoctor(d.id)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
            >
              <img
                src={d.profileImage}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm">{d.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
