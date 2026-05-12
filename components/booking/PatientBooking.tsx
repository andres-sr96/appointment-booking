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
  // Doctor
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  // Time
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  // Form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [reason, setReason] = useState("");
  // Appointment Submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Error handling
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
      doctorId: selectedDoctor!.id,
      doctorName: selectedDoctor!.name,
      patientName: `${firstName} ${lastName}`,
      email,
      phone,
      reason,
      time: selectedTime!,
      status: "pending",
    });

    setIsSubmitted(true);

    // Resetting Inputs
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

      <form onSubmit={handleSubmit} className="space-y-8">
        <DoctorSelection
          selectedDoctor={selectedDoctor}
          setSelectedDoctor={setSelectedDoctor}
        ></DoctorSelection>

        <TimeSlotSelection
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        ></TimeSlotSelection>

        <PatientForm
          // First Name
          firstName={firstName}
          setFirstName={setFirstName}
          // Last Name
          lastName={lastName}
          setLastName={setLastName}
          // Email
          email={email}
          setEmail={setEmail}
          // Phone
          phone={phone}
          setPhone={setPhone}
          // Preferred Contact
          preferredContact={preferredContact}
          setPreferredContact={setPreferredContact}
          // Reason
          reason={reason}
          setReason={setReason}
        ></PatientForm>

        <AppointmentSummary
          selectedDoctor={selectedDoctor}
          selectedTime={selectedTime}
        ></AppointmentSummary>

        {isSubmitted && (
          <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
            Thank you for booking your appointment. A confirmation email will be
            sent 7 days before your scheduled appointment.
          </div>
        )}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
            {error}
          </div>
        )}
      </form>
    </>
  );
}
