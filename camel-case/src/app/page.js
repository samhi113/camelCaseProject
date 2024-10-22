import Image from "next/image";
import Camel from "@/components/Camel";
import Styles from "@/app/page.module.css"
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <main>
      <h1>Camels in Costumes</h1>
      <p>Look at these Cute Camels!</p>
      <h3>Camel Showcase</h3>
      <section className={Styles.camelShowcase}>
      <Camel 
      title='Camel 01'
      desc= 'Camel With Cowboy Hat'
      img='camel01'
      /><Camel 
      title='Camel 01'
      desc= 'Camel With Cowboy Hat'
      img='camel02'
      /><Camel 
      title='Camel 01'
      desc= 'Camel With Cowboy Hat'
      img='camel03'
      /><Camel 
      title='Camel 01'
      desc= 'Camel With Cowboy Hat'
      img='camel04'
      /><Camel 
      title='Camel 01'
      desc= 'Camel With Cowboy Hat'
      img='camel05'
      /><Camel 
      title='Camel 01'
      desc= 'Camel With Cowboy Hat'
      img='camel06'
      /><Camel 
      title='Camel 01'
      desc= 'Camel With Cowboy Hat'
      img='camel07'
      />
      </section>

      <BottomNav item1='facts' href1='/facts' item2='habitat' href2='/habitat' item3='gallery' href3='/gallery'/>
    </main>
  );
}
