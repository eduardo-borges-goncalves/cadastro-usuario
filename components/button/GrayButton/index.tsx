import { BtnProps } from "../PrimaryBlueButton";
import { Wrapper } from "./styled";

export const GrayButton = ({children}:BtnProps) => (
  <div>
    <Wrapper>
      {children}
    </Wrapper>
  </div>
)