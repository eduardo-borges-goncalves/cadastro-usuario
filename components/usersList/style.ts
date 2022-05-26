import styled from "styled-components";

export const UserListTable = styled.table`
  thead {
    background-color: var(--shapped);
  }
  
  th, td {
    font-weight: 700;
    padding: 0.5rem;
    color: var(--text-title);
  }

  td{
    font-weight: bold;
    color:rgb(69, 91, 114);
    text-transform: capitalize;
  }
   
  tbody {
    tr {
      transition: all ease-in-out .1s;
      
      :hover {
        background-color: rgb(192, 203, 214, 0.3);
        cursor: pointer;
      }
    }
  }
`