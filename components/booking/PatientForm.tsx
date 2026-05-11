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
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Patient Details</h2>
      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <label>First Name</label>

          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="border rounded-lg px-3 py-2"
            placeholder="Enter your first name"
          />

          <label>Last Name</label>

          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="border rounded-lg px-3 py-2"
            placeholder="Enter your last name"
          />

          <div className="flex flex-col gap-1">
            <label>Email Address</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded-lg px-3 py-2"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Phone Number</label>

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="border rounded-lg px-3 py-2"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Preferred Contact</label>

            <select
              value={preferredContact}
              onChange={(e) => setPreferredContact(e.target.value)}
              required
              className="border rounded-lg px-3 py-2"
            >
              <option value="">Select preferred contact</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label>Reason for Visit</label>

            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              className="border rounded-lg px-3 py-2 min-h-[120px]"
              placeholder="Describe your symptoms or reason for the appointment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
