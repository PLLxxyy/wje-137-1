import { create } from 'zustand';
import { alerts } from '../api/mockData';
import { AlertStatus, AlertType } from '../types/enums';
import type { AlertEvent, MaintenanceRecord, Vehicle } from '../types';

function generateMaintenanceAlertId(recordId: string) {
  return `maintenance-due-${recordId}`;
}

function isOverdue(nextDate: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dueDate = new Date(nextDate);
  dueDate.setHours(0, 0, 0, 0);
  return dueDate.getTime() <= today.getTime();
}

type State = {
  alerts: AlertEvent[];
  resolve: (id: string) => void;
  checkMaintenanceDue: (records: MaintenanceRecord[], vehicles: Vehicle[]) => void;
};

export const useAlertStore = create<State>((set, get) => ({
  alerts,
  resolve: (id) => set((s) => ({ alerts: s.alerts.map((a) => a.id === id ? { ...a, status: AlertStatus.Resolved } : a) })),
  checkMaintenanceDue: (records, vehicles) => {
    const { alerts: currentAlerts } = get();
    const newAlerts: AlertEvent[] = [];

    records.forEach((record) => {
      if (!isOverdue(record.nextDate)) return;

      const alertId = generateMaintenanceAlertId(record.id);
      const exists = currentAlerts.some((a) => a.id === alertId);
      if (exists) return;

      const vehicle = vehicles.find((v) => v.id === record.vehicleId);
      if (!vehicle) return;

      newAlerts.push({
        id: alertId,
        vehicleId: record.vehicleId,
        type: AlertType.Maintenance,
        time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
        location: vehicle.location,
        description: `${vehicle.plateNo} ${record.items.join('、')} 保养已逾期（应于 ${record.nextDate} 完成）`,
        status: AlertStatus.New
      });
    });

    if (newAlerts.length > 0) {
      set({ alerts: [...currentAlerts, ...newAlerts] });
    }
  }
}));
