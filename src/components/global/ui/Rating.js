import { StarIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const RatingStars = ({ rate = 4, totalCount= 1624 , t }) => {
  return (
    <div className="ml-4  pl-4">
      <h2 className="sr-only">{t('reviews')}</h2>
      <div className="flex items-center">
        <div>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  rate > rating ? 'text-yellow-400' : 'text-gray-300',
                  'h-7 w-7 flex-shrink-0'
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="sr-only">{rate} out of 5 stars</p>
        </div>
        <p className="ml-2 text-gray-500">({totalCount} {totalCount === 1 ? (t('review') + ' ' + t('client')) : (t('reviews') + ' ' + t('clients'))}</p>
      </div>
    </div>

  )
}



export default RatingStars