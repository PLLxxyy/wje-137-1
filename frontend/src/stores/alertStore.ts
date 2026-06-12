import { create } from 'zustand';
import { alerts } from '../api/mockData';
import type { AlertEvent } from '../types';
export const useAlertStore = create<{ alerts: AlertEvent[]; resolve: (id: string) => void }>((set) => ({ alerts, resolve: (id) => set((s) => ({ alerts: s.alerts.map((a) => a.id === id ? { ...a, status: 'Resolved' as any } : a) })) }));
