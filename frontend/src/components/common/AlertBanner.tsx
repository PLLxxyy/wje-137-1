export function AlertBanner({ title, detail }: { title: string; detail: string }) {
  return <div className="panel" style={{ borderColor: 'var(--danger)' }}><strong className="danger">{title}</strong><p className="muted">{detail}</p></div>;
}
