import Image from "next/image";
import styles from "./page.module.css";
import Camel from "@/components/Camel";

export default function Home() {
  return (
    <main>
      <h1>Camels in Costumes</h1>
      <p>Look at these Cute Camels!</p>
      <h3>Camel Showcase</h3>
      <Camel 
      title='Camel 01'
      desc= 'Camel With Cowboy Hat'
      img='camel01'
      />
    </main>
  );
}
