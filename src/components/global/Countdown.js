import {useRouter} from 'next/router'
import React, {useState, useEffect} from 'react'
import {useTranslation} from 'react-i18next'

const Countdown = ({days = 2, hours = 23, minutes = 59, seconds = 59}) => {
  const {t} = useTranslation('common')
  const {locale} = useRouter()
  const [timeLeft, setTimeLeft] = useState({
    days,
    hours,
    minutes,
    seconds,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        clearInterval(interval)
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        })
      } else if (
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        setTimeLeft({
          days: timeLeft.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59,
        })
      } else if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        setTimeLeft({
          ...timeLeft,
          hours: timeLeft.hours - 1,
          minutes: 59,
          seconds: 59,
        })
      } else if (timeLeft.seconds === 0) {
        setTimeLeft({
          ...timeLeft,
          minutes: timeLeft.minutes - 1,
          seconds: 59,
        })
      } else {
        setTimeLeft({
          ...timeLeft,
          seconds: timeLeft.seconds - 1,
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [timeLeft, days, hours, minutes, seconds])

  // Split the time values into two digits and add leading zeros if necessary
  const daysArray = timeLeft.days.toString().padStart(2, '0').split('')
  const hoursArray = timeLeft.hours.toString().padStart(2, '0').split('')
  const minutesArray = timeLeft.minutes.toString().padStart(2, '0').split('')
  const secondsArray = timeLeft.seconds.toString().padStart(2, '0').split('')
  const data = [
    {
      label: 'days',
      time: daysArray,
    },
    {
      label: 'hours',
      time: hoursArray,
    },
    {
      label: 'minutes',
      time: minutesArray,
    },
    {
      label: 'seconds',
      time: secondsArray,
    },
  ]
  return (
    <div className='flex justify-center items-center flex-col md:gap-2 md:flex-row md:items-end'>
      <p className="text-primary-500 font-bold mb-0 md:mb-4" suppressHydrationWarning>{t('Offers updates after')}</p>
    <div className='flex justify-center items-end py-2'>
        {data.map((timeObj, idx) =>
        (
          <div key={idx} className='flex items-end gap-0'>
            <div className="flex flex-col items-center justify-center mx-1">
              <span className="text-sm pb-1" suppressHydrationWarning>{t(timeObj.label)}</span>
              <p className={`flex gap-1 ${locale.includes('ar') ? 'flex-row-reverse' : ''}`}>
                <span className="text-white bg-black rounded-md w-6 h-8 text-md flex items-center justify-center pb-1">{timeObj.time[0]}</span>
                <span className="text-white bg-black rounded-md w-6 h-8 text-md flex items-center justify-center pb-1">{timeObj.time[1]}</span>
              </p>
            </div>
            {idx !== data?.length - 1 && (
              <p className='text-xl font-bold h-8'>:</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countdown
