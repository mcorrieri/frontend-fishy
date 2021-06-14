import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

function FishCard({ fish, id }) {
  const { name, care_level } = fish;

  return (
    <Card as={Link} to={`/fish/${id}`}>
      <div>
        <p>Name: {name} </p>
        <p>Care Level: {care_level}</p>
      </div>
    </Card>
  );
}

export default FishCard;
