import ProductCard from "./ProductCard"
import Slider from "react-slick";
import TitleBx from "./TitleBx"
import Image from "next/image";
const CatalogueCard = ({
		titleColor = "text-gray-900",
		bgCatalogue = "bg-white",
		title = "",
		data = [],
		imgOnly = false,
		styleBx = ""
	}) => {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
	<>
	    <TitleBx
			bgBx={bgCatalogue}
			text="show all"
			titleColor={titleColor}
			title={title}
			styleBx={styleBx}
	    />
    	<div className="c-container">
		    <Slider {...settings}>

		    		{!imgOnly ? (
							data?.map((item) => (
					        <ProductCard
								key={item.id}
								src={item.source}
								heightCard={item.heightCard}
								position = "justify-start items-end ml-1 pb-1"
								borderColor={item.borderColor}
								bgColor={item.bgColor}
								textColor={item.textColor}
								textTag={item.title}
								hoverBgColor={item.hoverBgColor}
								hoverTextColor={item.hoverTextColor}
								hoverBorderColor={item.hoverBorderColor}
								title={item.title}
								warningText={item.size}
								addTagBadge={item.addTagBadge}
								haveFav={item.haveFav}
					        />
						))
		    			) : (
				                data?.map((item) => (
								      <div className="flex mx-2 items-center  CatalogueVIP" key={item.id}>
								      	<div className={`order-2 h-80 w-96 `}>
								        	<Image src={item?.source} width={2000} height={2000} alt="" className=" w-full h-full object-cover " />
								        </div>
								      	<span className={` order-1 ml-10 customNumber ${item.class}`}>
								      		{item.num}
								        </span>
								      </div>
				                ))
		    			)}

    		</Slider>
	    </div>
	</>
  )
}

export default CatalogueCard