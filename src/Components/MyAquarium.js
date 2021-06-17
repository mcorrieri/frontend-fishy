import { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import FishCard from "./FishCard";

function MyAquarium({ loggedInUser }) {
  const [userFishes, setUserFishes] = useState([]);

  useEffect(() => {
    if (loggedInUser) {
      fetch(`http://localhost:3000/users/${loggedInUser.id}/fish`, {
        method: "GET",
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserFishes(data);
        });
    }
  }, []);

  let fishCards = userFishes.map((fish) => {
    return <FishCard key={fish.id} fish={fish} id={fish.id} />;
  });

  return <Card.Group>{fishCards}</Card.Group>;
}

export default MyAquarium;
