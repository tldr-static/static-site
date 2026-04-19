export default {
  title: 'TLDR',
  description: 'Simple and minimal apps that solve real problems',
  // base: '/static-site/',
  cleanUrls: true,
  head: [
    ['meta', { name: 'keywords', content: 'TLDR, app development, AI, iOS, Swift, VitePress, startup, EmotionCare, PackCheck, ReplyBridge' }],
    ['meta', { name: 'author', content: 'TLDR' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'TLDR — Simple and minimal apps' }],
    ['meta', { property: 'og:description', content: 'We build digital products with a simple, minimal philosophy.' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Services', link: '/services' },
      { text: 'Products', link: '/products' },
      {
        text: 'ReplyBridge',
        items: [
          { text: 'Get started (install & setup)', link: '/replybridge/getting-started' },
          { text: 'Overview', link: '/replybridge/' },
          { text: 'Connect Instagram', link: '/replybridge/integration' },
          { text: 'How to use', link: '/replybridge/usage' },
          { text: 'Instagram mini-series', link: '/replybridge/series/' },
          { text: 'Marketing & tips', link: '/replybridge/marketing/' }
        ]
      },
      { text: 'Blog', link: '/blog/' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Contact', link: '/contact' },
      {
        text: 'Legal',
        items: [
          { text: 'Privacy Policy', link: '/privacy-policy' },
          { text: 'Terms & Conditions', link: '/terms' },
          { text: 'Cookie Policy', link: '/cookie-policy' }
        ]
      }
    ],
    footer: {
      message: '<a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms & Conditions</a> | <a href="/cookie-policy">Cookie Policy</a>',
      copyright: 'Copyright © 2023-present <a href="/">TLDR</a>'
    },
    sidebar: {
      '/replybridge/': [
        {
          text: 'ReplyBridge',
          items: [
            { text: 'Get started', link: '/replybridge/getting-started' },
            { text: 'Overview', link: '/replybridge/' },
            { text: 'Connect Instagram', link: '/replybridge/integration' },
            { text: 'How to use', link: '/replybridge/usage' }
          ]
        },
        {
          text: 'Instagram mini-series',
          collapsed: false,
          items: [
            { text: 'Series hub', link: '/replybridge/series/' },
            { text: 'Ep 1 — Leads in comments', link: '/replybridge/series/01-never-lose-a-lead-in-comments' },
            { text: 'Ep 2 — DM vs public reply', link: '/replybridge/series/02-dm-or-public-reply' },
            { text: 'Ep 3 — Keywords & once', link: '/replybridge/series/03-keywords-once' },
            { text: 'Ep 4 — End date', link: '/replybridge/series/04-automation-end-date' },
            { text: 'Ep 5 — Sales & events', link: '/replybridge/series/05-sales-and-events' },
            { text: 'Ep 6 — Official path', link: '/replybridge/series/06-official-path' }
          ]
        },
        {
          text: 'Marketing',
          collapsed: false,
          items: [
            { text: 'Hub', link: '/replybridge/marketing/' },
            { text: 'Content strategy', link: '/replybridge/marketing/content-strategy' },
            { text: 'Practical tips', link: '/replybridge/marketing/tips' },
            { text: 'Card series guide', link: '/replybridge/marketing/series-overview' }
          ]
        }
      ]
    }
  }
}
