_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{IB8S:function(e,t,s){e.exports={inbetweenOne_container:"InbetweenOne_inbetweenOne_container__1IGtT",inbetweenOne_wrapper:"InbetweenOne_inbetweenOne_wrapper__3VZ3h"}},OREE:function(e,t,s){e.exports={homeNews_container:"HomeNews_homeNews_container__gOpIK",homeNews_title:"HomeNews_homeNews_title__3zxOD",homeNews_title_left:"HomeNews_homeNews_title_left__Lcqn_",homeNews_wrapper:"HomeNews_homeNews_wrapper__3lYjM",homeNews_buttons:"HomeNews_homeNews_buttons__2c1ec",homeNews_box:"HomeNews_homeNews_box__1WTYs"}},RNiq:function(e,t,s){"use strict";s.r(t),s.d(t,"__N_SSG",(function(){return I}));var a=s("o0o1"),n=s.n(a);function r(e,t,s,a,n,r,i){try{var o=e[r](i),l=o.value}catch(c){return void s(c)}o.done?t(l):Promise.resolve(l).then(a,n)}var i=s("a3WO");var o=s("BsWD");function l(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=s("ODXe"),m=s("MX0m"),d=s.n(m),x=s("q1tI"),p=s.n(x),u=s("80PL"),f=s("vcXL"),w=s.n(f),b=p.a.createElement,_=function(e){var t=e.id,s=e.name,a=(e.description,e.price,e.category,e.image);e.createdAt;return b("div",{key:s,className:"jsx-3342006471 blockSmall"},b("p",{className:"jsx-3342006471 titleSmall"},s),b("a",{href:"#!",onClick:function(){return fetch("http://localhost:3000/api/popularity/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"}})},className:"jsx-3342006471"},b("img",{src:a,className:"jsx-3342006471 image"})),b(d.a,{id:"3342006471"},[".blockSmall.jsx-3342006471{position:relative;cursor:pointer;min-height:10rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".blockSmall.jsx-3342006471 a.jsx-3342006471{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".blockSmall.jsx-3342006471 a.jsx-3342006471 .image.jsx-3342006471{max-width:100%;-webkit-transition:0.2s;transition:0.2s;border-radius:0.2rem;}",".blockSmall.jsx-3342006471:hover .image.jsx-3342006471{-webkit-transform:translate(-0.5rem,-0.5rem) rotate(-3deg);-ms-transform:translate(-0.5rem,-0.5rem) rotate(-3deg);transform:translate(-0.5rem,-0.5rem) rotate(-3deg);}",".titleSmall.jsx-3342006471{-webkit-transition:0.2s;transition:0.2s;position:absolute;bottom:1rem;right:12%;font-weight:600;min-width:8rem;z-index:-1;}",".blockSmall.jsx-3342006471:hover .titleSmall.jsx-3342006471{bottom:-1.1rem;right:0;color:black;}"]))},j=s("eva/"),N=s.n(j),g=p.a.createElement,h=function(e){var t=e.data,s=e.latest;return g("div",{className:"jsx-2085888330 "+(N.a.latestNews_container||"")},g("div",{className:"jsx-2085888330 "+(N.a.latestNews_title||"")},g("p",{className:"jsx-2085888330 "+(N.a.latestNews_title_left||"")},"Najnowsze"),g("a",{href:"#allImages",onClick:function(){return s()},className:"jsx-2085888330 "+(N.a.latestNews_title_right||"")},g("p",{className:"jsx-2085888330"},"Zobacz"))),t?g("div",{className:"jsx-2085888330 "+(N.a.latestNews_wrapper||"")},t.map((function(e){return g(_,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})}))):g("p",{className:"jsx-2085888330"},"loading"),g(d.a,{id:"2085888330"},[]))},v=s("OREE"),y=s.n(v),k=s("IObC"),E=p.a.createElement,O=function(e){var t=e.data,s=e.latest,a=e.popular,n=e.under,r=e.random;return E("div",{id:"allImages",className:"jsx-2085888330 "+(y.a.homeNews_container||"")},E("div",{className:"jsx-2085888330 "+(y.a.homeNews_title||"")},E("p",{className:"jsx-2085888330 "+(y.a.homeNews_title_left||"")},"Wejdz na wyzszy poziom zakupow")),t?E("div",{className:"jsx-2085888330 "+(y.a.homeNews_wrapper||"")},E("div",{className:"jsx-2085888330 "+(y.a.homeNews_buttons||"")},E("p",{onClick:function(){return s()},className:"jsx-2085888330 btn"},"Najnowsze"),E("p",{onClick:function(){return a()},className:"jsx-2085888330 btn"},"Popularne"),E("p",{onClick:function(){return n()},className:"jsx-2085888330 btn"},"- 10PLN"),E("p",{onClick:function(){return r()},className:"jsx-2085888330 btn"},"Random")),E("div",{className:"jsx-2085888330 "+(y.a.homeNews_box||"")},t.map((function(e){return E(k.a,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})})))):E("p",{className:"jsx-2085888330"},"loading"),E(d.a,{id:"2085888330"},[]))},S=(p.a.createElement,s("IB8S"),p.a.createElement,p.a.createElement),z=function(){return S(p.a.Fragment,null,S("div",{id:"newsletter",className:"jsx-3416093678 empty_padding_newsletter"}),S("div",{className:"jsx-3416093678 newsletter_container"},S("div",{className:"jsx-3416093678 newsletter_wrapper"},S("p",{className:"jsx-3416093678 newsletter_component"},"Zostaw suba! ",S("br",{className:"jsx-3416093678"})," badz na biezaco z nowosciami"),S("div",{className:"jsx-3416093678 newsletter_signinbox"},S("input",{type:"text",className:"jsx-3416093678"}),S("p",{className:"jsx-3416093678 btn newsletter_btn"},"Zapisz sie")))),S(d.a,{id:"3416093678"},[".empty_padding_newsletter.jsx-3416093678{height:8rem;}",".newsletter_container.jsx-3416093678{background-color:#ffc500;height:12rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".newsletter_wrapper.jsx-3416093678{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:66%;margin:0 auto;}",".newsletter_component.jsx-3416093678{font-size:3rem;width:36rem;line-height:2.3rem;color:#000;font-variant-caps:all-petite-caps;}",".newsletter_signinbox.jsx-3416093678{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".newsletter_signinbox.jsx-3416093678 input.jsx-3416093678{height:3rem;margin-right:1rem;font-size:1.6rem;width:12rem;}",".newsletter_btn.jsx-3416093678{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-size:1.6rem;padding:0.7rem 1.4rem;white-space:nowrap;}",".newsletter_btn.jsx-3416093678:hover{color:#fff;background-color:#000;}","@media only screen and (max-width:1024px){.newsletter_wrapper.jsx-3416093678{width:90%;}}","@media only screen and (max-width:768px){.newsletter_container.jsx-3416093678{height:auto;padding:1rem 0;}.newsletter_component.jsx-3416093678{text-align:center;margin-bottom:1rem;width:auto;font-size:2rem;line-height:1.8rem;}.newsletter_wrapper.jsx-3416093678{width:90%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}"]))},A=s("iWaP"),D=p.a.createElement,I=!0;t.default=function(e){var t=Object(x.useState)([]),s=t[0],a=t[1],i=Object(x.useState)([]),o=i[0],m=i[1],f=Object(x.useState)(""),b=f[0],_=f[1],j=Object(x.useState)(8),N=j[0],g=j[1],v=Object(x.useState)(!0),y=v[0],k=v[1],E=p.a.useState(!1),S=Object(c.a)(E,2),I=S[0],L=S[1],P=p.a.useRef(),C=Object(A.useKeenSlider)({loop:!0,duration:2e3,dragStart:function(){L(!0)},dragEnd:function(){L(!1)}}),R=Object(c.a)(C,2),W=R[0],Z=R[1];p.a.useEffect((function(){W.current.addEventListener("mouseover",(function(){L(!0)})),W.current.addEventListener("mouseout",(function(){L(!1)}))}),[W]),p.a.useEffect((function(){return P.current=setInterval((function(){!I&&Z&&Z.next()}),3500),function(){clearInterval(P.current)}}),[I,Z]),Object(x.useEffect)((function(){a(e.homeNewsData)}),[]);var B=function(){var e=l(s),t=new Date(Date.now()-432e6).toISOString(),a=e.filter((function(e){return e.createdAt>t}));m(a),_("latest")},T=function(){var e=l(s).filter((function(e){return e.popularity>=10}));m(e),_("popular")},K=function(){var e=l(s).filter((function(e){return e.price<=10}));m(e),_("under")},M=function(){var e,t=(e=n.a.mark((function e(){var t,s,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()("http://localhost:3000/api/items/".concat(N));case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,r=s.data,g((function(e){return e+4})),m([]),a(r),"latest"===b&&B(),"popular"===b&&T(),"under"===b&&K();case 13:case"end":return e.stop()}}),e)})),function(){var t=this,s=arguments;return new Promise((function(a,n){var i=e.apply(t,s);function o(e){r(i,a,n,o,l,"next",e)}function l(e){r(i,a,n,o,l,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();return D(u.a,{mainPage:y,setMainPage:k},D("div",{className:"jsx-931979104 container"},D("div",{ref:W,className:"jsx-931979104 keen-slider"},D("div",{className:"jsx-931979104 keen-slider__slide number-slide1 slider-configuration"},D("div",{className:"jsx-931979104 slider-box"},D("img",{src:"./slider/1.jpg",className:"jsx-931979104"}),D("p",{className:"jsx-931979104 slider-text slider-text-1"},"PONAD 100 SKLEPOW"))),D("div",{className:"jsx-931979104 keen-slider__slide number-slide2 slider-configuration"},D("div",{className:"jsx-931979104 slider-box"},D("img",{src:"./slider/2.jpg",className:"jsx-931979104"}),D("p",{className:"jsx-931979104 slider-text slider-text-2"},"ZAWSZE POD REKA"))),D("div",{className:"jsx-931979104 keen-slider__slide number-slide3 slider-configuration"},D("div",{className:"jsx-931979104 slider-box"},D("img",{src:"./slider/1.jpg",className:"jsx-931979104"}),D("p",{className:"jsx-931979104 slider-text slider-text-3"},"NA KAZDA OKAZJE"))),D("div",{className:"jsx-931979104 keen-slider__slide number-slide4 slider-configuration"},D("div",{className:"jsx-931979104 slider-box"},D("img",{src:"./slider/4.jpg",className:"jsx-931979104"}),D("p",{className:"jsx-931979104 slider-text slider-text-4"},"WASZE CENTRUM")))),D(h,{data:e.latestNewsData,latest:B}),D(z,null),D(O,{data:0===o.length?s:o,latest:B,popular:T,under:K,random:function(){var e=function(e){for(var t,s,a=e.length;0!==a;)s=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[s],e[s]=t;return e}(l(s));m(e),_("random")}})),D("div",{className:"jsx-931979104 moreBtnDiv"},D("button",{onClick:function(){return M()},className:"jsx-931979104 btn"},"WIECEJ")),D(d.a,{id:"931979104"},[".slider-configuration.jsx-931979104{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2rem 0;}",".slider-box.jsx-931979104{position:relative;}",".slider-text.jsx-931979104{position:absolute;font-size:3rem;width:34rem;line-height:3rem;text-shadow:1px 1px 0px rgba(0,0,0,0.2);padding:1rem 2rem;background-color:#ffc500;color:#fff;}",".slider-text-1.jsx-931979104{bottom:30rem;left:-5rem;white-space:nowrap;}",".slider-text-2.jsx-931979104{bottom:29rem;right:-1rem;}",".slider-text-3.jsx-931979104{bottom:3rem;left:-10rem;}",".slider-text-4.jsx-931979104{bottom:2rem;right:-3rem;}",".star.jsx-931979104{position:absolute;top:-54px;left:-57px;width:9%;-webkit-transform:rotate(-3deg);-ms-transform:rotate(-3deg);transform:rotate(-3deg);}",".moreBtnDiv.jsx-931979104{text-align:center;margin:3rem 0;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104{padding:1rem 3rem;border:none;outline:none;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104:hover{background-color:#ff2a2a;color:#fff;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104:active{-webkit-transform:translateY(0.3rem);-ms-transform:translateY(0.3rem);transform:translateY(0.3rem);}","@media only screen and (max-width:1024px){.slider-text-1.jsx-931979104{left:-1rem;}.slider-text-2.jsx-931979104{right:-3rem;}.slider-text-3.jsx-931979104{left:-1rem;}}","@media only screen and (max-width:768px){.slider-box.jsx-931979104{position:relative;width:95%;margin:0 auto;}.slider-box.jsx-931979104 img.jsx-931979104{width:100%;}.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.8rem;width:100%;padding:0.4rem 0;text-align:center;bottom:0;left:0;}}","@media only screen and (max-width:510px){.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.3rem;padding:.2rem 0;line-height:inherit;}}"]))}},"eva/":function(e,t,s){e.exports={latestNews_container:"LatestNews_latestNews_container__3OCKx",latestNews_title:"LatestNews_latestNews_title__2Xtcj",latestNews_title_left:"LatestNews_latestNews_title_left__2yE_2",latestNews_title_right:"LatestNews_latestNews_title_right__1MlzG",latestNews_wrapper:"LatestNews_latestNews_wrapper__2QLUj","latestNews_title-right":"LatestNews_latestNews_title-right__3OV02"}},vcXL:function(e,t,s){"use strict";var a=self.fetch.bind(self);e.exports=a,e.exports.default=e.exports},vlRD:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("RNiq")}])}},[["vlRD",0,2,1,3]]]);