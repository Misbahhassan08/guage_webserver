import React from "react";
import { Box } from "@mui/material";
import { CropFree } from "@mui/icons-material";

function Header() {
  return (
    <header>
      <Box
        sx={{
          backgroundColor: "#1e1e2f",
          color: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "1rem",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Left section */}
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: 3, alignItems: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column", rowGap: 0 }}>
            <Box component="h2" sx={{ margin: 0, fontSize: "1.6rem" }}>
              IOT Dashboard
            </Box>
            <Box component="h6" sx={{ margin: 0, fontWeight: 300 }}>
              ______________Design by MEXEMAI
            </Box>
          </Box>
          <Box>
            <Box component="h3" sx={{ margin: 0 }}>
              Water Monitoring
            </Box>
          </Box>
        </Box>

        {/* Right section */}
        <Box>
          
        </Box>
      </Box>
    </header>
  );
}

export default Header;
