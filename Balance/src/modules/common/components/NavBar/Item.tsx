import React, { memo, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { ItemMenuNav, LabelItem, Link, Span } from "./styles";

interface Props {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  Icon?: any;
  href?: string;
  children?: ReactNode;
  onClick: () => void;
}

const Item: React.FC<Props> = (props) => {
  return (
    <ItemMenuNav style={props.style} className={props.className} tabIndex={0}>
      <Link onClick={props.onClick} href={props.href}>
        <Span>
          {!!props.Icon && <props.Icon style={localStyle} />}
          <LabelItem>{props.children}</LabelItem>
        </Span>
      </Link>
    </ItemMenuNav>
  );
};

const localStyle: CSSProperties = {
  marginRight: "8px",
};

export default memo(Item);
