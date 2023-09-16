import React, {useState} from "react";

function ListingCard({card, deleteCard}) {
  const [favorite, setFavorite] = useState(false)

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${card.id}`, {
      method: 'DELETE',
    })
    .then((r) => r.json())
    .then((r) => deleteCard(card.id))
  }
  
  function handleFavorite(){
    setFavorite(!favorite)
    console.log("hi")
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={card.image} alt={card.description} />
      </div>
      <div className="details">
        <button className={favorite ? "emoji-button favorite active" : "emoji-button favorite"}
        onClick={handleFavorite}>
          {favorite ? "★" : "☆"}
        </button>
        {/* {true ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )} */}
        <strong>{card.description}</strong>
        <span> · {card.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
