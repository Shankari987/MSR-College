import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import QuizIcon from '@mui/icons-material/Quiz';
import LinkIcon from "@mui/icons-material/Link";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const OpenSpeed = () => {
  const theme = createTheme({
    components: {
      MuiSpeedDialIcon: {
        styleOverrides: {
          root: {
            height: "58px",
            width: "58px",
            backgroundColor: "#1ab69d",
            borderRadius: "50%",
            padding: "17px",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: "22px",
          },
        },
      },
      MuiSpeedDialAction: {
        styleOverrides: {
          staticTooltipLabel: {
            fontSize: "14px",
            whiteSpace: "nowrap",
          },
        },
      },
    },
  });

  const navigateTo = (route) => {
    window.location.href = route;
  };

  return (
    <ThemeProvider theme={theme}>
      <SpeedDial
        ariaLabel="Customized-SpeedDial"
        icon={<SpeedDialIcon />}
        sx={{
          position: "fixed",
          bottom: 80,
          right: 26,
        }}
      >
        <SpeedDialAction
          icon={<QuizIcon />}
          tooltipTitle="FAQs"
          tooltipOpen
          onClick={() => navigateTo("/contact/faq")}
        />
        <SpeedDialAction
          icon={<LinkIcon />}
          tooltipTitle="Quick Link"
          tooltipOpen
          onClick={() => navigateTo("/contact/quick-link")}
        />
      </SpeedDial>
    </ThemeProvider>
  );
};

export default OpenSpeed;
