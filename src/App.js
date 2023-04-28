import Dropdowns from './Dropdowns'
import DraggableArea from './DraggableArea';
import { ContextProvider } from './context';

function App() {
  return (
    <ContextProvider>
      <div>
        <Dropdowns />
        <DraggableArea />
      </div>
    </ContextProvider>
  );
}

export default App;
