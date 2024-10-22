import galleryStyles from "./gallery.module.css";
import BottomNav from "@/components/BottomNav";

export default function gallery() {
    return (
        <main>
            <h1>Gallery</h1>
            <div className={galleryStyles.galleryCont}>
                <img src="assets/img/camel07.png"/>
                <img src="assets/img/camel04.png"/>
                <img src="assets/img/camel02.png"/>
                <img src="assets/img/camel05.png"/>
                <img src="assets/img/camel08.png"/>
                <img src="assets/img/camel03.png"/>
                <img src="assets/img/camel01.png"/>
                <img src="assets/img/camel06.png"/>
            </div>
            <BottomNav item1='home' item2='facts' item3='habitat'/>
        </main>
    )
}