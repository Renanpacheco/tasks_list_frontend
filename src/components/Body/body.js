import * as React from "react";
//import Box from "@mui/material/Box";
//import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
//import { styled } from "@mui/material/styles";
import Card from "../Cards/card";
import Button from "@mui/material/Button";
//import Excluir from '../Modals/modal_excluir';
import Update from '../Modals/update';
// use on input value={item.name}
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
  //const [openModal, setOpenModal] = React.useState(false)
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

      {/*<div>
        <button onClick={() => setOpenModal(true)}>abrir modal</button>
      </div>

      <Excluir
        isOpenn={openModal}
        setModalClose={() => setOpenModal(!openModal)}
      >
        <p>Deseja realmente excluir essa tarefa?</p>
      </Excluir>*/}
    </Stack>
  );
}
