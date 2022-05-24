import styled from "styled-components"

export const NavigationHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10vw;
  
  background-color: var(--primary-black);
  box-shadow: 1px 2px 6px 2px rgb(0,0,0,0.2);
  color: #efefef;

  height: 6vh;
  padding: 2vw;

  font-weight: 600;
  font-size: 0.8rem;

  nav{
    display: flex;
    align-items: center;
    gap: 1.5vw;
    
    a{
      transition: all ease-in-out 0.2s;

      :hover{
        color: rgb(252, 252, 252, 0.8)
      }
    }
  }
`
