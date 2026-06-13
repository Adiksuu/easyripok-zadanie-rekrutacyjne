import Header from "@/Components/Organisms/Header/Header"

export default function MainLayout({ children } : { children?: React.ReactNode }) {
  return (
    <div className="app-container">
        <Header />
        <main>
            {children}
        </main>
    </div>
  )
}
