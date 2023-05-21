import { useTranslation } from "next-i18next";

const TagBadge = ({
	position = "",
	borderColor,
	bgColor,
	hoverBgColor,
	hoverTextColor,
	hoverBorderColor,
	textColor,
	textTag = "",
	key = ""
}) => {
	const {t} = useTranslation('home')
  return (
  	<div key={key} className={`flex ${position}`}>
		<button
			type="button"
			className={`bg-info-500/90 text-info-1000 rounded-full  absolute bottom-2 left-2 text-[10px] font-bold py-0 px-3 ${borderColor} ${bgColor} ${textColor} ${hoverBgColor} ${hoverTextColor} ${hoverBorderColor}`}
		>
			{t(textTag)}
		</button>
	</div>
  )
}

export default TagBadge