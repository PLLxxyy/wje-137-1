import { alerts, maintenance, trips, vehicles, zones } from '../api/mockData';
export function useMockData() {
  return { vehicles, trips, maintenance, alerts, zones };
}
