import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from 'axios'
import CardComponent from "./cardComponent";


const CardList = () => {

  const [cards, setCards] = useState([]);

  const swapCards = (index1, index2) => {
    const newCards = [...cards];
    const temp = newCards[index1];
    newCards[index1] = newCards[index2];
    newCards[index2] = temp;
    setCards(newCards);
  };

  useEffect(()=>{
    axios
      .get("http://localhost:5000/")
      .then(function (response) {
        console.log(response);
        setCards(response.data);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      });
  },[])

    
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
