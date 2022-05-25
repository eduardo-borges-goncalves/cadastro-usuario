import { BtnProps } from "../PrimaryBlueButton";
import { Wrapper } from "./styled";

export const GrayButton = ({children, type, onClick, disabled}:BtnProps) => (
  <>
    <Wrapper type={type} onClick={onClick} disabled={disabled}>
      {children}
    </Wrapper>
  </>
)