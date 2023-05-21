import { deleteItemFromCart, updateProductQuantity } from "@/lib/redux/slices/cart"
import { APPLY_COUPON, DELETE_CART_ITEM, DELETE_COUPON, updateCartItem } from "@/services/cart"
import Cookies from "js-cookie"
import { toast } from "react-toastify"

export const handleDeleteItem = (itemId) => {
  DELETE_CART_ITEM(itemId).then(() => {
    deleteItemFromCart(itemId)
    toast.success('Item deleted successfully')
  })
}

export const handleUpdateItem = (queryClient, itemId, qty) => {
    updateCartItem(itemId, qty).then((data) => {
      console.log(data)
      updateProductQuantity(itemId, qty)
    queryClient.invalidateQueries({queryKey:['cart']})
      toast.success('Item Updated successfully')
  })
}

export const handleApplyCoupon = (queryClient, couponCode ) => {
  APPLY_COUPON(couponCode).then((res) => {
    console.log('applyCoupon', res)
    if(res.status === 200) {
      // Cookies.set('coupon', JSON.stringify(res))
      queryClient.invalidateQueries({queryKey:['cart']})
    }
  })
}
export const handleDeleteCoupon = (queryClient, couponCode ) => {
  DELETE_COUPON(couponCode).then(() => {
    queryClient.invalidateQueries({queryKey:['cart']})
    Cookies.remove('coupon')
  })
}