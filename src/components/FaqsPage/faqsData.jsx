import Link from '@docusaurus/Link';

/**
 * Each FAQ item must include a plain text version (key: answer) for filtering.
 * Use the `jsx` field only when special formatting is needed (e.g. HTML or React components).
 * Note: categories are not currently displayed though.
 * 
 * Example:
 * {
 *   category: "",
 *   question: "",
 *   answer: "",
 *   jsx: (
 *     <>
 *       ...
 *     </>
 *   ),
 * }
 */
const faqs = [

  {
    category: "Working Together",
    question: "What kind of projects do you take on?",
    answer:
      "I focus on SaaS documentation, developer tools, and API references for startups and scale-ups (10-50 employees). I also help teams audit and restructure existing docs.",
  },
    {
    category: "Working Together",
    question: "How does billing work?",
    answer:
      "I work through an umbrella company (portage salarial) in France, which handles invoicing and contracts. You'll receive professional invoices and clear payment terms.",
  },
  {
    category: "Working Together",
    question: "Can you help organize or restructure existing content?",
    answer:
      "If your docs are messy, outdated, or hard to navigate, I can audit, restructure, and improve them. Book a call to discuss your needs.",
      jsx:
      <>If your docs are messy, outdated, or hard to navigate, I can audit, restructure, and improve them. <Link to='https://calendly.com/alison-combes/connect'>Book a call</Link> to discuss your needs.</>,
  },
  {
    category: "Working Together",
    question: "What’s your usual process?",
    answer: "Every project starts with a discovery call to understand your needs. From there, I research, draft, and collaborate with your team to deliver clear, accurate documentation. Details vary by package - see Packages & Processes.",
    jsx:
      <>
        Every project starts with a discovery call to understand your needs. From there, I research, draft, and collaborate with your team to deliver clear, accurate documentation. Details vary by package - see <Link to="about/packages">Packages & Processes</Link>.
      </>,
  },
  {
    category: "Working Together",
    question: "What tools do you use?",
    answer:
      "I work with Confluence, Markdown, Git, Jira, Docusaurus, and Google Docs. I adapt quickly to your existing stack.",
  },
  {
    category: "About Me",
    question: "Where are you based? Do you work remotely or on site?",
    answer:
      "I'm based in southern France and work fully remotely. I'm open to hybrid arrangements for the right project.",
  },
  {
    category: "Working Together",
    question: "What’s your turnaround time like?",
    answer:
      "Turnaround depends on scope, but most projects range from 1–4 weeks. I'll give you a clear timeline during our discovery call.",
  },
  {
    category: "About Me",
    question: "Can you work with international or multilingual teams?",
    answer:
      "Yes. I write with global teams and non-native English speakers in mind, and I'm fluent in French for collaboration or localization support.",
  },
  {
    category: "Working Together",
    question: "Do you sign NDAs?",
    answer:
      "Yes. I'm happy to sign NDAs and confidentiality agreements to protect your product information and unreleased features. This can be discussed during the discovery call.",
  },
  {
    category: "Working Together",
    question: "How do you handle feedback or revisions?",
    answer:
      "Feedback is part of the process. I collaborate closely with your team to ensure the final docs are accurate, clear, and useful.",
  },
];

export default faqs;
