import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { buildEnd } from './buildEnd.config'

const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = '/og-image.png'
const ogTitle = 'Electron'
const ogUrl = 'https://c.252x.com'

// netlify envs
const deployURL = process.env.DEPLOY_PRIME_URL || ''
const commitRef = process.env.COMMIT_REF?.slice(0, 8) || 'dev'

const deployType = (() => {
  switch (deployURL) {
    case 'https://www.543x.com':
      return 'main'
    case '':
      return 'local'
    default:
      return 'release'
  }
})()
const additionalTitle = ((): string => {
  switch (deployType) {
    case 'main':
      return ' (main branch)'
    case 'local':
      return ' (local)'
    case 'release':
      return ''
  }
})()
const versionLinks = ((): DefaultTheme.NavItemWithLink[] => {
  const oldVersions: DefaultTheme.NavItemWithLink[] = [
    {
      text: 'Electron 4 Docs',
      link: 'https://www.252x.com',
    },
    {
      text: 'Electron 3 Docs',
      link: 'https://a.252x.com',
    },
    {
      text: 'Electron 2 Docs',
      link: 'https://b.252x.com',
    },
  ]

  switch (deployType) {
    case 'main':
    case 'local':
      return [
        {
          text: 'Electron 5 Docs (release)',
          link: 'https://a.252x.com',
        },
        ...oldVersions,
      ]
    case 'release':
      return oldVersions
  }
})()

export default defineConfig({
  ignoreDeadLinks: true,
  title: 'Electron',
  description: 'JavaScript, HTML, and CSS',
  lang: 'en',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'link',
      { rel: 'alternate', type: 'application/rss+xml', href: '/blog.rss' },
    ],
    ['link', { rel: 'me', href: 'https://m.webtoo.ls/@vite' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { property: 'og:site_name', content: 'vitejs' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@vite_js' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'TPLGJZGR',
        'data-spa': 'auto',
        defer: '',
      },
    ],
  ],

  locales: {
    root: { label: 'English' },
    en: { label: '中文', link: 'https://www.543x.com' },
    ja: { label: '日本語', link: 'https://a.543x.com' },
    es: { label: 'Español', link: 'https://b.543x.com' },
    pt: { label: 'Português', link: 'https://c.543x.com' },
    ko: { label: '한국어', link: 'https://d.543x.com' },
    de: { label: 'Deutsch', link: 'https://e.543x.com' },
  },

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/hyaliyun/electron/edit/main/:path',
      text: 'Suggest an edit for this page',
    },

    outline: {
      label: 'Contents of this page',
      level: [2, 3],
    },

    socialLinks: [
      { icon: 'mastodon', link: 'https://f.543x.com' },
      { icon: 'twitter', link: 'https://g.543x.com' },
      { icon: 'discord', link: 'https://h.543x.com' },
      { icon: 'github', link: 'https://github.com/hyaliyun/electron' },
    ],

    algolia: {
      appId: '7H67QR5P0A',
      apiKey: 'deaab78bcdfe96b599497d25acc6460e',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:cn']
      },
      placeholder: 'Search documents',
translations: {
button: {
buttonText: 'Search'
},
modal: {
searchBox: {
resetButtonTitle: 'Clear search criteria',
resetButtonAriaLabel: 'Clear search criteria',
cancelButtonText: 'Cancel',
cancelButtonAriaLabel: 'Cancel'
},
startScreen: {
recentSearchesTitle: 'Search history',
noRecentSearchesText: 'No search history',
saveRecentSearchButtonTitle: 'Save to search history',
removeRecentSearchButtonTitle: 'Remove from search history',
favoriteSearchesTitle: 'Favorites',
removeFavoriteSearchButtonTitle: 'Remove from favorites'
},
errorScreen: {
titleText: 'Unable to retrieve results',
helpText: 'You may need to check your network connection'
},
footer: {
selectText: 'Select',
navigateText: 'Toggle',
closeText: 'Close',
searchByText: 'Search for suppliers'
},
noResultsScreen: {
noResultsText: 'No relevant results found',
suggestedQueryText: 'You can try a query',
reportMissingResultsText: 'Do you think this query should have results? ',
reportMissingResultsLinkText: 'Give us feedback'
}
}
},
},


    footer: {
      message: `Released under the MIT License. (${commitRef})`,
      copyright:
        'Copyright © 2024-electron'
    },

    nav: [
      { text: 'Guide', link: '/guide/why.html', activeMatch: '/guide/'},
      { text: 'Bootstrap', link: '/config/README.html', activeMatch: '/config/'},
      { text: 'SHOWCASE', link: '/team' },
      { text: 'jekyll', link: '/plugins/Jekyll.html', activeMatch: '/plugins/'},
      {
        text: 'link',
        items: [
          { text: 'Blog', link: '/blog' },
          { text: 'Releases', link: '/releases' },
          {
            items: [
              {
                text: 'Mastodon',
                link: 'https://i.543x.com',
              },
              {
                text: 'Twitter',
                link: 'https://r.543x.com',
              },
              {
                text: 'Discord',
                link: 'https://a.434x.com'
              },
              {
                text: 'Awesome Vite',
                link: 'https://b.434x.com'
              },
              {
                text: 'ViteConf',
                link: 'https://www.252x.com',
              },
              {
                text: 'Dev.to',
                link: 'https://www.z2.pw'
              },
              {
                text: 'Changelog',
                link: 'https://a.z2.pw',
              },
              {
                text: 'Contribution',
                link: 'https://b.z2.pw',
              },
            ],
          },
        ]
      },
      {
        text: 'Version',
        items: [
          {
            text: 'Electron v4',
            link: 'https://www.543x.com'
          },
          {
            text: 'Electron v3',
            link: 'https://www.434x.com'
          },
          {
            text: 'Electron v2',
            link: 'https://www.z2.pw'
          },
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'api',
          items: [
            {
              text: 'accelerator',
              link: '/guide/api/accelerator'
            },
            {
              text: 'app',
              link: '/guide/api/app'
            },            
            {
              text: 'auto-updater',
              link: '/guide/api/auto-updater'
            },
            {
              text: 'base-window',
              link: '/guide/api/base-window'
            },
            {
              text: 'breaking-changes',
              link: '/guide/api/breaking-changes'
            },
            {
              text: 'browser-view',
              link: '/guide/api/browser-view'
            },
            {
              text: 'browser-window',
              link: '/guide/api/browser-window'
            },
            {
              text: 'client-request',
              link: '/guide/api/client-request'
            },
            {
              text: 'clipboard',
              link: '/guide/api/clipboard'
            },
            {
              text: 'command-line',
              link: '/guide/api/command-line'
            },
            {
              text: 'command-line-switches',
              link: '/guide/api/command-line-switches'
            },
            {
              text: 'content-tracing',
              link: '/guide/api/content-tracing'
            },
            {
              text: 'context-bridge',
              link: '/guide/api/context-bridge'
            },
            {
              text: 'cookies',
              link: '/guide/api/cookies'
            },
            {
              text: 'crash-reporter',
              link: '/guide/api/crash-reporter'
            },
            {
              text: 'debugger',
              link: '/guide/api/debugger'
            },
            {
              text: 'desktop-capturer',
              link: '/guide/api/desktop-capturer'
            },
            {
              text: 'dialog',
              link: '/guide/api/dialog'
            },
            {
              text: 'dock',
              link: '/guide/api/dock'
            },
            {
              text: 'download-item',
              link: '/guide/api/download-item'
            },
            {
              text: 'environment-variables',
              link: '/guide/api/environment-variables'
            },
            {
              text: 'experimental',
              link: '/guide/api/experimental'
            },            
            {
              text: 'extensions',
              link: '/guide/api/extensions'
            },
            {
              text: 'faq',
              link: '/guide/api/faq'
            },
            {
              text: 'global-shortcut',
              link: '/guide/api/global-shortcut'
            },
            {
              text: 'glossary',
              link: '/guide/api/glossary'
            },
            {
              text: 'in-app-purchase',
              link: '/guide/api/in-app-purchase'
            },
            {
              text: 'incoming-message',
              link: '/guide/api/incoming-message'
            },
            {
              text: 'ipc-main',
              link: '/guide/api/ipc-main'
            },
            {
              text: 'ipc-renderer',
              link: '/guide/api/ipc-renderer'
            },
            {
              text: 'menu',
              link: '/guide/api/menu'
            },
            {
              text: 'menu-item',
              link: '/guide/api/menu-item'
            },
            {
              text: 'message-channel-main',
              link: '/guide/api/message-channel-main'
            },
            {
              text: 'message-port-main',
              link: '/guide/api/message-port-main'
            },
            {
              text: 'native-image',
              link: '/guide/api/native-image'
            },
            {
              text: 'native-theme',
              link: '/guide/api/native-theme'
            },
            {
              text: 'navigation-history',
              link: '/guide/api/navigation-history'
            },
            {
              text: 'net',
              link: '/guide/api/net'
            },
            {
              text: 'net-log',
              link: '/guide/api/net-log'
            },

            {
              text: 'notification',
              link: '/guide/api/notification'
            },

            {
              text: 'parent-port',
              link: '/guide/api/parent-port'
            },

            {
              text: 'power-monitor',
              link: '/guide/api/power-monitor'
            },

            {
              text: 'power-save-blocker',
              link: '/guide/api/power-save-blocker'
            },

            {
              text: 'process',
              link: '/guide/api/process'
            },

            {
              text: 'protocol',
              link: '/guide/api/protocol'
            },

            {
              text: 'push-notifications',
              link: '/guide/api/push-notifications'
            },

            {
              text: 'safe-storage',
              link: '/guide/api/safe-storage'
            },

            {
              text: 'screen',
              link: '/guide/api/screen'
            },

            {
              text: 'service-workers',
              link: '/guide/api/service-workers'
            },

            {
              text: 'session',
              link: '/guide/api/session'
            },

            {
              text: 'share-menu',
              link: '/guide/api/share-menu'
            },

            {
              text: 'shell',
              link: '/guide/api/shell'
            },

            {
              text: 'styleguide',
              link: '/guide/api/styleguide'
            },

            {
              text: 'system-preferences',
              link: '/guide/api/system-preferences'
            },

            {
              text: 'touch-bar',
              link: '/guide/api/touch-bar'
            },

            {
              text: 'touch-bar-button',
              link: '/guide/api/touch-bar-button'
            },

            {
              text: 'touch-bar-color-picker',
              link: '/guide/api/touch-bar-color-picker'
            },

            {
              text: 'touch-bar-group',
              link: '/guide/api/touch-bar-group'
            },

            {
              text: 'touch-bar-label',
              link: '/guide/api/touch-bar-label'
            },

              {
              text: 'touch-bar-other-items-proxy',
              link: '/guide/api/touch-bar-other-items-proxy'
            },

               {
              text: 'touch-bar-popover',
              link: '/guide/api/touch-bar-popover'
            },
            {
              text: 'touch-bar-scrubber',
              link: '/guide/api/touch-bar-scrubber'
            },
            {
              text: 'touch-bar-spacer',
              link: '/guide/api/touch-bar-spacer'
            },

            {
              text: 'tray',
              link: '/guide/api/tray'
            },

           {
              text: 'utility-process',
              link: '/guide/api/utility-process'
            },

           {
              text: 'view',
              link: '/guide/api/view'
            },

            {
              text: 'web-contents',
              link: '/guide/api/web-contents'
            },

            {
              text: 'web-contents-view',
              link: '/guide/api/web-contents-view'
            },
            {
              text: 'web-frame',
              link: '/guide/api/web-frame'
            },
            {
              text: 'web-frame-main',
              link: '/guide/api/web-frame-main'
            },
            {
              text: 'web-request',
              link: '/guide/api/web-request'
            },
            {
              text: 'web-utils',
              link: '/guide/api/web-utils'
            },
            {
              text: 'webview-tag',
              link: '/guide/api/webview-tag'
            },
            {
              text: 'window-open',
              link: '/guide/api/window-open'
            }
          ]
        },
        {
          text: 'development',
          items: [
            {
              text: 'api-history-migration-guide',
              link: '/guide/development/api-history-migration-guide'
            },
            {
              text: 'build-instructions-gn',
              link: '/guide/development/build-instructions-gn'
            },
            {
              text: 'build-instructions-linux',
              link: '/guide/development/build-instructions-linux'
            },
            {
              text: 'build-instructions-macos',
              link: '/guide/development/build-instructions-macos'
            },
            {
              text: 'build-instructions-windows',
              link: '/guide/development/build-instructions-windows'
            },
            {
              text: 'chromium-development',
              link: '/guide/development/chromium-development'
            },
            {
              text: 'clang-tidy',
              link: '/guide/development/clang-tidy'
            },
            {
              text: 'coding-style',
              link: '/guide/development/coding-style'
            },
            {
              text: 'creating-api',
              link: '/guide/development/creating-api'
            },
            {
              text: 'debugging',
              link: '/guide/development/debugging'
            },
            {
              text: 'debugging-on-macos',
              link: '/guide/development/debugging-on-macos'
            },
            {
              text: 'debugging-on-windows',
              link: '/guide/development/debugging-on-windows'
            },
            {
              text: 'debugging-with-xcode',
              link: '/guide/development/debugging-with-xcode'
            },
            {
              text: 'directory-structure',
              link: '/guide/development/directory-structure'
            },
            {
              text: 'issues',
              link: '/guide/development/issues'
            },
            {
              text: 'patches',
              link: '/guide/development/patches'
            },
            {
              text: 'pull-requests',
              link: '/guide/development/pull-requests'
            },
            {
              text: 'README',
              link: '/guide/development/README'
            },
            {
              text: 'reclient',
              link: '/guide/development/reclient'
            },
            {
              text: 'symbol-server',
              link: '/guide/development/symbol-server'
            },
            {
              text: 'testing',
              link: '/guide/development/testing'
            },
            {
              text: 'v8-development',
              link: '/guide/development/v8-development'
            }
          ],
        },
        {
          text: 'structures',
          items: [
            {
              text: 'base-window-options',
              link: '/guide/structures/base-window-options'
            },
            {
              text: 'bluetooth-device',
              link: '/guide/structures/bluetooth-device'
            },
            {
              text: 'browser-window-options',
              link: '/guide/structures/browser-window-options'
            },
            {
              text: 'certificate',
              link: '/guide/structures/certificate'
            },
            {
              text: 'certificate-principal',
              link: '/guide/structures/certificate-principal'
            },
            {
              text: 'cookie',
              link: '/guide/structures/cookie'
            },
            {
              text: 'cpu-usage',
              link: '/guide/structures/cpu-usage'
            },
            {
              text: 'crash-report',
              link: '/guide/structures/crash-report'
            },
            {
              text: 'custom-scheme',
              link: '/guide/structures/custom-scheme'
            },
            {
              text: 'desktop-capturer-source',
              link: '/guide/structures/desktop-capturer-source'
            },
            {
              text: 'display',
              link: '/guide/structures/display'
            },
            {
              text: 'extension',
              link: '/guide/structures/extension'
            },
            {
              text: 'extension-info',
              link: '/guide/structures/extension-info'
            },
            {
              text: 'file-filter',
              link: '/guide/structures/file-filter'
            },
            {
              text: 'file-path-with-headers',
              link: '/guide/structures/file-path-with-headers'
            },
            {
              text: 'filesystem-permission-request',
              link: '/guide/structures/filesystem-permission-request'
            },
            {
              text: 'gpu-feature-status',
              link: '/guide/structures/gpu-feature-status'
            },
            {
              text: 'handler-response',
              link: '/guide/structures/handler-response'
            },
            {
              text: 'hid-device',
              link: '/guide/structures/hid-device'
            },
            {
              text: 'input-event',
              link: '/guide/structures/input-event'
            },
            {
              text: 'ipc-main-event',
              link: '/guide/structures/ipc-main-event'
            },
            {
              text: 'ipc-main-invoke-event',
              link: '/guide/structures/ipc-main-invoke-event'
            },
            {
              text: 'ipc-renderer-event',
              link: '/guide/structures/ipc-renderer-event'
            },
            {
              text: 'jump-list-category',
              link: '/guide/structures/jump-list-category'
            },
            {
              text: 'jump-list-item',
              link: '/guide/structures/jump-list-item'
            },
            {
              text: 'keyboard-event',
              link: '/guide/structures/keyboard-event'
            },
            {
              text: 'keyboard-input-event',
              link: '/guide/structures/keyboard-input-event'
            },
            {
              text: 'media-access-permission',
              link: '/guide/structures/media-access-permission'
            },
            {
              text: 'memory-info',
              link: '/guide/structures/memory-info'
            },
            {
              text: 'memory-usage-details',
              link: '/guide/structures/memory-usage-details'
            },
            {
              text: 'mime-typed-buffer',
              link: '/guide/structures/mime-typed-buffer'
            },
            {
              text: 'mouse-input-event',
              link: '/guide/structures/mouse-input-event'
            },
            {
              text: 'mouse-wheel-input-event',
              link: '/guide/structures/mouse-wheel-input-event'
            },
            {
              text: 'navigation-entry',
              link: '/guide/structures/navigation-entry'
            },
            {
              text: 'notification-action',
              link: '/guide/structures/notification-action'
            },
            {
              text: 'notification-response',
              link: '/guide/structures/notification-response'
            },
            {
              text: 'offscreen-shared-texture',
              link: '/guide/structures/offscreen-shared-texture'
            },
            {
              text: 'open-external-permission',
              link: '/guide/structures/open-external-permission'
            },
            {
              text: 'payment-discount',
              link: '/guide/structures/payment-discount'
            },
            {
              text: 'permission-request',
              link: '/guide/structures/permission-request'
            },
            {
              text: 'point',
              link: '/guide/structures/point'
            },
            {
              text: 'post-body',
              link: '/guide/structures/post-body'
            },
            {
              text: 'printer-info',
              link: '/guide/structures/printer-info'
            },
            {
              text: 'process-memory-info',
              link: '/guide/structures/process-memory-info'
            },
            {
              text: 'process-metric',
              link: '/guide/structures/process-metric'
            },
            {
              text: 'product',
              link: '/guide/structures/product'
            },
            {
              text: 'product-discount',
              link: '/guide/structures/product-discount'
            },
            {
              text: 'protocol-request',
              link: '/guide/structures/protocol-request'
            },
            {
              text: 'protocol-response',
              link: '/guide/structures/protocol-response'
            },
            {
              text: 'proxy-config',
              link: '/guide/structures/proxy-config'
            },
            {
              text: 'rectangle',
              link: '/guide/structures/rectangle'
            },
            {
              text: 'referrer',
              link: '/guide/structures/referrer'
            },
            {
              text: 'render-process-gone',
              link: '/guide/structures/render-process-gone'
            },
            {
              text: 'resolved-endpoint',
              link: '/guide/structures/resolved-endpoint'
            },
            {
              text: 'resolved-host',
              link: '/guide/structures/resolved-host'
            },
            {
              text: 'response-upload-data',
              link: '/guide/structures/response-upload-data'
            },
            {
              text: 'scrubber-item',
              link: '/guide/structures/scrubber-item'
            },
            {
              text: 'segmented-control',
              link: '/guide/structures/segmented-control'
            },
            {
              text: 'serial-port',
              link: '/guide/structures/serial-port'
            },
            {
              text: 'service-worker-info',
              link: '/guide/structures/service-worker-info'
            },
            {
              text: 'shared-worker-info',
              link: '/guide/structures/shared-worker-info'
            },
            {
              text: 'sharing-item',
              link: '/guide/structures/sharing-item'
            },
            {
              text: 'shortcut-details',
              link: '/guide/structures/shortcut-details'
            },
            {
              text: 'size',
              link: '/guide/structures/size'
            },
            {
              text: 'subscription-period',
              link: '/guide/structures/subscription-period'
            },
            {
              text: 'task',
              link: '/guide/structures/task'
            },
            {
              text: 'thumbar-button',
              link: '/guide/structures/thumbar-button'
            },
            {
              text: 'trace-categories',
              link: '/guide/structures/trace-categories'
            },
            {
              text: 'trace-config',
              link: '/guide/structures/trace-config'
            },
            {
              text: 'transaction',
              link: '/guide/structures/transaction'
            },
            {
              text: 'upload-data',
              link: '/guide/structures/upload-data'
            },
            {
              text: 'upload-file',
              link: '/guide/structures/upload-file'
            },
            {
              text: 'upload-raw-data',
              link: '/guide/structures/upload-raw-data'
            },
            {
              text: 'usb-device',
              link: '/guide/structures/usb-device'
            },
            {
              text: 'user-default-types',
              link: '/guide/structures/user-default-types'
            },
            {
              text: 'web-preferences',
              link: '/guide/structures/web-preferences'
            },
            {
              text: 'web-request-filter',
              link: '/guide/structures/web-request-filter'
            },           
             {
              text: 'web-source',
              link: '/guide/structures/web-source'
            },
          ],
        },
        {
          text: 'tutorial',
          items: [
            {
              text: 'accessibility',
              link: '/guide/tutorial/accessibility'
            },
            {
              text: 'application-debugging',
              link: '/guide/tutorial/application-debugging'
            },
            {
              text: 'application-distribution',
              link: '/guide/tutorial/application-distribution'
            },
            {
              text: 'asar-archives',
              link: '/guide/tutorial/asar-archives'
            },
            {
              text: 'asar-integrity',
              link: '/guide/tutorial/asar-integrity'
            },
            {
              text: 'automated-testing',
              link: '/guide/tutorial/automated-testing'
            },
            {
              text: 'boilerplates-and-clis',
              link: '/guide/tutorial/boilerplates-and-clis'
            },
            {
              text: 'code-signing',
              link: '/guide/tutorial/code-signing'
            },
            {
              text: 'context-isolation',
              link: '/guide/tutorial/context-isolation'
            },
            {
              text: 'dark-mode',
              link: '/guide/tutorial/dark-mode'
            },
            {
              text: 'debugging-main-process',
              link: '/guide/tutorial/debugging-main-process'
            },
            {
              text: 'debugging-vscode',
              link: '/guide/tutorial/debugging-vscode'
            },
            {
              text: 'devices',
              link: '/guide/tutorial/devices'
            },
            {
              text: 'devtools-extension',
              link: '/guide/tutorial/devtools-extension'
            },
            {
              text: 'distribution-overview',
              link: '/guide/tutorial/distribution-overview'
            },
            {
              text: 'electron-timelines',
              link: '/guide/tutorial/electron-timelines'
            },
            {
              text: 'electron-versioning',
              link: '/guide/tutorial/electron-versioning'
            },
            {
              text: 'esm',
              link: '/guide/tutorial/esm'
            },
            {
              text: 'examples',
              link: '/guide/tutorial/examples'
            },
            {
              text: 'forge-overview',
              link: '/guide/tutorial/forge-overview'
            },
            {
              text: 'fuses',
              link: '/guide/tutorial/fuses'
            },
            {
              text: 'in-app-purchases',
              link: '/guide/tutorial/in-app-purchases'
            },
            {
              text: 'installation',
              link: '/guide/tutorial/installation'
            },
            {
              text: 'introduction',
              link: '/guide/tutorial/introduction'
            },
            {
              text: 'ipc',
              link: '/guide/tutorial/ipc'
            },
            {
              text: 'keyboard-shortcuts',
              link: '/guide/tutorial/keyboard-shortcuts'
            },
            {
              text: 'launch-app-from-url-in-another-app',
              link: '/guide/tutorial/launch-app-from-url-in-another-app'
            },
            {
              text: 'linux-desktop-actions',
              link: '/guide/tutorial/linux-desktop-actions'
            },
            {
              text: 'mac-app-store-submission-guide',
              link: '/guide/tutorial/mac-app-store-submission-guide'
            },
            {
              text: 'macos-dock',
              link: '/guide/tutorial/macos-dock'
            },
            {
              text: 'message-ports',
              link: '/guide/tutorial/message-ports'
            },
            {
              text: 'multithreading',
              link: '/guide/tutorial/multithreading'
            },
            {
              text: 'native-file-drag-drop',
              link: '/guide/tutorial/native-file-drag-drop'
            },
            {
              text: 'notifications',
              link: '/guide/tutorial/notifications'
            },
            {
              text: 'offscreen-rendering',
              link: '/guide/tutorial/offscreen-rendering'
            },
            {
              text: 'online-offline-events',
              link: '/guide/tutorial/online-offline-events'
            },
            {
              text: 'performance',
              link: '/guide/tutorial/performance'
            },
            {
              text: 'process-model',
              link: '/guide/tutorial/process-model'
            },
            {
              text: 'progress-bar',
              link: '/guide/tutorial/progress-bar'
            },
            {
              text: 'quick-start',
              link: '/guide/tutorial/quick-start'
            },
            {
              text: 'recent-documents',
              link: '/guide/tutorial/recent-documents'
            },
            {
              text: 'repl',
              link: '/guide/tutorial/repl'
            },
            {
              text: 'represented-file',
              link: '/guide/tutorial/represented-file'
            },
            {
              text: 'sandbox',
              link: '/guide/tutorial/sandbox'
            },
            {
              text: 'security',
              link: '/guide/tutorial/security'
            },
            {
              text: 'snapcraft',
              link: '/guide/tutorial/snapcraft'
            },
            {
              text: 'spellchecker',
              link: '/guide/tutorial/spellchecker'
            },
            {
              text: 'support',
              link: '/guide/tutorial/support'
            },
            {
              text: 'testing-on-headless-ci',
              link: '/guide/tutorial/testing-on-headless-ci'
            },
            {
              text: 'tray',
              link: '/guide/tutorial/tray'
            },
            {
              text: 'tutorial-1-prerequisites',
              link: '/guide/tutorial/tutorial-1-prerequisites'
            },
            {
              text: 'tutorial-2-first-app',
              link: '/guide/tutorial/tutorial-2-first-app'
            },
            {
              text: 'tutorial-3-preload',
              link: '/guide/tutorial/tutorial-3-preload'
            },
            {
              text: 'tutorial-4-adding-features',
              link: '/guide/tutorial/tutorial-4-adding-features'
            },
            {
              text: 'tutorial-5-packaging',
              link: '/guide/tutorial/tutorial-5-packaging'
            },
            {
              text: 'tutorial-6-publishing-updating',
              link: '/guide/tutorial/tutorial-6-publishing-updating'
            },
            {
              text: 'updates',
              link: '/guide/tutorial/updates'
            },
            {
              text: 'using-native-node-modules',
              link: '/guide/tutorial/using-native-node-modules'
            },
            {
              text: 'using-pepper-flash-plugin',
              link: '/guide/tutorial/using-pepper-flash-plugin'
            },
            {
              text: 'web-embeds',
              link: '/guide/tutorial/web-embeds'
            },
            {
              text: 'window-customization',
              link: '/guide/tutorial/window-customization'
            },
            {
              text: 'windows-arm',
              link: '/guide/tutorial/windows-arm'
            },
            {
              text: 'windows-store-guide',
              link: '/guide/tutorial/windows-store-guide'
            },
            {
              text: 'windows-taskbar',
              link: '/guide/tutorial/windows-taskbar'
            },

          ],
        },
      ],
      '/config/': [
        {
          text: 'about',
          items: [
            {
              text: 'Web-Dev-For-Beginners',
              link: '/config/about/Web-Dev-For-Beginners'
            },
            {
              text: '1-getting-started-lessons',
              link: '/config/about/1-getting-started-lessons'
            },
            {
              text: '2-js-basics',
              link: '/config/about/2-js-basics'
            },
            {
              text: '4-typing-game',
              link: '/config/about/4-typing-game'
            },
            {
              text: '5-browser-extension',
              link: '/config/about/5-browser-extension'
            },
            {
              text: 'about-browsers',
              link: '/config/about/about-browsers'
            },
            {
              text: 'accessibility',
              link: '/config/about/accessibility'
            },
            {
              text: 'arrays-loops',
              link: '/config/about/arrays-loops'
            },
            {
              text: 'background-tasks-and-performance',
              link: '/config/about/background-tasks-and-performance'
            },
            {
              text: 'bank-project',
              link: '/config/about/bank-project'
            },
            {
              text: 'data-types',
              link: '/config/about/data-types'
            },
            {
              text: 'drawing-to-canvas',
              link: '/config/about/drawing-to-canvas'
            },
            {
              text: 'forms-browsers-local-storage',
              link: '/config/about/forms-browsers-local-storage'
            },
            {
              text: 'functions-methods',
              link: '/config/about/functions-methods'
            },
            {
              text: 'github-basics',
              link: '/config/about/github-basics'
            },
            {
              text: 'introduction',
              link: '/config/about/introduction'
            },
            {
              text: 'intro-to-css',
              link: '/config/about/intro-to-css'
            },
            {
              text: 'intro-to-DOM-and-closures',
              link: '/config/about/intro-to-DOM-and-closures'
            },
            {
              text: 'intro-to-html',
              link: '/config/about/intro-to-html'
            },
            {
              text: 'intro-to-programming-languages',
              link: '/config/about/intro-to-programming-languages'
            },
            {
              text: 'making-decisions',
              link: '/config/about/making-decisions'
            },
            {
              text: 'space-game',
              link: '/config/about/space-game'
            },
            {
              text: 'terrarium',
              link: '/config/about/terrarium'
            },
            {
              text: 'typing-game',
              link: '/config/about/typing-game'
            },

            {
              text: 'using-a-code-editor',
              link: '/config/about/using-a-code-editor'
            }
          ],
        },
        {
          text: 'components',
          items: [
            {
              text: '30-seconds-of-code',
              link: '/config/components/30-seconds-of-code'
            },
            {
              text: 'Community',
              link: '/config/components/Community'
            },
            {
              text: 'D3 works',
              link: '/config/components/D3 works'
            },
            {
              text: 'storybook',
              link: '/config/components/storybook'
            },
            {
              text: 'app-ideas',
              link: '/config/components/app-ideas'
            },
            {
              text: 'Front-End-Checklist',
              link: '/config/components/Front-End-Checklist'
            },
            {
              text: 'reveal.js',
              link: '/config/components/reveal.js'
            },
            {
              text: 'angular.js',
              link: '/config/components/angular.js'
            },
            {
              text: 'html5-boilerplate',
              link: '/config/components/html5-boilerplate'
            },
            {
              text: 'screenshot-to-code',
              link: '/config/components/screenshot-to-code'
            },
            {
              text: 'rails',
              link: '/config/components/rails'
            },
            {
              text: 'ionic-docs',
              link: '/config/components/ionic-docs'
            },

            {
              text: 'hyper',
              link: '/config/components/hyper'
            },

            {
              text: 'What is HTML',
              link: '/config/components/What is HTML'
            },
            {
              text: 'Front-end development',
              link: '/config/components/Front-end development'
            },

            {
              text: 'async_scripts',
              link: '/config/components/async_scripts'
            },

            {
              text: 'github',
              link: '/config/components/github'
            },
            {
              text: 'about-custom-domains-and-github-pages',
              link: '/config/components/about-custom-domains-and-github-pages'
            },
            {
              text: 'about-github-pages',
              link: '/config/components/about-github-pages'
            },
            {
              text: 'about-github-pages-and-jekyll',
              link: '/config/components/about-github-pages-and-jekyll'
            },
            {
              text: 'about-jekyll-build-errors-for-github-pages-sites',
              link: '/config/components/about-jekyll-build-errors-for-github-pages-sites'
            },
            {
              text: 'adding-a-theme-to-your-github-pages-site-using-jekyll',
              link: '/config/components/adding-a-theme-to-your-github-pages-site-using-jekyll'
            },
            {
              text: 'adding-content-to-your-github-pages-site-using-jekyll',
              link: '/config/components/adding-content-to-your-github-pages-site-using-jekyll'
            },
            {
              text: 'changing-the-visibility-of-your-github-pages-site',
              link: '/config/components/changing-the-visibility-of-your-github-pages-site'
            },
            {
              text: 'configuring-a-publishing-source-for-your-github-pages-site',
              link: '/config/components/configuring-a-publishing-source-for-your-github-pages-site'
            },
            {
              text: 'creating-a-custom-404-page-for-your-github-pages-site',
              link: '/config/components/creating-a-custom-404-page-for-your-github-pages-site'
            },
            {
              text: 'creating-a-github-pages-site',
              link: '/config/components/creating-a-github-pages-site'
            },
            {
              text: 'creating-a-github-pages-site-with-jekyll',
              link: '/config/components/creating-a-github-pages-site-with-jekyll'
            },
            {
              text: 'deleting-a-github-pages-site',
              link: '/config/components/deleting-a-github-pages-site'
            },

            {
              text: 'managing-a-custom-domain-for-your-github-pages-site',
              link: '/config/components/managing-a-custom-domain-for-your-github-pages-site'
            },
            {
              text: 'quickstart',
              link: '/config/components/quickstart'
            },
            {
              text: 'securing-your-github-pages-site-with-https',
              link: '/config/components/securing-your-github-pages-site-with-https'
            },
            {
              text: 'setting-a-markdown-processor-for-your-github-pages-site-using-jekyll',
              link: '/config/components/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll'
            },
            {
              text: 'testing-your-github-pages-site-locally-with-jekyll',
              link: '/config/components/testing-your-github-pages-site-locally-with-jekyll'
            },
            {
              text: 'troubleshooting-404-errors-for-github-pages-sites',
              link: '/config/components/troubleshooting-404-errors-for-github-pages-sites'
            },
            {
              text: 'troubleshooting-custom-domains-and-github-pages',
              link: '/config/components/troubleshooting-custom-domains-and-github-pages'
            },
            {
              text: 'troubleshooting-jekyll-build-errors-for-github-pages-sites',
              link: '/config/components/troubleshooting-jekyll-build-errors-for-github-pages-sites'
            },
            {
              text: 'unpublishing-a-github-pages-site',
              link: '/config/components/unpublishing-a-github-pages-site'
            },
            {
              text: 'using-custom-workflows-with-github-pages',
              link: '/config/components/using-custom-workflows-with-github-pages'
            },
            {
              text: 'using-submodules-with-github-pages',
              link: '/config/components/using-submodules-with-github-pages'
            },

            {
              text: 'verifying-your-custom-domain-for-github-pages',
              link: '/config/components/verifying-your-custom-domain-for-github-pages'
            }
          ],
        },
      ],
      '/plugins/': [
        {
          text: 'configuration',
          items: [
            {
              text: 'buddyworks',
              link: '/plugins/configuration/buddyworks'
            },
            {
              text: '1a',
              link: '/plugins/configuration/1a'
            },
            {
              text: '1b',
              link: '/plugins/configuration/1b'
            },
            {
              text: '1c',
              link: '/plugins/configuration/1c'
            },
            {
              text: '1d',
              link: '/plugins/configuration/1d'
            },
            {
              text: '1e',
              link: '/plugins/configuration/1e'
            },
            {
              text: '1f',
              link: '/plugins/configuration/1f'
            },
            {
              text: 'README',
              link: '/plugins/configuration/README'
            },
            {
              text: '2c',
              link: '/plugins/configuration/2c'
            },
            {
              text: '2d',
              link: '/plugins/configuration/2d'
            },            
            {
              text: 'lesson-02',
              link: '/plugins/configuration/lesson-02'
            },
            {
              text: 'Introduction',
              link: '/plugins/configuration/Introduction'
            },            {
              text: 'Common infrastructure',
              link: '/plugins/configuration/Common infrastructure'
            },
            {
              text: 'Common microsyntaxes',
              link: '/plugins/configuration/Common microsyntaxes'
            },
            {
              text: 'URLs',
              link: '/plugins/configuration/URLs'
            },
            {
              text: 'Common DOM interfaces',
              link: '/plugins/configuration/Common DOM interfaces'
            },
            {
              text: 'Safe passing of structured data',
              link: '/plugins/configuration/Safe passing of structured data'
            },
            {
              text: 'HTML documents',
              link: '/plugins/configuration/HTML documents'
            },
            {
              text: 'The elements of HTML',
              link: '/plugins/configuration/The elements of HTML'
            },
            {
              text: 'this',
              link: '/plugins/configuration/this'
            },
            {
              text: 'sleep',
              link: '/plugins/configuration/sleep'
            },
            {
              text: 'reset',
              link: '/plugins/configuration/reset'
            },
            {
              text: 'yes-no',
              link: '/plugins/configuration/yes-no'
            },
            {
              text: 'shapes',
              link: '/plugins/configuration/shapes'
            },
            {
              text: 'gcd-lcm',
              link: '/plugins/configuration/gcd-lcm'
            },
            {
              text: 'k-means',
              link: '/plugins/configuration/k-means'
            },
            {
              text: 'listify',
              link: '/plugins/configuration/listify'
            },

            {
              text: 'get',
              link: '/plugins/configuration/get'
            },
            {
              text: 'lcm',
              link: '/plugins/configuration/lcm'
            },
            {
              text: 'pad',
              link: '/plugins/configuration/pad'
            },
            {
              text: 'counter',
              link: '/plugins/configuration/counter'
            },
            {
              text: 'aliases',
              link: '/plugins/configuration/aliases'
            },
            {
              text: 'closures',
              link: '/plugins/configuration/closures'
            },
            {
              text: 'currying',
              link: '/plugins/configuration/currying'
            },
            {
              text: 'equality',
              link: '/plugins/configuration/equality'
            },

            {
              text: 'heapsort',
              link: '/plugins/configuration/heapsort'
            },
            {
              text: 'is-prime',
              link: '/plugins/configuration/is-prime'
            },
            {
              text: 'midpoint',
              link: '/plugins/configuration/midpoint'
            },
            {
              text: 'powerset',
              link: '/plugins/configuration/powerset'
            },
            {
              text: 'clearfix',
              link: '/plugins/configuration/clearfix'
            },
            {
              text: 'drop-cap',
              link: '/plugins/configuration/drop-cap'
            },
            {
              text: 'stashing',
              link: '/plugins/configuration/stashing'
            },
            {
              text: 'detect-device-type',
              link: '/plugins/configuration/detect-device-type'
            },
            {
              text: 'min-max-date',
              link: '/plugins/configuration/min-max-date'
            },
            {
              text: 'map-dictionary',
              link: '/plugins/configuration/map-dictionary'
            },
            {
              text: 'months-diff',
              link: '/plugins/configuration/months-diff'
            },
            {
              text: 'enum',
              link: '/plugins/configuration/enum'
            },
            {
              text: 'iife',
              link: '/plugins/configuration/iife'
            },
            {
              text: 'lifecycle-hooks',
              link: '/plugins/configuration/lifecycle-hooks'
            },
            {
              text: 'system-font-stack',
              link: '/plugins/configuration/system-font-stack'
            },
            {
              text: '10-css-background-patterns',
              link: '/plugins/configuration/10-css-background-patterns'
            },
            {
              text: 'random-value-pure-functions',
              link: '/plugins/configuration/random-value-pure-functions'
            },
            {
              text: 'most-frequent-array-element',
              link: '/plugins/configuration/most-frequent-array-element'
            },
            {
              text: 'is-anagram',
              link: '/plugins/configuration/is-anagram'
            },
            {
              text: 'squiggle-link-hover-effect',
              link: '/plugins/configuration/squiggle-link-hover-effect'
            },
            {
              text: 'rebase-onto-branch',
              link: '/plugins/configuration/rebase-onto-branch'
            },
            {
              text: 'collection-is-empty',
              link: '/plugins/configuration/collection-is-empty'
            },
            {
              text: 'string-is-empty',
              link: '/plugins/configuration/string-is-empty'
            },
            {
              text: 'clamp-or-map-number-to-range',
              link: '/plugins/configuration/clamp-or-map-number-to-range'
            },
            {
              text: 'image-overlay-hover',
              link: '/plugins/configuration/image-overlay-hover'
            },
            {
              text: 'create-html-elements',
              link: '/plugins/configuration/create-html-elements'
            },
            {
              text: 'display-empty-links',
              link: '/plugins/configuration/display-empty-links'
            }
          ],
        },
      ],
    },
  },
  transformPageData(pageData) {
    const canonicalUrl = `${ogUrl}/${pageData.relativePath}`
      .replace(/\/index\.md$/, '/')
      .replace(/\.md$/, '/')
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.unshift(
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:title', content: pageData.title }],
    )
    return pageData
  },
  markdown: {
    codeTransformers: [transformerTwoslash()],
  },
  buildEnd,
})
