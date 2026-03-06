import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const HeartBackground = () => {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const createHeart = () => {
      const newHeart = {
        id: Math.random(),
        x: Math.random() * 100,
        size: Math.random() * 30 + 15,
        delay: Math.random() * 2,
        duration: Math.random() * 5 + 8
      }
      setHearts(prev => [...prev, newHeart])
      
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id))
      }, newHeart.duration * 1000)
    }

    const interval = setInterval(createHeart, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      pointerEvents: 'none', 
      zIndex: 0,
      overflow: 'hidden'
    }}>
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', x: `${heart.x}vw`, opacity: 0, scale: 0.5 }}
          animate={{ y: '-10vh', opacity: [0, 0.6, 0], scale: 1.2 }}
          transition={{ duration: heart.duration, delay: heart.delay, ease: 'linear' }}
          style={{
            position: 'absolute',
            fontSize: `${heart.size}px`,
            color: 'rgba(236, 72, 153, 0.3)',
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}

export default HeartBackground