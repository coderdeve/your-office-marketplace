(this["webpackJsonpyour-office-marketplace"]=this["webpackJsonpyour-office-marketplace"]||[]).push([[0],{18:function(e,c,s){"use strict";c.a=s.p+"static/media/your-office-logo.5b022b35.png"},21:function(e,c,s){"use strict";var t=s(1),a=s.n(t).a.createContext({state:{}});c.a=a},24:function(e,c,s){"use strict";c.a=s.p+"static/media/project-1.29df3fd2.jpg"},32:function(e,c,s){"use strict";(function(e){s.d(c,"a",(function(){return u}));var t=s(11),a=s.n(t),l=s(13),n=(s(1),s(21)),r=s(18),i=(s(52),s(53),s(54),s(16)),o=s(2),j=(s(55),s(33)),b=s(44),d=(s(60),s(36)),m=s(37),f=s(38),h=s(39),x=s(41),p=s(0);e.firebase=x;function u(){var c=function(){var c=Object(l.a)(a.a.mark((function c(s){return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:e.firebase.auth().onAuthStateChanged((function(e){e?console.log("\u062a\u0645 \u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644\u0643 ..."):(console.log("\u0627\u0646\u062a \u0632\u0627\u0626\u0631"),setTimeout((function(){s.setAppLoaded(!0)}),1500))}));case 1:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(a.a.mark((function e(s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(s);case 2:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();return Object(p.jsx)(n.a.Consumer,{children:function(e){return e.appLoaded()?Object(p.jsx)("div",{className:"App flex",children:Object(p.jsxs)(i.a,{children:[Object(p.jsx)(j.a,{}),Object(p.jsxs)("div",{className:"app-content",children:[Object(p.jsx)(o.a,{exact:!0,path:"/",component:b.a}),Object(p.jsx)(o.a,{path:"/project/:projectid",component:d.a}),Object(p.jsx)(o.a,{path:"/discover",component:m.a}),Object(p.jsx)(o.a,{path:"/categories",component:f.a}),Object(p.jsx)(o.a,{path:"/my-projects",component:h.a})]})]})}):Object(p.jsx)(n.a.Consumer,{children:function(e){return s(e),Object(p.jsx)("div",{className:"App flex",children:Object(p.jsx)("div",{className:"splash abs abc",children:Object(p.jsx)("img",{src:r.a,className:"block"})})})}})}})}e.firebase.initializeApp({apiKey:"AIzaSyCMmgYArLySghpJDfknGE4q0DI_-20PWJE",authDomain:"your-office-project.firebaseapp.com",projectId:"your-office-project",storageBucket:"your-office-project.appspot.com",messagingSenderId:"948045103656",appId:"1:948045103656:web:44406ccc82048abdbe6b1d"})}).call(this,s(28))},33:function(e,c,s){"use strict";var t=s(3),a=s(1),l=s(18),n=s(16),r=s(0);c.a=function(){for(var e=Object(a.useState)([{Lable:"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",slug:"/",icon:"icon-home1"},{Lable:"\u0627\u0643\u062a\u0634\u0641",slug:"discover",icon:"icon-th-list"},{Lable:"\u0627\u0644\u0627\u0642\u0633\u0627\u0645",slug:"categories",icon:"icon-price-tag"},{Lable:"\u0645\u0634\u0627\u0631\u064a\u0639\u064a",slug:"my-projects",icon:"icon-briefcase"}]),c=Object(t.a)(e,2),s=c[0],i=(c[1],Object(a.useState)("/")),o=Object(t.a)(i,2),j=(o[0],o[1],[]),b=0;b<s.length;b++)j.push(Object(r.jsx)("li",{children:Object(r.jsxs)(n.b,{to:s[b].slug,className:"aic link no_ul flex color333",children:[Object(r.jsx)("div",{className:"ico fonts20 "+s[b].icon}),Object(r.jsx)("h2",{className:"label fonts20",children:s[b].Lable})]})},"nav-"+b+"-"+s[b].slug));return Object(r.jsxs)("div",{className:"sidebar rel",children:[Object(r.jsx)("a",{href:"#",className:"logo block",children:Object(r.jsx)("img",{src:l.a,className:"block"})}),Object(r.jsx)("ul",{className:"nav",children:j}),Object(r.jsxs)("div",{className:"updated-project flex aic",children:[Object(r.jsx)("div",{className:"icon-feed1 colorfff fonts24 ico"}),Object(r.jsxs)("div",{className:"label fonts15 fontb color333",children:["\u0645\u0634\u0627\u0631\u064a\u0639 \u0645\u062d\u062f\u062b\u0629",Object(r.jsx)("h2",{className:"freelancer fonts13 color777",children:"\u0628\u0648\u0627\u0633\u0637\u0629 \u062c\u0644\u0627\u0644 \u0627\u0644\u0646\u0647\u0627\u0631\u064a"})]})]}),Object(r.jsxs)("div",{className:"stats aic flex",children:[Object(r.jsxs)("div",{className:"stats-box flex",children:[Object(r.jsx)("div",{className:"ico ico-shield fonts24 icon-shield1"}),Object(r.jsx)("h2",{className:"value fonts15 color333",children:"30"}),Object(r.jsx)("h2",{className:"label fonts13 color777",children:"\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0645\u0646\u062c\u0632\u0629"})]}),Object(r.jsxs)("div",{className:"stats-box flex",children:[Object(r.jsx)("div",{className:"ico ico-battery fonts24 icon-battery-3"}),Object(r.jsx)("h2",{className:"value fonts15 color333",children:"63.3%"}),Object(r.jsx)("h2",{className:"label fonts13 color777",children:"\u0645\u0634\u0627\u0631\u064a\u0639 \u0642\u064a\u062f \u0627\u0644\u062a\u0646\u0641\u064a\u0630"})]})]}),Object(r.jsxs)("div",{className:"me flex aic",children:[Object(r.jsx)("div",{className:"photo colorfff fonts24",children:Object(r.jsx)("img",{src:"http://placeimg.com/100/100/people",className:"block"})}),Object(r.jsxs)("div",{className:"label fonts15 fontb color333",children:["\u0645.\u0639\u0628\u062f \u0627\u0644\u0631\u062d\u0645\u0646 \u0639\u0644\u0627\u0621",Object(r.jsx)("h2",{className:"yourname fonts13 color777",children:"@AbdulrahmanAlaa"})]})]})]})}},36:function(e,c,s){"use strict";var t=s(3),a=s(1),l=s(24),n=s(0);c.a=function(e){for(var c=Object(a.useState)({ID:1,title:"\u062a\u062c\u0647\u064a\u0632 \u0648 \u062a\u0647\u064a\u0626\u0629 \u0633\u064a\u0631\u0641\u0631\u0627\u062a \u0633\u062d\u0627\u0628\u064a\u0629 \u0639\u0644\u0649 \u0627\u0645\u0627\u0632\u0648\u0646",about:"\u0647\u0644 \u062a\u0628\u062d\u062b \u0639\u0646 \u062e\u0628\u064a\u0631 \u0644\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0623\u0648 \u062d\u0644 \u0623\u064a \u0645\u0634\u0643\u0644\u0627\u062a \u0641\u064a Amazon Web Services (AWS)\u061f \u0623\u0646\u0627 \u0647\u0646\u0627 \u0644\u0645\u0633\u0627\u0639\u062f\u062a\u0643</br>\u0623\u0646\u0627 \u0645\u0647\u0646\u062f\u0633 \u0645\u0637\u0648\u0631 \u0645\u0639\u062a\u0645\u062f \u0645\u0646 AWS \u0648\u0623\u062a\u0645\u062a\u0639 \u0628\u0645\u0639\u0631\u0641\u0629 \u0648\u062e\u0628\u0631\u0629 \u0641\u064a \u0627\u0644\u062d\u0641\u0627\u0638 \u0639\u0644\u0649 \u0627\u0644\u062d\u0644\u0648\u0644 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0639\u0644\u0649 AWS</br>\u0641\u064a\u0645\u0627 \u064a\u0644\u064a \u0627\u0644\u0623\u0634\u064a\u0627\u0621 \u0627\u0644\u062a\u064a \u0627\u0643\u062a\u0633\u0628\u062a \u0645\u0639\u0631\u0641\u062a\u0647\u0627 \u0648\u0639\u0645\u0644\u062a \u0639\u0644\u064a\u0647\u0627 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0645\u0633\u0627\u0639\u062f\u0629 \u0639\u0645\u0644\u0627\u0626\u064a:</br>VPC, VPN, S3, ECS, EKS, EC2, RDS, EBS, ELB, API, Auto Scalling</br>Elastic beanstalk, Route53, Lambda, DynamoDB</br>Elasticsearch strong experience in designing HA, IAM, Direct Connect</br>Scalable & fault tolerant system in AWS</br>\u0625\u0644\u0649 \u062c\u0627\u0646\u0628 \u0647\u0630\u0627 \u0623\u0646\u0627 \u0628\u0627\u0631\u0639 \u0641\u064a:</br>Ansible, Bitbucket, EKS, K8s, Jenkins, ECS, Fargate</br>\u0625\u0644\u0649 \u062c\u0627\u0646\u0628 \u0630\u0644\u0643 \u060c \u0623\u0642\u062f\u0645 \u0644\u0639\u0645\u0644\u0627\u0626\u064a \u062e\u0637\u0629 \u0641\u0639\u0627\u0644\u0629 \u0645\u0646 \u062d\u064a\u062b \u0627\u0644\u062a\u0643\u0644\u0641\u0629 \u0644\u062a\u0644\u0628\u064a\u0629 \u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a\u0647\u0645 \u0645\u0639 \u0625\u0646\u0641\u0627\u0642 \u0623\u0642\u0644.",freelancer:{ID:1,name:"\u064a\u0627\u0633\u0631 \u063a\u0644\u0627\u0645",username:"@ValorYasir",dp:"http://placeimg.com/100/100/people?freelancer-1"},duration:"3 \u0627\u064a\u0627\u0645",poster:l.a,videos:[{ID:1,title:"\u0627\u0644\u062a\u062e\u0637\u064a\u0637 \u0628\u0639\u062f \u0622\u062e\u0630 \u0627\u0644\u0645\u062a\u0637\u0644\u0628\u0627\u062a",duration:"1 \u064a\u0648\u0645"},{ID:2,title:"\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u062a\u062e\u0637\u064a\u0637 \u0639\u0644\u0649 \u0627\u0645\u0627\u0632\u0648\u0646",duration:"1 \u064a\u0648\u0645"},{ID:3,title:"\u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631 \u0648 \u0627\u0644\u062a\u0633\u0644\u064a\u0645",duration:"1 \u064a\u0648\u0645"}]}),s=Object(t.a)(c,2),r=s[0],i=(s[1],e.match.params.projectid,[]),o=0;o<r.videos.length;o++)i.push(Object(n.jsxs)("a",{href:"#",className:"no_ul aic rel flex",children:[Object(n.jsx)("div",{className:"id fonts18 fontn colorfff",children:r.videos[o].ID}),Object(n.jsxs)("div",{className:"meta rel",children:[Object(n.jsx)("h1",{className:"fonts15 label fontb color333",children:r.videos[o].title}),Object(n.jsx)("h1",{className:"fonts13 duration fontn color777",children:r.videos[o].duration})]})]},"project-video-"+o));return Object(n.jsxs)("div",{className:"project-page rel flex",children:[Object(n.jsxs)("div",{className:"project-info rel",children:[Object(n.jsxs)("div",{className:"freelancer rel aic flex",children:[Object(n.jsx)("div",{className:"pic",children:Object(n.jsx)("img",{src:r.freelancer.dp,className:"block"})}),Object(n.jsxs)("div",{className:"meta rel",children:[Object(n.jsx)("h2",{className:"fonts15 name fontb color333",children:r.freelancer.name}),Object(n.jsx)("h2",{className:"fonts13 username fontn color777",children:"\u0645\u0646\u0641\u0630 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"})]})]}),Object(n.jsxs)("div",{className:"project-meta",children:[Object(n.jsx)("h2",{className:"fonts24 title fontb color333",children:r.title}),Object(n.jsx)("p",{className:"fonts18 about fontb color777",dangerouslySetInnerHTML:{__html:r.about}}),Object(n.jsxs)("div",{className:"section section-b rel",children:[Object(n.jsxs)("h2",{className:"title fonts24 fontb",children:["\u0627\u0646\u062c\u0627\u0632\u0627\u062a ",Object(n.jsx)("span",{className:"fontn",children:"\u0645\u0646\u0641\u0630 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"})]}),Object(n.jsxs)("div",{className:"project-stats aic flex",children:[Object(n.jsxs)("div",{className:"stats-box flex",children:[Object(n.jsx)("div",{className:"ico ico-shield fonts24 icon-shield1"}),Object(n.jsx)("h2",{className:"value fonts15 color333",children:"18"}),Object(n.jsx)("h2",{className:"label fonts13 color777",children:"\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0645\u0646\u062c\u0632\u0629"})]}),Object(n.jsxs)("div",{className:"stats-box flex",children:[Object(n.jsx)("div",{className:"ico ico-battery fonts24 icon-battery-3"}),Object(n.jsx)("h2",{className:"value fonts15 color333",children:"93.3%"}),Object(n.jsx)("h2",{className:"label fonts13 color777",children:"\u0645\u0634\u0627\u0631\u064a\u0639 \u0642\u064a\u062f \u0627\u0644\u062a\u0646\u0641\u064a\u0630"})]}),Object(n.jsxs)("div",{className:"stats-box flex",children:[Object(n.jsx)("div",{className:"ico icon-flag fonts24 icon-flag"}),Object(n.jsx)("h2",{className:"value fonts15 color333",children:"\u0645\u062a\u0648\u0633\u0637"}),Object(n.jsx)("h2",{className:"label fonts13 color777",children:"\u0627\u0644\u0645\u0633\u062a\u0648\u0649"})]})]})]}),Object(n.jsxs)("div",{className:"section section-b rel",children:[Object(n.jsxs)("h2",{className:"title fonts24 fontb",children:["\u062a\u0641\u0627\u0635\u064a\u0644 ",Object(n.jsx)("span",{className:"fontn",children:"\u0627\u0644\u0645\u0634\u0631\u0648\u0639"})]}),Object(n.jsx)("div",{className:"project-videos aic flex",children:i})]})]})]}),Object(n.jsxs)("div",{className:"project-preview rel",children:[Object(n.jsxs)("div",{className:"player rel",children:[Object(n.jsx)("video",{poster:r.poster}),Object(n.jsxs)("div",{className:"control abs aic flex",children:[Object(n.jsx)("button",{className:"icon-pause fonts18 pb"}),Object(n.jsx)("div",{className:"timer rel fontn fonts18 colorfff",children:"02:54 / 09:55"}),Object(n.jsx)("div",{className:"slider rel",children:Object(n.jsx)("div",{className:"progress rel",children:Object(n.jsx)("div",{className:"bar rel",children:Object(n.jsx)("div",{className:"knob abs"})})})}),Object(n.jsx)("button",{className:"icon-volume-high fonts18 vol"}),Object(n.jsx)("button",{className:"icon-enlarge fonts18 fulls"})]})]}),Object(n.jsxs)("div",{className:"extra-block rel flex",children:[Object(n.jsx)("div",{className:"chat rel",children:Object(n.jsxs)("div",{className:"section section-b rel",children:[Object(n.jsxs)("h2",{className:"title fonts24 fontb",children:["\u0645\u062d\u0627\u062f\u062b\u0629 ",Object(n.jsx)("span",{className:"fontn",children:"\u0633\u0631\u064a\u0639\u0629"})]}),Object(n.jsxs)("div",{className:"messages aic flex",children:[Object(n.jsx)("div",{className:"bubble rel",children:Object(n.jsx)("h2",{className:"text iblock fontn fonts15 color333",children:"\u0645\u0631\u062d\u0628\u0627 \u060c \u0627\u0646\u0627 \u0633\u0627\u0644\u0645 \u0645\u062d\u0645\u062f"})}),Object(n.jsx)("div",{className:"bubble rel",children:Object(n.jsx)("h2",{className:"text iblock fontn fonts15 color333",children:"\u062d\u0627\u0628\u0628 \u0627\u0636\u064a\u0641 \u062a\u0639\u062f\u064a\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"})}),Object(n.jsx)("div",{className:"bubble bubble-mine rel",children:Object(n.jsx)("h2",{className:"text iblock fontn fonts15 color333",children:"\u0627\u0647\u0644\u0627 \u0627\u0633\u062a\u0627\u0630 \u0633\u0627\u0644\u0645 "})}),Object(n.jsx)("div",{className:"bubble bubble-mine rel",children:Object(n.jsx)("h2",{className:"text iblock fontn fonts15 color333",children:"\u0648 \u0644\u0627 \u064a\u0647\u0645\u0643 \u0641\u064a \u062e\u062f\u0645\u062a\u0643 \u062f\u0627\u0626\u0645\u0627 \u060c \u0627\u0631\u0641\u0639 \u0637\u0644\u0628 \u0628\u0627\u0644\u062a\u0639\u062f\u064a\u0644"})}),Object(n.jsx)("div",{className:"bubble bubble-send rel",children:Object(n.jsx)("input",{className:"text iblock fontn fonts15 color333",type:"text",placeholder:"\u0627\u0643\u062a\u0628 \u0631\u0633\u0627\u0644\u062a\u0643 \u0647\u0646\u0627..."})})]})]})}),Object(n.jsxs)("div",{className:"online-clients rel",children:[Object(n.jsx)("div",{className:"tooltip abs fonts13 fontb colorfff",children:"4 \u0645\u062a\u0648\u0627\u062c\u062f\u0648\u0646 \u0627\u0644\u0622\u0646"}),Object(n.jsxs)("div",{className:"section section-b rel",children:[Object(n.jsxs)("h2",{className:"title fonts24 fontb",children:["\u0639\u0645\u0644\u0627\u0621 ",Object(n.jsx)("span",{className:"fontn",children:"\u0627\u0648\u0646\u0644\u0627\u064a\u0646"})]}),Object(n.jsxs)("div",{className:"clients-list rel",children:[Object(n.jsxs)("div",{className:"client rel aic flex",children:[Object(n.jsx)("div",{className:"pic",children:Object(n.jsx)("img",{src:"http://placeimg.com/100/100/people?clients-1",className:"block"})}),Object(n.jsxs)("div",{className:"meta rel",children:[Object(n.jsx)("h2",{className:"fonts15 name fontb color333",children:"\u0635\u0627\u0644\u062d \u0639\u0628\u062f \u0627\u0644\u0644\u0647"}),Object(n.jsx)("h2",{className:"fonts13 username fontn color777",children:"@salehA"})]})]}),Object(n.jsxs)("div",{className:"client rel aic flex",children:[Object(n.jsx)("div",{className:"pic",children:Object(n.jsx)("img",{src:"http://placeimg.com/100/100/people?clients-2",className:"block"})}),Object(n.jsxs)("div",{className:"meta rel",children:[Object(n.jsx)("h2",{className:"fonts15 name fontb color333",children:"\u0633\u0627\u0644\u0645 \u0645\u062d\u0645\u062f"}),Object(n.jsx)("h2",{className:"fonts13 username fontn color777",children:"@Saloom"})]})]}),Object(n.jsxs)("div",{className:"client rel aic flex",children:[Object(n.jsx)("div",{className:"pic",children:Object(n.jsx)("img",{src:"http://placeimg.com/100/100/people?clients-3",className:"block"})}),Object(n.jsxs)("div",{className:"meta rel",children:[Object(n.jsx)("h2",{className:"fonts15 name fontb color333",children:"\u0645\u062d\u0645\u062f \u0627\u0644\u0632\u064a\u0644\u0639\u064a"}),Object(n.jsx)("h2",{className:"fonts13 username fontn color777",children:"@zoozM"})]})]}),Object(n.jsxs)("div",{className:"client rel aic flex",children:[Object(n.jsx)("div",{className:"pic",children:Object(n.jsx)("img",{src:"http://placeimg.com/100/100/people?clients-4",className:"block"})}),Object(n.jsxs)("div",{className:"meta rel",children:[Object(n.jsx)("h2",{className:"fonts15 name fontb color333",children:"\u0627\u0628\u0631\u0627\u0631 \u0633\u0639\u064a\u062f"}),Object(n.jsx)("h2",{className:"fonts13 username fontn color777",children:"@Abrar_S"})]})]})]})]})]})]})]})]})}},37:function(e,c,s){"use strict";var t=s(1),a=s(0);c.a=function(){return Object(t.useEffect)((function(){document.title="\u0627\u0643\u062a\u0634\u0641"})),Object(a.jsx)("div",{className:"app-page rel",children:Object(a.jsx)("h1",{className:"page-title fonts24 fontb color333",children:"\u0627\u0643\u062a\u0634\u0641"})})}},38:function(e,c,s){"use strict";var t=s(1),a=s(0);c.a=function(){return Object(t.useEffect)((function(){document.title="\u0627\u0644\u0627\u0642\u0633\u0627\u0645"})),Object(a.jsx)("div",{className:"app-page rel",children:Object(a.jsx)("h1",{className:"page-title fonts24 fontb color333",children:"\u0627\u0644\u0627\u0642\u0633\u0627\u0645"})})}},39:function(e,c,s){"use strict";var t=s(1),a=s(0);c.a=function(){return Object(t.useEffect)((function(){document.title="\u0645\u0634\u0627\u0631\u064a\u0639\u064a"})),Object(a.jsx)("div",{className:"app-page rel",children:Object(a.jsx)("h1",{className:"page-title fonts24 fontb color333",children:"\u0645\u0634\u0627\u0631\u064a\u0639\u064a"})})}},44:function(e,c,s){"use strict";var t=s(3),a=s(1),l=s(24),n=s.p+"static/media/project-5.2c2797e3.jpg",r=s(16),i=s(0);c.a=function(){Object(a.useEffect)((function(){document.title="\u0645\u0643\u062a\u0628\u0643 - \u062f\u0639 \u0627\u0644\u0639\u0627\u0644\u0645 \u064a\u0634\u0627\u0647\u062f \u0627\u0628\u062f\u0627\u0639\u0643"}));for(var e=Object(a.useState)([{ID:1,title:"\u062a\u062c\u0647\u064a\u0632 \u0648 \u062a\u0647\u064a\u0626\u0629 \u0633\u064a\u0631\u0641\u0631\u0627\u062a \u0633\u062d\u0627\u0628\u064a\u0629 \u0639\u0644\u0649 \u0627\u0645\u0627\u0632\u0648\u0646",freelancer:{ID:1,name:"\u064a\u0627\u0633\u0631 \u063a\u0644\u0627\u0645",username:"@ValorYasir",dp:"http://placeimg.com/100/100/people?freelancer-1"},duration:"3 \u0627\u064a\u0627\u0645",poster:l.a},{ID:2,title:"\u0628\u0631\u0645\u062c\u0629 \u0648\u0627\u062c\u0647\u0627\u062a \u0648\u064a\u0628 \u0628\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0628\u0648\u062a\u0633\u062a\u0631\u0627\u0628",freelancer:{ID:2,name:"\u0645.\u0639\u0644\u0627\u0621 \u0639\u0628\u062f \u0627\u0644\u0631\u062d\u0645\u0646",username:"@AbdulrahmanAlaa",dp:"http://placeimg.com/100/100/people?freelancer-2"},duration:"4 \u0627\u064a\u0627\u0645",poster:n}]),c=Object(t.a)(e,2),s=c[0],o=(c[1],Object(a.useState)([{ID:1,name:"\u0645.\u0639\u0628\u062f \u0627\u0644\u0631\u062d\u0645\u0646 \u0639\u0644\u0627\u0621",username:"@AbdulrahmanAlaa",dp:"http://placeimg.com/100/100/people?freelanceres-1"},{ID:2,name:"\u0645.\u0627\u062d\u0645\u062f \u062d\u0627\u062a\u0645",username:"@AhmedHatem",dp:"http://placeimg.com/100/100/people?freelanceres-2"},{ID:3,name:"\u0645.\u0628\u064a\u062a\u0631",username:"@Petter",dp:"http://placeimg.com/100/100/people?freelanceres-3"},{ID:4,name:"\u0645.\u0639\u0627\u0626\u0634\u0629",username:"@Aisha",dp:"http://placeimg.com/100/100/people?freelanceres-4"},{ID:5,name:"\u064a\u0627\u0633\u0631 \u063a\u0644\u0627\u0645",username:"@ValorYasir",dp:"http://placeimg.com/100/100/people?freelanceres-5"},{ID:6,name:"\u0639\u0628\u062f \u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0633\u0631\u064a",username:"@Alserri",dp:"http://placeimg.com/100/100/people?freelanceres-6"}])),j=Object(t.a)(o,2),b=j[0],d=(j[1],[]),m=0;m<8;m++)d.push(Object(i.jsx)("button",{className:"freelancer rel",children:Object(i.jsx)("img",{src:"http://placeimg.com/100/100/people?"+m,className:"block"})},"freelancer-live-"+m));for(var f=[],h=0;h<s.length;h++)f.push(Object(i.jsx)(r.b,{to:"/project/"+s[h].ID,className:"project rel",children:Object(i.jsxs)("div",{className:"block rel",style:{background:"#e2e2e2 url("+s[h].poster+") no-repeat center"},children:[Object(i.jsxs)("div",{className:"user abs aic flex",children:[Object(i.jsx)("div",{className:"pic",children:Object(i.jsx)("img",{src:s[h].freelancer.dp,className:"bl"})}),Object(i.jsxs)("div",{className:"meta rel",children:[Object(i.jsx)("h2",{className:"fonts15 name fontb colorfff",children:s[h].freelancer.name}),Object(i.jsx)("h2",{className:"fonts13 username fontn colorfff",children:s[h].freelancer.username})]})]}),Object(i.jsx)("div",{className:"duration abs",children:Object(i.jsx)("h2",{className:"fonts13 name fontb colorfff",children:s[h].duration})}),Object(i.jsx)("div",{className:"project-title abs",children:Object(i.jsx)("h2",{className:"fonts15 name fontb colorfff",children:s[h].title})})]})},"popular-project-"+h));for(var x=[],p=0;p<b.length;p++)x.push(Object(i.jsx)("a",{href:"#",className:"user-block rel no_ul",children:Object(i.jsxs)("div",{className:"user aic flex",children:[Object(i.jsx)("div",{className:"pic",children:Object(i.jsx)("img",{src:b[p].dp,className:"bl"})}),Object(i.jsxs)("div",{className:"meta rel",children:[Object(i.jsx)("h2",{className:"fonts15 name fontb color333",children:b[p].name}),Object(i.jsx)("h2",{className:"fonts13 username fontn color333",children:b[p].username})]})]})},"top-freelanceres-"+p));return Object(i.jsxs)("div",{className:"home-page rel",children:[Object(i.jsxs)("div",{className:"section rel",children:[Object(i.jsxs)("h2",{className:"title fonts24 fontb",children:["\u0627\u0644\u0645\u062a\u0648\u0627\u062c\u062f\u0648\u0646 ",Object(i.jsx)("span",{className:"fontn",children:"\u0627\u0644\u0622\u0646"})]}),Object(i.jsx)("div",{className:"freelanceres rel flex",children:d})]}),Object(i.jsxs)("div",{className:"section section-b rel",children:[Object(i.jsxs)("h2",{className:"title fonts24 fontb",children:["\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0627\u0643\u062b\u0631 \u0634\u0639\u0628\u064a\u0629 ",Object(i.jsx)("span",{className:"fontn",children:"\u0647\u0630\u0627 \u0627\u0644\u0627\u0633\u0628\u0648\u0639"})]}),Object(i.jsx)("div",{className:"projects rel flex",children:f})]}),Object(i.jsxs)("div",{className:"section section-b rel",children:[Object(i.jsxs)("h2",{className:"title fonts24 fontb",children:["\u0627\u0641\u0636\u0644 ",Object(i.jsx)("span",{className:"fontn",children:"\u0645\u0646\u0641\u0630\u064a \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"})]}),Object(i.jsx)("div",{className:"top-freelanceres rel flex",children:x})]})]})}},49:function(e,c,s){},52:function(e,c,s){},53:function(e,c,s){},54:function(e,c,s){},55:function(e,c,s){"use strict";s(1),s(18),s(0)},60:function(e,c,s){"use strict";s(3),s(1),s.p,s.p,s.p,s.p,s(0)},61:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s.n(t),l=s(31),n=s.n(l),r=(s(49),s(3)),i=s(21),o=s(0);var j=function(e){var c=Object(t.useState)(!0),s=Object(r.a)(c,2),a=s[0],l=s[1],n=Object(t.useState)(!1),j=Object(r.a)(n,2),b=j[0],d=j[1];return Object(o.jsx)(i.a.Provider,{value:{getDebug:function(){return a},setDebug:l,appLoaded:function(){return b},setAppLoaded:function(e){d(e)}},children:e.children})},b=s(32);var d=function(){return Object(o.jsx)(j,{children:Object(o.jsx)(b.a,{})})},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,62)).then((function(c){var s=c.getCLS,t=c.getFID,a=c.getFCP,l=c.getLCP,n=c.getTTFB;s(e),t(e),a(e),l(e),n(e)}))};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),m()}},[[61,1,2]]]);
//# sourceMappingURL=main.465b0f30.chunk.js.map