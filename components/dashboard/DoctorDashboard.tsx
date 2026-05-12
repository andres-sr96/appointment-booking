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
  const filteredAppointments = appointments.filter(
    (a) => a.doctorId === selectedDoctorId,
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setAppointments(getAppointments());
  }, []);

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
    <div className="flex flex-col h-screen">
      <DoctorNavbar
        selectedDoctorId={selectedDoctorId}
        onSelectedDoctor={setSelectedDoctorId}
      />

      <div className="grid grid-cols-6 gap-6 p-6 flex-1">
        <div className="col-span-2">
          <DoctorSidebar
            selectedDoctorId={selectedDoctorId}
            onSelectedDoctor={setSelectedDoctorId}
          />
        </div>

        <div className="col-span-4 space-y-4">
          <h2 className="text-2xl font-semibold">Upcoming Appointments</h2>

          {filteredAppointments.length === 0 ? (
            <p className="text-gray-500">No appointments scheduled.</p>
          ) : (
            <div className="space-y-3">
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
  );
}
