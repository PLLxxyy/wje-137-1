import type { Coordinate } from '../../types';
export function coordinateToScene(point: Coordinate): [number, number, number] {
  return [(point.lng - 121) * 4, 0, (point.lat - 31) * 4];
}
