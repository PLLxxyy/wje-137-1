import type { Coordinate } from './vehicle';
export type ZoneStat = { id: string; name: string; boundary: Coordinate[]; vehicleCount: number; violationCount: number; avgSpeed: number };
