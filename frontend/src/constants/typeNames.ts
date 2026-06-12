import { AlertType, MaintenanceType } from '../types/enums';

export const alertTypeNames: Record<AlertType, string> = {
  [AlertType.Speeding]: '超速报警',
  [AlertType.Geofence]: '围栏报警',
  [AlertType.TiredDriving]: '疲劳驾驶',
  [AlertType.Maintenance]: '保养逾期',
  [AlertType.Insurance]: '保险到期'
};

export const maintenanceTypeNames: Record<MaintenanceType, string> = {
  [MaintenanceType.Routine]: '例行保养',
  [MaintenanceType.Repair]: '维修',
  [MaintenanceType.Insurance]: '保险续保',
  [MaintenanceType.TireChange]: '轮胎更换',
  [MaintenanceType.OilChange]: '换油保养'
};

export const alertStatusNames: Record<string, string> = {
  New: '新报警',
  Acknowledged: '已确认',
  Resolved: '已处理'
};
