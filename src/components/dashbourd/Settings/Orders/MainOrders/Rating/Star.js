const Star = ({filled, onClick, id}) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <>
      <input type='radio' name='star' id={id} />
      <label
        htmlFor={id}
        className={`${filled ? 'active' : ''} cursor-pointer`}
        onClick={handleClick}
      />
    </>
  )
}

export default Star
