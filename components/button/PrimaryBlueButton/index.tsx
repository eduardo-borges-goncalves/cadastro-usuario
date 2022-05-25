import { ReactNode } from "react";
import { ButtonWrapper } from "./styled";

export type BtnProps = {
  children?: ReactNode, 
  type?: "button" | "submit" | "reset", 
  onClick?: any
}

export const PrimaryBlueButton = ({children, onClick, type}:BtnProps) => (
  <>
  <ButtonWrapper type={type} onClick={onClick}>
    {children}
  </ButtonWrapper>
  </>
)