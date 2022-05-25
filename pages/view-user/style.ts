import styled from "styled-components"
import { HomeContainer } from "../style"

export const ViewUserContainer = styled(HomeContainer)`
  gap: 1rem;

  h1 {
    margin-bottom: 1rem;;
  }

  span {
    font-weight: 600;
    color: #62627c;
    color: var(--text-body);
    text-transform: capitalize;
  }

  .userKey {
    color: var(--text-title);
  }
`