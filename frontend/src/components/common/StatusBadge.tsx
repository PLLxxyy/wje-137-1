import { alertStatusNames, maintenanceTypeNames } from '../../constants/typeNames';
import { AlertType, MaintenanceType } from '../../types/enums';
import { alertColors } from '../../constants/alertColors';

function getStatusStyle(status: string) {
  switch (status) {
    case 'New':
      return { backgroundColor: '#fee2e2', color: '#991b1b' };
    case 'Acknowledged':
      return { backgroundColor: '#fef3c7', color: '#92400e' };
    case 'Resolved':
      return { backgroundColor: '#d1fae5', color: '#065f46' };
    default:
      return {};
  }
}

export function StatusBadge({ status }: { status: string }) {
  const isAlertStatus = status in alertStatusNames;
  const isMaintenanceType = Object.values(MaintenanceType).includes(status as MaintenanceType);
  const isAlertType = Object.values(AlertType).includes(status as AlertType);

  let displayName = status;
  let style: React.CSSProperties = {};

  if (isAlertStatus) {
    displayName = alertStatusNames[status];
    style = getStatusStyle(status);
  } else if (isMaintenanceType) {
    displayName = maintenanceTypeNames[status as MaintenanceType];
  } else if (isAlertType) {
    displayName = status in alertStatusNames ? alertStatusNames[status] : status;
    style = { color: alertColors[status as AlertType] };
  }

  return <span className="badge" style={style}>{displayName}</span>;
}
