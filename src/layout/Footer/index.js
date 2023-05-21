import NewsLetter from "@/components/global/forms/NewsLetter"
import PaymentIcons from "@/components/icons/PaymentIcons"
import { footerLinks, socialLinks } from "@/constant/footer" // footer links & social data
import { useTranslation } from "next-i18next"
import AboutInfo from "./AboutInfo"
import Copyrights from "./Copyrights"
import LinkList from "./LinkList"


export default function Footer() {
  const { t } = useTranslation('common')
  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <NewsLetter />
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {
            Object.entries(footerLinks).map((item, idx) => <LinkList key={idx} title={item[0]} list={item[1]} />)
          }
          <AboutInfo socialLinks={socialLinks} />
        </div>
      </div>
      <div className="py-8 flex justify-center items-center">
        <PaymentIcons className='text-gray-300' width={300} />
      </div>
      <Copyrights text={t('copyrights')}  />
    </footer>
  )
}
