const TitleBx = ({
	bgBx,
	styleBx = "",
	text,
	titleColor,
	title,
	router,
	url = "/"
}) => {
  return (
	    <div className={`border-0 border-gray-200 ${styleBx} ${bgBx}`}>
	      <div className={`flex flex-wrap items-center justify-between sm:flex-nowrap c-container ${bgBx !== "bg-white" ? "pb-0" : ""}`}>
	        <h3 className={`text-2xl font-semibold leading-6 border-none stroke-red-900 mb-4 md:mb-0 ${titleColor}`}>{title}</h3>
	        <div className="ml-4  flex-nowrap border-none order-last mb-2 md:order-1">
	          <button
	            type="button"
	            onClick={() => router?.push(url)}
	            className="relative inline-flex items-center rounded-3xl border border-transparent bg-sky-600 px-4 py-2 text-md font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
	          >
	            {text}
	          </button>
	        </div>
	      </div>
	    </div>
  )
}

export default TitleBx