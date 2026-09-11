// src/types/ride.ts

// A union type: RideStatus can ONLY ever be one of these 4 exact strings.
// This is safer than `status: string`, which would let you (or a teammate)
// accidentally write "Completed" or "COMPLETE" and get a silent bug.
export type RideStatus = 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';

export interface Driver {
  name: string;
  rating: number;        // e.g. 4.8
  vehicleNumber: string; // e.g. "KA-01-AB-1234"
}

export interface Ride {
  id: string;
  pickup: string;
  drop: string;
  scheduledTime: string;   // ISO string, e.g. "2026-09-12T09:30:00"
  driver: Driver;
  status: RideStatus;
}

// The ordered steps of a live ride, used for the stepper on Screen 2.
// Kept separate from RideStatus because "Driver Assigned" / "Driver Arrived"
// are UI-level micro-steps within the IN_PROGRESS status, not part of the
// backend's ride status enum.
export const TRIP_STEPS = [
    'Driver Assigned',
    'Driver Arrived',
    'Trip Started',
    'Completed',
] as const;

export type TripStep = typeof TRIP_STEPS[number];