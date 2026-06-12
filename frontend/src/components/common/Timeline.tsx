export function Timeline({ items }: { items: Array<{ time: string; text: string }> }) {
  return <div className="list">{items.map((item) => <div className="row" key={item.time}><span>{item.text}</span><span className="muted">{item.time}</span></div>)}</div>;
}
