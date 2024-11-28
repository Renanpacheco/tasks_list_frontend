import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
//import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
//import { styled } from "@mui/system";
import Excluir from "../Modals/modal_excluir";
import Update from "../Modals/update";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const CardList = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalForm, setOpenModalForm] = React.useState(false);
  const [cards, setCards] = useState([
    { id: "1", name: "Tarefa 1", cost: 100, date: "10/12/2024", order_task: 2 },
    { id: "2", name: "Tarefa 2", cost: 1500, date: "10/12/2024",
      order_task: 1,
    },
    { id: "3", name: "Tarefa 3", cost: 300, date: "10/12/2024", order_task: 0 },
  ]);

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

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            style={{
              width: "50%",
              height: "50%",
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
            {card.name}
            <br />
            <Typography>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(card.cost)}
            </Typography>

            <Typography>{card.date}</Typography>

            <Box sx={{ position: "relative", left: "200px", bottom: "50px" }}>
              <Button
                onClick={() => setOpenModalForm(true)}
                startIcon={<EditIcon />}
              >
                Editar
              </Button>
              <Update
                isOpenn={openModalForm}
                setModalClose={() => setOpenModalForm(!openModalForm)}
              >
                <form>
                  <div>
                    <label for="name">Tarefa: </label>
                    <input
                      type="text"
                      name="name"
                      placeholder={card.name}
                    ></input>
                  </div>
                  <div>
                    <label for="cost">Custo: </label>
                    <input
                      type="number"
                      name="cost"
                      placeholder={card.cost}
                    ></input>
                  </div>

                  <div>
                    <label for="date">Tarefa: </label>
                    <input
                      input
                      type="date"
                      name="date"
                      placeholder={card.date}
                    ></input>
                  </div>
                </form>
              </Update>

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
            </Box>

            {/* Botões para trocar */}
            <Box>
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
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
