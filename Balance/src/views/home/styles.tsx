import styled from "styled-components";

export const MainGrid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-gap: 10px;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 140px 1fr;
  grid-template-areas:
    "balance qtde animation animation"
    "transactions transactions animation animation";
`;

export const BalanceArea = styled.div`
  grid-area: balance;
`;

export const BalanceQtde = styled.main`
  grid-area: qtde;
`;

export const BalanceAnimation = styled.div`
  grid-area: animation;
`;

export const BalanceTransaction = styled.div`
  grid-area: transactions;
`;
