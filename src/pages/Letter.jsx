import { motion } from 'framer-motion'
import { useState } from 'react'

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ 
        position: 'relative', 
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '70vh',
        justifyContent: 'center'
      }}
    >
      {!isOpen ? (
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: '300px',
            height: '400px',
            background: 'linear-gradient(145deg, #fce7f3, #fbcfe8)',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(236,72,153,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '4px solid white',
            position: 'relative'
          }}
          onClick={() => setIsOpen(true)}
        >
          <div style={{ fontSize: '5rem', transform: 'rotate(-5deg)' }}>💌</div>
          <div style={{
            position: 'absolute',
            bottom: '30px',
            fontSize: '1.5rem',
            color: '#9d174d',
            fontWeight: 'bold'
          }}>
            Нажми, чтобы открыть
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            padding: '50px',
            borderRadius: '40px',
            maxWidth: '700px',
            boxShadow: '0 20px 50px rgba(236,72,153,0.2)',
            border: '2px solid white'
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#be185d' }}>
            Моей любимой Юлечке
          </h2>
          
          <div style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#831843' }}>
            <p>Моя любимая,</p>
            
            <p>Пишу эти строки и не могу подобрать слов, чтобы описать, как сильно я тебя люблю. Ты — самое прекрасное, что случилось в моей жизни. Твоя улыбка освещает мои самые темные дни, твой смех — лучшая музыка, а твои глаза — бесконечность, в которой хочется раствориться.</p>
            
            <p>Помнишь, как мы познакомились? Я тогда еще не знал, что эта встреча изменит всё. Ты ворвалась в мою жизнь и сделала её ярче, теплее, счастливее.</p>
            
            <p>С тобой я стал лучше. Ты научила меня любить, заботиться, ценить каждый момент. Я благодарен тебе за каждую секунду, проведенную вместе: за наши разговоры до утра, за твои объятия, поддержку, любовь.</p>
            
            <p>В этот весенний день хочу пожелать тебе счастья. Настоящего, большого, бесконечного. Пусть все твои проблемы решатся, пусть каждый день приносит радость, пусть ты всегда чувствуешь себя любимой и защищенной. Потому что ты — моя принцесса, и я сделаю всё, чтобы ты была счастлива.</p>
            
            <p>С 8 Марта, моя девочка! Ты — чудо.</p>
            
            <p style={{ textAlign: 'right', marginTop: '40px' }}>
              Навсегда твой,<br />
              Ваня ❤️
            </p>
          </div>

          <button 
            className="button" 
            onClick={() => setIsOpen(false)}
            style={{ marginTop: '30px', width: '100%' }}
          >
            Закрыть письмо
          </button>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Letter