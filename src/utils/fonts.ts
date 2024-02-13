import { Poppins, Rubik } from "next/font/google";

export const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["900", "700", "400"],
});
