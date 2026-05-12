import { Appointment } from "@/models/appointment";

const STORAGE_KEY = "appointments";

export function getAppointments(): Appointment[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function addAppointment(appointment: Appointment) {
  const appointments = getAppointments();

  appointments.push(appointment);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
}

export function updateAppointmentStatus(
  id: string,
  status: Appointment["status"]
) {
  const appointments = getAppointments();

  const updatedAppointments = appointments.map((appointment) =>
    appointment.id === id
      ? { ...appointment, status }
      : appointment
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedAppointments)
  );
}