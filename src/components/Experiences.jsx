import React from 'react'
import data from '../dataMahasiswa.json'
import './components.css'

export default function Experiences() {
  return (
    <section id="experiences" className="card experiences">
      <h3>Pengalaman</h3>
      <div className="experience-list">
        {data.experiences.map((e, idx) => (
          <article key={idx} className="experience-item">
            <h4 className="experience-title">{e.title}</h4>
            <p className="muted">{e.organization} • {e.year}</p>
            <p>{e.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
