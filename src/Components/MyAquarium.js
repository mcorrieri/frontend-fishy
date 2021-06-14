import FishCard from "./FishCard";

function MyAquarium({ loggedInUser }) {
  let fishCards = loggedInUser.fish.map((fish) => {
    return;
    <FishCard key={fish.id} fish={fish} id={fish.id} />;
  });

  return <ul>{fishCards}</ul>;
}

export default MyAquarium;
