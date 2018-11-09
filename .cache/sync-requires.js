// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/simonxu/Projects/Github-simjxu/gatsby-themush/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/simonxu/Projects/Github-simjxu/gatsby-themush/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/simonxu/Projects/Github-simjxu/gatsby-themush/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/simonxu/Projects/Github-simjxu/gatsby-themush/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/simonxu/Projects/Github-simjxu/gatsby-themush/src/pages/index.js")),
  "component---src-pages-my-files-js": preferDefault(require("/Users/simonxu/Projects/Github-simjxu/gatsby-themush/src/pages/my-files.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/simonxu/Projects/Github-simjxu/gatsby-themush/src/pages/projects.js"))
}

