"use client";

import {
  getAppointments,
  updateAppointmentStatus,
} from "@/store/appointmentStore";

import AppointmentCard from "./AppointmentCard";
import { Appointment } from "@/models/appointment";
import DoctorSidebar from "./DoctorSidebar";
import DoctorNavbar from "./DoctorNavbar";

import { useState, useEffect } from "react";

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("1");

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setAppointments(getAppointments());
  }, []);

  const filteredAppointments = appointments.filter(
    (a) => a.doctorId === selectedDoctorId,
  );

  const refreshAppointments = () => {
    setAppointments(getAppointments());
  };

  const handleConfirm = (id: string) => {
    updateAppointmentStatus(id, "confirmed");
    refreshAppointments();
  };

  const handleCancel = (id: string) => {
    updateAppointmentStatus(id, "cancelled");
    refreshAppointments();
  };

  if (!isMounted) return null;

  return (
    <>
      <DoctorNavbar
        selectedDoctorId={selectedDoctorId}
        onSelectedDoctor={setSelectedDoctorId}
      />

      <main className="w-full py-10 bg-[#F7F8FA] min-h-screen font-[Inter]">
        <div className="mx-auto px-6">
          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT COLUMN — 4/12 */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-white p-6">
                <DoctorSidebar
                  selectedDoctorId={selectedDoctorId}
                  onSelectedDoctor={setSelectedDoctorId}
                />
              </div>
            </div>

            {/* RIGHT COLUMN — 8/12 */}
            <div className="lg:col-span-8 px-6">
              {/* Header */}
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-[#191B24]">
                  Upcoming Appointments
                </h2>

                <p className="text-sm text-[#434655] mt-2 font-[Inter]">
                  Manage and review scheduled patient appointments.
                </p>
              </div>
              <hr
                className="border-t border-[#434655]/30"
                style={{ margin: "1.5rem 0" }}
              />
              {/* Appointments */}
              {filteredAppointments.length === 0 ? (
                <div className="bg-white p-6 text-[#434655] font-[Inter]">
                  No appointments scheduled.
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredAppointments.map((appointment) => (
                    <AppointmentCard
                      key={appointment.id}
                      appointment={appointment}
                      onConfirm={handleConfirm}
                      onCancel={handleCancel}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
