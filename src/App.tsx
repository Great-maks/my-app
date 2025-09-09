
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="App">
      

      <Card>
        <StyledBtn as="a">See more</StyledBtn>
        <StyledBtn>Save</StyledBtn>
      </Card>
    </div>
  );
}

export default App;


const StyledBtn = styled.button`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border: none;
  border-width: 1px;
  background-color: blue;
  color: white;
  border-radius: 5px;
  width: 86px;
  height: 30px;
  margin-top: 298px;
  margin-left: 20px;
`

const Card = styled.div`
  height: 350px;
  width: 300px;
  border-radius: 16px;
  border: 3px solid black;
  padding: 16px 8px;
`;