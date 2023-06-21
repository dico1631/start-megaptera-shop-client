import styled from "styled-components";

import Images from "./Images";
import Description from "./Description";

import AddToCartForm from "./form/AddToCartForm";

import useProductDetailStore from "../../hooks/useProductDetailStore";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  aside {
    width: 38%;
  }

  article {
    width: 60%;
  }
`;

export default function ProductDetailView() {
  // 1. store에서 상품 정보 얻기
  const [{ product }] = useProductDetailStore();

  // 2. 보여주기
  return (
    <Container>
      <aside>
        <Images images={product.images} />
      </aside>
      <article>
        <h2>{product.name}</h2>
        <AddToCartForm />
        <Description value={product.description} />
      </article>
    </Container>
  );
}