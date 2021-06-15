import { Card } from "semantic-ui-react";
import FishCard from "./FishCard";

function MyAquarium({ loggedInUser }) {
  let fishCards = loggedInUser.fish.map((fish) => {
    return <FishCard key={fish.id} fish={fish} id={fish.id} />;
  });

  return <Card.Group>{fishCards}</Card.Group>;
}

export default MyAquarium;
