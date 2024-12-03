import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

const DeleteTaskModal = ({ openModal, setCloseModal, id }) => {
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
  

  async function deleteTask(id){
    console.log("delete", id);
    axios({
      method: "delete",
      url: `http://renanpachecotodolist.xyz/api/remove/${id}`,
      
    }).then(function(response){
      console.log(response)
      
    }).catch(function(error){
      console.log(error)
    });

    }

  

  return (
    <Modal open={openModal} onClose={() => setCloseModal()}>
      <StyledBox>
        <Typography>{`Excluir Tarefa ${id}`}</Typography>
        <Box>
          <Typography>Tem certeza que deseja Excluir?</Typography>
        </Box>
        <Button
          variant="outlined"
          color="success"
          onClick={() => {
            deleteTask(id);
            setCloseModal();
          }}
        >
          Sim 
        </Button>
        <Button variant="outlined" color="error" onClick={setCloseModal}>
          Não
        </Button>
      </StyledBox>
    </Modal>
  );
};

export default DeleteTaskModal;
