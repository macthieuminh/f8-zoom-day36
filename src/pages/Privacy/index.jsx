import styles from "./Privacy.module.scss";

const policySections = [
    {
        title: "Data we collect",
        description:
            "We collect only the essentials to deliver and improve Noir Atelier services across web, mobile, and experiential projects.",
        bullets: [
            "Account profile data: name, role, preferred language, billing details.",
            "Usage analytics: interaction heatmaps, feature adoption signals, and session diagnostics anonymised after 30 days.",
            "Voluntary inputs: prototypes, creative briefs, and reference assets you choose to share with our teams."
        ]
    },
    {
        title: "How we use your data",
        description:
            "Data powers tailored onboarding, curated recommendations, and proactive support while keeping your workspace secure.",
        bullets: [
            "Craft personalised dashboards, resource libraries, and production timelines tied to your engagement.",
            "Notify you of launch milestones, beta access, or service disruptions aligned with your subscription tier.",
            "Detect suspicious activity and enforce multi-factor security defaults across collaborator accounts."
        ]
    },
    {
        title: "Retention approach",
        description:
            "We observe strict retention windows, combining automation with manual reviews to purge data when it loses its purpose.",
        bullets: [
            "Project archives are encrypted and retained for 180 days post-offboarding unless renewal is requested.",
            "Contracts, invoices, and fiscal records are stored for seven fiscal years to satisfy accounting laws.",
            "Incident response logs persist for 24 months to help us validate remediation and satisfy regulatory audits."
        ]
    },
    {
        title: "Sharing & transfers",
        description:
            "We limit data sharing to vetted processors operating under binding agreements and robust confidentiality clauses.",
        bullets: [
            "Core infrastructure partners: AWS EU-West, Cloudflare Zero Trust, Linear enterprise account.",
            "Creative tooling: Figma, Notion, and Vimeo for collaborative delivery with least-privilege access.",
            "Legal basis: Standard Contractual Clauses (SCCs) govern any cross-border transfers outside the UK/EU."
        ]
    }
];

const oversightTeam = [
    { label: "Data Protection Officer", value: "Mila Conte" },
    { label: "Supervisory Authority", value: "ICO (United Kingdom)" },
    { label: "Version", value: "Policy v3.6 - Effective 21 Sept 2025" }
];

const revisionLog = [
    { label: "May 2025", value: "Refined partner roster and telemetry safeguards." },
    { label: "Jan 2025", value: "Introduced workspace retention automation." },
    { label: "Oct 2024", value: "Launched granular consent preferences." }
];

export default function Privacy() {
    return (
        <section className={styles.page}>
            <div className={styles.card}>
                <header className={styles.header}>
                    <div>
                        <p className={styles.eyebrow}>Privacy</p>
                        <h1 className={styles.title}>Your ideas stay private. Our policy makes it tangible.</h1>
                    </div>
                    <div className={styles.badge}>Noir Atelier</div>
                </header>

                <p className={styles.intro}>
                    This privacy statement outlines how Noir Atelier collects, safeguards, and governs information across
                    all client workstreams. We built it to be transparent, human, and ready for evolving regulations.
                </p>

                <div className={styles.grid}>
                    <div className={styles.stack}>
                        {policySections.map((section) => (
                            <article key={section.title} className={styles.panel}>
                                <h2 className={styles.panelTitle}>{section.title}</h2>
                                <p className={styles.panelBody}>{section.description}</p>
                                {section.bullets && (
                                    <ul className={styles.panelList}>
                                        {section.bullets.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </article>
                        ))}
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.panel}>
                            <h3 className={styles.panelTitle}>Oversight</h3>
                            <div className={styles.panelMeta}>
                                {oversightTeam.map(({ label, value }) => (
                                    <span key={label}>
                                        <strong>{label}:</strong> {value}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.panel}>
                            <h3 className={styles.panelTitle}>Revision log</h3>
                            <ul className={styles.schedule}>
                                {revisionLog.map(({ label, value }) => (
                                    <li key={label}>
                                        <span>{label}</span>
                                        <span>{value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.panel}>
                            <h3 className={styles.panelTitle}>Exercise your rights</h3>
                            <p className={styles.panelBody}>
                                Email privacy@noiratelier.studio or submit a request via the client console to access, export,
                                or erase your data. We respond within 72 hours.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
