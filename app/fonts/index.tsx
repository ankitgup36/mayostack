import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: [
    "400",
    "700",
    "500",
    "600",
    "100",
    "200",
    "300",
    "500",
    "800",
    "900",
  ],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});
