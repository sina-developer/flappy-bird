import './App.css';
import Canvas from './components/Canvas';
import Contexts from './contexts/Contexts';

function App() {
  return (
    <Contexts>
      <Canvas />
    </Contexts>
  );
}

export default App;
