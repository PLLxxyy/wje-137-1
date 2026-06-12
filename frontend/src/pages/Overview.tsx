import { NavLink } from 'react-router-dom';
import { useThemeStore } from '../stores/themeStore';
const nav = [['/overview','3D 总览'],['/trip-replay','路线回放'],['/maintenance','维修日历'],['/alerts','报警中心'],['/vehicles','车辆档案']];
function Shell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  const { theme, toggleTheme } = useThemeStore();
  return <div className="app-shell" data-theme={theme}><aside className="sidebar"><div className="brand">车辆管理<br/>三维看板</div><nav className="nav">{nav.map(([to,label]) => <NavLink key={to} to={to}>{label}</NavLink>)}</nav></aside><main className="main"><div className="page-head"><div><h1 className="page-title">{title}</h1><p className="page-subtitle">{subtitle}</p></div><button className="badge" onClick={toggleTheme}>{theme === 'dark' ? '浅色' : '深色'}模式</button></div>{children}</main></div>;
}

import { AlertBanner } from '../components/common/AlertBanner';
import { StatPanel } from '../components/common/StatPanel';
import { VehicleScene } from '../components/scene/VehicleScene';
import { useVehicleStore } from '../stores/vehicleStore';
import { useAlertStore } from '../stores/alertStore';
import { useVehicleScene } from '../hooks/useVehicleScene';

export function Overview() {
  const { vehicles, zones, selectVehicle } = useVehicleStore();
  const { alerts } = useAlertStore();
  const stats = useVehicleScene(vehicles);
  return <Shell title="3D 车辆总览" subtitle="车辆模型、区域热力和新报警在同一工作台中联动。">
    <div className="grid grid-3"><StatPanel label="活跃车辆" value={stats.activeCount} /><StatPanel label="维修车辆" value={stats.maintenanceCount} /><StatPanel label="未处理报警" value={alerts.filter(a => a.status === 'New').length} /></div>
    <div style={{ height: 16 }} />
    <AlertBanner title="重点报警" detail={alerts[0].description} />
    <div style={{ height: 16 }} />
    <VehicleScene vehicles={vehicles} zones={zones} onSelect={selectVehicle} />
  </Shell>;
}
