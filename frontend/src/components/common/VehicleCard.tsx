import type { Vehicle } from '../../types';

export function VehicleCard({ vehicle, onSelect }: { vehicle: Vehicle; onSelect?: (id: string) => void }) {
  return (
    <button className="row text-left w-full" onClick={() => onSelect?.(vehicle.id)}>
      <span>
        <strong>{vehicle.plateNo}</strong>
        <span className="block muted">{vehicle.brandModel} · {vehicle.type}</span>
      </span>
      <span className="badge">{vehicle.status}</span>
    </button>
  );
}
