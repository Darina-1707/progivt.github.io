(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var s=n(0),a=n.n(s);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j=a.a.createContext({}),c=function(e){var t=a.a.useContext(j),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(j.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,j=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=s,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return n?a.a.createElement(m,o(o({ref:t},j),{},{components:n})):a.a.createElement(m,o({ref:t},j))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var j=2;j<r;j++)i[j]=n[j];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n(3),a=n(0),r=n.n(a),i=n(247),o=n.n(i);o.a.locale("ru");var l=function(e){function t(t){var n;return(n=e.call(this,t)||this).expiredText="\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0448\u043b\u043e, \u043b\u0430\u0431\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430!",n.activeText="\u0414\u043e \u0441\u0434\u0430\u0447\u0438 \u043b\u0430\u0431\u044b: ",n.supressOutput=!1,n.deadline="",n.deadlineFormatted="",n.deadlineLeft=n.expiredText,n.deadlineM=0,n.updateInterval=null,n}Object(s.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.deadlineFormatted=o.a.tz(this.props.deadline,"Asia/Yakutsk").format("lll"),this.props.expiredText&&(this.expiredText=this.props.expiredText),this.props.activeText&&(this.activeText=this.props.activeText),this.props.supressOutput&&(this.supressOutput=this.props.supressOutput),this.update(),this.updateInterval||(this.updateInterval=setInterval(this.update.bind(this),1e3))},n.update=function(){var e;this.deadline=(e=this.props.deadline,o.a.tz(e,"Asia/Yakutsk").diff(o.a.tz("Asia/Yakutsk"))>0?e:""),""!=this.deadline?(this.deadlineM=o.a.tz(this.deadline,"Asia/Yakutsk"),this.deadlineLeft=this.activeText+this.deadlineM.diff(o()(),"days")+" \u0434\u043d. "+o.a.utc(this.deadlineM.diff(o()())).format("HH:mm:ss")):this.deadlineLeft=this.expiredText,this.forceUpdate()},n.render=function(){return this.supressOutput?r.a.createElement("div",null,this.deadlineLeft):r.a.createElement("div",null,"\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435: ",r.a.createElement("a",{href:this.props.link},this.props.link),r.a.createElement("br",null),"\u0414\u0435\u0434\u043b\u0430\u0439\u043d: ",this.deadlineFormatted,r.a.createElement("br",null),r.a.createElement("br",null),this.deadlineLeft)},n.componentWillUnmount=function(){clearInterval(this.updateInterval)},t}(r.a.Component)},248:function(e,t,n){var s={"./af":107,"./af.js":107,"./ar":108,"./ar-dz":109,"./ar-dz.js":109,"./ar-kw":110,"./ar-kw.js":110,"./ar-ly":111,"./ar-ly.js":111,"./ar-ma":112,"./ar-ma.js":112,"./ar-sa":113,"./ar-sa.js":113,"./ar-tn":114,"./ar-tn.js":114,"./ar.js":108,"./az":115,"./az.js":115,"./be":116,"./be.js":116,"./bg":117,"./bg.js":117,"./bm":118,"./bm.js":118,"./bn":119,"./bn-bd":120,"./bn-bd.js":120,"./bn.js":119,"./bo":121,"./bo.js":121,"./br":122,"./br.js":122,"./bs":123,"./bs.js":123,"./ca":124,"./ca.js":124,"./cs":125,"./cs.js":125,"./cv":126,"./cv.js":126,"./cy":127,"./cy.js":127,"./da":128,"./da.js":128,"./de":129,"./de-at":130,"./de-at.js":130,"./de-ch":131,"./de-ch.js":131,"./de.js":129,"./dv":132,"./dv.js":132,"./el":133,"./el.js":133,"./en-au":134,"./en-au.js":134,"./en-ca":135,"./en-ca.js":135,"./en-gb":136,"./en-gb.js":136,"./en-ie":137,"./en-ie.js":137,"./en-il":138,"./en-il.js":138,"./en-in":139,"./en-in.js":139,"./en-nz":140,"./en-nz.js":140,"./en-sg":141,"./en-sg.js":141,"./eo":142,"./eo.js":142,"./es":143,"./es-do":144,"./es-do.js":144,"./es-mx":145,"./es-mx.js":145,"./es-us":146,"./es-us.js":146,"./es.js":143,"./et":147,"./et.js":147,"./eu":148,"./eu.js":148,"./fa":149,"./fa.js":149,"./fi":150,"./fi.js":150,"./fil":151,"./fil.js":151,"./fo":152,"./fo.js":152,"./fr":153,"./fr-ca":154,"./fr-ca.js":154,"./fr-ch":155,"./fr-ch.js":155,"./fr.js":153,"./fy":156,"./fy.js":156,"./ga":157,"./ga.js":157,"./gd":158,"./gd.js":158,"./gl":159,"./gl.js":159,"./gom-deva":160,"./gom-deva.js":160,"./gom-latn":161,"./gom-latn.js":161,"./gu":162,"./gu.js":162,"./he":163,"./he.js":163,"./hi":164,"./hi.js":164,"./hr":165,"./hr.js":165,"./hu":166,"./hu.js":166,"./hy-am":167,"./hy-am.js":167,"./id":168,"./id.js":168,"./is":169,"./is.js":169,"./it":170,"./it-ch":171,"./it-ch.js":171,"./it.js":170,"./ja":172,"./ja.js":172,"./jv":173,"./jv.js":173,"./ka":174,"./ka.js":174,"./kk":175,"./kk.js":175,"./km":176,"./km.js":176,"./kn":177,"./kn.js":177,"./ko":178,"./ko.js":178,"./ku":179,"./ku.js":179,"./ky":180,"./ky.js":180,"./lb":181,"./lb.js":181,"./lo":182,"./lo.js":182,"./lt":183,"./lt.js":183,"./lv":184,"./lv.js":184,"./me":185,"./me.js":185,"./mi":186,"./mi.js":186,"./mk":187,"./mk.js":187,"./ml":188,"./ml.js":188,"./mn":189,"./mn.js":189,"./mr":190,"./mr.js":190,"./ms":191,"./ms-my":192,"./ms-my.js":192,"./ms.js":191,"./mt":193,"./mt.js":193,"./my":194,"./my.js":194,"./nb":195,"./nb.js":195,"./ne":196,"./ne.js":196,"./nl":197,"./nl-be":198,"./nl-be.js":198,"./nl.js":197,"./nn":199,"./nn.js":199,"./oc-lnc":200,"./oc-lnc.js":200,"./pa-in":201,"./pa-in.js":201,"./pl":202,"./pl.js":202,"./pt":203,"./pt-br":204,"./pt-br.js":204,"./pt.js":203,"./ro":205,"./ro.js":205,"./ru":206,"./ru.js":206,"./sd":207,"./sd.js":207,"./se":208,"./se.js":208,"./si":209,"./si.js":209,"./sk":210,"./sk.js":210,"./sl":211,"./sl.js":211,"./sq":212,"./sq.js":212,"./sr":213,"./sr-cyrl":214,"./sr-cyrl.js":214,"./sr.js":213,"./ss":215,"./ss.js":215,"./sv":216,"./sv.js":216,"./sw":217,"./sw.js":217,"./ta":218,"./ta.js":218,"./te":219,"./te.js":219,"./tet":220,"./tet.js":220,"./tg":221,"./tg.js":221,"./th":222,"./th.js":222,"./tk":223,"./tk.js":223,"./tl-ph":224,"./tl-ph.js":224,"./tlh":225,"./tlh.js":225,"./tr":226,"./tr.js":226,"./tzl":227,"./tzl.js":227,"./tzm":228,"./tzm-latn":229,"./tzm-latn.js":229,"./tzm.js":228,"./ug-cn":230,"./ug-cn.js":230,"./uk":231,"./uk.js":231,"./ur":232,"./ur.js":232,"./uz":233,"./uz-latn":234,"./uz-latn.js":234,"./uz.js":233,"./vi":235,"./vi.js":235,"./x-pseudo":236,"./x-pseudo.js":236,"./yo":237,"./yo.js":237,"./zh-cn":238,"./zh-cn.js":238,"./zh-hk":239,"./zh-hk.js":239,"./zh-mo":240,"./zh-mo.js":240,"./zh-tw":241,"./zh-tw.js":241};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id=248},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return j})),n.d(t,"default",(function(){return p}));var s=n(2),a=n(6),r=(n(0),n(100)),i=n(244),o={id:"js02sprite",title:"\u041b\u04202. \u0414\u0432\u0438\u0433\u0430\u0435\u043c \u0441\u043f\u0440\u0430\u0439\u0442"},l={unversionedId:"js02sprite",id:"js02sprite",isDocsHomePage:!1,title:"\u041b\u04202. \u0414\u0432\u0438\u0433\u0430\u0435\u043c \u0441\u043f\u0440\u0430\u0439\u0442",description:"\u0421\u0434\u0430\u0432\u0430\u0442\u044c, \u043a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438.",source:"@site/docs/js02sprite.md",slug:"/js02sprite",permalink:"/docs/js02sprite",editUrl:"https://github.com/progivt/progivt.github.io/edit/main/docs/js02sprite.md",version:"current",sidebar:"someSidebar",next:{title:"\u041b\u04203. \u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u0432\u0435\u0442\u0432\u043b\u0435\u043d\u0438\u044f",permalink:"/docs/js03if"}},j=[{value:"\u0412\u0430\u0448\u0438 \u0437\u0430\u0434\u0430\u0447\u0438",id:"\u0432\u0430\u0448\u0438-\u0437\u0430\u0434\u0430\u0447\u0438",children:[]}],c={rightToc:j};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u0421\u0434\u0430\u0432\u0430\u0442\u044c, \u043a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/"}),"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438"),"."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(s.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(s.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)(i.a,{link:"https://git.io/JTtYO",deadline:"2020-10-28 23:59",title:"\u041b\u04202. \u0414\u0432\u0438\u0433\u0430\u0435\u043c \u0441\u043f\u0440\u0430\u0439\u0442",mdxType:"DeadlineDisplay"}))),Object(r.b)("p",null,"\u041c\u044b \u043d\u0430\u043f\u0438\u0448\u0435\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u0434\u043b\u044f \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430 \u043d\u0430 \u0438\u0433\u0440\u043e\u0432\u043e\u043c \u043f\u043e\u043b\u0435,\n\u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0435\u043c \u0438\u0437 \u043a\u043b\u0435\u0442\u043e\u0447\u0435\u043a, \u0432 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u043d\u0430\u0436\u0430\u0442\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448.\n\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 HTML \u0443\u0436\u0435 \u0433\u043e\u0442\u043e\u0432\u0430, \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",Object(r.b)("inlineCode",{parentName:"p"},"index.html"),",\n\u0438 \u0435\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0435 \u043d\u0430\u0434\u043e. \u041e\u043d\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0444\u0430\u0439\u043b ",Object(r.b)("inlineCode",{parentName:"p"},"play.js"),",\n\u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u043a\u043e\u0434 \u0432\u0441\u0435\u0445 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 JavaScript.\n\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0443\u0434\u0430 \u043b\u043e\u0433\u0438\u043a\u0443 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430"),Object(r.b)("p",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"./index.html"}),"\u0432\u043e\u0442 \u0442\u0430\u043a"),". \u0414\u043b\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\n\u0438\u0433\u0440\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044f \u043d\u0430 \u043d\u0435\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043e\u0431\u044a\u0435\u043a\u0442 \u0425\u043e\u043b\u0441\u0442 (canvas) HTML5\n\u0441 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u043c\u0438 512 \u043d\u0430 320 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439. \u041e\u0434\u043d\u0430 \u043a\u043b\u0435\u0442\u043a\u0430\n\u0438\u043c\u0435\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0440\u044b 32x32, \u0442\u043e \u0435\u0441\u0442\u044c \u043f\u043e\u043b\u0435 16 \u043a\u043b\u0435\u0442\u043e\u043a \u0432 \u0448\u0438\u0440\u0438\u043d\u0443 \u0438 10 \u043a\u043b\u0435\u0442\u043e\u043a\n\u0432 \u0432\u044b\u0441\u043e\u0442\u0443. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u0432\u0430 \u0432\u0438\u0434\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 - \u0442\u0440\u0430\u0432\u0430 \u0434\u043b\u044f \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u043b\u044f\n\u0438 \u0441\u043f\u0440\u0430\u0439\u0442 \u0441 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u043c \u0444\u043e\u043d\u043e\u043c \u043f\u043e\u0432\u0435\u0440\u0445 \u043d\u0435\u0433\u043e \u0434\u043b\u044f \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430."),Object(r.b)("h2",{id:"\u0432\u0430\u0448\u0438-\u0437\u0430\u0434\u0430\u0447\u0438"},"\u0412\u0430\u0448\u0438 \u0437\u0430\u0434\u0430\u0447\u0438"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",Object(r.b)("inlineCode",{parentName:"li"},"init()"),", \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436 \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u043b\u0441\u044f \u0432\n\u043b\u0435\u0432\u043e\u043c \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0443\u0433\u043b\u0443."),Object(r.b)("li",{parentName:"ol"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",Object(r.b)("inlineCode",{parentName:"li"},"init()"),", \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u043f\u043e\u043b\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u043b\u043e\u0441\u044c \u0442\u0440\u0430\u0432\u043e\u0439."),Object(r.b)("li",{parentName:"ol"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",Object(r.b)("inlineCode",{parentName:"li"},"moveOnce()")," \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u043f\u043e \u043f\u0435\u0440\u0432\u043e\u043c\u0443 \u0449\u0435\u043b\u0447\u043a\u0443 \u043c\u044b\u0448\u0438\n\u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0430\u0441\u044c \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f \u0441\u0434\u0432\u0438\u0433\u0430 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430 \u0432\u043d\u0438\u0437 \u043e\u0442 \u0443\u0433\u043b\u0430. \u041d\u0443\u0436\u043d\u043e \u0441\u0442\u0438\u0440\u0430\u0442\u044c \u0435\u0433\u043e \u0432 \u0443\u0433\u043b\u0443."),Object(r.b)("li",{parentName:"ol"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",Object(r.b)("inlineCode",{parentName:"li"},"moveOnce()")," \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u043f\u043e ",Object(r.b)("em",{parentName:"li"},"\u043a\u0430\u0436\u0434\u043e\u043c\u0443")," \u0449\u0435\u043b\u0447\u043a\u0443 \u043c\u044b\u0448\u0438\n\u0441\u0442\u0440\u043e\u0433\u043e \u0432\u044b\u0448\u0435, \u0441\u0442\u0440\u043e\u0433\u043e \u043b\u0435\u0432\u0435\u0435, \u0441\u0442\u0440\u043e\u0433\u043e \u043d\u0438\u0436\u0435, \u0438\u043b\u0438 \u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0440\u0430\u0432\u0435\u0435 \u043f\u043e\u043b\u044f,\n\u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b\u0441\u044f \u0441\u0434\u0432\u0438\u0433 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443, \u043a\u0440\u043e\u043c\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432,\n\u043a\u043e\u0433\u0434\u0430 \u043e\u043d \u0443\u0436\u0435 \u0443\u043f\u0435\u0440\u0441\u044f \u0432 \u043a\u0440\u0430\u0439 \u043f\u043e\u043b\u044f \u0441 \u044d\u0442\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435\n\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 ",Object(r.b)("inlineCode",{parentName:"li"},"ghostRow"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ghostCol"),", \u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b ",Object(r.b)("inlineCode",{parentName:"li"},"event.clientX"),",\n",Object(r.b)("inlineCode",{parentName:"li"},"event.clientY")," \u043c\u0435\u0441\u0442\u0430 \u043e\u0442\u043f\u0443\u0441\u043a\u0430\u043d\u0438 \u043a\u043d\u043e\u043f\u043a\u0438 \u043c\u044b\u0448\u0438. \u041f\u0440\u0438 \u0449\u0435\u043b\u0447\u043a\u0435 \u0432\u043d\u0443\u0442\u0440\u0438 \u043f\u043e\u043b\u044f\n\u0438\u043b\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043b\u0435\u0432\u0435\u0435 ",Object(r.b)("em",{parentName:"li"},"\u0438")," \u0432\u044b\u0448\u0435, \u043d\u0438\u0447\u0435\u0433\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e."),Object(r.b)("li",{parentName:"ol"},"\u041f\u043e \u043e\u0431\u0440\u0430\u0437\u0446\u0443 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 ",Object(r.b)("inlineCode",{parentName:"li"},"onmouseup")," \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044b \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u0435\n",Object(r.b)("inlineCode",{parentName:"li"},"onkeyup"),", \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u043b\u043e \u0442\u0430\u043a\u0436\u0435 \u0438 \u043f\u043e \u043d\u0430\u0436\u0430\u0442\u0438\u044e\n\u043a\u043b\u0430\u0432\u0438\u0448 \u0441\u043e \u0441\u0442\u0440\u0435\u043b\u043a\u0430\u043c\u0438 \u0438\u043b\u0438 A/S/D/W."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("em",{parentName:"li"},"\u0411\u043e\u043d\u0443\u0441.")," \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u0430 \u043f\u043e\u043b\u0435 \u0434\u0435\u0440\u0435\u0432\u043e, \u0438 \u0441\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436 \u043d\u0435\n\u043c\u043e\u0433 \u0432\u0441\u0442\u0430\u0432\u0430\u0442\u044c \u043d\u0430 \u043a\u043b\u0435\u0442\u043a\u0443 \u0441 \u0434\u0435\u0440\u0435\u0432\u043e\u043c.")),Object(r.b)("p",null,"\u041f\u0435\u0440\u0432\u044b\u0435 5 \u0437\u0430\u0434\u0430\u043d\u0438\u0439 \u0434\u0430\u044e\u0442 100% \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u044b."))}p.isMDXComponent=!0}}]);