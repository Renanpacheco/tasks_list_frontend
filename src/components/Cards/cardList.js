import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import CardComponent from "./cardComponent";

const CardList = () => {
  const [cards, setCards] = useState([]); // save cards
  const [order, setOrder] = useState([]); // save the order of cards

  // function for change cards
  const swapCards = (index1, index2) => {
    const newCards = [...cards];
    const temp = newCards[index1];
    newCards[index1] = newCards[index2];
    newCards[index2] = temp;

    // update order in State
    setCards(newCards);

    // update the order on array 'order'
    const newOrder = newCards.map((card) => card.id);
    setOrder(newOrder);

    
    axios
      .put("http://renanpachecotodolist.xyz/api/change", { order_task: newOrder })
      .then((response) => {
        console.log("Ordem atualizada no backend");
      })
      .catch((error) => {
        console.error("Erro ao atualizar a ordem", error);
      });
  };

  // Load cards of server and sort by orderTask
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then(function (response) {
        
        const sortedCards = response.data.sort(
          (a, b) => a.orderTask - b.orderTask
        );
        setCards(sortedCards);

        // save the initial order of cards (ids)
        const initialOrder = sortedCards.map((card) => card.id);
        setOrder(initialOrder);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Box>
      {cards.map((card, index) => (
        <CardComponent
          id={card.id}
          key={index}
          index={index}
          name={card.name}
          cost={card.cost}
          dateLimit={card.dateLimit}
          swapCards={swapCards}
          lastPosition={cards.length}
        />
      ))}
    </Box>
  );
};

export default CardList;
