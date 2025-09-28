import { NavLink } from "react-router"
import styles from "./Header.module.scss"
const navItems = [
    {
        to: "/",
        title: "Home",
    },
    {
        to: "/about",
        title: "About",
    },
    {
        to: "/posts",
        title: "Posts",
    },
]
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo__wrapper}>
                <img className={styles.logo} src="/assets/logo.png" alt="Logo" />
            </div>
            <div className={styles.nav__wrapper}>
                <nav className={styles.nav}>
                    <ul className={styles.nav__list}>
                        {navItems.map((item, index) => (
                            <li className={styles.nav__item} key={index}>
                                <NavLink className={styles.nav__item__link} to={item.to}>
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
