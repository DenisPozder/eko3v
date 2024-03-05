import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "400", "800"] });

export const metadata = {
  title: "Eko-3V je firma sa decenijskim iskustvom u hortikulturi",
  description:
    "Eko-3V je firma čiji osnivači imaju više decenijsko iskustvo u pruzanju usluga u oblasti hortikulture. Pružamo sve vrste usluga uredjenja i održavanja...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
