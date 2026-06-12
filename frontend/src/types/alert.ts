import { AlertStatus, AlertType } from './enums';
import type { Coordinate } from './vehicle';
export type AlertEvent = { id: string; vehicleId: string; type: AlertType; time: string; location: Coordinate; description: string; status: AlertStatus };
