import React from 'react'
import data from '../dataMahasiswa.json'
import './components.css'

export default function Skills() {
  return (
    <section id="skills" className="card skills">
      <h3>Keahlian</h3>
      <ul className="skill-list">
        {data.skills.map((s) => (
          <li key={s.name} className="skill-item">
            <div className="skill-head">
              <span className="skill-name">{s.name}</span>
              <span className="skill-level">{s.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${s.level}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
