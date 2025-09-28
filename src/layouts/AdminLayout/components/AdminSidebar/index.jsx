import { NavLink } from "react-router"
import styles from "./AdminSidebar.module.scss"

const navItems = [
    {
        to: "/admin",
        title: "Daskboard",
    },
    {
        to: "/register",
        title: "register",
    },
]
export default function AdminSidebar() {
    return (
        <div className={styles.admin_sidebar}>
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
    )
}
