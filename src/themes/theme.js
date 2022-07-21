import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E50913",
    },
    secondary: {
      main: blue[400],
    },
  },
});

export default theme;
