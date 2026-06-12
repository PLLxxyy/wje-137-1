import { useMemo } from 'react';
import type { Vehicle } from '../types';
export function useVehicleScene(vehicles: Vehicle[]) {
  return useMemo(() => ({ activeCount: vehicles.filter((v) => v.status === 'Active').length, maintenanceCount: vehicles.filter((v) => v.status === 'Maintenance').length }), [vehicles]);
}
