import { useState } from 'react'
import './App.css'

type Page = 'home' | 'services' | 'framework' | 'cases' | 'contact'

function App() {
  const [activePage, setActivePage] = useState<Page>('home')

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <h2>Home Section</h2>
      case 'services':
        return <h2>Services Section</h2>
      case 'framework':
        return <h2>Framework Section</h2>
      case 'cases':
        return <h2>Case Studies Section</h2>
      case 'contact':
        return <h2>Contact Section</h2>
      default:
        return null
    }
  }

  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.logo}>Focused & Creative</h1>

        <nav>
          <ul style={styles.navList}>
            {(['home', 'services', 'framework', 'cases', 'contact'] as Page[]).map((page) => (
              <li key={page}>
                <button
                  onClick={() => setActivePage(page)}
                  style={{
                    ...styles.navButton,
                    ...(activePage === page ? styles.active : {})
                  }}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main style={styles.main}>
        {renderPage()}
      </main>
    </div>
  )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderBottom: '1px solid #e5e7eb'
  },
  logo: {
    fontSize: '1.2rem',
    margin: 0
  },
  navList: {
    display: 'flex',
    gap: '1rem',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  navButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem 0.75rem',
    fontSize: '0.9rem'
  },
  active: {
    borderBottom: '2px solid black',
    fontWeight: 600
  },
  main: {
    padding: '2rem'
  }
} as const

export default App