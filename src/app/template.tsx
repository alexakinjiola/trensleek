/** Re-mounts on every navigation, so each page eases in (see .page-enter in app.css). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
