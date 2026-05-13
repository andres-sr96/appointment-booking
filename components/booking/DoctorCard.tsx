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
      className={`flex gap-4 p-4 rounded-xl cursor-pointer border-2 transition-colors duration-150
        ${isSelected ? "border-[#0040CD] border-3" : "border-[#C4C5D8] hover:border-[#0040CD]"}`}
    >
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src={doctor.profileImage}
          alt={doctor.name}
          className="w-14 h-14 rounded-lg object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <h3 className="font-semibold text-[#0040CD]">{doctor.name}</h3>

        <p className="text-sm text-[#434655]">{doctor.specialty}</p>

        <p className="text-xs mt-1 text-[#434655] leading-relaxed">
          {doctor.bio}
        </p>
      </div>
    </div>
  );
}
