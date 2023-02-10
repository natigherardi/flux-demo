import { createContext, Dispatch } from "react";
import BeerStructure from "../../data/BeerStructure";
import BeerAction from "../types/Action";

interface BeerContextStructure {
  beer: BeerStructure;
  dispatch: Dispatch<BeerAction>;
}

const BeerContext = createContext<BeerContextStructure>({
  beer: {
    style: "IPA",
    alcoholRate: 0,
    image: "",
    rate: 10,
    isSelected: false,
  },
  dispatch: () => {},
});

export default BeerContext;
