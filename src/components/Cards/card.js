import * as React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Container, Box, Button,Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/system";
import Excluir from "../Modals/modal_excluir";
import Update from "../Modals/update";

const StyledAccordion = styled((props) => <Accordion {...props} />)(
  ({cost}) => ({
    
    backgroundColor: cost >= 1000 ? "#ffa500" : "#ffffff",
  })
);



export default function AccoordionCard({ id, name, cost, date, task_order }) {
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalForm, setOpenModalForm] = React.useState(false);
  
  return (
    <Container>
      <StyledAccordion cost={cost} sx={{ position: "relative", left: "25px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="card-content"
          id={`card-${id}`}
          
        >
          {name}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {" "}
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(cost)}
          </Typography>
          <Typography>{date}</Typography>
          <Box sx={{ position: "relative", left: "200px", bottom: "50px"}}>
            
            <Button
              onClick={() => setOpenModalForm(true)}
              startIcon={<EditIcon />}
            >
              Editar
            </Button>
            <Update
              isOpenn={openModalForm}
              setModalClose={() => setOpenModalForm(!openModalForm)}
            >
              <form>
                <div>
                  <label for="name">Tarefa: </label>
                  <input type="text" name="name" placeholder={name}></input>
                </div>
                <div>
                  <label for="cost">Custo: </label>
                  <input type="number" name="cost" placeholder={cost}></input>
                </div>

                <div>
                  <label for="date">Tarefa: </label>
                  <input
                    input
                    type="date"
                    name="date"
                    placeholder={date}
                  ></input>
                </div>
              </form>
            </Update>

            <Button
              onClick={() => setOpenModal(true)}
              color="error"
              startIcon={<DeleteIcon />}
            >
              Excluir
            </Button>

            <Excluir
              isOpenn={openModal}
              setModalClose={() => setOpenModal(!openModal)}
            >
              <p>Deseja realmente excluir essa tarefa?</p>
            </Excluir>
          </Box>
        </AccordionDetails>
      </StyledAccordion>
    </Container>
  );
}

