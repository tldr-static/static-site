export default {
  title: 'TLDR',
  description: 'Simple and minimal apps that solve real problems',
  // base: '/static-site/',
  cleanUrls: true,
  head: [
    ['meta', { name: 'keywords', content: 'TLDR, 앱 개발, AI, iOS, Swift, VitePress, 스타트업, EmotionCare, PackCheck' }],
    ['meta', { name: 'author', content: 'TLDR' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'TLDR — Simple and minimal apps' }],
    ['meta', { property: 'og:description', content: '심플하고 미니멀한 철학으로 문제를 해결하는 디지털 제품을 만듭니다.' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Services', link: '/services' },
      { text: 'Products', link: '/products' },
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
    }
  }
}
