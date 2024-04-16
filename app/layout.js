import { Inter } from "next/font/google";
import Fotter from "./Components/Fotter";
import Navbar from "./Components/Navbar";
import { Darkmode } from "./Context/Darkmode";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieDB",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Darkmode>
          <Navbar />
          <div>{children}</div>
          <div id="modal-root-content"></div>
          <Fotter />
        </Darkmode>
      </body>
    </html>
  );
}
