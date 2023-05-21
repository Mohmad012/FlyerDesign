function Tab({label, isActive, onClick}) {
  return (
    <button
      className={`${
        isActive ? 'text-primary-500' : ''
      } flex-1 py-2 text-center focus:outline-none font-semibold text-right px-5 cursor-default`}
      onClick={onClick}>
      <span>{label}</span>
      <span
        className={`${
          isActive ? 'w-full border-b border-primary-600' : ''
        }`}></span>
    </button>
  )
}

export default Tab
