import * as React from "react";
import Stack from "@mui/material/Stack";
import Card from "../Cards/card";
import Button from "@mui/material/Button";
import Update from '../Modals/update';
//import Testando from "../Cards/testando"
//import Guardar from "../Cards/guardar2";

export default function BasicStack() {
  const [openModalForm, setOpenModalForm] = React.useState(false);
  /*const [cards, setCards] = React.useState([
    { id: "1", name: "Tarefa 1", cost: 100, date: "10/12/2024", order_task: 2 },
    { id: "2", name: "Tarefa 2", cost: 1500, date: "10/12/2024", order_task: 1 },
    { id: "3", name: "Tarefa 3", cost: 300, date: "10/12/2024", order_task: 1 },
  ]);
  const swapCards = (index1, index2) => {
    const newCards = [...cards];
    const temp = newCards[index1];
    newCards[index1] = newCards[index2];
    newCards[index2] = temp;
    setCards(newCards);
  };
  
  const cardsSorted = cards.toSorted((a, b) => a.order_task - b.order_task);*/
  return (
    <Stack spacing={3}>
      {/*{mock.map((item) => {*/}
      {/*{cardsSorted.map((item) => {
        return (
          <Card
            id={item.id}
            name={item.name}
            cost={item.cost}
            date={item.date}
            order_task={item.order_task}
          />
        );
      })}
      
      <Button onClick={() => setOpenModalForm(true)}>Incluir</Button>*/}
      {/*<Update
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
      </Update>*/}
      {/*<Testando />*/}
      <Card />
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
      </Update>
      
    </Stack>
  );
}
