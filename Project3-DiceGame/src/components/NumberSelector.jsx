import styled from "styled-components";
import { useState } from "react";

const NumberSelector = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value == selectedNumber}
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .flex {
    display: flex;
    gap: 20px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  row-gap: 10px;
  font-size: 24px;
  font-weight: 700;
  place-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
