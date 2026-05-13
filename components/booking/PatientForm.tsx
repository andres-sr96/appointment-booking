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
    <div className="w-full px-6 py-6 space-y-8">
      {/* Title */}
      <h2 className="text-xl font-semibold text-[#191B24]">Patient Details</h2>
      <hr
        className="border-t border-[#434655]/30"
        style={{ margin: "1.5rem 0" }}
      />

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* First Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#434655]">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-[#434655]/30 rounded-lg px-3 py-2 focus:outline-none focus:border-[#0040CD]"
            placeholder="Enter your first name"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#434655]">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-[#434655]/30 rounded-lg px-3 py-2 focus:outline-none focus:border-[#0040CD]"
            placeholder="Enter your last name"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#434655]">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-[#434655]/30 rounded-lg px-3 py-2 focus:outline-none focus:border-[#0040CD]"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#434655]">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#434655]/30 rounded-lg px-3 py-2 focus:outline-none focus:border-[#0040CD]"
            placeholder="example@email.com"
          />
        </div>

        {/* Preferred Contact - FULL ROW */}
        <div className="md:col-span-2 flex flex-col gap-1 pb-5">
          <label className="text-sm text-[#434655]">Preferred Contact</label>
          <select
            value={preferredContact}
            onChange={(e) => setPreferredContact(e.target.value)}
            className="border border-[#434655]/30 rounded-lg px-3 py-2 focus:outline-none focus:border-[#0040CD]"
          >
            <option value="">Select preferred contact</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>
      </div>

      {/* Reason - FULL WIDTH */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-[#434655]">Reason for Visit</label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="border border-[#434655]/30 rounded-lg px-3 py-2 min-h-[120px] focus:outline-none focus:border-[#0040CD]"
          placeholder="Describe your symptoms or reason for the appointment"
        />
      </div>
    </div>
  );
}
