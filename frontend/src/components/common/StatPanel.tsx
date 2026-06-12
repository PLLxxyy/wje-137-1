export function StatPanel({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return <div className="panel stat"><span className="muted">{label}</span><strong>{value}</strong>{hint && <span className="muted">{hint}</span>}</div>;
}
