import { useState } from 'react'
import Header from './components/Header'
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
    <>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main style={{ padding: '2rem' }}>
        {renderPage()}
      </main>
    </>
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