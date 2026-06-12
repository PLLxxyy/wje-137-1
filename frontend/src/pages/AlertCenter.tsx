import { NavLink } from 'react-router-dom';
import { useThemeStore } from '../stores/themeStore';
const nav = [['/overview','3D 总览'],['/trip-replay','路线回放'],['/maintenance','维修日历'],['/alerts','报警中心'],['/vehicles','车辆档案']];
function Shell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  const { theme, toggleTheme } = useThemeStore();
  return <div className="app-shell" data-theme={theme}><aside className="sidebar"><div className="brand">车辆管理<br/>三维看板</div><nav className="nav">{nav.map(([to,label]) => <NavLink key={to} to={to}>{label}</NavLink>)}</nav></aside><main className="main"><div className="page-head"><div><h1 className="page-title">{title}</h1><p className="page-subtitle">{subtitle}</p></div><button className="badge" onClick={toggleTheme}>{theme === 'dark' ? '浅色' : '深色'}模式</button></div>{children}</main></div>;
}

import { AlertBanner } from '../components/common/AlertBanner';
import { StatusBadge } from '../components/common/StatusBadge';
import { useAlertStore } from '../stores/alertStore';

export function AlertCenter() {
  const { alerts, resolve } = useAlertStore();
  return <Shell title="报警中心" subtitle="按报警类型和处理状态筛选，直接确认处理结果。">
    <AlertBanner title="新报警优先处理" detail="超速、围栏和维保类报警会影响调度可用性。" />
    <div className="list" style={{ marginTop: 16 }}>{alerts.map((a) => <div className="row" key={a.id}><span><strong>{a.type}</strong><span className="block muted">{a.description}</span></span><span className="toolbar"><StatusBadge status={a.status} /><button className="badge" onClick={() => resolve(a.id)}>处理</button></span></div>)}</div>
  </Shell>;
}
