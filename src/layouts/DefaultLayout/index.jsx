import { Outlet } from "react-router"
import Header from "../../layouts/components/Header"
import Footer from "./components/Footer"

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
