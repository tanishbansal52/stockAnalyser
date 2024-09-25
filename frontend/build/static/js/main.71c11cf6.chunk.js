(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c);a(13),a(14);var o=a(4),i=a.n(o);function s(e){let{companyName:t,sector:a}=e;const[c,r]=Object(n.useState)(null);if(console.log("Company is",t),Object(n.useEffect)(()=>{!async function(){try{const n=await fetch(`http://127.0.0.1:8000/chart?companyName=${t}&sector=${a}`),l=await n.json();r(l),console.log("Data recieved:",l)}catch(e){console.error("Error fetching chart data:",e)}}()},[t,a]),!c)return l.a.createElement("div",null,"Loading chart...");const o=c.past.main.dates,s=c.past.main.prices,m=c.past.XLK.dates,u=c.past.XLK.prices,p=c.past.VGT.dates,h=c.past.VGT.prices,d=[{name:t,x:o,y:s,type:"scatter",mode:"lines",marker:{color:"blue"}},{name:"XLK",x:m,y:u,type:"scatter",mode:"lines",line:{dash:"dot",width:4},marker:{color:"red"}},{name:"VGT",x:p,y:h,type:"scatter",mode:"lines",line:{dash:"dot",width:4},marker:{color:"yellow"}}];return l.a.createElement(i.a,{data:d,layout:{width:1200,height:400,xaxis:{title:"Date",showgrid:!1},yaxis:{title:"Price",showline:!1},title:`${t} Prices`,paper_bgcolor:"rgba(0,0,0,0)",plot_bgcolor:"rgba(0,0,0,0)",font_color:"rgba(245,245,245,0)"}})}const m=[{value:"AAPL",label:"Apple"},{value:"MSFT",label:"Microsoft"},{value:"AMZN",label:"Amazon"},{value:"GOOG",label:"Google"},{value:"NVDA",label:"Nvidia"},{value:"INFY.NS",label:"Infosys"}];function u(){const[e,t]=Object(n.useState)(m[0].value),[a,c]=Object(n.useState)(null),[r,o]=Object(n.useState)(null);return l.a.createElement("div",{id:"main"},l.a.createElement("h1",null,"Tanish's stock analysis"),l.a.createElement("p",null,"Select Company:"),l.a.createElement("form",{onSubmit:async function(t){if(t.preventDefault(),e){try{o("Loading info...");const t=await fetch(`http://127.0.0.1:8000/getInfo?companyName=${e}`),c=await t.json();if(1===Object.keys(c.info).length)throw new Error;o((a=c.info,l.a.createElement("div",null,l.a.createElement("h2",null,"Current Price"),l.a.createElement("p",null,a.currency," ",a.currentPrice),l.a.createElement("h2",null,"High/Low"),l.a.createElement("p",null,"52-week high: ",a.fiftyTwoWeekHigh,l.a.createElement("br",null),"52-week low: ",a.fiftyTwoWeekLow))))}catch(n){o("Failed to get info!")}try{c("Loading sentiment...");const t=await fetch(`http://127.0.0.1:8000/getSentiment?companyName=${e}`),a=await t.json();c(`${e}'s sentiment is: ${a.sentiment}`)}catch(n){c("Failed to get sentiment!")}}else c("Please select a company.");var a}},l.a.createElement("select",{name:"companyName",value:e,onChange:function(e){t(e.target.value)}}," ",m.map(e=>l.a.createElement("option",{key:e.value,value:e.value},e.label))),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Generate Sentiment!!!"),l.a.createElement("br",null),l.a.createElement("br",null),a&&l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("h1",null,"Sentiment"),l.a.createElement("p",null,a)),r&&l.a.createElement("div",null,r)),l.a.createElement(s,{companyName:e,sector:"Technology"}))}var p=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,null))};var h=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:c,getTTFB:r}=t;a(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null))),h()},5:function(e,t,a){e.exports=a(24)}},[[5,1,2]]]);
//# sourceMappingURL=main.71c11cf6.chunk.js.map