import "./App.css";
import BeerCard from "./components/BeerCard/BeerCard";
import BeerContextProvider from "./store/contexts/Beer.provider";

function App() {
  return (
    <div className="beer-container">
      <BeerContextProvider>
        <BeerCard />
      </BeerContextProvider>
    </div>
  );
}

export default App;
