import { NavLink } from 'react-router-dom';
import { useThemeStore } from '../stores/themeStore';
const nav = [['/overview','3D 总览'],['/trip-replay','路线回放'],['/maintenance','维修日历'],['/alerts','报警中心'],['/vehicles','车辆档案']];
function Shell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  const { theme, toggleTheme } = useThemeStore();
  return <div className="app-shell" data-theme={theme}><aside className="sidebar"><div className="brand">车辆管理<br/>三维看板</div><nav className="nav">{nav.map(([to,label]) => <NavLink key={to} to={to}>{label}</NavLink>)}</nav></aside><main className="main"><div className="page-head"><div><h1 className="page-title">{title}</h1><p className="page-subtitle">{subtitle}</p></div><button className="badge" onClick={toggleTheme}>{theme === 'dark' ? '浅色' : '深色'}模式</button></div>{children}</main></div>;
}

import { CalendarCell } from '../components/common/CalendarCell';
import { StatusBadge } from '../components/common/StatusBadge';
import { useCalendar } from '../hooks/useCalendar';
import { useMaintenanceStore } from '../stores/maintenanceStore';

export function MaintenanceCalendar() {
  const { records } = useMaintenanceStore();
  const cells = useCalendar(records);
  return <Shell title="维修日历" subtitle="车辆维保计划、历史费用和逾期风险集中排查。">
    <div className="grid grid-3">{cells.map((cell) => <CalendarCell key={cell.day} day={cell.day} items={cell.items} />)}</div>
    <div className="panel" style={{ marginTop: 16 }}>{records.map((r) => <div className="row" key={r.id}><span>{r.vendor} · {r.items.join('、')}</span><StatusBadge status={r.type} /></div>)}</div>
  </Shell>;
}
