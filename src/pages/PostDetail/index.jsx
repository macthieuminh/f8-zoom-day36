import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

import styles from "./PostDetail.module.scss"

export default function PostDetail() {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                if (!res.ok) {
                    navigate("/posts", { replace: true })
                    return null
                }

                return res.json()
            })
            .then((data) => {
                if (data) setPost(data)
            })
            .catch(() => {
                navigate("/posts", { replace: true })
            })
    }, [id, navigate])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((res) => {
                if (!res.ok) {
                    return []
                }

                return res.json()
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setComments(data)
                } else {
                    setComments([])
                }
            })
            .catch(() => {
                setComments([])
            })
    }, [id])

    if (!post)
        return (
            <div className={styles.loading}>
                <span className={styles.spinner} />
                Loading...
            </div>
        )

    return (
        <section className={styles.container}>
            <article className={styles.postCard}>
                <header className={styles.postHeader}>
                    <span className={styles.postMeta}>Post #{post.id}</span>
                    <span className={styles.postMeta}>User #{post.userId}</span>
                </header>
                <h1 className={styles.postTitle}>{post.title}</h1>
                <p className={styles.postBody}>{post.body}</p>
            </article>

            <section className={styles.commentsSection}>
                <h2 className={styles.commentsHeading}>Comments</h2>
                {comments.length === 0 ? (
                    <p className={styles.emptyState}>Chưa có người dùng.</p>
                ) : (
                    comments.map((comment) => (
                        <article key={comment.id} className={styles.commentCard}>
                            <header className={styles.commentHeader}>
                                <span className={styles.commentAuthor}>
                                    {comment.name}
                                </span>
                                <span className={styles.commentEmail}>
                                    {comment.email}
                                </span>
                            </header>
                            <p className={styles.commentBody}>{comment.body}</p>
                        </article>
                    ))
                )}
            </section>
        </section>
    )
}
