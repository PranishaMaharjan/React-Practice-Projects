import styled from "styled-components";
import { Button } from "../styled/Button";

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
