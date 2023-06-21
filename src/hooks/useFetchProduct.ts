import { useEffect } from "react";

import useProductDetailStore from "./useProductDetailStore";
import useProductFormStore from "./useProductFormStore";

export default function useFetchProduct({ productId }: {
  productId: string;
}) {
  const [{ product, loading, error }, store] = useProductDetailStore();
  const [, productFormStore] = useProductFormStore();

  useEffect(() => {
    store.fetchProduct({ productId });
  }, [store]);

  // TODO: product 변경에 따른 setProduct 호출은 여기가 아니라 page 등에서 처리할 것!
  useEffect(() => {
    productFormStore.setProduct(product);
  }, [productFormStore, product]);

  return { loading, error };
}