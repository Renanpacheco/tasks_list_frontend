import * as React from "react";
import Stack from "@mui/material/Stack";
import Card from "../Cards/card";
import Button from "@mui/material/Button";
import Update from '../Modals/update';
//import SwapCards from "../Cards/testando"

const mock = [
  {
    id: 1,
    name: "Tarefa 1",
    cost: 100.10,
    date: "10/12/2024",
  },
  {
    id: 2,
    name: "Tarefa 2",
    cost: 1500,
    date: "10/12/2024",
  },
  {
    id: 3,
    name: "Tarefa 1",
    cost: 100,
    date: "10/12/2024",
  },
];



export default function BasicStack() {
  const [openModalForm, setOpenModalForm] = React.useState(false);
  
  return (
    <Stack spacing={3}>
      {mock.map((item) => {
        
        return (
          <Card
            id={item.id}
            name={item.name}
            cost={item.cost}
            date={item.date}
          />
        );
      })}
      <Button onClick={() => setOpenModalForm(true)}>Incluir</Button>
      <Update
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
            <input type="number" name="cost" placeholder="Custo da tarefa"></input>
          </div>
          
          <div>
            <label for="date">Tarefa: </label>
            <input input type="date" name="date" placeholder="Data limite para a tarefa"></input>
          </div>

        </form>
      </Update>
    </Stack>
    
  );
}
