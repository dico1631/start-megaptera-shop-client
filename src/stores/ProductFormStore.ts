import { singleton } from "tsyringe";

import { Action, Store } from "usestore-ts";
import { ProductDetail, nullProductDetail } from "../types";

@singleton()
@Store()
export default class ProductFormStore {
  product: ProductDetail = nullProductDetail;
  quantity = 1;

  @Action()
  setProduct(product: ProductDetail){
    this.product = product;
  }

  @Action()
  changeQuantity(quantity: number) {
    if (quantity <= 0) {
      return;
    }
    if (quantity > 10) {
      return;
    }
    this.quantity = quantity;
  }

  // 쿠폰, 할인 등 가격 계산을 여기에 넣어서 react와 비즈니스 로직 분리
  get price() {
    return this.product.price * this.quantity;
  }
}