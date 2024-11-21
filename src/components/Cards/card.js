import * as React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Container, Box, Button,Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/system";

const StyledAccordion = styled((props) => <Accordion {...props} />)(
  ({ theme, cost}) => ({
    //backgroundColor: "#ffa500",
    
    backgroundColor: cost >= 1000 ? "#ffa500" : "#ffffff",
  })
);
  //backgroundColor: cost >= 1000 ? '#ffa500' : '#ffffff',


export default function AccoordionCard({ id, name, cost, date }) {
  
  //console.log(cost);
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
            <Typography> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    cost)}</Typography>
            <Typography>{date}</Typography>
            <Box sx={{ position: "relative", left: "200px", bottom: "50px" }}>
              <Button startIcon={<EditIcon />}>Editar</Button>
              <Button color="error" startIcon={<DeleteIcon />}>
                Excluir
              </Button>
            </Box>
          </AccordionDetails>
        </StyledAccordion>
    </Container>
  );
}

