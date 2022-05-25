import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  width: 800px;
  max-width: 100%;

  fieldset{
    border: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1%;
  }

  .f-2 {
    input {
      width: 32.66%;
    }      
  }

  .f-3{
    padding: 0.6rem;

    div {
      margin-left: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .f-4 {
    input {
      width: 49.5%;
    }      
  }

  input {
    padding: 0.5rem;
    border: 1px solid var(--shapped);
  }

  .i-1 {
    width:70%;
  }

  .i-2 {
    width: 29%;
  }

  .i-6 {
    width: 50%;
  }


  .buttons {
    margin-top: 18vh;
    margin-right: 2rem;
    align-self: center;
    align-self: flex-end;
    display: flex;
    gap: 0.5rem;
  }

  .success {
    color: green;
    font-weight: 600;
    margin-top: 4rem;
    padding: 1rem;
    
    border-radius: 0.5rem;
    opacity: 0.9;
    background-color: #d8eed3dc;
  }
`