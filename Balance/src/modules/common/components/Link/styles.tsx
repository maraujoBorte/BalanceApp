import styled from "styled-components";

interface LinkStyleProps {
  color?: string;
}

export const LinkStyle = styled.a<LinkStyleProps>`
  color: ${(p) => p.color};
  width: 100%;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
  justify-content: flex-start;
  line-height: 1.75;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  user-select: none;
`;
