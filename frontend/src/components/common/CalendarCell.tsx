export function CalendarCell({ day, items }: { day: string; items: string[] }) {
  return <div className="panel"><strong>{day}</strong><div className="list">{items.map((item) => <span className="badge" key={item}>{item}</span>)}</div></div>;
}
