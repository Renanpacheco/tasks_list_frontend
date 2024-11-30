import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import CardComponent from "./cardComponent";

const CardList = () => {
  const [cards, setCards] = useState([]); // Armazena os cards
  const [order, setOrder] = useState([]); // Armazena a ordem dos cards

  // Função para trocar os cards
  const swapCards = (index1, index2) => {
    const newCards = [...cards];
    const temp = newCards[index1];
    newCards[index1] = newCards[index2];
    newCards[index2] = temp;

    // Atualiza a ordem no estado
    setCards(newCards);

    // Atualiza a ordem no array 'order' (apenas os ids, por exemplo)
    const newOrder = newCards.map((card) => card.id);
    setOrder(newOrder);

    // Aqui você pode enviar a nova ordem para o backend (opcional)
    axios
      .put("http://localhost:5000/change", { order_task: newOrder })
      .then((response) => {
        console.log("Ordem atualizada no backend");
      })
      .catch((error) => {
        console.error("Erro ao atualizar a ordem", error);
      });
  };

  // Carregar os cards do servidor e ordená-los pelo campo orderTask
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then(function (response) {
        // Ordena os cards com base no campo orderTask
        const sortedCards = response.data.sort(
          (a, b) => a.orderTask - b.orderTask
        );
        setCards(sortedCards);

        // Armazena a ordem inicial dos cards (ids)
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
