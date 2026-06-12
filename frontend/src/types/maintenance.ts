import { MaintenanceType } from './enums';
export type MaintenanceRecord = { id: string; vehicleId: string; type: MaintenanceType; items: string[]; cost: number; date: string; nextDate: string; vendor: string; note: string };
