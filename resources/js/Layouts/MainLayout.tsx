export default function MainLayout({ children } : { children?: React.ReactNode }) {
  return (
    <div className="app-container">
        <header>
            <h1>Moja Aplikacja Todo</h1>
        </header>
        <main>
            {children}
        </main>
    </div>
  )
}
