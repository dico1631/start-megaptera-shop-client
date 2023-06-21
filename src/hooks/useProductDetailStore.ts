import { useStore } from "usestore-ts";
import { container } from "tsyringe";

import ProductDetailStore from "../stores/ProductDetailStore";

export default function useProductDetailStore() {
  const store = container.resolve(ProductDetailStore);
  return useStore(store);
}