import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 2000,
  height: 1200,
  padding: theme.spacing(20),
  ...theme.typography.body2,
  textAlign: "center",
}));

export default function SimplePaper() {
  return (
    <Box>
      <Paper elevation={0} />
      <Stack direction="row" spacing={2}>
        <DemoPaper variant="elevation">Email: renan_p@ymail.com</DemoPaper>
      </Stack>
    </Box>
  );
}
