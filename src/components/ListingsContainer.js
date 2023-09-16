import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchInput}) {
  const [gregCards, setGregCards] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then((r) => r.json())
    .then((r) => setGregCards(r))
  }, []);


  console.log(gregCards)
  
  if (!gregCards){
    return <p>Loading...</p>
  }

  const searchedData = gregCards.filter((card) => (
    card.description.toLowerCase().includes(searchInput.toLowerCase())
  ))

  function deleteCard(id){
      const filteredCards = gregCards.filter((card) => card.id != id)
      setGregCards(filteredCards)
  }

  console.log("searchedData", searchedData)
  console.log("searchInput", searchInput)

  return (
    <main>
      <ul className="cards">
        {searchedData.map((card) => (
          <ListingCard key={card.id}
          card={card} deleteCard={deleteCard}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
