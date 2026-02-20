import React from 'react'

export type Page = 'home' | 'services' | 'framework' | 'cases' | 'contact'

interface HeaderProps {
  activePage: Page
  setActivePage: (page: Page) => void
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const pages: Page[] = ['home', 'services', 'framework', 'cases', 'contact']

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Focused & Creative</h1>

      <nav>
        <ul style={styles.navList}>
          {pages.map((page) => (
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
  }
} as const

export default Header