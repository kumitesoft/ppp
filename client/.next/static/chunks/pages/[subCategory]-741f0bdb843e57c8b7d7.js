_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"9EPU":function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return x}));var r=a("MX0m"),n=a.n(r),i=a("q1tI"),s=a.n(i),o=a("80PL"),c=a("IObC"),m=a("ODXe"),l=a("iWaP"),d=[{category:"mezczyzna",data:["./swaper/mezczyzna/one.png","./swaper/mezczyzna/two.png","./swaper/mezczyzna/three.png","./swaper/mezczyzna/four.png"]}],p=function(e){return d.filter((function(t){return t.category===e})),d[0].data},g=s.a.createElement,u=function(e){var t=e.category,a=s.a.useState([]),r=Object(m.a)(a,2),i=r[0],o=r[1],c=Object(l.useKeenSlider)({slides:p(t).length,loop:!0,move:function(e){var t=e.details().positions.map((function(e){return e.portion}));o(t)}}),d=Object(m.a)(c,2),u=d[0],f=d[1];return s.a.useEffect((function(){var e=setInterval((function(){f.next()}),2500);return function(){clearInterval(e)}}),[f]),g("div",{ref:u,className:"jsx-276206109 fader"},p(t).map((function(e,t){return g("div",{key:t,style:{opacity:i[t]},className:"jsx-276206109 fader__slide"},g("img",{src:e,className:"jsx-276206109"}))})),g(n.a,{id:"276206109"},[".fader.jsx-276206109{height:38rem;position:relative;overflow:hidden;width:50rem;margin:0 auto;}",".fader__slide.jsx-276206109{width:100%;height:100%;position:absolute;top:0;}",".fader.jsx-276206109 img.jsx-276206109{width:100%;height:auto;position:absolute;top:50%;left:50%;-webkit-transform:translateY(-50%) translateX(-50%);-ms-transform:translateY(-50%) translateX(-50%);transform:translateY(-50%) translateX(-50%);-webkit-transform:translateY(-50%) translateX(-50%);}","@media only screen and (max-width:768px){.fader.jsx-276206109{height:63vw;width:100%;}}"]))},f=[{title:"mezczyzna",description:"Mezczyzni"},{title:"kobieta",description:"Kobiety"}],y=(a("CMED"),s.a.createElement),x=!0;t.default=function(e){var t,a=e.categoryData,r=(t=a[0].subCategory,f.filter((function(e){return e.title===t}))[0]);return console.log(a,"categoryData"),y(o.a,null,y("div",{className:"jsx-283917303 category_container"},y("div",{className:"jsx-283917303 category_title"},y("p",{className:"jsx-283917303"},r.description)),y("div",{className:"jsx-283917303 randompic"},y(u,{category:a[0].subCategory})),y("div",{className:"jsx-283917303 empty"},y("p",{className:"jsx-283917303"},"Ponad 100 roznych sklepow")),y("div",{className:"jsx-283917303 category_wrapper"},a.map((function(e){return y(c.a,{id:e._id,name:e.name,description:e.description,price:e.price,category:e.category,image:e.image,createdAt:e.createdAt,key:e.name})}))),y(n.a,{id:"283917303"},[".category_title.jsx-283917303{text-align:center;margin:3rem 0;font-size:3rem;color:#000;}",".empty.jsx-283917303{margin:3rem 0;background-color:#000;height:6rem;text-align:center;}",".empty.jsx-283917303 p.jsx-283917303{color:#fff;font-size:3rem;line-height:6rem;}",".randompic.jsx-283917303{margin:0 1rem;}",".category_wrapper.jsx-283917303{display:grid;grid-template-columns:repeat(auto-fit,minmax(15.9rem,19.8rem));grid-auto-rows:23.14rem;grid-gap:1.3rem;grid-row-gap:4rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2rem 1rem 0 1rem;}","@media only screen and (max-width:768px){.category_title.jsx-283917303{font-size:1.8rem;}.empty.jsx-283917303{height:5rem;}.empty.jsx-283917303 p.jsx-283917303{font-size:1.8rem;line-height:5rem;}}","@media only screen and (max-width:320px){.category_wrapper.jsx-283917303{grid-auto-rows:25.14rem;}}"])))}},"GRJ/":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[subCategory]",function(){return a("9EPU")}])}},[["GRJ/",0,2,3,1,4]]]);