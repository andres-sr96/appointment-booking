"use client";

import { Doctor } from "@/models/doctor";
import { useState } from "react";
import DoctorSelection from "./DoctorSelection";
import TimeSlotSelection from "./TimeSlotSelection";
import PatientForm from "./PatientForm";
import AppointmentSummary from "./AppointmentSummary";
import { addAppointment } from "@/store/appointmentStore";
import PatientNavbar from "./patientNavbar";

export default function PatientBooking() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [reason, setReason] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      !selectedDoctor ||
      !selectedTime ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !preferredContact ||
      !reason
    ) {
      setError("Please complete all required fields.");
      return;
    }

    addAppointment({
      id: crypto.randomUUID(),
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      patientName: `${firstName} ${lastName}`,
      email,
      phone,
      reason,
      time: selectedTime,
      status: "pending",
    });

    setIsSubmitted(true);

    setTimeout(() => setIsSubmitted(false), 4000);

    setSelectedDoctor(null);
    setSelectedTime(null);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setPreferredContact("");
    setReason("");
  };

  return (
    <>
      <PatientNavbar />

      <form onSubmit={handleSubmit} className="w-full py-10 bg-[#F7F8FA]">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-8 space-y-10">
              <DoctorSelection
                selectedDoctor={selectedDoctor}
                setSelectedDoctor={setSelectedDoctor}
              />

              <TimeSlotSelection
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
              />

              <PatientForm
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                preferredContact={preferredContact}
                setPreferredContact={setPreferredContact}
                reason={reason}
                setReason={setReason}
              />
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-white p-6">

                <AppointmentSummary
                  selectedDoctor={selectedDoctor}
                  selectedTime={selectedTime}
                />

                <div className="mt-6">
                  {isSubmitted && (
                    <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                      Thank you for booking your appointment. A confirmation email will be sent 7 days before your scheduled appointment.
                    </div>
                  )}

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                      {error}
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </form>
    </>
  );
}