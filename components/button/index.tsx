import { ReactNode } from "react";
import { ButtonWrapper } from "./styled";

type BtnProps = {
  children: ReactNode, 
  type: string, 
}

export const PrimaryBlueButton = ({children}:BtnProps) => (
  <ButtonWrapper>
    {children}
  </ButtonWrapper>
)