import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './faqs.module.css';
import faqsData from '../components/FaqsPage/faqsData';

export default function FAQs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const categories = ['All', ...Array.from(new Set(faqsData.map(faq => faq.category)))];

  const filteredFaqs = faqsData.filter(({ category, question, answer }) => {
    const matchesCategory = selectedCategory === 'All' || category === selectedCategory;
    const matchesSearch =
      question.toLowerCase().includes(searchTerm.toLowerCase()) ||
     (typeof answer === 'string' && answer.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout title="FAQs" description="Frequently Asked Questions">
      <main className={clsx('container', styles.main)}>
        <div className={styles.grid}>

          {/* Mobile Toggle Button */}
          <div className={styles.mobileToggle}>
            <button
              onClick={() => setShowMobileSidebar(!showMobileSidebar)}
              className={styles.toggleButton}
              aria-expanded={showMobileSidebar}
              aria-controls="faq-sidebar"
            >
              {showMobileSidebar ? 'Hide Categories' : 'Show Categories'}
            </button>
          </div>

          {/* Sidebar */}
          <aside
            id="faq-sidebar"
            className={clsx(styles.sidebar, {
              [styles.mobileVisible]: showMobileSidebar,
            })}
          >
            <nav>
              <ul>
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      type="button"
                      className={clsx(styles.categoryButton, {
                        [styles.activeCategory]: selectedCategory === cat,
                      })}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setShowMobileSidebar(false); // Close sidebar after selection
                      }}
                      aria-current={selectedCategory === cat ? 'page' : undefined}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <section className={styles.content}>
            <h1>Frequently Asked Questions</h1>

            <input
              type="search"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className={styles.searchInput}
              aria-label="Search FAQs"
            />

            <div className={styles.faqList}>
              {filteredFaqs.length === 0 && (
                <p>No FAQs match your search and category.</p>
              )}

              {filteredFaqs.map(({ question, answer }, idx) => (
                <details key={idx} className={styles.faqItem}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
