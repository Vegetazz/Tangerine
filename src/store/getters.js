export default {
  getCartLength(state) {
    return state.cartList.length
  },
  getCartGoods(state) {
    return state.cartList
  }
}