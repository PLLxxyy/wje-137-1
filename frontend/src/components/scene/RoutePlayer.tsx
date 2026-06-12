import { Line } from '@react-three/drei';
import type { TripRecord } from '../../types';
export function RoutePlayer({ trip }: { trip: TripRecord }) {
  const points = trip.route.map((_, index) => [-4 + index * 4, 0.12, Math.sin(index) * 1.8] as [number, number, number]);
  return <Line points={points} color="#0f766e" lineWidth={4} />;
}
