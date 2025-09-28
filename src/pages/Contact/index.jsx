import styles from "./Contact.module.scss";

const contactMethods = [
    {
        title: "General inquiries",
        description: "For collaborations, partnerships, or press-related questions.",
        email: "hello@monostudio.co",
        phone: "+1 (917) 555-0147"
    },
    {
        title: "Project hotline",
        description: "Talk directly with a producer about ongoing work or new ideas.",
        phone: "+1 (646) 555-3992"
    },
    {
        title: "Support desk",
        description: "Need access, invoices, or technical help? We are on call.",
        email: "support@monostudio.co"
    }
];

const studioSchedule = [
    { day: "Monday - Friday", hours: "09:00 - 18:00 (UTC-5)" },
    { day: "Saturday", hours: "10:00 - 14:00 (UTC-5)" }
];

export default function Contact() {
    return (
        <section className={styles.page}>
            <div className={styles.card}>
                <header className={styles.header}>
                    <div>
                        <p className={styles.eyebrow}>Contact</p>
                        <h1 className={styles.title}>Let&apos;s build something timeless.</h1>
                    </div>
                    <div className={styles.badge}>Mono Studio</div>
                </header>

                <p className={styles.intro}>
                    We are a design collective based in Brooklyn synthesizing strategy and craft.
                    Drop us a line; every project starts with a conversation.
                </p>

                <div className={styles.grid}>
                    <div className={styles.stack}>
                        {contactMethods.map((method) => (
                            <article key={method.title} className={styles.panel}>
                                <h2 className={styles.panelTitle}>{method.title}</h2>
                                <p className={styles.panelBody}>{method.description}</p>
                                <div className={styles.panelMeta}>
                                    {method.email && <span>{method.email}</span>}
                                    {method.phone && <span>{method.phone}</span>}
                                </div>
                            </article>
                        ))}
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.panel}>
                            <h3 className={styles.panelTitle}>Studio visits</h3>
                            <p className={styles.panelBody}>
                                142 Wythe Ave, 5th Floor<br />
                                Brooklyn, NY 11249
                            </p>
                        </div>

                        <div className={styles.panel}>
                            <h3 className={styles.panelTitle}>Office hours</h3>
                            <ul className={styles.schedule}>
                                {studioSchedule.map((slot) => (
                                    <li key={slot.day}>
                                        <span>{slot.day}</span>
                                        <span>{slot.hours}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.panel}>
                            <h3 className={styles.panelTitle}>Follow along</h3>
                            <p className={styles.panelBody}>
                                @monostudio on Behance, Dribbble, and Instagram.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
