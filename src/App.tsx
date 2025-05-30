import { MeasuringProvider } from "./shared/context";
import InputForm from "./features/MeasuringForm";
import ResultView from "./features/ResultView";

function App() {
  return (
    <MeasuringProvider>
      <InputForm/>
      <ResultView />
    </MeasuringProvider>
  );
}

export default App;
