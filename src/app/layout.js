import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import siteStyle from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Costumed Camels",
  description: "Cute Camels in Costume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav></Nav>
        <section className={siteStyle.siteHolder}>{children}</section>
      </body>
    </html>
  );
}
