import './App.css';

import ProblemDescription from 'Pages/Description/ProblemDescription';
import NavBar from 'Components/NavBar/NavBar';
import SampleProblem1 from './Constants/SampleProblem1';

function App() {
  
  const markdown = SampleProblem1.problemStatement;
  return (
    <>
      <NavBar/>
      <ProblemDescription description={markdown}></ProblemDescription>
    </>
  );
}

export default App;
