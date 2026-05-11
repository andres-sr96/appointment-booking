"use client";

import { Doctor } from "@/models/doctor";
import { useState } from "react";
import DoctorSelection from "./DoctorSelection";
import TimeSlotSelection from "./TimeSlotSelection";
import PatientForm from "./PatientForm";
import AppointmentSummary from "./AppointmentSummary";

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

  const handleSubmit = () => {
    console.log("Appointment submitted");
    console.log({
      selectedDoctor,
      selectedTime,
      firstName,
      lastName,
      email,
      phone,
      preferredContact,
      reason,
    });
    setIsSubmitted(true);
    // Reset Inputs
    setSelectedDoctor(null);
    setSelectedTime("");

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setPreferredContact("");
    setReason("");
  };

  return (
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
        onSubmit={handleSubmit}
      ></AppointmentSummary>

      {isSubmitted && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
          Thank you for booking your appointment. A confirmation email will be
          sent 7 days before your scheduled appointment.
        </div>
      )}
    </form>
  );
}
