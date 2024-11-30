import React, {useState} from "react";
import CardList from "../Cards/cardList";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add";
import NewTaskModal from "../Modals/newTaskModal";

export default function BasicStack() {
    const [openNewTaskModal, setOpenNewTaskModal] = useState(false);

    const setCloseModal = () => {
      setOpenNewTaskModal(!openNewTaskModal);
    };
  return (
    <Box spacing={3}>
      <CardList />
      <IconButton size="large" onClick={() => setCloseModal()}>
        <Add />
      </IconButton>
      <NewTaskModal
        openModal={openNewTaskModal}
        setCloseModal={setCloseModal}
      />
    </Box>
  );
}
