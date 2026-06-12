import { VehicleStatus, VehicleType } from './enums';
export type Coordinate = { lng: number; lat: number; z?: number };
export type Vehicle = { id: string; plateNo: string; type: VehicleType; brandModel: string; color: string; year: number; mileage: number; status: VehicleStatus; location: Coordinate };
