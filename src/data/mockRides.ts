import { Ride } from '../types/ride';

export const MOCK_RIDES: Ride[] = [
  {
    id: '1',
    pickup: 'Whitefield, Bangalore',
    drop: 'Electronic City, Bangalore',
    scheduledTime: '2026-09-12T09:30:00',
    driver: { name: 'Ramesh Kumar', rating: 4.8, vehicleNumber: 'KA-01-AB-1234' },
    status: 'IN_PROGRESS',
  },
  {
    id: '2',
    pickup: 'Koramangala, Bangalore',
    drop: 'MG Road, Bangalore',
    scheduledTime: '2026-09-13T14:00:00',
    driver: { name: 'Suresh Reddy', rating: 4.6, vehicleNumber: 'KA-02-CD-5678' },
    status: 'SCHEDULED',
  },
  {
    id: '3',
    pickup: 'Indiranagar, Bangalore',
    drop: 'HSR Layout, Bangalore',
    scheduledTime: '2026-09-10T18:15:00',
    driver: { name: 'Anil Sharma', rating: 4.9, vehicleNumber: 'KA-03-EF-9012' },
    status: 'COMPLETED',
  },
  {
    id: '4',
    pickup: 'Jayanagar, Bangalore',
    drop: 'BTM Layout, Bangalore',
    scheduledTime: '2026-09-09T08:00:00',
    driver: { name: 'Vijay Singh', rating: 4.5, vehicleNumber: 'KA-04-GH-3456' },
    status: 'CANCELLED',
  },
];