import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();

        console.log("Data in App:", json);
        setLoading(false);
        setData(json);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <MainContainer>
      <TopSection>
        <div className="logo">
          <img src="/logo/Foody Zone.svg" alt="logo" />
        </div>

        <div className="search">
          <input
            className="search_input"
            name="search"
            placeholder="Search Food..."
          />
        </div>
      </TopSection>

      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Launch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <SearchResult data={data} />
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div`
  background-color: #323334;
`;
const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 40px;

  .search_input {
    padding: 8px 14px;
    border: 1px solid #ff0909;
    border-radius: 5px;
    background-color: #323334;
    cursor: pointer;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
`;
