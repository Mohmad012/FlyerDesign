const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: 'ar-SA',
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
    locales: [
      'ar-SA',
      'ar-SA-dmm',
      'ar-SA-jed',
      'ar-SA-ruh',
      'en-SA',
      'en-SA-dmm',
      'en-SA-jed',
      'en-SA-ruh'
    ],
  },

  localePath: path.resolve("./public/locales"),
};