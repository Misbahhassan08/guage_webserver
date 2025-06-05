import React from "react";
import Dashboard from "./dashboard/dashboard";
import AppHeader from "./dashboard/header"
import { Box, Typography } from "@mui/material";

function App() {
  return (
          <Box sx={{justifyContent:"center",}} >
        <AppHeader />
       <Box width='98%'>
          <Dashboard />
        </Box>
      
      </Box>
  );
}

export default App;
