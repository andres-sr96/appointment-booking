"use client";

type Props = {
  firstName: string;
  setFirstName: (value: string) => void;

  lastName: string;
  setLastName: (value: string) => void;

  email: string;
  setEmail: (value: string) => void;

  phone: string;
  setPhone: (value: string) => void;

  preferredContact: string;
  setPreferredContact: (value: string) => void;

  reason: string;
  setReason: (value: string) => void;
};

export default function PatientForm({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  preferredContact,
  setPreferredContact,
  reason,
  setReason,
}: Props) {
  return (
    <div className="w-full px-6 py-6 space-y-8 font-sans">

      {/* Title */}
      <h2
        className="font-serif text-2xl font-semibold text-[#191B24]"
        style={{ fontFamily: "Source Serif 4, serif" }}
      >
        Patient Details
      </h2>

      <hr
        className="border-t border-[#434655]/30"
        style={{ margin: "1.5rem 0" }}
      />

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* First Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#434655]" style={{ fontFamily: "Inter, sans-serif" }}>
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-[#434655]/30 rounded-lg px-3 py-2 focus:outline-none focus:border-[#0040CD] font-sans"
            placeholder="Enter your first name"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#434655]" style={{ fontFamily: "Inter, sans-serif" }}>
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-[#434655]/30 rounded-lg px-3 py-2 focus:outline-none focus:border-[#0040CD] font-sans"
            placeholder="Enter your last name"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#434655]" style={{ fontFamily: "Inter, sans-serif" }}>
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-[#434655]/30 rounded-lg px-3 py-2 focus:outline-none focus:border-[#0040CD] font-sans"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#434655]" style={{ fontFamily: "Inter, sans-serif" }}>
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#434655]/30 rounded-lg px-3 py-2 focus:outline-none focus:border-[#0040CD] font-sans"
            placeholder="example@email.com"
          />
        </div>

        {/* Preferred Contact */}
        <div className="md:col-span-2 flex flex-col gap-1 pb-5">
          <label className="text-sm text-[#434655]" style={{ fontFamily: "Inter, sans-serif" }}>
            Preferred Contact
          </label>
          <select
            value={preferredContact}
            onChange={(e) => setPreferredContact(e.target.value)}
            className="border border-[#434655]/30 rounded-lg px-3 py-2 focus:outline-none focus:border-[#0040CD] font-sans"
          >
            <option value="">Select preferred contact</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>
      </div>

      {/* Reason */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-[#434655]" style={{ fontFamily: "Inter, sans-serif" }}>
          Reason for Visit
        </label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="border border-[#434655]/30 rounded-lg px-3 py-2 min-h-[120px] focus:outline-none focus:border-[#0040CD] font-sans"
          placeholder="Describe your symptoms or reason for the appointment"
        />
      </div>
    </div>
  );
}