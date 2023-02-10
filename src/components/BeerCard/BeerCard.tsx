import { FC, useContext } from "react";
import BeerContext from "../../store/contexts/beer.context";
import BeerAction, { ActionTypes } from "../../store/types/Action";
import "./BeerCard.css";
const BeerCard: FC = () => {
  const { beer, dispatch } = useContext(BeerContext);
  const { image, rate, style, alcoholRate } = beer;
  const handlerClick = () => {
    const incrementBeerRateAction: BeerAction = {
      type: ActionTypes.ADD_INGREDIENTS,
      payload: [""],
    };
    dispatch(incrementBeerRateAction);
  };

  return (
    <>
      <h2>{style}</h2>
      <img src={image} alt={style} />
      <div className="beer-card__info">
        <span>Alcohol: {alcoholRate}</span>
        <span>Rate: {rate}</span>
        <button onClick={handlerClick}>+</button>
      </div>
    </>
  );
};

export default BeerCard;
