import { NavLink } from 'react-router-dom';
import { useThemeStore } from '../stores/themeStore';
const nav = [['/overview','3D 总览'],['/trip-replay','路线回放'],['/maintenance','维修日历'],['/alerts','报警中心'],['/vehicles','车辆档案']];
function Shell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  const { theme, toggleTheme } = useThemeStore();
  return <div className="app-shell" data-theme={theme}><aside className="sidebar"><div className="brand">车辆管理<br/>三维看板</div><nav className="nav">{nav.map(([to,label]) => <NavLink key={to} to={to}>{label}</NavLink>)}</nav></aside><main className="main"><div className="page-head"><div><h1 className="page-title">{title}</h1><p className="page-subtitle">{subtitle}</p></div><button className="badge" onClick={toggleTheme}>{theme === 'dark' ? '浅色' : '深色'}模式</button></div>{children}</main></div>;
}

import ReactECharts from 'echarts-for-react';
import { VehicleCard } from '../components/common/VehicleCard';
import { StatusBadge } from '../components/common/StatusBadge';
import { useVehicleStore } from '../stores/vehicleStore';
import { useMaintenanceStore } from '../stores/maintenanceStore';

export function VehicleProfile() {
  const { vehicles, selectedVehicleId, selectVehicle } = useVehicleStore();
  const { records } = useMaintenanceStore();
  const vehicle = vehicles.find((item) => item.id === selectedVehicleId) ?? vehicles[0];
  return <Shell title="车辆档案" subtitle="车辆基础信息、里程趋势、维修记录和状态一屏扫描。">
    <div className="grid grid-2">
      <div className="list">{vehicles.map((item) => <VehicleCard key={item.id} vehicle={item} onSelect={selectVehicle} />)}</div>
      <div className="panel"><h2>{vehicle.plateNo}</h2><StatusBadge status={vehicle.status} /><p className="muted">{vehicle.brandModel} · {vehicle.year} · {vehicle.mileage.toLocaleString()} km</p><ReactECharts className="chart" option={{ xAxis: { type: 'category', data: ['1月','2月','3月','4月','5月','6月'] }, yAxis: { type: 'value' }, series: [{ type: 'bar', data: [15,22,18,31,27,34] }] }} />{records.filter((r) => r.vehicleId === vehicle.id).map((r) => <div className="row" key={r.id}>{r.vendor}<span>{r.cost} 元</span></div>)}</div>
    </div>
  </Shell>;
}
