_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{IB8S:function(e,t,s){e.exports={inbetweenOne_container:"InbetweenOne_inbetweenOne_container__1IGtT",inbetweenOne_wrapper:"InbetweenOne_inbetweenOne_wrapper__3VZ3h"}},NzbH:function(e,t,s){e.exports={empty_padding_newsletter:"Newsletter_empty_padding_newsletter__1cz-s",newsletter_container:"Newsletter_newsletter_container__gIHk5",newsletter_wrapper:"Newsletter_newsletter_wrapper__3sEMR",newsletter_component:"Newsletter_newsletter_component__2fGrr",newsletter_signinbox:"Newsletter_newsletter_signinbox__PXMdH",newsletter_btn:"Newsletter_newsletter_btn__3XlFu"}},OREE:function(e,t,s){e.exports={homeNews_container:"HomeNews_homeNews_container__gOpIK",homeNews_title:"HomeNews_homeNews_title__3zxOD",homeNews_title_left:"HomeNews_homeNews_title_left__Lcqn_",homeNews_wrapper:"HomeNews_homeNews_wrapper__3lYjM",homeNews_buttons:"HomeNews_homeNews_buttons__2c1ec",homeNews_box:"HomeNews_homeNews_box__1WTYs"}},RNiq:function(e,t,s){"use strict";s.r(t),s.d(t,"__N_SSG",(function(){return R}));var a=s("o0o1"),n=s.n(a);function r(e,t,s,a,n,r,i){try{var o=e[r](i),l=o.value}catch(c){return void s(c)}o.done?t(l):Promise.resolve(l).then(a,n)}var i=s("a3WO");var o=s("BsWD");function l(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=s("ODXe"),m=s("MX0m"),d=s.n(m),_=s("q1tI"),u=s.n(_),p=s("80PL"),x=s("vcXL"),w=s.n(x),f=s("z9a/"),N=s.n(f),j=u.a.createElement,b=function(e){var t=e.id,s=e.name,a=(e.description,e.price,e.category,e.image);e.createdAt;return j("div",{key:s,className:"jsx-2170358054 "+(N.a.blockSmall_container||"")},j("p",{className:"jsx-2170358054 "+(N.a.titleSmall||"")},s),j("a",{href:"#!",onClick:function(){return fetch("http://localhost:3000/api/popularity/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"}})},className:"jsx-2170358054"},j("img",{src:a,className:"jsx-2170358054"})),j(d.a,{id:"2170358054"},[]))},v=s("eva/"),g=s.n(v),h=u.a.createElement,y=function(e){var t=e.data,s=e.latest;return h("div",{className:"jsx-2085888330 "+(g.a.latestNews_container||"")},h("div",{className:"jsx-2085888330 "+(g.a.latestNews_title||"")},h("p",{className:"jsx-2085888330 "+(g.a.latestNews_title_left||"")},"Najnowsze"),h("a",{href:"#allImages",onClick:function(){return s()},className:"jsx-2085888330 "+(g.a.latestNews_title_right||"")},h("p",{className:"jsx-2085888330"},"Zobacz"))),t?h("div",{className:"jsx-2085888330 "+(g.a.latestNews_wrapper||"")},t.map((function(e){return h(b,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})}))):h("p",{className:"jsx-2085888330"},"loading"),h(d.a,{id:"2085888330"},[]))},k=s("OREE"),E=s.n(k),O=s("IObC"),S=u.a.createElement,z=function(e){var t=e.data,s=e.latest,a=e.popular,n=e.under,r=e.random;return S("div",{id:"allImages",className:"jsx-2085888330 "+(E.a.homeNews_container||"")},S("div",{className:"jsx-2085888330 "+(E.a.homeNews_title||"")},S("p",{className:"jsx-2085888330 "+(E.a.homeNews_title_left||"")},"Wejdz na wyzszy poziom zakupow")),t?S("div",{className:"jsx-2085888330 "+(E.a.homeNews_wrapper||"")},S("div",{className:"jsx-2085888330 "+(E.a.homeNews_buttons||"")},S("p",{onClick:function(){return s()},className:"jsx-2085888330 btn"},"Najnowsze"),S("p",{onClick:function(){return a()},className:"jsx-2085888330 btn"},"Popularne"),S("p",{onClick:function(){return n()},className:"jsx-2085888330 btn"},"- 10PLN"),S("p",{onClick:function(){return r()},className:"jsx-2085888330 btn"},"Random")),S("div",{className:"jsx-2085888330 "+(E.a.homeNews_box||"")},t.map((function(e){return S(O.a,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})})))):S("p",{className:"jsx-2085888330"},"loading"),S(d.a,{id:"2085888330"},[]))},A=(u.a.createElement,s("IB8S"),u.a.createElement,s("NzbH")),D=s.n(A),I=u.a.createElement,L=function(){return I(u.a.Fragment,null,I("div",{id:"newsletter",className:"jsx-2085888330 "+(D.a.empty_padding_newsletter||"")}),I("div",{className:"jsx-2085888330 "+(D.a.newsletter_container||"")},I("div",{className:"jsx-2085888330 "+(D.a.newsletter_wrapper||"")},I("p",{className:"jsx-2085888330 "+(D.a.newsletter_component||"")},"Zostaw suba! ",I("br",{className:"jsx-2085888330"})," badz na biezaco z nowosciami"),I("div",{className:"jsx-2085888330 "+(D.a.newsletter_signinbox||"")},I("input",{type:"text",className:"jsx-2085888330"}),I("p",{className:"jsx-2085888330 "+(D.a.newsletter_btn||"")},"Zapisz sie")))),I(d.a,{id:"2085888330"},[]))},P=s("iWaP"),C=u.a.createElement,R=!0;t.default=function(e){var t=Object(_.useState)([]),s=t[0],a=t[1],i=Object(_.useState)([]),o=i[0],m=i[1],x=Object(_.useState)(""),f=x[0],N=x[1],j=Object(_.useState)(8),b=j[0],v=j[1],g=Object(_.useState)(!0),h=g[0],k=g[1],E=u.a.useState(!1),O=Object(c.a)(E,2),S=O[0],A=O[1],D=u.a.useRef(),I=Object(P.useKeenSlider)({loop:!0,duration:2e3,dragStart:function(){A(!0)},dragEnd:function(){A(!1)}}),R=Object(c.a)(I,2),H=R[0],M=R[1];u.a.useEffect((function(){H.current.addEventListener("mouseover",(function(){A(!0)})),H.current.addEventListener("mouseout",(function(){A(!1)}))}),[H]),u.a.useEffect((function(){return D.current=setInterval((function(){!S&&M&&M.next()}),3500),function(){clearInterval(D.current)}}),[S,M]),Object(_.useEffect)((function(){a(e.homeNewsData)}),[]);var W=function(){var e=l(s),t=new Date(Date.now()-432e6).toISOString(),a=e.filter((function(e){return e.createdAt>t}));m(a),N("latest")},T=function(){var e=l(s).filter((function(e){return e.popularity>=10}));m(e),N("popular")},X=function(){var e=l(s).filter((function(e){return e.price<=10}));m(e),N("under")},Z=function(){var e,t=(e=n.a.mark((function e(){var t,s,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()("http://localhost:3000/api/items/".concat(b));case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,r=s.data,v((function(e){return e+4})),m([]),a(r),"latest"===f&&W(),"popular"===f&&T(),"under"===f&&X();case 13:case"end":return e.stop()}}),e)})),function(){var t=this,s=arguments;return new Promise((function(a,n){var i=e.apply(t,s);function o(e){r(i,a,n,o,l,"next",e)}function l(e){r(i,a,n,o,l,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();return C(p.a,{mainPage:h,setMainPage:k},C("div",{className:"jsx-931979104 container"},C("div",{ref:H,className:"jsx-931979104 keen-slider"},C("div",{className:"jsx-931979104 keen-slider__slide number-slide1 slider-configuration"},C("div",{className:"jsx-931979104 slider-box"},C("img",{src:"./slider/1.jpg",className:"jsx-931979104"}),C("p",{className:"jsx-931979104 slider-text slider-text-1"},"PONAD 100 SKLEPOW"))),C("div",{className:"jsx-931979104 keen-slider__slide number-slide2 slider-configuration"},C("div",{className:"jsx-931979104 slider-box"},C("img",{src:"./slider/2.jpg",className:"jsx-931979104"}),C("p",{className:"jsx-931979104 slider-text slider-text-2"},"ZAWSZE POD REKA"))),C("div",{className:"jsx-931979104 keen-slider__slide number-slide3 slider-configuration"},C("div",{className:"jsx-931979104 slider-box"},C("img",{src:"./slider/1.jpg",className:"jsx-931979104"}),C("p",{className:"jsx-931979104 slider-text slider-text-3"},"NA KAZDA OKAZJE"))),C("div",{className:"jsx-931979104 keen-slider__slide number-slide4 slider-configuration"},C("div",{className:"jsx-931979104 slider-box"},C("img",{src:"./slider/4.jpg",className:"jsx-931979104"}),C("p",{className:"jsx-931979104 slider-text slider-text-4"},"WASZE CENTRUM")))),C(y,{data:e.latestNewsData,latest:W}),C(L,null),C(z,{data:0===o.length?s:o,latest:W,popular:T,under:X,random:function(){var e=function(e){for(var t,s,a=e.length;0!==a;)s=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[s],e[s]=t;return e}(l(s));m(e),N("random")}})),C("div",{className:"jsx-931979104 moreBtnDiv"},C("button",{onClick:function(){return Z()},className:"jsx-931979104 btn"},"WIECEJ")),C(d.a,{id:"931979104"},[".slider-configuration.jsx-931979104{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2rem 0;}",".slider-box.jsx-931979104{position:relative;}",".slider-text.jsx-931979104{position:absolute;font-size:3rem;width:34rem;line-height:3rem;text-shadow:1px 1px 0px rgba(0,0,0,0.2);padding:1rem 2rem;background-color:#ffc500;color:#fff;}",".slider-text-1.jsx-931979104{bottom:30rem;left:-5rem;white-space:nowrap;}",".slider-text-2.jsx-931979104{bottom:29rem;right:-1rem;}",".slider-text-3.jsx-931979104{bottom:3rem;left:-10rem;}",".slider-text-4.jsx-931979104{bottom:2rem;right:-3rem;}",".star.jsx-931979104{position:absolute;top:-54px;left:-57px;width:9%;-webkit-transform:rotate(-3deg);-ms-transform:rotate(-3deg);transform:rotate(-3deg);}",".moreBtnDiv.jsx-931979104{text-align:center;margin:3rem 0;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104{padding:1rem 3rem;border:none;outline:none;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104:hover{background-color:#ff2a2a;color:#fff;}",".moreBtnDiv.jsx-931979104 button.jsx-931979104:active{-webkit-transform:translateY(0.3rem);-ms-transform:translateY(0.3rem);transform:translateY(0.3rem);}","@media only screen and (max-width:1024px){.slider-text-1.jsx-931979104{left:-1rem;}.slider-text-2.jsx-931979104{right:-3rem;}.slider-text-3.jsx-931979104{left:-1rem;}}","@media only screen and (max-width:768px){.slider-box.jsx-931979104{position:relative;width:95%;margin:0 auto;}.slider-box.jsx-931979104 img.jsx-931979104{width:100%;}.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.8rem;width:100%;padding:0.4rem 0;text-align:center;bottom:0;left:0;}}","@media only screen and (max-width:510px){.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.3rem;padding:.2rem 0;line-height:inherit;}}"]))}},"eva/":function(e,t,s){e.exports={latestNews_container:"LatestNews_latestNews_container__3OCKx",latestNews_title:"LatestNews_latestNews_title__2Xtcj",latestNews_title_left:"LatestNews_latestNews_title_left__2yE_2",latestNews_title_right:"LatestNews_latestNews_title_right__1MlzG",latestNews_wrapper:"LatestNews_latestNews_wrapper__2QLUj","latestNews_title-right":"LatestNews_latestNews_title-right__3OV02"}},vcXL:function(e,t,s){"use strict";var a=self.fetch.bind(self);e.exports=a,e.exports.default=e.exports},vlRD:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("RNiq")}])},"z9a/":function(e,t,s){e.exports={blockSmall_container:"SmallCard_blockSmall_container__ouW6-",titleSmall:"SmallCard_titleSmall__2YMVT"}}},[["vlRD",0,2,1,3]]]);