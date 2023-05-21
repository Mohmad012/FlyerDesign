import Header from './Header'
import Footer from './Footer'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { getToken } from '@/services/global'
import { CREATE_CART, IS_ACTIVE_CART, MERGE_MASKED_CART, getAllTokens } from '@/services/cart'
import { useSelector } from 'react-redux'

function Layout({ children }) {
  const { user } = useSelector(state => state.user)
  const { locale, defaultLocale } = useRouter()
  const currentLocale = locale || defaultLocale
  const prevLocale = useRef(currentLocale)

  const { handshake, quote, mage } = getAllTokens()
  console.log({ handshake, quote, mage }, user)
  // useEffect(() => {
  //   async function checkTokens() {
  //     // ====> 1- Generate handshake token
  //     if (!handshake || prevLocale.current !== currentLocale) {
  //       await getToken(currentLocale)
  //     } else {

  //       // ====> 2- Generate quote token for guest user
  //       if ((!quote || quote === 'undefined') && !mage) {
  //         await CREATE_CART().then(res => {
  //           if (res?.status === 200 && res.error === null) {
  //             Cookies.set('quote', res?.data?.quote)
  //           }
  //           console.log('1- CREATE_CART Guest user', res)
  //         })
  //       }

  //         // ====> 1- Generate quote token for auth user
  //         if(mage){
  //           const isMuskedQuote = quote?.match(/^\d+$/) === null
  //           if(isMuskedQuote){
  //             await CREATE_CART().then(res => {
  //               if (res?.status === 200 && res.error === null) {
  //                 const cartId= res?.data?.quote
  //                 MERGE_MASKED_CART(user.id).then(res =>{
  //                   console.log('MERGE_MASKED_CART', res, cartId)
  //                   Cookies.set('quote', res?.data?.data?.cart_id)
  //                 })
  //               }
  //               console.log('2- CREATE_CART Auth user', res)
  //             })
  //           }
  //         }
  //     }
  //   }

  //   checkTokens()
  // }
  // )

  useEffect(() => {
    async function checkTokens(){
        const isMasked = quote?.match(/^\d+$/) === null
      if (!handshake || prevLocale.current !== currentLocale) {
        getToken(locale)
      }else{
        if ((!quote || quote === 'undefined') && !isMasked) {
          await CREATE_CART().then(res => {
            if (res?.status === 200 && res.error === null) {
              Cookies.set('quote', res?.data?.quote)
            }
            console.log('1- CREATE_CART Guest user', res)
          })
        }
        if (mage) {

          const isMuskedQuote = quote?.match(/^\d+$/) === null
          if (isMuskedQuote) {
            await CREATE_CART().then(res => {
              if (res?.status === 200 && res.error === null) {
                const cartId = res?.data?.quote
                MERGE_MASKED_CART(user.id).then(res => {
                  console.log('MERGE_MASKED_CART', res, cartId)
                  Cookies.set('quote', res?.data?.data?.cart_id)
                })
              }
              console.log('2- CREATE_CART Auth user', res)
            })
          }
          }
      }
    }

    checkTokens()
  })


  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
