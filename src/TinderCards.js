import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { db } from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  const [lastDirection, setLastDirection] = useState();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    db.collection("characters").onSnapshot((snapshot) =>
      setCharacters(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {characters.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>

      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
}

export default TinderCards;
