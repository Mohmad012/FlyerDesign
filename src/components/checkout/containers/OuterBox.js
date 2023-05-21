const OuterBox = ({title , className = "", children}) => {
  return (
    <div className={className}>
      {title && <h2 className="mb-4 font-bold">{title}</h2>}
      <div className="ring-1 ring-gray-300 rounded-xl p-4 mb-4">
        {children}
      </div>
    </div>
  )
}

export default OuterBox