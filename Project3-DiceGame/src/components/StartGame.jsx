import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <img src="/images/dices 1.png" />
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
  }

  .content h1 {
    font-size: 96px;
    margin: 10px 0;
  }
`;

const Button = styled.button`
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
