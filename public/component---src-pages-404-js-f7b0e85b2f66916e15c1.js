(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(148);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(141),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var s=n(143),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},143:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},144:function(e){e.exports={data:{site:{siteMetadata:{title:"The Mush"}}}}},145:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(48),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=s},146:function(e,t,n){},148:function(e,t,n){"use strict";var a=n(144),r=n(0),i=n.n(r),u=n(4),o=n.n(u),c=n(149),s=n.n(c),l=n(142),d=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"#2f3143",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},m=(n(146),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});m.propTypes={children:o.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-404-js-f7b0e85b2f66916e15c1.js.map