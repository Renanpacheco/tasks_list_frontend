import * as React from "react";
import Stack from "@mui/material/Stack";
import Card from "../Cards/card";
import Button from "@mui/material/Button";
import NewTask from '../Modals/newTask';

export default function BasicStack() {
  const [openModalForm, setOpenModalForm] = React.useState(false);
  return (
    <Stack spacing={3}>
      
      <Card />
      <Button onClick={() => setOpenModalForm(true)}>Incluir</Button>
      <NewTask
        isOpenn={openModalForm}
        setModalClose={() => setOpenModalForm(!openModalForm)}
      >
        <form>
          <div>
            <label for="name">Tarefa: </label>
            <input type="text" name="name" placeholder="Nome da tarefa"></input>
          </div>
          <div>
            <label for="cost">Custo: </label>
            <input
              type="number"
              name="cost"
              placeholder="Custo da tarefa"
            ></input>
          </div>

          <div>
            <label for="date">Tarefa: </label>
            <input
              input
              type="date"
              name="date"
              placeholder="Data limite para a tarefa"
            ></input>
          </div>
        </form>
      </NewTask>
      
    </Stack>
  );
}
