'use client'

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { rubik } from "../utils/fonts";

const theme = createTheme({
  typography: {
    fontFamily: [
      rubik.style.fontFamily
    ].join(',')
  },
  components: {
    MuiContainer: {
      defaultProps: {
        sx: {
          paddingInline: {
            lg: '0'
          }
        }
      }
    }
  }
});

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
