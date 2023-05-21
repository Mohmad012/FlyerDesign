export const getCurrentIndex = locale => {
  const localeToLowerCase = locale.toLowerCase()
  let currentIndex = process.env.NEXT_PUBLIC_All_Cities_Arabic_Products
  switch (localeToLowerCase) {
    case 'ar-sa' || 'ar-SA':
      currentIndex = process.env.NEXT_PUBLIC_All_Cities_Arabic_Products
      break
    case 'en-sa' || 'en-SA':
      currentIndex = process.env.NEXT_PUBLIC_All_Cities_English_Products
      break

    case 'ar-sa-ruh' || 'ar-SA-ruh':
      currentIndex = process.env.NEXT_PUBLIC_Riyadh_Arabic_Products
      break
    case 'en-sa-ruh' || 'en-SA-ruh':
      currentIndex = process.env.NEXT_PUBLIC_Riyadh_English_Products
      break

    case 'ar-SA-dmm' || 'ar-SA-dmm':
      currentIndex = process.env.NEXT_PUBLIC_Dammam_Arabic_Products
      break
    case 'ar-SA-dmm' || 'ar-SA-dmm':
      currentIndex = process.env.NEXT_PUBLIC_Dammam_English_Products
      break

    case 'ar-sa-jed' || 'ar-SA-jed':
      currentIndex = process.env.NEXT_PUBLIC_Jeddah_Arabic_Products
      break
    case 'en-sa-jed' || 'en-SA-jed':
      currentIndex = process.env.NEXT_PUBLIC_Jeddah_English_Products
      break

    default:
      currentIndex = process.env.NEXT_PUBLIC_All_Cities_Arabic_Products
  }
  return currentIndex
}
