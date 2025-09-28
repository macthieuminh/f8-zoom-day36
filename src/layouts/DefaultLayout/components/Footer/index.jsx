import Contact from "../../../../pages/Contact"
import Privacy from "../../../../pages/Privacy"
import { NavLink } from "react-router"
import styles from "./Footer.module.scss"

const navItems = [
    {
        to: "/contact",
        title: "Contact",
    },
    {
        to: "/privacy",
        title: "Privacy",
    },
]
export default function Footer() {
    return (
        <>
            {/* <Contact />
            <Privacy /> */}
            <ul className={styles.nav__list}>
                {navItems.map((item, index) => (
                    <li className={styles.nav__item} key={index}>
                        <NavLink className={styles.nav__item__link} to={item.to}>
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    )
}
