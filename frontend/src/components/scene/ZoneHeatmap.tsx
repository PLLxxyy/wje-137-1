import type { ZoneStat } from '../../types';
export function ZoneHeatmap({ zone, index }: { zone: ZoneStat; index: number }) {
  const color = zone.violationCount > 3 ? '#dc2626' : '#f59e0b';
  return <mesh position={[index * 3 - 2, 0.01, -1.8]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[2.4, 1.5]} /><meshStandardMaterial color={color} transparent opacity={0.18} /></mesh>;
}
