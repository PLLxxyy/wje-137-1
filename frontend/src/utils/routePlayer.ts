import type { TripRecord } from '../types';
export function getTripProgress(trip: TripRecord, index: number) {
  return trip.route[Math.min(index, trip.route.length - 1)];
}
