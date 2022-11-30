import styled from "styled-components";

interface CustomContainerProps {
  maxWidth?: string;
}

export const CustomContainer = styled.div<CustomContainerProps>`
  width: 90%;
  max-width: ${(p) => p.maxWidth};
  margin-right: auto;
  margin-left: auto;
`;
