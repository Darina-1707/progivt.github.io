(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var s=n(0),a=n.n(s);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),j=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=j(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=j(n),d=s,b=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return n?a.a.createElement(b,o(o({ref:t},l),{},{components:n})):a.a.createElement(b,o({ref:t},l))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var s=n(3),a=n(0),r=n.n(a),i=n(247),o=n.n(i);o.a.locale("ru");var c=function(e){function t(t){var n;return(n=e.call(this,t)||this).expiredText="\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0448\u043b\u043e, \u043b\u0430\u0431\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430!",n.activeText="\u0414\u043e \u0441\u0434\u0430\u0447\u0438 \u043b\u0430\u0431\u044b: ",n.supressOutput=!1,n.deadline="",n.deadlineFormatted="",n.deadlineLeft=n.expiredText,n.deadlineM=0,n.updateInterval=null,n}Object(s.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.deadlineFormatted=o.a.tz(this.props.deadline,"Asia/Yakutsk").format("lll"),this.props.expiredText&&(this.expiredText=this.props.expiredText),this.props.activeText&&(this.activeText=this.props.activeText),this.props.supressOutput&&(this.supressOutput=this.props.supressOutput),this.update(),this.updateInterval||(this.updateInterval=setInterval(this.update.bind(this),1e3))},n.update=function(){var e;this.deadline=(e=this.props.deadline,o.a.tz(e,"Asia/Yakutsk").diff(o.a.tz("Asia/Yakutsk"))>0?e:""),""!=this.deadline?(this.deadlineM=o.a.tz(this.deadline,"Asia/Yakutsk"),this.deadlineLeft=this.activeText+this.deadlineM.diff(o()(),"days")+" \u0434\u043d. "+o.a.utc(this.deadlineM.diff(o()())).format("HH:mm:ss")):this.deadlineLeft=this.expiredText,this.forceUpdate()},n.render=function(){return this.supressOutput?r.a.createElement("div",null,this.deadlineLeft):r.a.createElement("div",null,"\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435: ",r.a.createElement("a",{href:this.props.link},this.props.link),r.a.createElement("br",null),"\u0414\u0435\u0434\u043b\u0430\u0439\u043d: ",this.deadlineFormatted,r.a.createElement("br",null),r.a.createElement("br",null),this.deadlineLeft)},n.componentWillUnmount=function(){clearInterval(this.updateInterval)},t}(r.a.Component)},248:function(e,t,n){var s={"./af":107,"./af.js":107,"./ar":108,"./ar-dz":109,"./ar-dz.js":109,"./ar-kw":110,"./ar-kw.js":110,"./ar-ly":111,"./ar-ly.js":111,"./ar-ma":112,"./ar-ma.js":112,"./ar-sa":113,"./ar-sa.js":113,"./ar-tn":114,"./ar-tn.js":114,"./ar.js":108,"./az":115,"./az.js":115,"./be":116,"./be.js":116,"./bg":117,"./bg.js":117,"./bm":118,"./bm.js":118,"./bn":119,"./bn-bd":120,"./bn-bd.js":120,"./bn.js":119,"./bo":121,"./bo.js":121,"./br":122,"./br.js":122,"./bs":123,"./bs.js":123,"./ca":124,"./ca.js":124,"./cs":125,"./cs.js":125,"./cv":126,"./cv.js":126,"./cy":127,"./cy.js":127,"./da":128,"./da.js":128,"./de":129,"./de-at":130,"./de-at.js":130,"./de-ch":131,"./de-ch.js":131,"./de.js":129,"./dv":132,"./dv.js":132,"./el":133,"./el.js":133,"./en-au":134,"./en-au.js":134,"./en-ca":135,"./en-ca.js":135,"./en-gb":136,"./en-gb.js":136,"./en-ie":137,"./en-ie.js":137,"./en-il":138,"./en-il.js":138,"./en-in":139,"./en-in.js":139,"./en-nz":140,"./en-nz.js":140,"./en-sg":141,"./en-sg.js":141,"./eo":142,"./eo.js":142,"./es":143,"./es-do":144,"./es-do.js":144,"./es-mx":145,"./es-mx.js":145,"./es-us":146,"./es-us.js":146,"./es.js":143,"./et":147,"./et.js":147,"./eu":148,"./eu.js":148,"./fa":149,"./fa.js":149,"./fi":150,"./fi.js":150,"./fil":151,"./fil.js":151,"./fo":152,"./fo.js":152,"./fr":153,"./fr-ca":154,"./fr-ca.js":154,"./fr-ch":155,"./fr-ch.js":155,"./fr.js":153,"./fy":156,"./fy.js":156,"./ga":157,"./ga.js":157,"./gd":158,"./gd.js":158,"./gl":159,"./gl.js":159,"./gom-deva":160,"./gom-deva.js":160,"./gom-latn":161,"./gom-latn.js":161,"./gu":162,"./gu.js":162,"./he":163,"./he.js":163,"./hi":164,"./hi.js":164,"./hr":165,"./hr.js":165,"./hu":166,"./hu.js":166,"./hy-am":167,"./hy-am.js":167,"./id":168,"./id.js":168,"./is":169,"./is.js":169,"./it":170,"./it-ch":171,"./it-ch.js":171,"./it.js":170,"./ja":172,"./ja.js":172,"./jv":173,"./jv.js":173,"./ka":174,"./ka.js":174,"./kk":175,"./kk.js":175,"./km":176,"./km.js":176,"./kn":177,"./kn.js":177,"./ko":178,"./ko.js":178,"./ku":179,"./ku.js":179,"./ky":180,"./ky.js":180,"./lb":181,"./lb.js":181,"./lo":182,"./lo.js":182,"./lt":183,"./lt.js":183,"./lv":184,"./lv.js":184,"./me":185,"./me.js":185,"./mi":186,"./mi.js":186,"./mk":187,"./mk.js":187,"./ml":188,"./ml.js":188,"./mn":189,"./mn.js":189,"./mr":190,"./mr.js":190,"./ms":191,"./ms-my":192,"./ms-my.js":192,"./ms.js":191,"./mt":193,"./mt.js":193,"./my":194,"./my.js":194,"./nb":195,"./nb.js":195,"./ne":196,"./ne.js":196,"./nl":197,"./nl-be":198,"./nl-be.js":198,"./nl.js":197,"./nn":199,"./nn.js":199,"./oc-lnc":200,"./oc-lnc.js":200,"./pa-in":201,"./pa-in.js":201,"./pl":202,"./pl.js":202,"./pt":203,"./pt-br":204,"./pt-br.js":204,"./pt.js":203,"./ro":205,"./ro.js":205,"./ru":206,"./ru.js":206,"./sd":207,"./sd.js":207,"./se":208,"./se.js":208,"./si":209,"./si.js":209,"./sk":210,"./sk.js":210,"./sl":211,"./sl.js":211,"./sq":212,"./sq.js":212,"./sr":213,"./sr-cyrl":214,"./sr-cyrl.js":214,"./sr.js":213,"./ss":215,"./ss.js":215,"./sv":216,"./sv.js":216,"./sw":217,"./sw.js":217,"./ta":218,"./ta.js":218,"./te":219,"./te.js":219,"./tet":220,"./tet.js":220,"./tg":221,"./tg.js":221,"./th":222,"./th.js":222,"./tk":223,"./tk.js":223,"./tl-ph":224,"./tl-ph.js":224,"./tlh":225,"./tlh.js":225,"./tr":226,"./tr.js":226,"./tzl":227,"./tzl.js":227,"./tzm":228,"./tzm-latn":229,"./tzm-latn.js":229,"./tzm.js":228,"./ug-cn":230,"./ug-cn.js":230,"./uk":231,"./uk.js":231,"./ur":232,"./ur.js":232,"./uz":233,"./uz-latn":234,"./uz-latn.js":234,"./uz.js":233,"./vi":235,"./vi.js":235,"./x-pseudo":236,"./x-pseudo.js":236,"./yo":237,"./yo.js":237,"./zh-cn":238,"./zh-cn.js":238,"./zh-hk":239,"./zh-hk.js":239,"./zh-mo":240,"./zh-mo.js":240,"./zh-tw":241,"./zh-tw.js":241};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id=248},291:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},292:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/js03if-node-8127c1aec14a1bd5e48d5b44e8419232.png"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var s=n(2),a=n(6),r=(n(0),n(100)),i=n(244),o={id:"js03if",title:"\u041b\u04203. \u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u0432\u0435\u0442\u0432\u043b\u0435\u043d\u0438\u044f"},c={unversionedId:"js03if",id:"js03if",isDocsHomePage:!1,title:"\u041b\u04203. \u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u0432\u0435\u0442\u0432\u043b\u0435\u043d\u0438\u044f",description:"\u0421\u0434\u0430\u0432\u0430\u0442\u044c, \u043a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438.",source:"@site/docs/js03if.md",slug:"/js03if",permalink:"/docs/js03if",editUrl:"https://github.com/progivt/progivt.github.io/edit/main/docs/js03if.md",version:"current",sidebar:"someSidebar",previous:{title:"\u041b\u04202. \u0414\u0432\u0438\u0433\u0430\u0435\u043c \u0441\u043f\u0440\u0430\u0439\u0442",permalink:"/docs/js02sprite"},next:{title:"\u041b\u04204. \u0426\u0438\u043a\u043b\u044b",permalink:"/docs/js04loop"}},l=[],j={rightToc:l};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},j,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u0421\u0434\u0430\u0432\u0430\u0442\u044c, \u043a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/"}),"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438"),"."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(s.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(s.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)(i.a,{link:"https://git.io/JT5Gs",deadline:"2020-11-11 23:59",title:"\u041b\u04203. \u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u0432\u0435\u0442\u0432\u043b\u0435\u043d\u0438\u044f",mdxType:"DeadlineDisplay"}))),Object(r.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u0434\u0430\u0442\u044c \u0447\u0435\u0442\u044b\u0440\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u043d\u043e\u043c\u0435\u0440\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u0432 \u043a\u043e\u043d\u0446\u0435 pdf-\u0444\u0430\u0439\u043b\u0430 \u0441 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f. \u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043d\u043e\u043c\u0435\u0440 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0433\u0440\u0443\u043f\u043f\u044b \u0432 ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"https://docs.google.com/spreadsheets/d/13NEztGQWOVKS7TdsKctvaWNkH0_pQDyrPta67bUvOLE"}),"\u0422\u0430\u0431\u043b\u0438\u0447\u043a\u0435"),", \u0432 pdf-\u0444\u0430\u0439\u043b\u0435 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0422\u0438\u043c\u043e\u0444\u0435\u0435\u0432 \u0418\u043b\u044c\u044f \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0433\u0440\u0443\u043f\u043f\u044b 28-\u0439. \u0417\u0430\u0433\u043b\u044f\u0434\u044b\u0432\u0430\u0435\u043c \u0432 \u043a\u043e\u043d\u0435\u0446 \u0444\u0430\u0439\u043b\u0430 \u0441 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438, \u0432\u0438\u0434\u0438\u043c"),Object(r.b)("p",null,Object(r.b)("img",{alt:"\u0417\u0430\u0434\u0430\u0447\u0438 \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0443 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430",src:n(291).default,title:"\u0437\u0430\u0434\u0430\u0447\u0438 \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0443 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430"})),Object(r.b)("p",null,"\u0417\u043d\u0430\u0447\u0438\u0442, \u0418\u043b\u044c\u044f \u0434\u0435\u043b\u0430\u0435\u0442 \u0437\u0430\u0434\u0430\u0447\u0438 4, 7, 10 \u0438 14."),Object(r.b)("p",null,"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 Node.js. \u042d\u0442\u043e \u0441\u0440\u0435\u0434\u0430 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c \u043d\u0430 JavaScript \u0432\u043d\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u041e\u043d\u0430 \u0448\u0438\u0440\u043e\u043a\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u042d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b Docusaurus, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f Node.js. \u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0441 ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"https://nodejs.org/"}),"\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430"),". "),Object(r.b)("p",null,Object(r.b)("img",{alt:"\u0421\u0430\u0439\u0442 Node.js",src:n(292).default,title:"\u0421\u0430\u0439\u0442 Node.js"})," "),Object(r.b)("p",null,"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0443\u0436\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u0435\u0435 \u043d\u0430\u0434\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u043d\u043e\u0432\u0430. \u0412 \u043a\u0430\u0436\u0434\u043e\u043c \u0437\u0430\u0434\u0430\u043d\u0438\u0438 \u043d\u0430\u0434\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043a\u0430\u043a\u0443\u044e-\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438\u043e\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439. \u041a\u0430\u043a \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0447\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u043a \u043d\u0430\u0434\u043e? \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0437\u0432\u0430\u0442\u044c \u0435\u0435 \u043f\u043e\u0441\u043b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0435\u044e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u0441\u043b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u0442\u043e \u0435\u0441\u0442\u044c \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0444\u0438\u0433\u0443\u0440\u043d\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430 \u0432 ",Object(r.b)("inlineCode",{parentName:"p"},"function{}"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-javascript"}),"function f(x, y, z){\n    if (x+y+z < x*y*z && x+y+z < x*y+z)\n        return x+y+z;\n    if (x*y*z < x+y+z && x*y*z < x*y+z)\n        return x*y*z; \n    return x*y + z;\n}\n\nconsole.log(f(1,1,1));\nconsole.log(f(1,2,3));\nconsole.log(f(4,2,2));\n")),Object(r.b)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u043d\u0430 JS \u0441 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449 Node.js, \u043d\u0430\u0434\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c ",Object(r.b)("inlineCode",{parentName:"p"},"node <\u0438\u043c\u044f\u0444\u0430\u0439\u043b\u0430>"),". \u0415\u0441\u043b\u0438 \u043c\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u043c \u0442\u0435\u043a\u0441\u0442 \u0432\u044b\u0448\u0435 \u0432 ",Object(r.b)("inlineCode",{parentName:"p"},"if-00.js"),", \u0438 \u043f\u0435\u0440\u0435\u0439\u0434\u0435\u043c \u0432 \u043f\u0430\u043f\u043a\u0443, \u0433\u0434\u0435 \u043e\u043d \u043b\u0435\u0436\u0438\u0442, \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435, \u0442\u043e \u0432\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",Object(r.b)("inlineCode",{parentName:"p"},"node if-00.js")," \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043f\u0435\u0447\u0430\u0442\u0438 \u0442\u0440\u0435\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439:"),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{}),"C:\\users\\student>cd js03if\nC:\\users\\student\\js03if>node if-00.js\n1\n5\n8\n\nC:\\users\\student\\js03if>\n")),Object(r.b)("p",null,"\u041d\u043e \u0447\u0430\u0441\u0442\u043e \u0446\u0435\u043b\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0430\u0439\u043b\u043e\u0432. \u041d\u043e \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043d\u0443\u0436\u043d\u043e ",Object(r.b)("em",{parentName:"p"},"\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")," \u0438\u0437 \u0444\u0430\u0439\u043b\u0430. \u041f\u043e\u044d\u0442\u043e\u043c\u0443:"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(s.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(s.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u0417\u0430\u0434\u0430\u043d\u0438\u044f \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u0432\u0430\u0448\u0438 \u0444\u0430\u0439\u043b\u044b \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u043b\u0438\u0441\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439 \u0432\u0438\u0434\u0430",Object(r.b)("br",null),"\n",Object(r.b)("inlineCode",{parentName:"p"},"module.exports=<\u0438\u043c\u044f \u0432\u0430\u0448\u0435\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438>")))),Object(r.b)("p",null,"\u0412 Node \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u043e\u0439 \u043a\u043e\u0434\u0430 \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",Object(r.b)("inlineCode",{parentName:"p"},"require()"),". \u0415\u0439 \u0434\u0430\u0435\u0442\u0441\u044f \u0438\u043c\u044f \u0444\u0430\u0439\u043b\u0430, \u0430 \u043e\u043d\u0430 \u043e\u0431\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043a \u043d\u0435\u043c\u0443 \u0438 \u0434\u043e\u0441\u0442\u0430\u0435\u0442, \u0442\u043e \u0447\u0442\u043e \u0438\u0437 \u043d\u0435\u0433\u043e \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 if-00.js \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u043a\u043e\u0439 ",Object(r.b)("inlineCode",{parentName:"p"},"module.exports=f;")," \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 Node:"),Object(r.b)("pre",null,Object(r.b)("code",Object(s.a)({parentName:"pre"},{}),"C:\\users\\studentjs03-if>node\nWelcome to Node.js v12.19.0.\nType \".help\" for more information.\n> f = require('./if-00.js');\n[Function: f]\n> f(1,2,7)\n10\n>\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435")," \u043d\u0430 \u0442\u043e\u0447\u043a\u0443 \u0438 \u043a\u043e\u0441\u0443\u044e \u0447\u0435\u0440\u0442\u0443 (\u0447\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442 \xab\u0442\u0435\u043a\u0443\u0449\u0430\u044f \u043f\u0430\u043f\u043a\u0430\xbb) \u043f\u0435\u0440\u0435\u0434 \u0438\u043c\u0435\u043d\u0435\u043c \u0444\u0430\u0439\u043b\u0430. \u0411\u0435\u0437 \u043d\u0438\u0445 ",Object(r.b)("inlineCode",{parentName:"p"},"require()")," \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043a\u0430\u0442\u044c \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043c\u0435\u0441\u0442\u0430\u0445 \u0438 \u043d\u0435 \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442!"),Object(r.b)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c \u043b\u0443\u0447\u0448\u0435 \u0443\u044f\u0441\u043d\u0438\u0442\u044c \u0441\u0445\u0435\u043c\u0443 \u0440\u0430\u0431\u043e\u0442\u044b, \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u0438\u043c\u0435\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u043c\u0435\u0440 ",Object(r.b)("inlineCode",{parentName:"p"},"if-00.js")," \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 0,\n\u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 ",Object(r.b)("em",{parentName:"p"},"\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0443\u044e")," \u043e\u0448\u0438\u0431\u043a\u0443. \u0422\u0435\u043c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u043a\u043e\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442.\n\u0414\u043b\u044f \u0440\u0430\u0437\u043c\u0438\u043d\u043a\u0438 \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0439\u0442\u0438 \u0438 \u0438\u0441\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u043e\u0448\u0438\u0431\u043a\u0443.\n\u0417\u0430\u0442\u0435\u043c \u0437\u0430\u0439\u043c\u0438\u0442\u0435\u0441\u044c \u0441\u0432\u043e\u0438\u043c\u0438 \u0437\u0430\u0434\u0430\u0447\u0430\u043c\u0438 \u043f\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u043c. \u0421\u0434\u0430\u0432\u0430\u0442\u044c, \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e, \u0440\u0430\u0437\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u043a\u043e\u043c\u043c\u0438\u0442\u0430\u043c\u0438. \u0423\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b!"))}p.isMDXComponent=!0}}]);