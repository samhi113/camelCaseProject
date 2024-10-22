import bottomStyle from "./bottom.module.css";

export default function BottomNav({item1, item2, item3, href1, href2, href3}) {
    const item = [item1, item2, item3]
    const hrefs = [
        href1.startsWith('/') ? href1 : '/' + href1,
        href2.startsWith('/') ? href2 : '/' + href2,
        href3.startsWith('/') ? href3 : '/' + href3
    ];
    for (let i = 0; i < item.length; i++) {
        if (item[i] == "home") {
            item[i] = "/"
        } else {
            item[i] = "/" + item[i]
        }
    }
    return (
        <div className={bottomStyle.botNavCont}>
            <a className={bottomStyle.bottomSec} href={hrefs[0]}>
                <h3>{item1}</h3>
            </a>
            <a className={bottomStyle.bottomSec} href={hrefs[1]}>
                <h3>{item2}</h3>
            </a>
            <a className={bottomStyle.bottomSec} href={hrefs[2]}>
                <h3>{item3}</h3>
            </a>
        </div>
    )
}