import styled from "styled-components";

const ShowRules = () => {
  return (
    <RulesContainer>
      <div className="rules">
        <h3>How to play dice game</h3>
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
          </li>
          <li>if you get wrong guess then 2 point will be dedcuted</li>
        </ul>
      </div>
    </RulesContainer>
  );
};

const RulesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  .rules {
    background-color: #fbf1f1;
    max-width: 790px;
    padding: 10px 8px;
  }

  h3 {
    font-size: 24px;
    padding: 0 40px;
  }

  ul {
    padding: 0 40px;

    li {
      list-style: none;
    }
  }
`;

export default ShowRules;
