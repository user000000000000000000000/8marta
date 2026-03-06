import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Timeline from './pages/Timeline'
import Letter from './pages/Letter'
import Secret from './pages/Secret'
import HeartBackground from './components/HeartBackground'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/8marta">
      <div className="app">
        <HeartBackground />
        <nav className="nav">
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/gallery">Галерея</Link></li>
            <li><Link to="/timeline">История</Link></li>
            <li><Link to="/letter">Письмо</Link></li>
            <li><Link to="/secret">Секрет</Link></li>
          </ul>
        </nav>

        <div className="container">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/letter" element={<Letter />} />
              <Route path="/secret" element={<Secret />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App