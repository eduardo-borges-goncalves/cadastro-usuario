import styled from "styled-components";
import { HomeContainer } from "./home-style";

export const RegisterContainer = styled(HomeContainer)`
  padding: 5% 0 ;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .success {
    display: flex; 
    align-items: center;
    color: green;
    font-weight: 600;
    padding: 1rem;
    
    border-radius: 0.25rem;
    opacity: 0.9;
    background-color: #d8eed3dc;
    height: 3rem;
  }

  .erro {
    display: flex; 
    align-items: center;
    color: red; 
    font-weight: 600;
    padding: 1rem;
    
    border-radius: 0.25rem;
    border: 1px solid var(--primary-red);
    opacity: 0.8;
    background-color: rgb(255, 181, 181);
    height: 3rem;
  }
  
  .hidden {
    height: 3rem;
    visibility: hidden;
  }
`