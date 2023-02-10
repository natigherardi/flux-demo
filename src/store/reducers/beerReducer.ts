import BeerStructure from "../../data/BeerStructure";
import BeerAction, { ActionTypes } from "../types/Action";

const beerReducer = (
  previousBeer: BeerStructure,
  action: BeerAction
): BeerStructure => {
  switch (action.type) {
    case ActionTypes.INCREMENT_RATE:
      return { ...previousBeer, rate: previousBeer.rate + 1 };
    case ActionTypes.ADD_INGREDIENTS:
      // thi
      return { ...previousBeer };
    default:
      return { ...previousBeer };
  }
};

export default beerReducer;
