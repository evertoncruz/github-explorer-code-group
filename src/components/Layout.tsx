export function Layout({ children }) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand">GitHub Explorer</span>
      </nav>
      <div className="container py-4">{children}</div>
    </div>
  )
}