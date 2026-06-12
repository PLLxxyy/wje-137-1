import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import type { Vehicle, ZoneStat } from '../../types';
import { VehicleModel } from './VehicleModel';
import { ZoneHeatmap } from './ZoneHeatmap';

export function VehicleScene({ vehicles, zones, onSelect }: { vehicles: Vehicle[]; zones: ZoneStat[]; onSelect: (id: string) => void }) {
  return (
    <div className="scene">
      <Canvas camera={{ position: [7, 7, 7], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[6, 8, 4]} intensity={1.1} />
        <gridHelper args={[12, 12, '#9a8f7e', '#d8d0c1']} />
        {zones.map((zone, index) => <ZoneHeatmap zone={zone} index={index} key={zone.id} />)}
        {vehicles.map((vehicle, index) => <VehicleModel vehicle={vehicle} index={index} onSelect={onSelect} key={vehicle.id} />)}
        <Text position={[0, 0.05, -5]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.28} color="#4b5563">车辆位置与区域热力</Text>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
