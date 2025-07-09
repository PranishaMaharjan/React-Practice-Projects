import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  min-width: 220px;
  border: 2px solid transparent;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
    transition: 0.2s ease;
  }
`;

export const OutlineButton = styled(Button)`
  color: black;
  background: white;
  border: 2px solid black;

  &:hover {
    background-color: black;
    border: 2px solid transparent;
    color: white;
  }
`;
