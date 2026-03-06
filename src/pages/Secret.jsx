import { motion } from 'framer-motion'
import { useState } from 'react'

const Secret = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [answer, setAnswer] = useState('')

  const checkAnswer = () => {
    // 👇 Измени правильный ответ
    if (answer.toLowerCase().includes('да')) {
      setIsUnlocked(true)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ 
        position: 'relative', 
        zIndex: 1,
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1>🔐 Секретный раздел</h1>

      {!isUnlocked ? (
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          style={{
            background: 'white',
            padding: '40px',
            borderRadius: '30px',
            maxWidth: '500px',
            boxShadow: '0 20px 40px rgba(236,72,153,0.15)'
          }}
        >
          <p style={{ fontSize: '1.3rem', marginBottom: '20px' }}>
            Чтобы открыть секрет, ответь на вопрос:
          </p>
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '30px', color: '#be185d' }}>
            Ты меня любишь?
          </p>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Напиши 'да'..."
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '1.2rem',
              border: '2px solid #f9a8d4',
              borderRadius: '30px',
              marginBottom: '20px',
              outline: 'none'
            }}
            onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
          />
          <button className="button" onClick={checkAnswer} style={{ width: '100%' }}>
            Открыть секрет
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.5, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          style={{
            background: 'linear-gradient(145deg, #fdf2f8, #fce7f3)',
            padding: '50px',
            borderRadius: '40px',
            maxWidth: '600px',
            border: '3px solid white',
            boxShadow: '0 20px 50px rgba(236,72,153,0.2)'
          }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>💖</div>
          <h2 style={{ color: '#be185d', marginBottom: '20px' }}>
            Ты — моё всё!
          </h2>
          <p style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#831843' }}>
            Я люблю тебя больше жизни. 
            И хочу провести с тобой всю оставшуюся жизнь.
            С 8 Марта, моя радость!
          </p>
          <div style={{ fontSize: '3rem', marginTop: '30px' }}>
            💕 🌹 💕
          </div>
          
          {/* Сюрприз внутри сюрприза */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ marginTop: '40px' }}
          >
            <p style={{ fontSize: '1.2rem', color: '#9d174d' }}>
              P.S. Это только начало. Я буду говорить тебе это каждый день.
            </p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Secret