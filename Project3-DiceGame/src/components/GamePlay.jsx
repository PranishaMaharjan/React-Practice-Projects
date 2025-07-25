import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import ShowRules from "./ShowRules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice(randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  const toggleRulesButton = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="buttons">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={toggleRulesButton}>
          {showRules ? "Hide" : "Show"}
        </Button>
      </div>
      {showRules && <ShowRules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 20px;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .buttons {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
