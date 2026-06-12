import type { Coordinate } from './vehicle';
export type RoutePoint = Coordinate & { time: string; speed: number };
export type TripRecord = { id: string; vehicleId: string; origin: string; destination: string; departAt: string; arriveAt: string; distance: number; avgSpeed: number; maxSpeed: number; fuel: number; route: RoutePoint[] };
