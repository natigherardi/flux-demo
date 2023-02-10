import BeerStructure from "./BeerStructure";

const beers: BeerStructure[] = [
  {
    style: "IPA",
    alcoholRate: 6,
    rate: 6,
    image: "images/ipa.jpeg",
    isSelected: false,
  },
  {
    style: "Honey",
    alcoholRate: 4,
    rate: 5,
    image: "images/honey.jpeg",
    isSelected: false,
  },
  {
    style: "Guiness",
    alcoholRate: 9,
    rate: 10,
    image: "images/guiness.jpg",
    isSelected: true,
  },
];

export default beers;
