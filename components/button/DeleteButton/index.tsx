import { BtnProps } from "../PrimaryBlueButton";
import { Wrapper } from "./styled";

export const DeleteButton = ({children, type, onClick}:BtnProps) => (
  <>
    <Wrapper type={type} onClick={onClick}>
      {children}
    </Wrapper>
  </>
)