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
    category: "Before Working Together",
    question: "Where do I start?",
    answer:
      "Most engagements start with a Knowledge Audit: a structured review of what exists, what's missing, and what to prioritise. If you're not sure what you need, that's the right first step. [Book a discovery call] to talk it through.",
    jsx:
      <>Most engagements start with a Knowledge Audit: a structured review of what exists, what's missing, and what to prioritise. If you're not sure what you need, that's the right first step. <Link to='https://calendly.com/alison-combes/connect'>Book a discovery call</Link> to talk it through.</>,
  },
  {
    category: "Before Working Together",
    question: "What size teams do you work with?",
    answer:
      "Typically SaaS startups and scaleups between 10 and 100 people, teams that are growing fast enough for knowledge gaps to become a real problem but don't yet have a dedicated knowledge function.",
  },
  {
    category: "Before Working Together",
    question: "Do you only work in English?",
    answer:
      "No. I work in both English and French and have experience writing for international teams and non-native English speakers.",
  },
  {
    category: "How It Works",
    question: "What does a typical project look like? ",
    answer: "Every project starts with a discovery call to understand your situation. From there, scope and timeline are confirmed before anything starts. See [Packages] for what's included in each engagement.",
    jsx:
      <>
       Every project starts with a discovery call to understand your situation. From there, scope and timeline are confirmed before anything starts. See <Link to="about/packages">Packages</Link> for what's included in each engagement..
      </>,
  },
  {
    category: "How It Works",
    question: "How do revisions work?",
    answer:
      "Each project includes a defined number of revision rounds. A revision round means one batch of consolidated written feedback, addressed in one pass. Iterative back-and-forth is not included by default but can be discussed at kickoff.",
  },
  {
    category: "How It Works",
    question: "What tools do you work with?",
    answer:
      "Confluence, Notion, Docusaurus, Markdown, Git, Jira, and Google Docs. I adapt to your existing stack rather than asking you to change it.",
  },
  {
    category: "Practical Details",
    question: "Where are you based?",
    answer:
      "Southern France, working fully remotely with teams across Europe and beyond.",
  },
  {
    category: "Practical Details",
    question: "Do you sign NDAs?",
    answer:
      "Yes. I'm happy to sign NDAs and confidentiality agreements before any sensitive information is shared.",
  },
  {
    category: "Practical Details",
    question: "How do you invoice?",
    answer:
      "Through a professional structure in France. You receive proper invoices with clear payment terms.",
  },
];

export default faqs;
