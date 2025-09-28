import { useEffect, useState } from "react"
import { Link } from "react-router"
import { useSearchParams } from "react-router"

import PostDetail from "../PostDetail"
import Pagination from "../../components/Pagination"
import styles from "./Posts.module.scss"

export default function Posts() {
    const [params, setParams] = useSearchParams()
    const [page, setPage] = useState(() => +params.get("page") || 1)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`)
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, [page])

    useEffect(() => {
        setParams(page <= 1 ? "" : { page })
    }, [page, setParams])

    if (!posts) return <div>Loading!</div>

    return (
        <section>
            <h1>Posts</h1>
            <ul className={styles.ul}>
                {posts.map((post) => {
                    return (
                        <li className={styles.li} key={post.id}>
                            <Link to={`/posts/${post.id}`}>
                                {post.id}. {post.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
        </section>
    )
}
