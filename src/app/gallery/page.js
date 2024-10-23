import Styles from "../page.module.css";
import Camel from "@/components/Camel";
import BottomNav from "@/components/BottomNav"
export default function gallery() {
    return (
        <main>
            <h1 className={Styles.pageName}>Gallery</h1>
            <section className={Styles.camelShowcase}>
                <Camel 
                title='Camel 01'
                desc= 'Camel With Cowboy Hat'
                img='camel01'/>
                <Camel 
                title='Camel 02'
                desc= 'Camel With Safari Hat'
                img='camel02'/>
                <Camel 
                title='Camel 03'
                desc= 'Camel With Beanie'
                img='camel03'/>
                <Camel 
                title='Camel 04'
                desc= 'Camel With Fez Hat'
                img='camel04'/>
                <Camel 
                title='Camel 05'
                desc= 'Camel With Party Hat'
                img='camel05'/>
                <Camel 
                title='Camel 06'
                desc= 'Camel With Adventuring Hat'
                img='camel06'/>
                <Camel 
                title='Camel 07'
                desc= 'Camel With Santa Hat'
                img='camel07'/>
                <Camel 
                title='Camel 08'
                desc= 'Camel With Exploration Hat'
                img='camel08'/>
            </section>
            <BottomNav item1='home' item2='facts' item3='habitat'/>
        </main>
    )
}