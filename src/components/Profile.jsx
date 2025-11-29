import React, { useState } from 'react'
import data from '../dataMahasiswa.json'
import './components.css'

export default function Profile() {
  const [photoSrc, setPhotoSrc] = useState(() => {
    if (!data.photo) return '/vite.svg'
    const val = String(data.photo)
    if (val.startsWith('http') || val.startsWith('/')) return val
   
    return `/${val}`
  })

  return (
    <section id="profile" className="card profile">
      <h3></h3>
      <div className="profile-left">
        <img src={photoSrc} alt={data.name} className="avatar" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/200'; setPhotoSrc('https://via.placeholder.com/200') }} />
      </div>
      <div className="profile-right">
        <h2>{data.name}</h2>
        <p className="muted">NIM: {data.npm}</p>
        <p className="about">{data.about}</p>
      </div>
    </section>
  )
}
