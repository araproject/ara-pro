const config = {
  siteTitle: 'aradechoco',
  siteTitleShort: 'aradechoco',
  siteTitleAlt: 'aradechoco',
  siteLogo: '/logos/tania.jpg',
  siteUrl: 'https://aradechoco.com',
  repo: 'https://github.com/aradechoco',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Seorang blogger & freelancer amatiran. Situs web ini dibuat untuk tempat mendokumentasikan apa saja.',
  siteRss: '/rss.xml',
  googleAnalyticsID: '#',
  postDefaultCategoryID: 'Tech',
  commentsApi: 'https://tania-comments-api.herokuapp.com/comments',
  newsletter: 'https://aradechoco.substack.com',
  newsletterEmbed: 'https://aradechoco.substack.com/embed',
  userName: 'aradechoco',
  userEmail: 'aradechoco@gmail.com',
  userTwitter: 'aradechoco',
  menuLinks: [
    {
      name: 'About',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
