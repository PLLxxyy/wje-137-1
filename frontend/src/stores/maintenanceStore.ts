import { create } from 'zustand';
import { maintenance } from '../api/mockData';
import type { MaintenanceRecord } from '../types';
export const useMaintenanceStore = create<{ records: MaintenanceRecord[] }>(() => ({ records: maintenance }));
