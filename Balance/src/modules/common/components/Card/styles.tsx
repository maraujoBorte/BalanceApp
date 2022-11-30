import styled, { css } from "styled-components";

interface PropsCardStruct {
  border?: "none" | "block";
  backgroundColor?: string;
}

export const CardStruct = styled.div<PropsCardStruct>`
  ${(p) =>
    p.border === "block" &&
    css`
      border-radius: 4px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 63, 68, 0.1);
    `}
  background-color: ${(p) => p.backgroundColor};
  margin-bottom: 30px;
  width: 100%;
`;

export const PatternPadding = styled.div`
  padding: 16px;
`;

export const Category = styled.p`
  margin: 0px;

  label {
    font-weight: 300;
    color: #9a9a9a;
    margin: 0px;
    opacity: 0.9;
    i {
      font-size: 1.6rem;
    }
  }
`;
