import { Doctor } from "@/models/doctor";

type Props = {
  doctor: Doctor;
  isSelected: boolean;
  onSelect: (doctor: Doctor) => void;
};

export default function DoctorCard({ doctor, isSelected, onSelect }: Props) {
  return (
    <div
      onClick={() => onSelect(doctor)}
      className={`p-4 border rounded-lg cursor-pointer transition ${
        isSelected ? "border-blue-600" : "border-gray-200"
      }`}
    >
      <h3 className="font-semibold">{doctor.name}</h3>
      <p className="text-sm text-gray-500">{doctor.specialty}</p>
      <p className="text-xs mt-2 text-gray-600">{doctor.bio}</p>
    </div>
  );
}
