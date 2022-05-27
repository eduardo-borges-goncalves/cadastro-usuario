import { faker } from "@faker-js/faker";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {DeleteButton} from "."

describe("test home page", () => {
  let text: string;
  let onClick: () => void; 

  beforeEach(jest.clearAllMocks)

  const makeSUT = (disabled = false) => {
    text = faker.lorem.word();
    onClick = jest.fn();

    return render(
      <DeleteButton 
        disabled={disabled}
        onClick={ onClick }>
          { text }
      </DeleteButton>
    )
  }

  test("button is on screen", ()=> {
    makeSUT()
    const button = screen.getByText(text)
    expect(button).toBeInTheDocument();
  })

  test("should render a text", () => {
    makeSUT()
    screen.getByText(text)
  }),

  test("Should have a callback when clicked", ()=> {
    makeSUT()
    const button = screen.getByText(text);
    button.click()
    
    expect(onClick).toHaveBeenCalled()
  })
  
  test("Should be disabled", () => {
    makeSUT(true)
    const button = screen.getByText(text);
    expect(button).toBeDisabled()
  })
})