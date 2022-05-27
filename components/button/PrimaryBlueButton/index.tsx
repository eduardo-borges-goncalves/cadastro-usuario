import { ReactNode } from "react";
import { ButtonWrapper } from "./styled";

export type BtnProps = {
  children?: ReactNode, 
  type?: "button" | "submit" | "reset", 
  onClick?: any, 
  disabled?: boolean, 
}

export const PrimaryBlueButton = ({children, onClick, type, disabled}:BtnProps) => (
  <>
  <ButtonWrapper type={type} onClick={onClick} disabled={disabled} >
    {children}
  </ButtonWrapper>
  </>
)