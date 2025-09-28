import { NavLink } from "react-router"

import styles from "./AuthSidebar.module.scss"

const navItems = [
    {
        to: "/login",
        title: "Đăng nhập",
    },
    {
        to: "/register",
        title: "Đăng ký",
    },
    {
        to: "/",
        title: "Quên mật khẩu",
    }
]
export default function AuthSidebar() {
    return (
        <div className={styles.auth_sidebar}>
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
