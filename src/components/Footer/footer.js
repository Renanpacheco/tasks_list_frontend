import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Email from "@mui/icons-material/Email";

// style of paper
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "100%", // fix width
  height: "100%",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

export default function SimplePaper() {
  return (
    <Box sx={{ marginTop: 5 }}>
      <DemoPaper variant="elevation">
        <Typography>©2024 - Renan Bitencourt Pacheco</Typography>
        <IconButton
          component="a"
          href="mailto:renan_p@ymail.com"
          target="_blank"
          aria-label="Email"
        >
          <Email />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/renan-pacheco-4b920274/"
          target="_blank"
          aria-label="LinkedIn"
          sx={{ color: "#0A66C2", marginRight: 2 }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/Renanpacheco" 
          target="_blank"
          aria-label="GitHub"
          sx={{ color: "#181717" }}
        >
          <GitHubIcon />
        </IconButton>
      </DemoPaper>
    </Box>
  );
}
