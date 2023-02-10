import { FC, useReducer } from "react";
import beerReducer from "../reducers/beerReducer";
import BeerContext from "./beer.context";
import beers from "../../data/beers";

const ipaBeer = beers[0];
interface BeerContextProviderProps {
  children: JSX.Element;
}
const BeerContextProvider: FC<BeerContextProviderProps> = ({ children }) => {
  const [beer, dispatch] = useReducer(beerReducer, ipaBeer);
  return (
    <BeerContext.Provider value={{ beer, dispatch }}>
      {children}
    </BeerContext.Provider>
  );
};

export default BeerContextProvider;
