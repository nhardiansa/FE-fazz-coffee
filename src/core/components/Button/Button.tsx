import { Button, SxProps, Theme, ButtonProps } from "@mui/material";
import React from "react";

import { rubik } from "@/utils/fonts";

interface IButtonComponent {
  children?: React.ReactNode;
  style?: SxProps<Theme>
}

type FazzButtonType = ButtonProps & IButtonComponent

const defaultThemeButton = {
  color: "#6A4029",
  fontWeight: 500,
  bgcolor: "#FFBA33",
  ":hover": {
    bgcolor: "#edad3b",
    boxShadow:
      "0px 2px 4px -1px rgba(255, 186, 51, 0.2), 0px 4px 5px 0px rgba(255, 186, 51, 0.14), 0px 1px 10px 0px rgba(255, 186, 51, 0.12)",
  },
  boxShadow: "0px 6px 20px rgba(255, 186, 51, 0.40)",
  paddingBlock: "1.2rem",
  paddingInline: "45px",
  borderRadius: "50px",
  fontSize: "1rem",
  fontFamily: rubik.style.fontFamily,
  textTransform: "capitalize",
  marginTop: "2rem",
};

export default function FazzButton(props: FazzButtonType) {
  return (
    <Button
      fullWidth
      variant="contained"
      sx={{ ...defaultThemeButton, ...props.style }}
      {...props}
    >
      {props.children}
    </Button>
  );
}
