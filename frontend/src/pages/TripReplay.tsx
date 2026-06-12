import { NavLink } from 'react-router-dom';
import { useThemeStore } from '../stores/themeStore';
const nav = [['/overview','3D 总览'],['/trip-replay','路线回放'],['/maintenance','维修日历'],['/alerts','报警中心'],['/vehicles','车辆档案']];
function Shell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  const { theme, toggleTheme } = useThemeStore();
  return <div className="app-shell" data-theme={theme}><aside className="sidebar"><div className="brand">车辆管理<br/>三维看板</div><nav className="nav">{nav.map(([to,label]) => <NavLink key={to} to={to}>{label}</NavLink>)}</nav></aside><main className="main"><div className="page-head"><div><h1 className="page-title">{title}</h1><p className="page-subtitle">{subtitle}</p></div><button className="badge" onClick={toggleTheme}>{theme === 'dark' ? '浅色' : '深色'}模式</button></div>{children}</main></div>;
}

import ReactECharts from 'echarts-for-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Timeline } from '../components/common/Timeline';
import { RoutePlayer } from '../components/scene/RoutePlayer';
import { useTripStore } from '../stores/tripStore';

export function TripReplay() {
  const { trips, activeTripId, setActiveTrip } = useTripStore();
  const trip = trips.find((item) => item.id === activeTripId) ?? trips[0];
  return <Shell title="路线回放" subtitle="回放车辆路线，同时对照速度变化与时间节点。">
    <div className="toolbar">{trips.map((item) => <button className="badge" onClick={() => setActiveTrip(item.id)} key={item.id}>{item.origin} → {item.destination}</button>)}</div>
    <div className="grid grid-2" style={{ marginTop: 16 }}>
      <div className="scene"><Canvas camera={{ position: [6, 5, 6] }}><ambientLight /><gridHelper args={[10,10]} /><RoutePlayer trip={trip} /><OrbitControls /></Canvas></div>
      <div className="panel"><ReactECharts className="chart" option={{ xAxis: { type: 'category', data: trip.route.map(p => p.time) }, yAxis: { type: 'value' }, series: [{ type: 'line', data: trip.route.map(p => p.speed), smooth: true, areaStyle: {} }] }} /><Timeline items={trip.route.map(p => ({ time: p.time, text: `速度 ${p.speed} km/h` }))} /></div>
    </div>
  </Shell>;
}
