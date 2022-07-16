import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    orange: {
      "100": "#FFA585",
      "500": "#F25D27",
    },
    gray: {
      "100": "#F5F8FA",
      "200": "#DCE2E6",
      "300": "#A0ACB3",
      "500": "#617480",
    },
    blue: {
      "500": "#115D8C",
      "700": "#123952",
    },
    red: {
      "500": "#DE3838",
    },
    green: {
      "100": "#DCF5DD",
      "500": "#51B853",
    },
    yellow: {
      "200": "#EFB866",
    },
  },

  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.500",
      },
    },

    fonts: {
      heading: "Barlow",
      body: "Barlow",
    },
  },
});
