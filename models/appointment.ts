export type AppointmentStatus = "pending" | "confirmed" | "cancelled";

export type Appointment = {
  id: string;
  doctorId: string;
  doctorName: string;
  time: string;
  patientName: string;
  email: string;
  phone: string;
  reason: string;
  status: AppointmentStatus;
};