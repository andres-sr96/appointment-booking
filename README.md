# Patient Booking System

## How to Run the Project

1. Install dependencies:
   npm install

2. Run the development server:
   npm run dev

3. Open the app:
   http://localhost:3000

---

## What I Built

Patient appointment booking system (localhost:3000) where users can:

- Select a physician
- Choose an available time slot
- Fill out a patient details form (name, email, phone, reason for visit)
- Submit an appointment request

The system also includes a doctor-facing dashboard (localhost:3000/admin) where doctors can:

- View upcoming appointments
- Filter appointments by doctor
- See appointment details
- Update appointment status (pending, confirmed, cancelled)

---

## Key Technical / Product Decisions

- Used localStorage to persist appointments and simulate a basic database without adding backend.
- Broke the UI into small, reusable components to keep the booking flow easy to follow and maintain.
- Added filtering on the doctor dashboard so each doctor only sees their own appointments.
- Focused on keeping the booking flow straightforward and easy to use.

---

## What I Would Improve With More Time

- Add a backend for data storage
- Add authentication for doctors and patients
- Improve scheduling with real calendar availability
- Prevent booking unavailable time slots
- Add email notifications for appointment confirmation
- Improve UI responsiveness and accessibility
- Add state management and real-time updates