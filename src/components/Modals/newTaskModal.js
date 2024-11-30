import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
const NewTaskModal = ({ openModal, setCloseModal }) => {
  const StyledBox = styled(Box)({
    position: "absolute",
    top: "30%",
    left: "30%",
    width: "40%",
    height: "40%",
    backgroundColor: "white",
    alignContent: "center",
    justifyItems: "center",
  });

  const [nameTask, setNameTask] =useState("")
  const handleChange = (e)=> {
    setNameTask(e.target.value)
  }

  async function createTask(name, cost, dateLimit){
    console.log("createTask",name,cost,dateLimit);
    await axios
      .post("http://localhost:5000/create", {
        name: {nameTask},
        cost: cost,
        dateLimit: dateLimit,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });

  }


  return (
    <Modal open={openModal} onClose={() => setCloseModal()}>
      <StyledBox>
        <form>
          <Typography>Nova Tarefa</Typography>
          <Box>
            <label for="name">Tarefa: </label>
            <input type="text" onChange={handleChange} name="name" placeholder="Nome da tarefa" />
          </Box>
          <Box>
            <label for="cost">Custo: </label>
            <input type="number" name="cost" placeholder="Custo da tarefa" />
          </Box>
          <Box>
            <label for="date">Tarefa: </label>
            <input
              input
              type="date"
              name="date"
              placeholder="Data limite para a tarefa"
            />
          </Box>
          <Button variant="outlined" color="success" onClick={() =>{
            createTask();
            setCloseModal();
          }}>
            Salvar
          </Button>
          <Button variant="outlined" color="error" onClick={setCloseModal}>
            Cancelar
          </Button>
        </form>
      </StyledBox>
    </Modal>
  );
};

export default NewTaskModal;
