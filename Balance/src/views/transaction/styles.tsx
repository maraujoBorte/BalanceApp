import styled from "styled-components";

export const MainGrid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-gap: 10px;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 140px 1fr;
  grid-template-areas:
    "transactions  animation"
    "transactions  animation";
`;

export const BalanceAnimation = styled.div`
  grid-area: animation;
`;

export const BalanceTransaction = styled.div`
  grid-area: transactions;
`;


