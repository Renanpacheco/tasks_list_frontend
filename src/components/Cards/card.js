import * as React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Container, Box, Button, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


export default function AccoordionCard({id,name, cost, date}) {
  return (
    <Container>
      <Accordion sx={{position: "relative", left: "25px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="card-content"
          id={`card-${id}`}
        >
          {name}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{cost}</Typography>
          <Typography>{date}</Typography>
          <Box sx={{ position: "relative", left: "200px", bottom: "50px" }}>
            <Button startIcon={<EditIcon />}>Editar</Button>
            <Button color="error" startIcon={<DeleteIcon />}>Excluir</Button>
          </Box>
        </AccordionDetails>
      </Accordion>
      
    </Container>
  );
}
