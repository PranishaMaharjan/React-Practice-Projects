import styled from "styled-components";
import { BASE_URL } from "../App";
import { Button } from "../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      {console.log(`Data:${data}`)}

      <FoodCards>
        {data?.map(({ name, text, image, price }) => (
          <FoodCard key={name}>
            <div className="food_image">
              <img src={BASE_URL + image} />
            </div>

            <div className="food_info">
              <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
              </div>

              <Button>${price.toFixed(2)}</Button>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodCardContainer>

    // <FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh-210px);
  background-size: cover;
  background-image: url("/bg.png");
  background-repeat: no-repeat;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 20px;
  max-width: 1280px;
  margin: 80px 0px;
`;

const FoodCard = styled.div`
  border: 0.66px solid;
  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    )
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );
  width: 340px;
  height: 167px;
  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(116, 191, 244, 0.0447917) 77.08%,
      rgba(78, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  border-radius: 20px;
  display: flex;
  color: #ffffff;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }

    p {
      margin-top: 4px;
      font-size: 12px;
    }

    Button {
      font-size: 12px;
      color: #ffffff;
    }
  }
`;
