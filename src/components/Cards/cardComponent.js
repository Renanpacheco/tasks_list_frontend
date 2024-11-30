import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import Edit from '@mui/icons-material/Edit';
import UpdateTaskModal from '../Modals/updateTaskModal';
import DeleteTaskModal from '../Modals/deleteTaskModal';
const CardComponent = ({
  id,
  index,
  name,
  cost,
  dateLimit,
  swapCards,
  lastPosition
}) => {
   const StyledBox = styled(Box)({
    backgroundColor: cost < 1000 ? "lightblue" : "lightcoral",
  });

  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const swapCardsUp = () => {
    if (index > 0){
      swapCards(index, index-1);
    } else{
      swapCards(index, lastPosition-1)
    }
  }

  const swapCardsDown = () => {
    if(index < lastPosition-1){
      swapCards(index, (index + 1));
    }
    else{
      swapCards(index, 0);
    }
  }

  return (
    <>
      <StyledBox>
        <Grid2 container>
          <Grid2 size={10}>
            <Typography>{name}</Typography>
            <Typography>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(cost)}
            </Typography>
            <Typography>{dateLimit}</Typography>
          </Grid2>

          <Grid2 size={2}>
            <IconButton onClick={() => setOpenUpdateModal(!openUpdateModal)}>
              <Edit />
            </IconButton>
            <IconButton onClick={() => setOpenDeleteModal(!openDeleteModal)}>
              <Delete />
            </IconButton>
            <IconButton onClick={() => swapCardsDown()}>
              <ArrowDownward />
            </IconButton>
            <IconButton onClick={() => swapCardsUp()}>
              <ArrowUpward />
            </IconButton>
          </Grid2>
        </Grid2>
      </StyledBox>
      <DeleteTaskModal 
        id={id}
        openModal={openDeleteModal}
        setCloseModal={() => setOpenDeleteModal(!openDeleteModal)}
      />
      <UpdateTaskModal
        openModal={openUpdateModal}
        setCloseModal={() => setOpenUpdateModal(!openUpdateModal)}
      />
    </>
  );
}
export default CardComponent;