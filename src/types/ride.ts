
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


export const TRIP_STEPS = [
    'Driver Assigned',
    'Driver Arrived',
    'Trip Started',
    'Completed',
] as const;

export type TripStep = typeof TRIP_STEPS[number];