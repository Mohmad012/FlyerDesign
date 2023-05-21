// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const {withSentryConfig} = require('@sentry/nextjs')

const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')
/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

const rewrites = () => {
  return [
    {
      source: '/',
      destination: 'https://api.voucherek.com/api/v1/categories',
    },
    {
      source: '/',
      destination: 'https://api.voucherek.com/api/v1/handshake',
    },
  ]
}

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        webUrl: process.env.NEXT_PUBLIC_IMAGE_BASEURL,
        algolia_appId: process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
        algolia_apiKey: process.env.NEXT_PUBLIC_ALGOLIA_APIKEY,
        algolia_indexName: process.env.NEXT_PUBLIC_INDEX_NAME,

        all_cities_arabic_products:
          process.env.NEXT_PUBLIC_All_Cities_Arabic_Products,
        all_cities_english_products:
          process.env.NEXT_PUBLIC_All_Cities_English_Products,

        dammam_arabic_products: process.env.NEXT_PUBLIC_Dammam_Arabic_Products,
        dammam_english_products:
          process.env.NEXT_PUBLIC_Dammam_English_Products,

        jeddah_arabic_products: process.env.NEXT_PUBLIC_Jeddah_Arabic_Products,
        jeddah_english_products:
          process.env.NEXT_PUBLIC_Jeddah_English_Products,

        riyadh_arabic_products: process.env.NEXT_PUBLIC_Riyadh_Arabic_Products,
        riyadh_english_products:
          process.env.NEXT_PUBLIC_Riyadh_English_Products,

        all_cities_arabic_categories:
          process.env.NEXT_PUBLIC_All_Cities_Arabic_Categories,
        all_cities_english_categories:
          process.env.NEXT_PUBLIC_All_Cities_English_Categories,

        dammam_arabic_categories:
          process.env.NEXT_PUBLIC_Dammam_Arabic_Categories,
        dammam_english_categories:
          process.env.NEXT_PUBLIC_Dammam_English_Categories,

        jeddah_arabic_categories:
          process.env.NEXT_PUBLIC_Jeddah_Arabic_Categories,
        jeddah_english_categories:
          process.env.NEXT_PUBLIC_Jeddah_English_Categories,

        riyadh_arabic_categories:
          process.env.NEXT_PUBLIC_Riyadh_Arabic_Categories,
        riyadh_english_categories:
          process.env.NEXT_PUBLIC_Riyadh_English_Categories,

        // elastic search indexes endpoints
        api_baseurl: process.env.NEXT_PUBLIC_API_BASEURL,

        // elasticsearch products indexes
        all_cities_arabic_products_elastic:
          process.env.NEXT_PUBlic_All_Cities_Arabic_Products_ELASTIC,
        all_cities_english_products_elastic:
          process.env.NEXT_PUBlic_All_Cities_English_Products_ELASTIC,

        dammam_arabic_products_elastic:
          process.env.NEXT_PUBlic_Dammam_Arabic_Products_ELASTIC,
        dammam_english_products_elastic:
          process.env.NEXT_PUBlic_Dammam_English_Products_ELASTIC,

        jeddah_arabic_products_elastic:
          process.env.NEXT_PUBlic_Jeddah_Arabic_Products_ELASTIC,
        jeddah_english_products_elastic:
          process.env.NEXT_PUBlic_Jeddah_English_Products_ELASTIC,

        riyadh_arabic_products_elastic:
          process.env.NEXT_PUBlic_Riyadh_Arabic_Products_ELASTIC,
        riyadh_english_products_elastic:
          process.env.NEXT_PUBlic_Riyadh_English_Products_ELASTIC,

        // elasticsearch categories indexes
        all_cities_arabic_categories_elastic:
          process.env.NEXT_PUBlic_All_Cities_Arabic_Categories_ELASTIC,
        all_cities_english_categories_elastic:
          process.env.NEXT_PUBlic_All_Cities_English_Categories_ELASTIC,

        dammam_arabic_categories_elastic:
          process.env.NEXT_PUBlic_Dammam_Arabic_Categories_ELASTIC,
        dammam_english_categories_elastic:
          process.env.NEXT_PUBlic_Dammam_English_Categories_ELASTIC,

        jeddah_arabic_categories_elastic:
          process.env.NEXT_PUBlic_Jeddah_Arabic_Categories_ELASTIC,
        jeddah_english_categories_elastic:
          process.env.NEXT_PUBlic_Jeddah_English_Categories_ELASTIC,

        riyadh_arabic_categories_elastic:
          process.env.NEXT_PUBlic_Riyadh_Arabic_Categories_ELASTIC,
        riyadh_english_categories_elastic:
          process.env.NEXT_PUBlic_Riyadh_English_Categories_ELASTIC,
      },
      ...nextConfig,
      async rewrites() {
        return [
          {
            source: '/api.voucherek.com/api/:path*',
            destination: 'http://localhost:3000/api/:path*',
          },
        ]
      },
    }
  } else {
  }

  return {
    env: {
      webUrl: process.env.NEXT_PUBLIC_IMAGE_BASEURL,
      algolia_appId: process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
      algolia_apiKey: process.env.NEXT_PUBLIC_ALGOLIA_APIKEY,
      algolia_indexName: process.env.NEXT_PUBLIC_INDEX_NAME,

      all_cities_arabic_products:
        process.env.NEXT_PUBLIC_All_Cities_Arabic_Products,
      all_cities_english_products:
        process.env.NEXT_PUBLIC_All_Cities_English_Products,

      dammam_arabic_products: process.env.NEXT_PUBLIC_Dammam_Arabic_Products,
      dammam_english_products: process.env.NEXT_PUBLIC_Dammam_English_Products,

      jeddah_arabic_products: process.env.NEXT_PUBLIC_Jeddah_Arabic_Products,
      jeddah_english_products: process.env.NEXT_PUBLIC_Jeddah_English_Products,

      riyadh_arabic_products: process.env.NEXT_PUBLIC_Riyadh_Arabic_Products,
      riyadh_english_products: process.env.NEXT_PUBLIC_Riyadh_English_Products,

      all_cities_arabic_categories:
        process.env.NEXT_PUBLIC_All_Cities_Arabic_Categories,
      all_cities_english_categories:
        process.env.NEXT_PUBLIC_All_Cities_English_Categories,

      dammam_arabic_categories:
        process.env.NEXT_PUBLIC_Dammam_Arabic_Categories,
      dammam_english_categories:
        process.env.NEXT_PUBLIC_Dammam_English_Categories,

      jeddah_arabic_categories:
        process.env.NEXT_PUBLIC_Jeddah_Arabic_Categories,
      jeddah_english_categories:
        process.env.NEXT_PUBLIC_Jeddah_English_Categories,

      riyadh_arabic_categories:
        process.env.NEXT_PUBLIC_Riyadh_Arabic_Categories,
      riyadh_english_categories:
        process.env.NEXT_PUBLIC_Riyadh_English_Categories,

      // elastic search indexes endpoints
      api_baseurl: process.env.NEXT_PUBLIC_API_BASEURL,

      // elasticsearch products indexes
      all_cities_arabic_products_elastic:
        process.env.smile_ar_sa_catalog_product,
      all_cities_english_products_elastic:
        process.env.smile_en_sa_catalog_product,

      dammam_arabic_products_elastic:
        process.env.smile_ar_sa_dmm_catalog_product,
      dammam_english_products_elastic:
        process.env.smile_en_sa_dmm_catalog_product,

      jeddah_arabic_products_elastic:
        process.env.smile_ar_sa_jed_catalog_product,
      jeddah_english_products_elastic:
        process.env.smile_en_sa_jed_catalog_product,

      riyadh_arabic_products_elastic:
        process.env.smile_ar_sa_ruh_catalog_product,
      riyadh_english_products_elastic:
        process.env.smile_en_sa_ruh_catalog_product,

      // elasticsearch categories indexes
      all_cities_arabic_categories_elastic:
        process.env.smile_ar_sa_catalog_category,
      all_cities_english_categories_elastic:
        process.env.smile_en_sa_catalog_category,

      dammam_arabic_categories_elastic:
        process.env.smile_ar_sa_dmm_catalog_category,
      dammam_english_categories_elastic:
        process.env.smile_en_sa_dmm_catalog_category,

      jeddah_arabic_categories_elastic:
        process.env.smile_ar_sa_jed_catalog_category,
      jeddah_english_categories_elastic:
        process.env.smile_en_sa_jed_catalog_category,

      riyadh_arabic_categories_elastic:
        process.env.smile_ar_sa_ruh_catalog_category,
      riyadh_english_categories_elastic:
        process.env.smile_en_sa_ruh_catalog_category,
    },
    ...nextConfig,
    rewrites,
  }
}
module.exports = withSentryConfig(
  module.exports,
  {silent: true},
  {hideSourcemaps: true}
)
