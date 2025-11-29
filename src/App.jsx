import React from 'react'
import './App.css'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Experiences from './components/Experiences'

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <div>
          <div className="title">My Portofolio</div>
        </div>
        <nav className="nav-links">
          <a href="#profile">Profil</a>
          <a href="#skills">Keahlian</a>
          <a href="#experiences">Pengalaman</a>
        </nav>
      </header>

      <div className="main-grid">
        <aside className="left-col">
          <Profile />
        </aside>
        <main className="right-col">
          <Skills />
          <Experiences />
        </main>
      </div>
    </div>
  )
}

export default App
