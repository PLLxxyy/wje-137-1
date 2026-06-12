import type { Vehicle } from '../../types';

export function VehicleModel({ vehicle, index, onSelect }: { vehicle: Vehicle; index: number; onSelect: (id: string) => void }) {
  const x = -3 + index * 3;
  const z = Math.sin(index) * 2;
  return (
    <group position={[x, 0.35, z]} onClick={() => onSelect(vehicle.id)}>
      <mesh castShadow>
        <boxGeometry args={[1.2, 0.45, 0.7]} />
        <meshStandardMaterial color={vehicle.color} />
      </mesh>
      <mesh position={[-0.35, -0.28, 0.38]}><sphereGeometry args={[0.16, 16, 16]} /><meshStandardMaterial color="#1f2937" /></mesh>
      <mesh position={[0.35, -0.28, 0.38]}><sphereGeometry args={[0.16, 16, 16]} /><meshStandardMaterial color="#1f2937" /></mesh>
      <mesh position={[-0.35, -0.28, -0.38]}><sphereGeometry args={[0.16, 16, 16]} /><meshStandardMaterial color="#1f2937" /></mesh>
      <mesh position={[0.35, -0.28, -0.38]}><sphereGeometry args={[0.16, 16, 16]} /><meshStandardMaterial color="#1f2937" /></mesh>
    </group>
  );
}
