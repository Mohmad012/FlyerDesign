import Star from './Star'

const Rating = ({rating, setRating}) => {
  const handleClick = index => {
    setRating(index)
  }

  const stars = []

  for (let i = 1; i <= 5; i++) {
    const filled = i <= rating
    const className = `star ${filled ? 'filled' : ''}`

    stars.push(
      <Star
        id={i}
        key={i}
        filled={filled}
        onClick={() => handleClick(i)}
        className={className}
      />
    )
  }

  return (
    <div className='relative'>
      <div className='cu-rating'>
        {stars}
        {/* <input type='radio' name='star' id='star1' />
        <label htmlFor='star1' className='active' />
        <input type='radio' name='star' id='star2' />
        <label htmlFor='star2' className='active' />
        <input type='radio' name='star' id='star3' />
        <label htmlFor='star3' className='active' />
        <input type='radio' name='star' id='star4' />
        <label htmlFor='star4' className='active' />
        <input type='radio' name='star' id='star5' />
        <label htmlFor='star5' /> */}
      </div>
    </div>
  )
}

export default Rating
