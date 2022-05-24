import { ReactNode } from "react";
import { ButtonWrapper } from "./styled";

export type BtnProps = {
  children?: ReactNode, 
  type?: string, 
  onClick?: any
}

export const PrimaryBlueButton = ({children, onClick}:BtnProps) => (
  <>
  <ButtonWrapper onClick={onClick}>
    {children}
  </ButtonWrapper>
  </>
)