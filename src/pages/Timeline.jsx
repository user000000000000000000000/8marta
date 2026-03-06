import { motion } from 'framer-motion'

// 👇 ЗДЕСЬ ТЫ ПИШЕШЬ СВОЮ ИСТОРИЮ
const events = [
  {
    date: '24 августа 2020',
    title: 'Первая встреча',
    description: 'Это был обычный день, который стал особенным. Я увидел тебя в школе и понял — это судьба. Я помню, что ты была в шортиках, тогда никто не знал, что ты будешь новенькой в классе',
    icon: '💫'
  },
  {
    date: '30 сентября 2020',
    title: 'Первое прогулка',
    description: 'Тебе гворили, что я не хочу идти гулять с тобой. Все, что я у тебя тогда спросил на прогулке - "Че за тапки?". После нее мы начали гулять с тобой',
    icon: '🚶'
  },
  {
    date: '7 мая 2021',
    title: 'Сон в обнимку',
    description: 'Мне было так тяжело дышать, впервые я был так близко к тебе, это было незабываемо.',
    icon: '🥰'
  },
  {
    date: '13 мая 2021',
    title: 'Волшебный день',
    description: 'Тот самый, когда мы оба поняли, что пора.',
    icon: '💞'
  },
  {
    date: '24 июля 2021',
    title: 'Первый раз',
    description: 'Я так растерялся в тот день, что-то новое, страшно и приятно. Продолжали на следующий день у меня утром ',
    icon: '🔞'
  },
  {
    date: '3 августа 2021',
    title: 'Твой день рождения',
    description: 'Тот день для нас был не просто день рождения, неделя стресса закончилась именна в этот день, сделала первый тест. А подарил я тебе тогда осьминожка розового)',
    icon: '🎂'
  },
  {
    date: '3 августа 2022',
    title: 'День рождения в лофте',
    description: 'Помнишь как мы пели песни? Вместе кушали пиццу и сушии.',
    icon: '🎤'
  },
  {
    date: '13 мая 2023',
    title: 'Вторая годовщина',
    description: 'Мы отмечали ее в BONA, ходили по Пушкину, ты наслаждалась красотой улиц, а я - твоей красотой.',
    icon: '💗'
  },
  {
    date: '21 января 2024',
    title: 'Первое Путешестчие',
    description: 'Сначала Первоуральск, потом Юргамыш, новые знакомства, эмоции, можно сказать - наш первый совместный отпуск.',
    icon: '🚄'
  },
  {
    date: '25 января - 9 февраля 2026',
    title: 'Полет в Кемерово',
    description: 'Было очень круто, я видел как ты расцветаешь у себя дома.',
    icon: '✈'
  },
  {
    date: '14 февраля 2026',
    title: 'День нас влюбленных',
    description: 'Каждый день с тобой — как праздник, но этот был особенным. Ты — моя валентинка навсегда.',
    icon: '💝'
  },
  {
    date: 'Сегодня',
    title: '8 марта 2026',
    description: 'Я люблю тебя ещё сильнее, чем вчера. Спасибо, что ты есть. С праздником, моя девочка!',
    icon: '🌸'
  }
]

const Timeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <h1>Наша история</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#9d174d', marginBottom: '40px' }}>
        {events.length} важных событий, которые мы пережили вместе
      </p>
      
      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Вертикальная линия */}
        <div style={{
          position: 'absolute',
          left: '30px',
          top: '10px',
          bottom: '10px',
          width: '4px',
          background: 'linear-gradient(to bottom, #f472b6, #d946ef)',
          borderRadius: '2px'
        }} />

        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            style={{
              display: 'flex',
              marginBottom: '30px',
              position: 'relative',
              paddingLeft: '70px'
            }}
          >
            {/* Иконка */}
            <div style={{
              position: 'absolute',
              left: '10px',
              width: '44px',
              height: '44px',
              background: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              boxShadow: '0 0 0 4px #fbcfe8',
              zIndex: 2
            }}>
              {event.icon}
            </div>

            {/* Карточка */}
            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              style={{
                background: 'white',
                padding: '20px',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(236,72,153,0.15)',
                border: '2px solid #fbcfe8',
                width: '100%'
              }}
            >
              <div style={{ 
                fontSize: '1.1rem', 
                color: '#ec4899', 
                fontWeight: 'bold',
                marginBottom: '5px'
              }}>
                {event.date}
              </div>
              <div style={{ 
                fontSize: '1.3rem', 
                fontWeight: '600', 
                marginBottom: '10px', 
                color: '#831843'
              }}>
                {event.title}
              </div>
              <div style={{ color: '#6b21a5', lineHeight: '1.6' }}>
                {event.description}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Timeline