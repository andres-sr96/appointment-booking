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
      className={`
        flex gap-4 p-4 rounded-xl cursor-pointer border-2
        transition-colors duration-150
        bg-white

        ${
          isSelected
            ? "border-[#0040CD]"
            : "border-[#C4C5D8] hover:border-[#0040CD]"
        }
      `}
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
        {/* Name → Serif accent (doctor identity) */}
        <h3 className="font-serif text-[#0040CD] font-bold text-base">
          {doctor.name}
        </h3>

        {/* Specialty → UI body */}
        <p className="text-sm text-[#434655] font-normal">
          {doctor.specialty}
        </p>

        {/* Bio → muted body text */}
        <p className="text-xs mt-1 text-[#434655] leading-relaxed">
          {doctor.bio}
        </p>
      </div>
    </div>
  );
}