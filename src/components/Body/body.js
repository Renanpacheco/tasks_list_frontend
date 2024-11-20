import * as React from "react";
//import Box from "@mui/material/Box";
//import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
//import { styled } from "@mui/material/styles";
import Card from "../Cards/card";
import Button from "@mui/material/Button";

/*const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));*/

const mock = [
  {
    id: 1,
    name: "Tarefa 1",
    cost: "R$100,00",
    date: "10/12/2024",
  },
  {
    id: 2,
    name: "Tarefa 2",
    cost: "R$1500,00",
    date: "10/12/2024",
  },
  {
    id: 3,
    name: "Tarefa 1",
    cost: "R$100,00",
    date: "10/12/2024",
  },
];

export default function BasicStack() {
  return (
      <Stack spacing={3}>
        {mock.map((item) => {
            return <Card id={item.id} name={item.name} cost={item.cost} date={item.date}/>
        })}
        <Button>Incluir</Button>

      </Stack>
  );
}
