import Link from '@docusaurus/Link';

/**
 * Each FAQ item must include a plain text version (key: answer) for filtering.
 * Use the `jsx` field only when special formatting is needed (e.g. HTML or React components).
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
    category: "Process & Collaboration",
    question: "What kind of projects do you take on?",
    answer:
      "I work on documentation for developer tools, internal systems, onboarding materials, feature guides, and support content. I enjoy solving complex communication challenges to create clear, user-friendly writing.",
  },
  {
    category: "Process & Collaboration",
    question: "Can you help organize or restructure existing content?",
    answer:
      "Certainly. If you have existing content that needs reworking, I’m happy to help clarify, restructure, and improve the user experience.",
  },
  {
    category: "Process & Collaboration",
    question: "What’s your typical process?",
    answer: "My process typically includes research, reviewing source materials, speaking with subject matter experts (SMEs), drafting in plain language, and refining based on feedback. More on this in My Approach.",
    jsx:
      <>
        My process typically includes research, reviewing source materials, speaking with subject matter experts (SMEs), drafting in plain language, and refining based on feedback. More on this in <Link to="docs/about#my-approach">My Approach</Link>.
      </>,
  },
  {
    category: "Work Samples & Tools",
    question: "Do you have samples of your work?",
    answer: "Due to confidentiality, I'm not able to share most client work publicly. This site serves as a hands-on sample, and I'm working on mock examples to showcase. See the roadmap for what’s planned.",
    jsx:
      <>
        Due to confidentiality, I'm not able to share most client work publicly. This site serves as a hands-on sample, and I'm working on mock examples to showcase. See the <Link to="docs/roadmap">roadmap</Link> for what’s planned.
      </>
  },
  {
    category: "Work Samples & Tools",
    question: "What tools do you use?",
    answer:
      "I work with Confluence, Markdown, Git, Jira, Google Docs, and Docusaurus. I also adapt quickly to new tools and workflows.",
  },
  {
    category: "Availability",
    question: "Are you available for freelance or contract work?",
    answer: "Yes. I'm open to freelance, contract, and permanent opportunities. You can read more about my current availability in this section.",
    jsx:
      <>
        Yes. I'm open to freelance, contract, and permanent opportunities. You can read more about my current availability in <Link to="docs/about#availability">this section</Link>.
      </>
  },
  {
    category: "Availability",
    question: "Where are you based? Do you work remotely?",
    answer:
      "I'm based in the South of France, and I prefer fully remote roles. That said, I'm happy to consider hybrid options if they suit your team.",
  },
  {
    category: "Availability",
    question: "What’s your turnaround time like?",
    answer:
      "Turnaround depends on the scope, but I aim to deliver promptly and communicate clearly about timelines.",
  },
  {
    category: "Experience",
    question: "Can you work with international or multilingual teams?",
    answer:
      "Absolutely. I have experience in translation and working with global teams, and I write with non-native English readers in mind. I also speak fluent French.",
  },
  {
    category: "Experience",
    question: "What industries have you worked in?",
    answer: "I have a varied background, most recently in IT (web development and tech support). I've also worked in non-profits (associations 1901 in France), hospitality, and sports e-commerce.",
    jsx:
      <>
        I have a varied background, most recently in IT (web development and tech support). I've also worked in non-profits (<em>associations 1901</em> in France), hospitality, and sports e-commerce.
      </>
  },
  {
    category: "Experience",
    question: "How do you handle feedback or revisions?",
    answer:
      "I treat feedback as part of the writing process. The goal is always clarity and accuracy. I'm open to collaborative input and aim for a low-friction review loop.",
  },
];

export default faqs;
