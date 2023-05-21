export const ALL_SECTIONS_DATA = "AllSectionsData"

export const urls = {
	AllSectionsData:"https://v2.voucherek.com/media/json/home.json",
	productBaseUrl:`https://${process.env.algolia_appId}-dsn.algolia.net/1/indexes/${process.env.NEXT_PUBLIC_All_Cities_English_Products}/query`
}

export const headers = {
    "X-Algolia-API-Key": process.env.algolia_apiKey,
    "X-Algolia-Application-Id": process.env.algolia_appId,
    "Content-Type": "application/json",	
}