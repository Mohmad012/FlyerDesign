import Head from "next/head";
import { useTranslation } from "react-i18next";

const SEO = ({ title, description, image, pathname }) => {
  const { t } = useTranslation('common')
  const siteUrl = process.env.webUrl
  const url = `${siteUrl}/${pathname || ''}`
  const siteName = t('voucherek');
  const defaultImage = "/voucherk-logo.png";

  const pageTitle = title ? `${title} - ${siteName}` : siteName;
  const pageDescription = description || siteName;
  const pageImage = image ? `${siteUrl}/media/catalog/product${image}` : `${siteUrl}${defaultImage}`;
  const pageUrl = url ? url : siteUrl;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />
    </Head>
  );
};

export default SEO;