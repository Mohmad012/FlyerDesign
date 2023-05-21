import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/router";

function LocaleSwitcher() {
  const router = useRouter();

  const { pathname, query, asPath, locale } = router;

  // const otherLocales = locales?.filter(
  //   (locale) => locale !== activeLocale
  // );
  // const { pathname, query, asPath } = router;

  return (
    <span className="text-muted cursor-pointer">
          <span key={"locale-" + locale} className="flex gap-2 items-center">
            <Image
              width={30}
              height={30}
              style={{ objectFit: 'contain' }}
              src={`/assets/flags/${locale.includes("ar") ? "united-states-flag.svg" : "saudi-arabia.svg"}`}
              className="object-cover object-center group-hover:opacity-75"
              alt="english flag"
            />
            <Link href={{ pathname, query }} as={asPath} locale={locale.startsWith('en') ? locale.replace('en', 'ar') : locale.replace('ar', 'en')}>
              {locale.startsWith('en') ? 'عربي' : 'English'}
            </Link>
          </span>
      {/* {otherLocales?.map((locale) => { */}
      {/*   return ( */}
      {/*   ); */}
      {/* })} */}
    </span>
  );
}

export default LocaleSwitcher