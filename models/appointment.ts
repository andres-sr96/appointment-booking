export type Appointment = {
  id?: number;
  doctorId: number;
  doctorName: string;
  time: string;
  patientName: string;
  email: string;
  reason: string;
  status: "pending" | "confirmed" | "cancelled";
};
