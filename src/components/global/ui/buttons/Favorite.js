import WishlistIcon from '@/components/icons/WishlistIcon'

const FavoriteButton = () => {
  return (
  	<div className={`flex justify-end items-start mr-3 pr-3 py-3`}>
		<button
			type="button"
			className={`rounded-xl px-2.5 py-1.5  font-medium shadow-sm`}
		>
			<WishlistIcon className='absolute top-2 right-2 text-white cursor-pointer drop-shadow-md hover:scale-95 duration-300' width={36} />
		</button>
	</div>
  )
}

export default FavoriteButton