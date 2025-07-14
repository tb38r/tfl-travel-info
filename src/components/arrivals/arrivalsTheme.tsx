import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    Bakerloo: Palette["primary"];
    Central: Palette["primary"];
    Circle: Palette["primary"];
    District: Palette["primary"];
    HammersmithCity: Palette["primary"];
    Jubilee: Palette["primary"];
    Metropolitan: Palette["primary"];
    Northern: Palette["primary"];
    Piccadilly: Palette["primary"];
    Victoria: Palette["primary"];
    WaterlooCity: Palette["primary"];
  }

  interface PaletteOptions {
    Bakerloo?: PaletteOptions["primary"];
    Central?: PaletteOptions["primary"];
    Circle?: PaletteOptions["primary"];
    District?: PaletteOptions["primary"];
    HammersmithCity?: PaletteOptions["primary"];
    Jubilee?: PaletteOptions["primary"];
    Metropolitan?: PaletteOptions["primary"];
    Northern?: PaletteOptions["primary"];
    Piccadilly?: PaletteOptions["primary"];
    Victoria?: PaletteOptions["primary"];
    WaterlooCity?: PaletteOptions["primary"];
  }
}

export const ButtonsTheme = createTheme({
  palette: {
    Bakerloo: {
      main: "rgb(178, 99, 0)",
    },
    Central: {
      main: "rgb(220, 36, 31)",
    },
    Circle: {
      main: "rgb(255, 200, 10)",
    },
    District: {
      main: "rgb(0, 125, 50)",
    },
    HammersmithCity: {
      main: "rgb(245, 137, 166)",
    },
    Jubilee: {
      main: "rgb(131, 141, 147)",
    },
    Metropolitan: {
      main: "rgb(155, 0, 88)",
    },
    Northern: {
      main: "rgb(0, 0, 0)",
    },
    Piccadilly: {
      main: "rgb(0, 25, 168)",
    },
    Victoria: {
      main: "rgb(3, 155, 229)",
    },
    WaterlooCity: {
      main: "rgb(118, 208, 189)",
    },
  },
});
