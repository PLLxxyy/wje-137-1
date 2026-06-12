export function AlertMarker({ x, z }: { x: number; z: number }) {
  return <mesh position={[x, 0.9, z]}><coneGeometry args={[0.22, 0.6, 18]} /><meshStandardMaterial color="#b91c1c" /></mesh>;
}
