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

function hasSubsequentMaintenance(record: MaintenanceRecord, allRecords: MaintenanceRecord[]) {
  const dueDate = new Date(record.nextDate);
  dueDate.setHours(0, 0, 0, 0);
  return allRecords.some((r) => {
    if (r.id === record.id || r.vehicleId !== record.vehicleId) return false;
    const maintenanceDate = new Date(r.date);
    maintenanceDate.setHours(0, 0, 0, 0);
    return maintenanceDate.getTime() >= dueDate.getTime();
  });
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
    const resolvedIds: string[] = [];

    records.forEach((record) => {
      if (!isOverdue(record.nextDate)) return;

      const alertId = generateMaintenanceAlertId(record.id);
      const hasCompleted = hasSubsequentMaintenance(record, records);

      if (hasCompleted) {
        const existingAlert = currentAlerts.find((a) => a.id === alertId);
        if (existingAlert && existingAlert.status !== AlertStatus.Resolved) {
          resolvedIds.push(alertId);
        }
        return;
      }

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

    if (newAlerts.length > 0 || resolvedIds.length > 0) {
      set((state) => ({
        alerts: state.alerts
          .map((a) => resolvedIds.includes(a.id) ? { ...a, status: AlertStatus.Resolved } : a)
          .concat(newAlerts)
      }));
    }
  }
}));
