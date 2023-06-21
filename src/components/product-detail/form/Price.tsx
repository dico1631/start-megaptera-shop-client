import styled from "styled-components";
import numberFormat from "../../../utils/numberFormat";
import useProductFormStore from "../../../hooks/useProductFormStore";

const Container = styled.div`
  margin-block: .2rem;
`

export default function Price() {
  const [, productFormStore] = useProductFormStore();

  return (
    <Container>
      {numberFormat(productFormStore.price)}
      원
    </Container>
  );
}