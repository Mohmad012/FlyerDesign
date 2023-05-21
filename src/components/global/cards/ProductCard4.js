import WishlistIcon from "@/components/icons/WishlistIcon";
import DicountBadge from "../ui/badges/Discount";
import InfoBadge from "../ui/badges/Info";
import PriceBadge from "../ui/badges/Price";
import Button from "../ui/buttons/Button";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({
  ButtonText,
  Size,
  Round = true,
  IsHeader = false,
  Image: img,
  Dicount,
  DicountText,
  Price,
  OldPrice,
  InfoBadgeText,
  Title,
  currency,
  bgInfoBadge,
  borderInfoBadge,
  haveImg = false,
  url="#"
}) => {

  return (
    <div
      className={`w-full h-full  ${
        Size === "lg" ? "max-h-96" : "max-h-72"
      } rounded-xl ${
        !Round && "rounded-t-none"
      }  overflow-hidden shadow-lg flex flex-col `}
    >
      <div
        className={`relative ${
          Size === "lg"
            ? IsHeader === true
              ? "h-[288px] lg-header"
              : "h-[324px] lg-no-header"
            : IsHeader === true
            ? "h-[188px] sm-header"
            : "h-[224px] sm-no-header"
        } bg-cover bg-slate-300 overflow-hidden`}
      >

        {haveImg ? (
            <Link
              target="_blank"
              href={url}
              >
                <Image
                  width={2000}
                  height={20}
                  src={img}
                  alt={Title}
                  className="h-full w-full object-cover object-center cursor-pointer"
                />
            </Link>
          ) : ""}
        {Dicount && (
          <DicountBadge width={80} dicount={Dicount} text={DicountText} />
        )}
        {Price && (
          <PriceBadge
            width={90}
            price={Price}
            oldPrice={OldPrice}
            currency={currency}
          />
        )}
        <WishlistIcon
          className="absolute top-2 right-2 text-white cursor-pointer drop-shadow-md hover:scale-95 duration-300"
          width={36}
        />
        {InfoBadgeText ? (
          <InfoBadge
            text={InfoBadgeText}
            bgInfoBadge={bgInfoBadge}
            borderInfoBadge={borderInfoBadge}
          />
        ) : null}
      </div>
      <div className="bg-white px-3 py-2 h-16 flex items-center justify-between gap-4 relative">
        <div className="font-bold text-sm text-start clamp-2 text-neutral-800">
          {Title || ""}
        </div>
        {Size === "lg" && ButtonText && <Button size={Size} text={ButtonText} />}
      </div>
    </div>
  );
};

export default ProductCard;
