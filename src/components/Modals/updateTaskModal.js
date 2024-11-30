import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const UpdateTaskModal = ({ openModal, setCloseModal }) => {
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

  return (
    <Modal open={openModal} onClose={() => setCloseModal()}>
      <StyledBox>
        <form>
          <Typography>Editar Tarefa</Typography>
          <Box>
            <label for="name">Tarefa: </label>
            <input type="text" name="name" placeholder="Nome da tarefa" />
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
          <Button variant="outlined" color="success" onClick={setCloseModal}>
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
