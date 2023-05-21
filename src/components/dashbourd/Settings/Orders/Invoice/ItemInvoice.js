const ItemInvoice = ({
  title,
  text,
  customTextClass = 'text-gray-400',
  customTitleClass = 'text-gray-800',
}) => {
  return (
    <div className='flex items-center justify-between my-5'>
      <h2 className={`${customTitleClass}`}>{title}</h2>
      <span className={`${customTextClass}`}>{text}</span>
    </div>
  )
}

export default ItemInvoice
