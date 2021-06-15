import { Card, Image } from "semantic-ui-react";

function FishCard({ fish, id }) {
  return (
    <Card centered>
      <Image wrapped size="medium" src={fish.image} alt="fish-image" />
      <Card.Content>
        <p>Breed: {fish.breed}</p>
        <p>Water type: {fish.watertype}</p>
        <p>Recommended tank size: {fish.tanksize} gallon</p>
        <p>Care level: {fish.carelevel}/10</p>
      </Card.Content>
    </Card>
  );
}

export default FishCard;
