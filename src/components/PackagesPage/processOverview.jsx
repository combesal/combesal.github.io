import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'Understand your situation and confirm the right starting point before anything is scoped or agreed.',
  },
  {
    number: '02',
    title: 'Scope & Agreement',
    description: 'Clear deliverables, timeline, and pricing agreed in writing before work starts.',
  },
  {
    number: '03',
    title: 'Research & Planning',
    description: 'Review existing content, interview your team, and map the gaps that matter most.',
  },
  {
    number: '04',
    title: 'Drafting & Review',
    description: 'Structured drafts with consolidated feedback addressed in one revision pass per round.',
  },
  {
    number: '05',
    title: 'Delivery & Handover',
    description: 'Final content delivered in your preferred format, ready to use.',
  },
];

const styles = {
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '1rem',
    margin: '1.5rem 0',
    padding: 0,
    listStyle: 'none',
  },
  step: {
    padding: '1.25rem',
    borderRadius: '8px',
    border: '1px solid var(--ifm-color-emphasis-200)',
    backgroundColor: 'var(--ifm-background-surface-color)',
  },
  number: {
    fontFamily: "'Caldea', Georgia, serif",
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--ifm-color-primary-light)',
    lineHeight: 1,
    marginBottom: '0.5rem',
  },
  title: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '0.9375rem',
    fontWeight: '600',
    color: 'var(--ifm-color-content)',
    marginBottom: '0.4rem',
  },
  description: {
    fontSize: '0.8125rem',
    color: 'var(--ifm-color-emphasis-700)',
    lineHeight: '1.5',
    margin: 0,
  },
};

export default function ProcessOverview() {
  return (
    <ol style={styles.list}>
      {steps.map((step) => (
        <li key={step.number} style={styles.step}>
          <div style={styles.number}>{step.number}</div>
          <div style={styles.title}>{step.title}</div>
          <p style={styles.description}>{step.description}</p>
        </li>
      ))}
    </ol>
  );
}