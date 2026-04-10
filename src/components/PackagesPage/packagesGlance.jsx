import React from 'react';

const packages = [
    {
        name: 'Knowledge Audit',
        price: 'From €1000',
        timeline: '2–3 days',
        description: `Find out what's breaking and why, with a prioritised plan to fix it.`,
        anchor: '#knowledge-audit',
    },
    {
        name: 'Feature & Onboarding Documentation',
        price: 'From €1800',
        timeline: '7–9 days',
        description: 'Structured guides and articles so users find answers without asking your team.',
        anchor: '#feature-onboarding',
    },
    {
        name: 'API & Developer Documentation',
        price: 'From €3500',
        timeline: '10–12 days',
        description: 'Clear references and integration guides so developers can ship without your engineers.',
        anchor: '#api-developer',
    },
    {
        name: 'Ongoing Knowledge Support',
        price: 'From €650/month',
        timeline: '2–5 days per month',
        description: 'Dedicated monthly capacity so your knowledge system stays current as you ship.',
        anchor: '#ongoing-knowledge-support',
    },
    {
        name: 'Knowledge System Sprint',
        price: 'From €5500',
        timeline: '15–20 days',
        description: 'Full knowledge strategy, architecture, core content, and governance for teams that have outgrown their current setup.',
        anchor: '#knowledge-system-sprint',
        featured: true,
    },
];

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem',
        margin: '1.5rem 0',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1.25rem',
        borderRadius: '8px',
        border: '1px solid var(--ifm-color-emphasis-300)',
        backgroundColor: 'var(--ifm-background-surface-color)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'border-color 0.15s ease',
    },
    cardFeatured: {
        borderColor: 'var(--ifm-color-primary)',
        borderWidth: '2px',
    },
    name: {
        fontFamily: "'Caldea', Georgia, serif",
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--ifm-color-primary)',
        marginBottom: '0.5rem',
    },
    description: {
        fontSize: '0.875rem',
        color: 'var(--ifm-color-emphasis-700)',
        lineHeight: '1.5',
        flexGrow: 1,
        marginBottom: '1rem',
    },
    meta: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: "'Work Sans', sans-serif",
        fontSize: '0.8125rem',
        color: 'var(--ifm-color-emphasis-600)',
        borderTop: '1px solid var(--ifm-color-emphasis-200)',
        paddingTop: '0.75rem',
        marginTop: 'auto',
    },
    price: {
        fontWeight: '600',
        color: 'var(--ifm-color-content)',
    },
    badge: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: '0.75rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: '4px',
        backgroundColor: 'var(--ifm-color-primary-lightest)',
        color: 'var(--ifm-background-surface-color)',
        marginBottom: '0.5rem',
        
    },
};

export default function PackagesGlance() {
    return (
        <div style={styles.grid}>
            {packages.map((pkg) => (
                <a
                    key={pkg.name}
                    href={pkg.anchor}
                    style={{
                        ...styles.card,
                        ...(pkg.featured ? styles.cardFeatured : {}),
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--ifm-color-primary)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = pkg.featured ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-300)'}
                >
                    {pkg.featured && <span style={styles.badge}>Most comprehensive</span>}
                    <div style={styles.name}>{pkg.name}</div>
                    <div style={styles.description}>{pkg.description}</div>
                    <div style={styles.meta}>
                        <span style={styles.price}>{pkg.price}</span>
                        <span>{pkg.timeline}</span>
                    </div>
                </a>
            ))}
        </div>
    );
}