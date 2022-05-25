import styled from "styled-components";
import { HomeContainer } from "../style";

export const RegisterContainer = styled(HomeContainer)`
  padding: 5% 0 ;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .success {
    color: green;
    font-weight: 600;
    padding: 1rem;
    
    border-radius: 0.25rem;
    opacity: 0.9;
    background-color: #d8eed3dc;
    height: 3rem;
  }
  
  .hidden {
    height: 3rem;
    visibility: hidden;
  }
`