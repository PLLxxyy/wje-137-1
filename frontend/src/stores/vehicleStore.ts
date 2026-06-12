import { create } from 'zustand';
import { vehicles, zones } from '../api/mockData';
import type { Vehicle, ZoneStat } from '../types';

type State = { vehicles: Vehicle[]; zones: ZoneStat[]; selectedVehicleId?: string; selectVehicle: (id: string) => void };
export const useVehicleStore = create<State>((set) => ({ vehicles, zones, selectVehicle: (id) => set({ selectedVehicleId: id }) }));
