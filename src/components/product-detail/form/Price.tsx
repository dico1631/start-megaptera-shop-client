import styled from "styled-components";
import useProductDetailStore from "../../../hooks/useProductDetailStore";
import useProductFormStore from "../../../hooks/useProductFormStore";
import numberFormat from "../../../utils/numberFormat";
import { useEffect } from "react";

const Container = styled.div`
  margin-block: .2rem;
`

export default function Price() {
  const [{ product }] = useProductDetailStore();
  const [{ price }, productFormStore] = useProductFormStore();

  // TODO: product 변경에 따른 setProduct 호출은 여기가 아니라 page 등에서 처리할 것!
  useEffect(() => {
    productFormStore.setProduct(product);
  }, [productFormStore, product]);

  return (
    <Container>
      {numberFormat(price)}
      원
    </Container>
  );
}