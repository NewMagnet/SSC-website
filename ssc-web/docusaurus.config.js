// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Starry Sakura Craft',
  tagline: 'A server for souls to meet and thrive.',
  favicon: 'img/cherry_blossom_tree.png',
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: false, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://lyscoria.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NewMagnet', // Usually your GitHub org/user name.
  projectName: 'SSC-webstie', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/cherry_blossom_tree.png',
      navbar: {
        title: 'Starry Sakura Craft',
        logo: {
          src: 'img/cherry_blossom_tree.png',
        },
        items: [
          {
            to: 'docs/introduction',
            label: '介绍📣', 
            position: 'left'
          },
          {
            to: 'docs/serverrule',
            label: '规则⚠️', 
            position: 'left'
          },
          {
            to: 'intro',
            label: '成员👤', 
            position: 'left'
          },
          {
            to: 'gallery',
            label: '画廊🌆', 
            position: 'left'
          },
          {
            to: 'docs/plan',
            label: '企划🌟', 
            position: 'left'
          },
          {
            to: 'docs/bluemap/',
            label: '地图🌏', 
            position: 'left'
          },
          {
            to: 'docs/video',
            label: '视频🎬', 
            position: 'left'
          },
          {
            to: 'docs/mods',
            label: '模组与插件☕️',
            position: 'left',
          },
          {
            to: 'docs/stronghold',
            label: '128要塞汇总👁',
            position: 'left',
          },
          {
            to: 'docs/bingo',
            label: 'bingo功能汉化🌐', 
            position: 'left'
          },
          {
            to: 'docs/updatelog',
            label: '更新📁', 
            position: 'left'
          },
          {
            href: 'https://github.com/NewMagnet/SSC-website',
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
                label: 'Introduction',
                to: 'docs/introduction',
              },
              {
                label: 'Server Rule',
                to: 'docs/serverrule',
              },
              {
                label: 'Member',
                to: 'intro',
              },
              {
                label: 'Gallery',
                to: 'gallery',
              },
              {
                label: 'Plan',
                to: 'docs/plan',
              },
              {
                label: 'Join',
                to: 'docs/join',
              },
              {
                label: 'Map',
                to: 'docs/map',
              },
              {
                label: 'Mods&Plugins',
                to: 'docs/mods',
              },
              {
                label: 'Update',
                to: 'docs/updatelog',
              },
              {
                label: 'Video',
                to: 'docs/video',
              },
              {
                label: 'Stronghold',
                to: 'docs/stronghold',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'Lie-downCraft',
                href: 'http://lie-downcraft.cn/',
              },
              {
                label: 'Chunkbase',
                href: 'https://www.chunkbase.com/apps/seed-map#seed=1396669&platform=java_1_21_6&dimension=overworld&x=0&z=0&zoom=0.5',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'LittleSkin',
                href: 'https://littleskin.cn/',
              },
              {
                label: 'MinecraftWiki',
                href: 'https://zh.minecraft.wiki/',
              },
              {
                label: 'MapartCraft',
                href: 'https://rebane2001.com/mapartcraft/zh-Hans',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus. <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2025129750号-1</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
export default config;
