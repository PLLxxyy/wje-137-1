import Dexie, { type Table } from 'dexie';
import type { Vehicle } from '../types';
export class FleetDexie extends Dexie { vehicles!: Table<Vehicle>; constructor() { super('fleet-visual-db'); this.version(1).stores({ vehicles: 'id, plateNo, status' }); } }
export const db = new FleetDexie();
