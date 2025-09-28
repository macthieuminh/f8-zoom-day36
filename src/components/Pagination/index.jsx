import styles from "./Pagination.module.scss"
import PropTypes from "prop-types"

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === totalPages

    const handlePageChange = (page) => {
        if (page === currentPage || page < 1 || page > totalPages) return
        onPageChange(page)
    }

    const getButtonClassName = (isDisabled) => {
        return [styles.li, isDisabled && styles.disabled].filter(Boolean).join(" ")
    }

    return (
        <div>
            <ul className={styles.ul}>
                <button
                    type="button"
                    className={getButtonClassName(isFirstPage)}
                    onClick={() => handlePageChange(1)}
                    disabled={isFirstPage}>
                    First
                </button>
                <button
                    type="button"
                    className={getButtonClassName(isFirstPage)}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={isFirstPage}>
                    Previous
                </button>
                {Array(totalPages)
                    .fill(null)
                    .map((_, index) => {
                        const pageNum = index + 1
                        const isActive = currentPage === pageNum

                        return (
                            <li
                                key={pageNum}
                                className={isActive ? styles.active : styles.li}
                                onClick={() => {
                                    if (!isActive) {
                                        handlePageChange(pageNum)
                                    }
                                }}>
                                {pageNum}
                            </li>
                        )
                    })}
                <button
                    type="button"
                    className={getButtonClassName(isLastPage)}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={isLastPage}>
                    Next
                </button>
                <button
                    type="button"
                    className={getButtonClassName(isLastPage)}
                    onClick={() => handlePageChange(totalPages)}
                    disabled={isLastPage}>
                    Last
                </button>
            </ul>
        </div>
    )
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
}
