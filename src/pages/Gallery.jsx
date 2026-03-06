import { motion } from 'framer-motion'
import { useState } from 'react'

// 👇 ЗДЕСЬ ТЫ БУДЕШЬ ДОБАВЛЯТЬ СВОИ ФОТО
const photos = [
  {
    id: 1,
    url: '/8marta/public/images/leto.jpg', // положи фото в public/images/photo1.jpg
    caption: 'Соска у стенки',
    date: '19.04.2025'
  },
  {
    id: 2,
    url: '/8marta/public/images/bona.jpg',
    caption: 'Твоя улыбка',
    date: '30.12.2025'
  },
  {
    id: 3,
    url: '/8marta/public/images/biliard.jpg',
    caption: 'Мастер кия🎱',
    date: '15.02.2026'
  },
  {
    id: 4,
    url: '/8marta/public/images/lift.jpg',
    caption: 'Как же ты красива',
    date: '12.07.2023'
  },
  {
    id: 5,
    url: '/8marta/public/images/together.jpg',
    caption: 'Я люблю тебя',
    date: '13.05.2023'
  },
  {
    id: 6,
    url: '/8marta/public/images/rand.jpg',
    caption: 'Красива везде',
    date: '06.12.2025'
  }
]

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <h1>Наша галерея</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#9d174d', marginBottom: '40px' }}>
        {photos.length} счастливых моментов 📸
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '25px',
        padding: '20px 0'
      }}>
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(236,72,153,0.15)',
              cursor: 'pointer',
              border: '2px solid white'
            }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <div style={{ 
              width: '100%', 
              height: '300px', 
              background: '#fce7f3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              color: '#f9a8d4'
            }}>
              {/* Здесь будет фото, если его нет — покажет иконку */}
              <img 
                src={photo.url} 
                alt={photo.caption}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = '📸'
                }}
              />
            </div>
            <div style={{ padding: '15px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#be185d' }}>
                {photo.caption}
              </div>
              <div style={{ color: '#9d174d', marginTop: '5px' }}>
                {photo.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Модальное окно для увеличения фото */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedPhoto.url} 
              alt={selectedPhoto.caption}
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxHeight: '70vh', 
                objectFit: 'contain',
                background: '#fce7f3'
              }}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = '<div style="padding:50px;font-size:3rem">📸</div>'
              }}
            />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#be185d' }}>
                {selectedPhoto.caption}
              </div>
              <div style={{ color: '#9d174d', marginTop: '5px' }}>
                {selectedPhoto.date}
              </div>
            </div>
            <button
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
              }}
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Gallery