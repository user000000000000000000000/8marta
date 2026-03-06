import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Home = () => {
  // 👇 УСТАНОВИ СВОЮ ДАТУ (год, месяц, день)
  // ВНИМАНИЕ: месяцы в JS считаются с 0 (0 - январь, 1 - февраль, 2 - март и т.д.)
  const startDate = new Date(2021, 4, 13) // Пример: 15 апреля 2023 (месяц 3 = апрель)
  
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const diff = now - startDate

      if (diff < 0) {
        setTimeTogether({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const seconds = Math.floor(diff / 1000) % 60
      const minutes = Math.floor(diff / (1000 * 60)) % 60
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))

      setTimeTogether({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [startDate])

  const formatNumber = (num) => num < 10 ? `0${num}` : num

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: 'center', padding: '40px 0' }}
    >
      <h1>С 8 Марта, Юлечка!</h1>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          margin: '40px auto',
          background: 'linear-gradient(145deg, #fbcfe8, #fdf2f8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '5rem',
          boxShadow: '0 20px 40px rgba(236,72,153,0.2)',
          border: '4px solid white',
          overflow: 'hidden'
        }}
      >
        <img 
          src="/8marta/public/images/ava.jpg" 
          alt="Фото"
          style={{ 
            width: '100%', 
            height: '100%', 
            borderRadius: '50%',
            objectFit: 'cover'
          }}
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.innerHTML = '🌸'
          }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ 
          fontSize: '1.5rem', 
          maxWidth: '600px', 
          margin: '0 auto 40px', 
          color: '#831843',
          lineHeight: '1.6'
        }}
      >
        Этот сайт — мой подарок тебе. Здесь каждая страница хранит частичку моей любви.
        Я хочу, чтобы ты знала: ты самое дорогое, что есть в моей жизни.
      </motion.p>

      {/* КРАСИВЫЙ ТАЙМЕР */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '60px',
          padding: '30px 20px',
          margin: '40px auto',
          maxWidth: '600px',
          border: '2px solid white',
          boxShadow: '0 10px 30px rgba(236,72,153,0.15)'
        }}
      >
        <p style={{ fontSize: '1.3rem', color: '#be185d', marginBottom: '20px' }}>
          Мы вместе уже:
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#ec4899',
              background: 'white',
              padding: '15px 20px',
              borderRadius: '20px',
              minWidth: '80px',
              boxShadow: '0 5px 15px rgba(236,72,153,0.2)'
            }}>
              {timeTogether.days}
            </div>
            <div style={{ marginTop: '8px', color: '#9d174d' }}>дней</div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#ec4899',
              background: 'white',
              padding: '15px 20px',
              borderRadius: '20px',
              minWidth: '80px',
              boxShadow: '0 5px 15px rgba(236,72,153,0.2)'
            }}>
              {formatNumber(timeTogether.hours)}
            </div>
            <div style={{ marginTop: '8px', color: '#9d174d' }}>часов</div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#ec4899',
              background: 'white',
              padding: '15px 20px',
              borderRadius: '20px',
              minWidth: '80px',
              boxShadow: '0 5px 15px rgba(236,72,153,0.2)'
            }}>
              {formatNumber(timeTogether.minutes)}
            </div>
            <div style={{ marginTop: '8px', color: '#9d174d' }}>минут</div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#ec4899',
              background: 'white',
              padding: '15px 20px',
              borderRadius: '20px',
              minWidth: '80px',
              boxShadow: '0 5px 15px rgba(236,72,153,0.2)'
            }}>
              {formatNumber(timeTogether.seconds)}
            </div>
            <div style={{ marginTop: '8px', color: '#9d174d' }}>секунд</div>
          </div>
        </div>

        <p style={{
          marginTop: '20px',
          fontSize: '1.1rem',
          color: '#831843',
          fontStyle: 'italic'
        }}>
          и каждое мгновение с тобой бесценно ❤️
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <Link to="/letter">
          <button className="button">Прочитать признание</button>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default Home