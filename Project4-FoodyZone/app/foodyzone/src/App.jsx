import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  console.log(data);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue);
  };

  const filterFood = (type) => {
    if (type == "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <MainContainer>
      <TopSection>
        <div className="logo">
          <img src="/logo/Foody Zone.svg" alt="logo" />
        </div>

        <div className="search">
          <input
            onChange={searchFood}
            className="search_input"
            name="search"
            placeholder="Search Food..."
          />
        </div>
      </TopSection>

      <FilterContainer>
        <Button onClick={() => filterFood("all")}>All</Button>
        <Button onClick={() => filterFood("breakfast")}>Breakfast</Button>
        <Button onClick={() => filterFood("launch")}>Launch</Button>
        <Button onClick={() => filterFood("dinner")}>Dinner</Button>
      </FilterContainer>

      <SearchResult data={filteredData} />
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
