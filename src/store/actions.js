import { ADD_COUNTER, ADD_TO_CART } from './mutation_types';

export default {
  addCart(context, payload) {
    // state.cartList.push(payload)
    // console.log(this.cartList);
    const oldProduct = context.state.cartList.find(
      (item) => item.iid === payload.iid
    );
    if (oldProduct) {
      // oldProduct.count += 1;
      context.commit(ADD_COUNTER, oldProduct);
    } else {
      context.commit(ADD_TO_CART, payload);
    }
  },
};
