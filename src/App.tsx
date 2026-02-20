import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Framework from './pages/Framework'
import Cases from './pages/Cases'
import Contact from './pages/Contact'
import './App.css'

type Page = 'home' | 'services' | 'framework' | 'cases' | 'contact'

function App() {
  
  const [activePage, setActivePage] = useState<Page>('home')

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />
      case 'services':
        return <Services />
      case 'framework':
        return <Framework />
      case 'cases':
        return <Cases />
      case 'contact':
        return <Contact />
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

export default App