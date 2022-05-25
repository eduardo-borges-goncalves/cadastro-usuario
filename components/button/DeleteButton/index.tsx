import { BtnProps } from "../PrimaryBlueButton";
import { Wrapper } from "./styled";

export const DeleteButton = ({children, type, onClick, disabled}:BtnProps) => (
  <>
    <Wrapper type={type} onClick={onClick} disabled={disabled}>
      {children}
    </Wrapper>
  </>
)