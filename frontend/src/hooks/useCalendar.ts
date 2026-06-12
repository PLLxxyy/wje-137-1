import { useMemo } from 'react';
import type { MaintenanceRecord } from '../types';
export function useCalendar(records: MaintenanceRecord[]) {
  return useMemo(() => records.map((record) => ({ day: record.date, items: [record.vendor, record.type] })), [records]);
}
