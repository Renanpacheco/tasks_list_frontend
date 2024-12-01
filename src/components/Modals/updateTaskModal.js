import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
const UpdateTaskModal = ({ openModal, setCloseModal, id}) => {
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


  async function updateTask(id,name, cost, dateLimit) {
    
    await axios
      .put(`http://localhost:5000/update/${id}`, {
        name: name,
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
          <Typography>{`Editar Tarefa ${id}`}</Typography>
          <Box>
            <input
              id="nt"
              type="text"
              
              name="name"
              placeholder="Nome da tarefa"
            />
          </Box>
          <Box>
            <input
              id="ct"
              type="number"
              
              name="cost"
              placeholder="Custo da tarefa"
            />
          </Box>
          <Box>
            <label for="dateLimit">Data limite: </label>
            <input
              id="dt"
              type="date"
              
              name="date"
              placeholder="Data limite para a tarefa"
            />
          </Box>
          <Button
            variant="outlined"
            color="success"
            onClick={() => {
              const name = document.getElementById("nt").value;
              const cost = document.getElementById("ct").value;
              const dateLimit = document.getElementById("dt").value;
              updateTask(id, name, cost, dateLimit);
              setCloseModal();
            }}
          >
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

export default UpdateTaskModal;
