import React, { useState } from "react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Excluir from "../Modals/modal_excluir";
import Update from "../Modals/update";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import axios from 'axios'

const CardList = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalForm, setOpenModalForm] = React.useState(false);
  const [cards, setCards] = useState(['']);

  const swapCards = (index1, index2) => {
    const newCards = [...cards];
    const temp = newCards[index1];
    newCards[index1] = newCards[index2];
    newCards[index2] = temp;
    setCards(newCards);
  };

  const getBackgroundColor = (cost) => {
    return cost < 1000 ? "lightblue" : "lightcoral";
  };
  axios.get("http://localhost:5000/")
    .then(function (response) {
      
      console.log(response);
      setCards(response.data);
    })
    .catch(function (error) {
      // manipula erros da requisição
      console.error(error);
    });
    
  

  return (
    <Box>
      <Box>
        {cards.map((card, index) => (
          <Grid2
            container
            key={card.order_task}
            style={{
              width: "99%",
              height: "20%",
              backgroundColor: getBackgroundColor(card.cost),
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
              borderRadius: "8px",
            }}
          >
            <Grid2 size={10}>
              {card.name}
              <Typography>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(card.cost)}
              </Typography>

              <Typography>{card.date_limit}</Typography>
            </Grid2>

            <Grid2
              size={2}
              sx={{ position: "relative", left: "200px", bottom: "50px" }}
            >
              <Button
                onClick={() => setOpenModalForm(true)}
                startIcon={<EditIcon />}
              >
                Editar
              </Button>
              <Update
                card={card}
                isOpenn={openModalForm}
                setModalClose={() => setOpenModalForm(!openModalForm)}
              ></Update>

              <Button
                onClick={() => setOpenModal(true)}
                color="error"
                startIcon={<DeleteIcon />}
              >
                Excluir
              </Button>

              <Excluir
                isOpenn={openModal}
                setModalClose={() => setOpenModal(!openModal)}
              >
                <p>Deseja realmente excluir essa tarefa?</p>
              </Excluir>

              <Button
                startIcon={<ArrowDownward />}
                onClick={() => swapCards(index, (index + 1) % cards.length)}
              >
                Down
              </Button>
              <Button
                startIcon={<ArrowUpward />}
                onClick={() => {
                  if (index > 0) {
                    swapCards(index, index - 1);
                  } else {
                    swapCards(index, cards.length - 1);
                  }
                }}
              >
                Up
              </Button>
            </Grid2>
          </Grid2>
        ))}
      </Box>
    </Box>
  );
};

export default CardList;
