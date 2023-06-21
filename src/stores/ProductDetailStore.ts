import { singleton } from "tsyringe";

import { Action, Store } from "usestore-ts";

import { apiService } from "../services/ApiService";

import { ProductDetail, nullProductDetail } from "../types";

@singleton()
@Store()
export default class ProductDetailStore {

  product: ProductDetail = nullProductDetail;

  loading = true;

  error = false;

  async fetchProduct({ productId }: {
    productId: string;
  }) {
    // 1. 로딩 시작 -> loading = true, error = false
    this.startLoading();

    try {
      // 2. apiService.fetchProduct({ productId });
      const product = await apiService.fetchProduct({ productId });

      // 3. 로딩 끝 -> loading: false, error 상태에 맞게, product 변경
      this.setProduct(product);
    } catch {
      this.setError();
    }
  }

  @Action()
  private startLoading() {
    this.product = nullProductDetail;
    this.loading = true;
    this.error = false;
  }

  @Action()
  private setProduct(product: ProductDetail) {
    this.product = product;
    this.loading = false;
    this.error = false;
  }

  @Action()
  private setError() {
    this.product = nullProductDetail;
    this.loading = false;
    this.error = true;
  }
}