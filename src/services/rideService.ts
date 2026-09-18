
import { Ride } from '../types/ride';
import { MOCK_RIDES } from '../data/mockRides';


export function fetchRides(): Promise<Ride[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.15; // ~15% chance of failure

      if (shouldFail) {
        reject(new Error('Failed to fetch rides. Please try again.'));
      } else {
        resolve(MOCK_RIDES);
      }
    }, 1200); // 1.2s delay, feels like a real request
  });
}