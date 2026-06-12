import { create } from 'zustand';
import { trips } from '../api/mockData';
import type { TripRecord } from '../types';
export const useTripStore = create<{ trips: TripRecord[]; activeTripId: string; setActiveTrip: (id: string) => void }>((set) => ({ trips, activeTripId: trips[0].id, setActiveTrip: (id) => set({ activeTripId: id }) }));
