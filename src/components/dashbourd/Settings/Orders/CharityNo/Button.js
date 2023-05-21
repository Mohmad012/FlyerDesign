const Button = ({bgColor, borderColor, textColor, text}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-bold text-sm border-2 border-${borderColor} ${bgColor} ${textColor}`}>
      {text}
    </button>
  )
}

export default Button
