import bottomStyle from "./bottom.module.css";

export default function BottomNav({item1, item2, item3}) {
    const item = [item1, item2, item3]
    for (let i = 0; i < item.length; i++) {
        item[i] = "/" + item[i]
    }
    return (
        <div className={bottomStyle.botNavCont}>
            <a className={bottomStyle.bottomSec} href={item[0]}>
                <h3>{item1}</h3>
            </a>
            <a className={bottomStyle.bottomSec} href={item[1]}>
                <h3>{item2}</h3>
            </a>
            <a className={bottomStyle.bottomSec} href={item[2]}>
                <h3>{item3}</h3>
            </a>
        </div>
    )
}