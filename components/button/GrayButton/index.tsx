import { BtnProps } from "../PrimaryBlueButton";
import { Wrapper } from "./styled";

export const GrayButton = ({children, type, onClick}:BtnProps) => (
  <>
    <Wrapper type={type} onClick={onClick}>
      {children}
    </Wrapper>
  </>
)