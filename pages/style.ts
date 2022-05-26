import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 3rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`

export const HomeSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.5rem;

  .btnNewUser {
    color: white;
    background-color: var(--primary-blue) ;
    border: none;
    padding: 0.8rem 2rem ;
    border-radius: 0.125rem;

    font-weight: 600;

    transition: all ease-in-out .2s;
  }

  .btnNewUser:hover {
    background-color: #32779e ;
  }

  input {
    width: 30vw;
    padding: 0.4rem 1rem ;
    border: 1px solid var(--primary-blue);
    border-radius: 1rem;
  
    ::placeholder{
      color: var(--secondary-blue);
      opacity: 0.8;
    }
  }
`