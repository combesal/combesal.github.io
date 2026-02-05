// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Alison Combes - Technical Writer',
  tagline: 'Documentation that helps SaaS users succeed without flooding your support team.',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://combesal.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'combesal', // Usually your GitHub org/user name.
  projectName: 'combesal.github.io', // Usually your repo name. yourusername.github.io for user site.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      fr: {
        label: 'Français',
      },
    },
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'mH8IqEmRFxm5-0YJOw37ftW82po1KLJvV2rV4sby6Ig',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        // {
        // sidebarPath: './sidebars.js', // removed to add separate sidebar plugins (portfolio/about)

        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        // editUrl:
        //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          blogSidebarTitle: 'All posts',
          blogDescription: 'Insights on technical writing, documentation best practices, and working with developer tools. Tips for SaaS startups and documentation teams.',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'portfolio',
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebarsPortfolio.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        path: 'about',
        routeBasePath: 'about',
        sidebarPath: require.resolve('./sidebarsAbout.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpeg',
      navbar: {
        title: 'Alison Combes',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.svg',
        },
        items: [
          {
            // type: 'aboutSidebar',
            // sidebarId: 'aboutSidebar',
            to: '/about',
            position: 'left',
            label: 'About',
          },
          {
            // type: 'docSidebar',
            // sidebarId: 'tutorialSidebar',
            to: 'docs/intro',
            position: 'left',
            label: 'Portfolio',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            to: '/faqs', // custom React page
            label: 'FAQs',
            position: 'left',
          },

          // ** Note ** uncomment this section to add a language selection to the navbar
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },

          {
            href: 'https://github.com/combesal',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Portfolio',
                to: '/docs/intro',
              },
              {
                label: 'FAQs',
                to: '/faqs',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Connect on LinkedIn',
                href: 'https://www.linkedin.com/in/alison-combes',
              },
              {
                label: 'Book a Discovery Call',
                href: 'https://calendly.com/alison-combes/connect',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/combesal',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Alison Combes. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
