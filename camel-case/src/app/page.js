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
      title='Camel 02'
      desc= 'Camel With Safari Hat'
      img='camel02'
      /><Camel 
      title='Camel 03'
      desc= 'Camel With Beanie'
      img='camel03'
      /><Camel 
      title='Camel 04'
      desc= 'Camel With Fez Hat'
      img='camel04'
      /><Camel 
      title='Camel 05'
      desc= 'Camel With Party Hat'
      img='camel05'
      />
      {/* <Camel 
      title='Camel 06'
      desc= 'Camel With Adventuring Hat'
      img='camel06'
      /> */}
      <Camel 
      title='Camel 06'
      desc= 'Camel With Santa Hat'
      img='camel07'
      />
      </section>

      <BottomNav item1='facts' item2='habitat' item3='gallery' />
    </main>
  );
}
