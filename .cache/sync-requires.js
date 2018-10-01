// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/home/simon/Projects/Github-simjxu/gatsby-themush/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/home/simon/Projects/Github-simjxu/gatsby-themush/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/simon/Projects/Github-simjxu/gatsby-themush/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/simon/Projects/Github-simjxu/gatsby-themush/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/simon/Projects/Github-simjxu/gatsby-themush/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/simon/Projects/Github-simjxu/gatsby-themush/src/pages/index.js")),
  "component---src-pages-my-files-js": preferDefault(require("/home/simon/Projects/Github-simjxu/gatsby-themush/src/pages/my-files.js"))
}

