import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Aftermath',
  tagline: 'What do you do in the Aftermath?',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://arklab-seniorproject.github.io',
  baseUrl: '/ArkLab-Status/',

  organizationName: 'ArkLab-SeniorProject',
  projectName: 'ArkLab-Status',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

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
          editUrl: 'https://github.com/ArkLab-SeniorProject/ArkLab-Status/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Aftermath',
      logo: {
        alt: 'Aftermath Logo',
        src: 'img/AftermathLogo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'statusPostsSidebar',
          position: 'left',
          label: 'Status Posts',
        },
        {
          href: 'https://github.com/ArkLab-SeniorProject/ArkLab-Status',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ArkLab-SeniorProject/Aftermath',
            },
            {
              label: 'Live Site',
              href: 'https://aftermath-ui.vercel.app/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ark Lab. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
