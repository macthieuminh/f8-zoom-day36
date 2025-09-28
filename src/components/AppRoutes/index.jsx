import { HashRouter, Routes, Route } from "react-router"

// Pgaes

// Default Layout
import DefaultLayout from "../../layouts/DefaultLayout"
import Home from "../../pages/Home"
import About from "../../pages/About"
import Posts from "../../pages/Posts"
import PostDetail from "../../pages/PostDetail"
import Contact from "../../pages/Contact"
import Privacy from "../../pages/Privacy"
// Auth Layout
import AuthLayout from "../../layouts/AuthLayout"
import Login from "../../pages/Login"
import Register from "../../pages/Register"
// Admin Layout
import AdminLayout from "../../layouts/AdminLayout"
import Dashboard from "../../pages/Dashboard"
import Users from "../../pages/Users"
import Settings from "../../pages/Users"
// No Layout
import NotFound from "../../pages/NotFound"
// Scroll To Top
import ScrollToTop from "../ScrollToTop"
export default function AppRoutes() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                {/* Default Layout */}
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Route>
                {/* Auth Layout */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                {/* Admin Layout */}
                {/* Không dùng Header chung mà có header riêng*/}
                <Route element={<AdminLayout />}>
                    <Route path="/admin" element={<Dashboard />} />
                    <Route path="/admin/users" element={<Users />} />
                    <Route path="/admin/settings" element={<Settings />} />
                </Route>
                {/* No Layout */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}
