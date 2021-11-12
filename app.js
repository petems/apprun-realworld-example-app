(()=>{"use strict";var t={n:e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s},d:(e,s)=>{for(var o in s)t.o(s,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:s[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const e=apprun;var s=t.n(e);function o(t,e,s,o){var a,n=arguments.length,i=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,s,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(i=(n<3?a(i):n>3?a(e,s,i):a(e,s))||i);return n>3&&i&&Object.defineProperty(e,s,i),i}function a(t,e,s,o){return new(s||(s=Promise))((function(a,n){function i(t){try{l(o.next(t))}catch(t){n(t)}}function r(t){try{l(o.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(i,r)}l((o=o.apply(t,e||[])).next())}))}Object.create,Object.create;class n extends e.Component{constructor(){super(...arguments),this.state={},this.view=t=>{const e=t.user;return s().h("ul",{class:"nav navbar-nav pull-xs-right"},s().h("li",{class:"nav-item"},s().h("a",{class:"nav-link active",href:"#/"},"Home")),e&&s().h("li",{class:"nav-item"},s().h("a",{class:"nav-link",href:"#/editor"},s().h("i",{class:"ion-compose"})," New Post")),e&&s().h("li",{class:"nav-item"},s().h("a",{class:"nav-link",href:"#/settings"},s().h("i",{class:"ion-gear-a"})," Settings")),!e&&s().h("li",{class:"nav-item"},s().h("a",{class:"nav-link",href:"#/login"},"Sign In")),!e&&s().h("li",{class:"nav-item"},s().h("a",{class:"nav-link",href:"#/register"},"Sign Up")),e&&s().h("li",{class:"nav-item"},s().h("a",{class:"nav-link",href:`#/profile/${e.username}`},e.username)),e&&s().h("li",{class:"nav-item"},s().h("a",{class:"nav-link",href:"#/logout"},"Sign Out")))},this.setUser=(t,e)=>Object.assign(Object.assign({},t),{user:e})}}o([(0,e.on)("/set-user")],n.prototype,"setUser",void 0),(new n).start("header");let i=window&&window.localStorage&&window.localStorage.getItem("jwt")||"";function r(t){i=t,window.localStorage&&(t?window.localStorage.setItem("jwt",t):window.localStorage.removeItem("jwt"))}function l(t,e,s){return a(this,void 0,void 0,(function*(){const o={"Content-Type":"application/json; charset=utf-8"};i&&(o.Authorization=`Token ${i}`);const a=yield window.fetch(`${defaultBasePath}${e}`,{method:t,headers:o,body:s&&JSON.stringify(s)});if(401===a.status)throw r(null),new Error("401");const n=yield a.json();if(!a.ok)throw n;return n}))}function c(t){return l("GET",t)}function u(t,e){return l("POST",t,e)}function h(t){return l("DELETE",t)}function d(t,e){return l("PUT",t,e)}function m(t){const e=[];for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.push(encodeURIComponent(s)+"="+encodeURIComponent(t[s]));return e.join("&")}function p(t){const e={};if("object"==typeof t&&"FORM"===t.nodeName)for(let s=0;s<t.elements.length;s++){const o=t.elements[s];if(o.name&&"file"!==o.type&&"reset"!==o.type&&"submit"!==o.type&&"button"!==o.type)if("select-multiple"===o.type){e[o.name]="";let a="";for(let e=0;e<t.elements[s].options.length;e++)o.options[e].selected&&(a+=o.options[e].value+";");";"===a.charAt(a.length-1)&&(e[o.name]=a.substring(0,a.length-1))}else("checkbox"!==o.type&&"radio"!==o.type||o.checked)&&(e[o.name]=o.value)}return e}window.defaultBasePath="https://api.realworld.io/api";const g=()=>i?c("/user"):null,f=()=>!!s().user||s().run("#/login")&&!1,v=t=>c(`/articles?${m(t)}`),b=t=>c(`/articles/${t}`),y=t=>c(`/articles/${t}/comments`);function w(t){const e=t.article,o=e.favorited?"btn-primary":"btn-outline-primary";return s().h("div",{class:"article-preview"},s().h("div",{class:"article-meta"},s().h("a",{href:e.author.image},s().h("img",{src:e.author.image})),s().h("div",{class:"info"},s().h("a",{href:`#/profile/${e.author.username}`,class:"author"},e.author.username),s().h("span",{class:"date"},new Date(e.updatedAt).toLocaleString())),s().h("button",{class:`btn btn-sm pull-xs-right ${o}`,$onclick:["/toggle-fav-article",e,t.component]},s().h("i",{class:"ion-heart"})," ",e.favoritesCount)),s().h("a",{href:`#/article/${e.slug}`,class:"preview-link"},s().h("h1",null,e.title),s().h("p",null,e.description),s().h("span",null,"Read more..."),s().h("ul",{class:"tag-list"},e.tagList.map((t=>s().h("li",{class:"tag-default tag-pill tag-outline"},s().h("a",{href:`#/tag/${t}`},t," ")))))))}function $({articles:t,component:e}){return t.length?t.map((t=>s().h(w,{article:t,component:e}))):s().h("div",{class:"article-preview"},"No articles are here... yet.")}function O({max:t,selected:e,link:o}){const a=new Array(t).fill(0);return s().h("nav",null,s().h("ul",{class:"pagination"},a.map(((t,a)=>s().h("li",{class:"page-item "+(a+1===e?"active":"")},s().h("a",{href:`${o}/${a+1}`,class:"page-link"},a+1))))))}s().on("/get-user",(()=>a(void 0,void 0,void 0,(function*(){try{const t=yield g();s().run("/set-user",null==t?void 0:t.user)}catch(t){r(null),document.location.reload()}})))),s().on("/set-user",(t=>{s().user=t,r(t?t.token:null)})),s().on("/toggle-follow",((t,e)=>a(void 0,void 0,void 0,(function*(){if(!f())return;const s=t.following?yield(o=t.username,h(`/profiles/${o}/follow`)):yield(t=>u(`/profiles/${t}/follow`))(t.username);var o;e.run("update-follow",s.profile)})))),s().on("/toggle-fav-article",((t,e)=>a(void 0,void 0,void 0,(function*(){if(!f())return;const s=t.favorited?yield(o=t.slug,h(`/articles/${o}/favorite`)):yield(t=>u(`/articles/${t}/favorite`))(t.slug);var o;e.run("update-article",s.article)}))));const j=({tag:t})=>s().h("a",{href:`#/tag/${t}/1`,class:"tag-pill tag-default"},t);class x extends e.Component{constructor(){super(...arguments),this.state={type:"",articles:[],tags:[],max:1,page:1},this.view=t=>{const e="tag"===t.type&&t.tag?`/${t.tag}`:"";return s().h("div",{class:"home-page"},s().h("div",{class:"banner"},s().h("div",{class:"container"},s().h("h1",{class:"logo-font"},"conduit"),s().h("p",null,"A place to share your knowledge."))),s().h("div",{class:"container page"},s().h("div",{class:"row"},s().h("div",{class:"col-md-9"},s().h("div",{class:"feed-toggle"},s().h("ul",{class:"nav nav-pills outline-active"},s().h("li",{class:"nav-item"},s().h("a",{class:`nav-link ${s().user?"":"disabled"} ${"feed"===t.type?"active":""}`,href:"#/feed"},"Your Feed")),s().h("li",{class:"nav-item"},s().h("a",{class:"nav-link "+(""===t.type?"active":""),href:"#/"},"Global Feed")),t.tag?s().h("li",{class:"nav-item"},s().h("a",{class:"nav-link "+("tag"===t.type?"active":""),href:`#/tag/${t.tag}`},"#",t.tag)):"")),s().h($,{articles:t.articles,component:this}),s().h(O,{max:Math.floor(t.max/10),selected:t.page,link:`#/${t.type}${e}`})),s().h("div",{class:"col-md-3"},s().h("div",{class:"sidebar"},s().h("p",null,"Popular Tags"),s().h("div",{class:"tag-list"},t.tags.map((t=>s().h(j,{tag:t})))))))))},this.updateState=(t,e,s,o)=>a(this,void 0,void 0,(function*(){try{const n=t.tags.length?{tags:t.tags}:yield c("/tags");s=parseInt(s)||1,o=o||t.tag;const i=10,r=10*(s-1);let l;switch(e){case"feed":if(!f())return Object.assign(Object.assign({},t),{articles:[],max:0});l=yield(a={limit:i,offset:r},c(`/articles/feed?${m(a)}`));break;case"tag":l=yield v({tag:o,limit:i,offset:r});break;default:l=yield v({limit:i,offset:r})}return s=Math.min(s,Math.floor(l.articlesCount/10)+1),Object.assign(Object.assign({},t),{tags:n.tags,type:e,page:s,tag:o,articles:l.articles,max:l.articlesCount})}catch({errors:e}){return Object.assign(Object.assign({},t),{errors:e,articles:[],max:0})}var a})),this.root=(t,e)=>a(this,void 0,void 0,(function*(){return yield this.updateState(t,"",e)})),this.feed=(t,e)=>a(this,void 0,void 0,(function*(){return yield this.updateState(t,"feed",e)})),this.tag=(t,e,s)=>a(this,void 0,void 0,(function*(){return yield this.updateState(t,"tag",s,e)})),this.updateArticle=(t,e)=>(t.articles=t.articles.map((t=>t.slug===e.slug?e:t)),t)}}function k({errors:t}){return s().h("ul",{class:"error-messages"},Object.keys(t).map((e=>s().h("li",null,`${e} ${t[e]}`))))}o([(0,e.on)("#/")],x.prototype,"root",void 0),o([(0,e.on)("#/feed")],x.prototype,"feed",void 0),o([(0,e.on)("#/tag")],x.prototype,"tag",void 0),o([(0,e.on)("update-article")],x.prototype,"updateArticle",void 0),(new x).mount("my-app");class S extends e.Component{constructor(){super(...arguments),this.state={},this.view=t=>{if(t&&!(t instanceof Promise))return s().h("div",{class:"auth-page"},s().h("div",{class:"container page"},s().h("div",{class:"row"},s().h("div",{class:"col-md-6 offset-md-3 col-xs-12"},s().h("h1",{class:"text-xs-center"},"Sign In"),s().h("p",{class:"text-xs-center"},s().h("a",{href:"#/register"},"Need an account?")),t.errors&&s().h(k,{errors:t.errors}),s().h("form",{$onsubmit:"sign-in"},s().h("fieldset",{class:"form-group"},s().h("input",{class:"form-control form-control-lg",type:"text",placeholder:"Email",name:"email"})),s().h("fieldset",{class:"form-group"},s().h("input",{class:"form-control form-control-lg",type:"password",placeholder:"Password",name:"password"})),s().h("button",{class:"btn btn-lg btn-primary pull-xs-right"},"Sign In"))))))},this.login=t=>g()?location.href="#/":Object.assign(Object.assign({},t),{messages:[],returnTo:document.location.hash}),this.logout=()=>{s().run("/set-user",null),document.location.hash="#/"},this.signIn=(t,e)=>a(this,void 0,void 0,(function*(){try{e.preventDefault();const a=yield(o=p(e.target),u("/users/login",{user:o}));s().run("/set-user",a.user);const n=(t.returnTo||"").replace(/#\/login\/?/,"");n?(s().run("route",n),history.pushState(null,null,n)):document.location.hash="#/feed"}catch({errors:e}){return Object.assign(Object.assign({},t),{errors:e})}var o}))}}o([(0,e.on)("#/login")],S.prototype,"login",void 0),o([(0,e.on)("#/logout")],S.prototype,"logout",void 0),o([(0,e.on)("sign-in")],S.prototype,"signIn",void 0),(new S).mount("my-app");class C extends e.Component{constructor(){super(...arguments),this.state={},this.view=t=>{if(t&&!(t instanceof Promise))return s().h("div",{class:"auth-page"},s().h("div",{class:"container page"},s().h("div",{class:"row"},s().h("div",{class:"col-md-6 offset-md-3 col-xs-12"},s().h("h1",{class:"text-xs-center"},"Sign Up"),s().h("p",{class:"text-xs-center"},s().h("a",{href:"#/login"},"Have an account?")),t.errors&&s().h(k,{errors:t.errors}),s().h("form",{$onsubmit:"register"},s().h("fieldset",{class:"form-group"},s().h("input",{class:"form-control form-control-lg",type:"text",placeholder:"Your Name",name:"username"})),s().h("fieldset",{class:"form-group"},s().h("input",{class:"form-control form-control-lg",type:"text",placeholder:"Email",name:"email"})),s().h("fieldset",{class:"form-group"},s().h("input",{class:"form-control form-control-lg",type:"password",placeholder:"Password",name:"password"})),s().h("button",{class:"btn btn-lg btn-primary pull-xs-right"},"Sign up"))))))},this.register=(t,e)=>g()?location.href="#/":Object.assign(Object.assign({},t),{messages:e}),this.submitRegistration=(t,e)=>a(this,void 0,void 0,(function*(){try{e.preventDefault();const t=yield(o=p(e.target),u("/users",{user:o}));s().run("/set-user",t.user),s().run("route","#/")}catch({errors:e}){return Object.assign(Object.assign({},t),{errors:e})}var o}))}}o([(0,e.on)("#/register")],C.prototype,"register",void 0),o([(0,e.on)("register")],C.prototype,"submitRegistration",void 0),(new C).mount("my-app");class A extends e.Component{constructor(){super(...arguments),this.state={name:"",type:"articles",articles:[],page:1},this.view=t=>{const e=t.profile;if(e)return s().h("div",{class:"profile-page"},s().h("div",{class:"user-info"},s().h("div",{class:"container"},s().h("div",{class:"row"},s().h("div",{class:"col-xs-12 col-md-10 offset-md-1"},s().h("img",{src:e.image,class:"user-img"}),s().h("h4",null,e.username),s().h("p",null,e.bio),s().h("button",{class:"btn btn-sm btn-outline-secondary action-btn",$onclick:["/toggle-follow",e,this]},e.following?s().h("span",null,s().h("i",{class:"ion-minus-round"})," Unfollow ",e.username):s().h("span",null,s().h("i",{class:"ion-plus-round"})," Follow ",e.username)))))),s().h("div",{class:"container"},s().h("div",{class:"row"},s().h("div",{class:"col-xs-12 col-md-10 offset-md-1"},s().h("div",{class:"articles-toggle"},s().h("ul",{class:"nav nav-pills outline-active"},s().h("li",{class:"nav-item"},s().h("a",{class:"nav-link "+("articles"===t.type?"active":""),href:`#/profile/${e.username}/articles/1`},"My Articles")),s().h("li",{class:"nav-item"},s().h("a",{class:"nav-link "+("favorites"===t.type?"active":""),href:`#/profile/${e.username}/favorites/1`},"Favorited Articles")))),s().h($,{articles:t.articles,component:this}),s().h(O,{max:Math.floor(t.max/10),selected:t.page,link:`#/profile/${t.profile.username}/${t.type}`})))))},this.updateState=(t,e,s,o)=>a(this,void 0,void 0,(function*(){e=decodeURIComponent(e||t.name),s=s||t.type,o=parseInt(o)||t.page;let a=t;if(e!==t.name){const t=yield(n=e,c(`/profiles/${n}`));a=Object.assign(Object.assign({},a),{profile:t.profile})}var n;if(e!==t.name||s!==t.type||o!==t.page){const t=10,n=(o-1)*t,i="favorites"===s?yield v({favorited:e,offset:n,limit:t}):yield v({author:e,offset:n,limit:t});a=Object.assign(Object.assign({},a),{name:e,type:s,page:o,articles:i.articles,max:i.articlesCount})}return a})),this.root=(t,e,s,o)=>f()?this.updateState(t,e,s,o):null,this.updateArticle=(t,e)=>(t.articles=t.articles.map((t=>t.slug===e.slug?e:t)),t),this.updateFollow=(t,e)=>Object.assign(Object.assign({},t),{profile:e})}}function P({title:t,body:e,ok:o,cancel:a,onOK:n,onCancel:i}){return s().h("div",{class:"modal-open"},s().h("div",{class:"modal-dialog",role:"document"},s().h("div",{class:"modal-content"},s().h("div",{class:"modal-header"},s().h("h5",{class:"modal-title"},t,s().h("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",$onclick:i},s().h("span",{"aria-hidden":"true"},"×")))),s().h("div",{class:"modal-body"},s().h("p",null,e)),s().h("div",{class:"modal-footer"},a&&s().h("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",$onclick:i},a),"  ",s().h("button",{type:"button",class:"btn btn-primary",$onclick:n},o)))),s().h("div",{class:"modal-backdrop show",$onclick:i}))}o([(0,e.on)("#/profile")],A.prototype,"root",void 0),o([(0,e.on)("update-article")],A.prototype,"updateArticle",void 0),o([(0,e.on)("update-follow")],A.prototype,"updateFollow",void 0),(new A).mount("my-app");class D extends e.Component{constructor(){super(...arguments),this.state={},this.view=t=>{const e=t.user;if(e)return s().h("div",{class:"settings-page"},t.showModal?s().h(P,{title:"Confirmation",body:"Your settings has been updated successfully.",ok:"OK",cancel:"Cancel",onOK:"ok",onCancel:"cancel"}):"",s().h("div",{class:"container page"},s().h("div",{class:"row"},s().h("div",{class:"col-md-6 offset-md-3 col-xs-12"},t.errors&&s().h(k,{errors:t.errors}),s().h("h1",{class:"text-xs-center"},"Your Settings"),s().h("form",{$onsubmit:"submit-settings"},s().h("fieldset",null,s().h("fieldset",{class:"form-group"},s().h("input",{class:"form-control",type:"text",placeholder:"URL of profile picture",name:"image",value:e.image})),s().h("fieldset",{class:"form-group"},s().h("input",{class:"form-control form-control-lg",type:"text",placeholder:"Your Name",name:"username",value:e.username})),s().h("fieldset",{class:"form-group"},s().h("textarea",{class:"form-control form-control-lg",rows:"8",placeholder:"Short bio about you",name:"bio"},e.bio)),s().h("fieldset",{class:"form-group"},s().h("input",{class:"form-control form-control-lg",type:"text",placeholder:"Email",name:"email",value:e.email})),s().h("fieldset",{class:"form-group"},s().h("input",{class:"form-control form-control-lg",type:"password",placeholder:"Password",name:"password",value:e.password})),s().h("button",{class:"btn btn-lg btn-primary pull-xs-right"},"Update Settings")))))))},this.settings=()=>{if(f())return{user:s().user}},this.submitSettings=(t,e)=>a(this,void 0,void 0,(function*(){try{e.preventDefault();const t=p(e.target),o=yield(t=>d("/user",{user:t}))(t);return s().run("/set-user",o.user),{user:o.user,showModal:!0}}catch({errors:e}){return Object.assign(Object.assign({},t),{errors:e})}})),this.ok=t=>Object.assign(Object.assign({},t),{showModal:!1})}}o([(0,e.on)("#/settings")],D.prototype,"settings",void 0),o([(0,e.on)("submit-settings")],D.prototype,"submitSettings",void 0),o([(0,e.on)("ok, cancel")],D.prototype,"ok",void 0),(new D).mount("my-app");class I extends e.Component{constructor(){super(...arguments),this.state={},this.view=t=>{if(!s().user||!t.article)return;const e=t.article;return s().h("div",{class:"editor-page"},s().h("div",{class:"container page"},s().h("div",{class:"row"},s().h("div",{class:"col-md-10 offset-md-1 col-xs-12"},t.errors&&s().h(k,{errors:t.errors}),s().h("form",{$onsubmit:"submit-article"},e.slug&&s().h("input",{type:"hidden",name:"slug",value:e.slug}),s().h("fieldset",null,s().h("fieldset",{class:"form-group"},s().h("input",{type:"text",class:"form-control form-control-lg",placeholder:"Article Title",name:"title",value:e.title})),s().h("fieldset",{class:"form-group"},s().h("input",{type:"text",class:"form-control",placeholder:"What's this article about?",name:"description",value:e.description})),s().h("fieldset",{class:"form-group"},s().h("textarea",{class:"form-control",rows:"8",placeholder:"Write your article (in markdown)",name:"body"},e.body)),s().h("fieldset",{class:"form-group"},s().h("input",{type:"text",class:"form-control",placeholder:"Enter tags",name:"tags",value:e.tagList.join(", ")}),s().h("div",{class:"tag-list"})),s().h("button",{class:"btn btn-lg pull-xs-right btn-primary",type:"submit"},"Publish Article")))))))},this.root=(t,e)=>a(this,void 0,void 0,(function*(){if(!f())return;let t;return e&&(t=(yield b(e)).article),t=t||{title:"",description:"",body:"",tagList:[]},{article:t}})),this.submitArticle=(t,e)=>a(this,void 0,void 0,(function*(){try{e.preventDefault();const t=p(e.target);t.tagList=t.tags.split(",");const s=t.slug?yield(t=>d(`/articles/${t.slug}`,{article:t}))(t):yield(t=>u("/articles",{article:t}))(t);document.location.hash=`#/article/${s.article.slug}`}catch({errors:e}){return Object.assign(Object.assign({},t),{errors:e})}}))}}o([(0,e.on)("#/editor")],I.prototype,"root",void 0),o([(0,e.on)("submit-article")],I.prototype,"submitArticle",void 0),(new I).mount("my-app");const U=marked;function F({comment:t}){return s().h("div",{class:"card"},s().h("div",{class:"card-block"},s().h("p",{class:"card-text"},s().h("p",null,`_html:${(0,U.marked)(t.body)}`))),s().h("div",{class:"card-footer"},s().h("a",{class:"comment-author"},s().h("img",{src:t.author.image,class:"comment-author-img"}))," ",s().h("a",{class:"comment-author",href:`#/profile/${t.author.username}`},t.author.username),s().h("span",{class:"date-posted"},new Date(t.createdAt).toLocaleString()),s().user&&s().user.username===t.author.username&&s().h("span",{class:"mod-options"},s().h("i",{class:"ion-trash-a",$onclick:["/delete-comment",t]}))))}function R({comments:t}){const e=s().user;return s().h("div",{class:"row"},s().h("div",{class:"col-xs-12 col-md-8 offset-md-2"},e?s().h("form",{class:"card comment-form",$onsubmit:"/new-comment"},s().h("div",{class:"card-block"},s().h("textarea",{class:"form-control",placeholder:"Write a comment...",rows:"3",name:"comment"})),s().h("div",{class:"card-footer"},e.image?s().h("img",{src:e.image,class:"comment-author-img"}):s().h("span",null,"@",e.username),s().h("button",{class:"btn btn-sm btn-primary",type:"submit"},"Post Comment"))):s().h("p",null,s().h("a",{href:`#/login/${document.location.hash}`},"Sign in")," or ",s().h("a",{href:"#/register"},"sign up")," to add comments on this article."),t.map((t=>s().h(F,{comment:t})))))}function E({article:t,component:e}){const o=t.favorited?"btn-primary":"btn-outline-primary",a=t.author.following?"btn-secondary":"btn-outline-secondary";return s().h("div",{class:"article-meta"},s().h("a",{href:t.author.image},s().h("img",{src:t.author.image})),s().h("div",{class:"info"},s().h("a",{href:`#/profile/${t.author.username}`,class:"author"},t.author.username),s().h("span",{class:"date"},new Date(t.updatedAt).toLocaleString())),s().user&&s().user.username===t.author.username?s().h("span",null,s().h("button",{class:"btn btn-sm btn-outline-secondary",$onclick:["edit-article",t]},s().h("i",{class:"ion-edit"}),"  Edit Article"),"  ",s().h("button",{class:"btn btn-sm btn-outline-danger",$onclick:["delete-article",t]},s().h("i",{class:"ion-trash-o"}),"  Delete Article")):s().h("span",null,s().h("button",{class:`btn btn-sm ${a}`,$onclick:["/toggle-follow",t.author,e]},t.author.following?s().h("span",null,s().h("i",{class:"ion-minus-round"})," Unfollow ",t.author.username):s().h("span",null,s().h("i",{class:"ion-plus-round"})," Follow ",t.author.username))," ","  ",s().h("button",{class:`btn btn-sm ${o}`,$onclick:["/toggle-fav-article",t,e]},s().h("i",{class:"ion-heart"}),"  Favorite Post ",s().h("span",{class:"counter"},"(",t.favoritesCount,")"))))}class L extends e.Component{constructor(){super(...arguments),this.state={article:null,comments:[]},this.view=t=>{const e=t.article;if(e)return s().h("div",{class:"article-page"},t.deleting&&s().h(P,{title:"Delete Article",body:"Are you sure you want to delete this article?",ok:"Delete",cancel:"No",onOK:"ok-delete-article",onCancel:"cancel-delete-article"}),s().h("div",{class:"banner"},s().h("div",{class:"container"},s().h("h1",null,e.title),s().h(E,{article:e,component:this}))),s().h("div",{class:"container page"},s().h("div",{class:"row article-content"},s().h("div",{class:"col-md-12"},s().h("p",null,`_html:${(0,U.marked)(e.body)}`),s().h("div",{class:"tag-list"},s().h("br",null),e.tagList.map((t=>s().h("li",{class:"tag-default tag-pill tag-outline"},s().h("a",{href:`#/tag/${t}`},t," "))))))),s().h("hr",null),s().h("div",{class:"article-actions"},s().h(E,{article:e,component:this})),s().h(R,{comments:t.comments})))},this.root=(t,e)=>a(this,void 0,void 0,(function*(){let s=t.article,o=t.comments;return s&&s.slug===e||(s=(yield b(e)).article,o=(yield y(s.slug)).comments),Object.assign(Object.assign({},t),{article:s,comments:o})})),this.newComment=(t,e)=>a(this,void 0,void 0,(function*(){try{e.preventDefault();const s=e.target.comment.value;if(!s)return;yield((t,e)=>u(`/articles/${t}/comments`,{comment:e}))(t.article.slug,{body:s});const o=yield y(t.article.slug);return Object.assign(Object.assign({},t),{comments:o.comments})}catch({errors:e}){return Object.assign(Object.assign({},t),{errors:e})}})),this.deleteComment=(t,e)=>a(this,void 0,void 0,(function*(){var s,o;yield(s=this.state.article.slug,o=e.id,h(`/articles/${s}/comments/${o}`));const a=yield y(t.article.slug);return Object.assign(Object.assign({},t),{comments:a.comments})})),this.updateArticle=(t,e)=>Object.assign(Object.assign({},t),{article:e}),this.updateFollow=(t,e)=>(t.article.author=e,t),this.editArticle=(t,e)=>{document.location.hash=`#/editor/${e.slug}`},this.deleteArticle=t=>Object.assign(Object.assign({},t),{deleting:!0}),this.okDelete=t=>(h(`/articles/${t.article.slug}`),document.location.hash="#/",Object.assign(Object.assign({},t),{deleting:!1})),this.cancelDelete=t=>Object.assign(Object.assign({},t),{deleting:!1})}}o([(0,e.on)("#/article")],L.prototype,"root",void 0),o([(0,e.on)("/new-comment")],L.prototype,"newComment",void 0),o([(0,e.on)("/delete-comment")],L.prototype,"deleteComment",void 0),o([(0,e.on)("update-article")],L.prototype,"updateArticle",void 0),o([(0,e.on)("update-follow")],L.prototype,"updateFollow",void 0),o([(0,e.on)("edit-article")],L.prototype,"editArticle",void 0),o([(0,e.on)("delete-article")],L.prototype,"deleteArticle",void 0),o([(0,e.on)("ok-delete-article")],L.prototype,"okDelete",void 0),o([(0,e.on)("cancel-delete-article")],L.prototype,"cancelDelete",void 0),(new L).mount("my-app"),s().on("#",((t,...e)=>{s().run(`#/${t||""}`,...e)})),s().once("/set-user",(()=>{s().route(location.hash)})),s().run("/get-user")})();
//# sourceMappingURL=app.js.map