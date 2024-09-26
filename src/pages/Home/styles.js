import styled from 'styled-components';

export const HomeWrapper = styled.div``;

export const HomeDiv = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  width: 100%;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  font-family: 'Muli', sans-serif;
  letter-spacing: 0px;
  color: #5F1478;
  text-align: left;
  opacity: 1;
  width: 100%;
  max-width: 1040px;
  padding-left: 10px;
  padding-top: 40px;
`;

export const TitleAndButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  max-width: 1040px;
  padding: 40px 10px 0 10px;
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ hasItems }) => (hasItems ? 'repeat(4, 1fr)' : 'none')};
  margin-top: 20px;

  @media (max-width: 1040px) {
    grid-template-columns: ${({ hasItems }) => (hasItems ? 'repeat(2, 1fr)' : 'none')};
  }

  @media (max-width: 768px) {
    grid-template-columns: ${({ hasItems }) => (hasItems ? 'repeat(2, 1fr)' : 'none')};
  }

  @media (max-width: 480px) {
    grid-template-columns: ${({ hasItems }) => (hasItems ? '1fr' : 'none')};
  }
`;
export const LoadMoreButton = styled.button`
  margin: 20px auto;
  display: block;
  background-color: #ff4500;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s; 
  
  &:hover {
    background-color: #e04300; 
    transform: scale(1.05); 
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  .pagination {
    display: flex;
    list-style-type: none; 
    padding: 0; 
    margin: 0;
    gap: 10px; 
  }

  .pagination li {
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 20px;
  transition: background-color 0.2s, transform 0.2s; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}


  .pagination li:hover {
    background-color: #f0f0f0;
  }

  .active {
    font-weight: bold;
    background-color: #007bff; 
    color: #d85c0f; 
  }

  .disabled {
    opacity: 0.5; 
    cursor: not-allowed;
  }
  .page-link {
  display: flex;
  align-items: center;
  justify-content: center; 
  padding: 15px 20px; 
  text-decoration: none; 
  color: inherit; 
}
`;

export const NoItemsMessage = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px; 
  font-family: 'Muli', sans-serif;
  color: #5F1478;
  text-align: center;
  width: 100%;
  max-width: 1040px;
  margin: 20px 0;
  grid-template-columns: none;
`;

export const PageIconsStyle = styled.div`
    padding: 10px;
`