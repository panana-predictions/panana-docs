import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Panana',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/icons/Yellow Icon.svg',

  // Set the production url of your site here
  url: 'https://docs.panana-predictions.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Panana', // Usually your GitHub org/user name.
  projectName: 'Panana Predictions', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css', './static/katex/katex.min.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.webp',
    navbar: {
      // title: 'Documentation',
      logo: {
        alt: 'Panana Logo',
        src: 'img/Yellow Black Logomark.svg',
        srcDark: 'img/Yellow White Logomark.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://app.panana-predictions.xyz/',
          label: 'App',
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
              label: 'Home',
              to: '/',
            },
          ],
        },
        {
          title: 'Panana',
          items: [
            {
              label: 'App',
              href: 'https://app.panana-predictions.xyz',
            },
            {
              label: 'Website',
              href: 'https://panana-predictions.xyz',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'X',
              href: 'https://x.com/panana_predict',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/panana_predictions',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
