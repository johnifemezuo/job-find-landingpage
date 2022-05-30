import Link from "next/link";
import React from "react";
import { StyledButton } from "./style/StyledButton";

function Button({ children, onClick }: any) {
  return (
    <Link href={`/`}>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </Link>
  );
}

export default Button;
