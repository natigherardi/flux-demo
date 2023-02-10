export enum ActionTypes {
  INCREMENT_RATE = "incrementRate",
  ADD_INGREDIENT = "addIngredient",
  ADD_INGREDIENTS = "addIngredients",
}

type BeerAction =
  | { type: ActionTypes.INCREMENT_RATE }
  | { type: ActionTypes.ADD_INGREDIENT; payload: string }
  | { type: ActionTypes.ADD_INGREDIENTS; payload: string[] };

export default BeerAction;
