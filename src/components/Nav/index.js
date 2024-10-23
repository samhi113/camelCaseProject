import navStyles from "./nav.module.css"

export default function Nav() {
    return (
        <nav className={navStyles.mainNav}>
            <ul>
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/facts">FACTS</a>
                </li>
                <li>
                    <a href="/habitat">HABITAT</a>
                </li>
                <li>
                    <a href="/gallery">GALLERY</a>
                </li>
            </ul>
        </nav>
    )
}