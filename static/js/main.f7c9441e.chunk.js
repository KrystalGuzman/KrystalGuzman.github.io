(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/Kheadshot.0da9295c.jpg"},21:function(e,a,t){e.exports=t(43)},26:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(18),l=t.n(r),s=(t(26),t(2)),o=t(3),c=t(4),m=t(5),d=t(19),u=t.n(d),p=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).sidebarData=e.sidebarData,n}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},i.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},i.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),i.a.createElement("span",{className:"d-none d-lg-block"},i.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:u.a,alt:""}))),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#projects"},"Projects")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#contact"},"Contact")))))}}]),t}(n.Component),g=t(8),h=t(14),b=t(11),E=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).landingData=e.landingData,n}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,i.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),i.a.createElement("div",{className:"subheading mb-5"},this.landingData.header),i.a.createElement("p",{className:"lead mb-5"},this.landingData.bio1),i.a.createElement("p",{className:"lead mb-5"},this.landingData.bio2),i.a.createElement("div",{className:"social-icons"},i.a.createElement("a",{href:this.landingData.linkedin,target:"_blank"},i.a.createElement(g.a,{icon:h.b})),i.a.createElement("a",{href:this.landingData.github,target:"_blank"},i.a.createElement(g.a,{icon:h.a})),i.a.createElement("a",{href:"mailto:kryguzman@gmail.com"},i.a.createElement(g.a,{icon:b.b})))))}}]),t}(n.Component),f=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).projects=e.projects,n}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"projects"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Projects"),this.projects.map((function(e,a){return i.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},i.a.createElement("div",{className:"resume-content"},i.a.createElement("a",{href:e.link},i.a.createElement("h3",{className:"mb-0"},e.title)),i.a.createElement("img",{className:"images",height:"400",width:"400",src:e.image,alt:e.title}),i.a.createElement("p",null,e.point1),i.a.createElement("p",null,e.point2)))}))))}}]),t}(n.Component),v=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).education=e.education,n}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map((function(e,a){return i.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},i.a.createElement("div",{className:"resume-content"},i.a.createElement("h3",{className:"mb-0"},e.program),i.a.createElement("div",{className:"subheading mb-3"},e.school)),i.a.createElement("div",{className:"resume-date text-md-right"},i.a.createElement("span",{className:"text-primary"},e.graduation)))}))))}}]),t}(n.Component),N=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).skills=e.skills,n}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Skills"),i.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),i.a.createElement("div",{className:"row"},this.skills.map((function(e,a){return i.a.createElement("div",{key:a,className:"col-6"},i.a.createElement("p",{className:"list-item"},i.a.createElement(g.a,{icon:b.a,color:"green"}),i.a.createElement("span",{className:"ml-3"},e.name)))})))))}}]),t}(n.Component),k=t(20);var y=function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"contact"},i.a.createElement("div",{class:"box"},i.a.createElement("h1",{className:"p-heading1"},"Get in Touch"),i.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),k.sendForm("krystal_guzman","template_Yltl5BJG",e.target,"user_WS8bau9KlsmGoRfstHP6V").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))}},i.a.createElement("input",{type:"hidden",name:"contact_number"}),i.a.createElement("label",null,"Name"),i.a.createElement("br",null),i.a.createElement("input",{class:"inputForm",type:"text",name:"user_name"}),i.a.createElement("br",null),i.a.createElement("label",null,"Email"),i.a.createElement("br",null),i.a.createElement("input",{class:"inputForm",type:"email",name:"user_email"}),i.a.createElement("br",null),i.a.createElement("label",null,"Message"),i.a.createElement("br",null),i.a.createElement("textarea",{class:"inputForm",name:"message"}),i.a.createElement("br",null),i.a.createElement("input",{class:"inputForm",type:"submit",value:"Send"}),i.a.createElement("br",null),i.a.createElement("br",null))))},j=t(9),w=t(15),S=t(10),D=t.n(S),x=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={landingData:j.landing,projects:j.projects,education:j.education,skills:j.skills,work:j.work},w.a.initialize("G-ZH5SXFWR8E"),w.a.pageview(window.location.pathname),n}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,{sidebarData:this.state.landingData}),i.a.createElement("div",{className:"container-fluid p-0"},i.a.createElement(D.a,{top:!0},i.a.createElement(E,{landingData:this.state.landingData})),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(D.a,{top:!0},i.a.createElement(f,{projects:this.state.projects})),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(D.a,{top:!0},i.a.createElement(v,{education:this.state.education})),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(D.a,{top:!0},i.a.createElement(N,{skills:this.state.skills})),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(D.a,{top:!0},i.a.createElement(y,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e){e.exports=JSON.parse('{"landing":{"firstName":"Krystal","lastName":"Guzman","header":"A PROFESSIONAL WEB DEVELOPER WITH EXPERIENCE ACROSS MULTIPLE CREATIVE PLATFORMS.","bio1":"My name is Krystal Guzman, and I am a full stack web developer. I create websites and apps that are both compelling and user-friendly. Through my intensive training at Lambda School, I mastered engineering dynamic user interfaces that are both efficient and intuitive.","bio2":"In the past, I have worked with children with special needs, and I have a strong desire to build websites and apps that are accessible to all people. I am eager to work with open-minded and motivated individuals that are ready to produce innovative results.","email":"kryguzman@gmail.com","linkedin":"https://linkedin.com/in/krystal-guzman","github":"https://github.com/KrystalGuzman"},"projects":[{"title":"Anywhere Fitness 1 \u2013 helps manage fitness class schedules","link":"https://github.com/Build-Week-Anywhere-Fitness-1/Front-End","image":"/images/AnywhereFitness.png","point1":"\u2022 Designed and implemented entire front end using Redux","point2":"\u2022 Pair programmed with back end to manage endpoints of API"},{"title":"So Random Generator \u2013 gives random categorical information","link":"https://github.com/KrystalGuzman/Redux-App","image":"/images/SoRandomGenerator.png","point1":"\u2022 Investigated issues with Redux and Material-UI drawer in React App","point2":"\u2022 Utilized router to link to different pages that used APIs"},{"title":"DVST3 \u2013 provides financial cost for leaving a violent situation","link":"https://github.com/DVST3/dvst3-front-end","image":"/images/DVST3.png","point1":"\u2022 Worked as React 1 during a build week project","point2":"\u2022 Incorporated Router, Formik, and Axios to the front end"},{"title":"Refugee Stories 2 \u2013 brings awareness to the refugee problem","link":"https://github.com/bw-refugee-stories2/UI","image":"/images/RefugeeStories.png","point1":"\u2022 Developed marketing page as UI Designer, along with colleague","point2":"\u2022 Used Flexbox for GitHub cards and descriptions using HTML and LESS"}],"education":[{"program":"Full Stack Web Development and Computer Science","school":"Lambda School, Remote","graduation":"Expected Finish Date: 9/2020"},{"program":"Bachelor of Arts, Sociology - International Studies Concentration","school":"University of California San Diego, La Jolla, California","graduation":"Graduation Date: 12/2012"},{"program":"Associate in Arts, Mathematics","school":"Palomar College, San Marcos, California","graduation":"Graduation Date: 5/2012"},{"program":"Associate in Arts, Liberal Arts and Sciences","school":"Palomar College, San Marcos, California","graduation":"Graduation Date: 12/2008"}],"skills":[{"name":"HTML5"},{"name":"CSS3"},{"name":"Javascript"},{"name":"React"},{"name":"Node.js"},{"name":"AJAX"},{"name":"SQLite"},{"name":"Express"},{"name":"NPM"},{"name":"Git"}],"work":[{"company":"Behavioral Autism Therapies","position":"Office Administrator/Behavioral Support","point1":"\u2022 Strengthened operational efficiencies by analyzing limiting factors and implemented behavioral support strategies","point2":"\u2022 Interviewed potential job candidates and scheduled staff to maximize service hours","point3":"\u2022 Effectively planned projects, made decisions, and delivered results by using innovative and data-focused ways","fromDate":"12/2016","toDate":"1/2019"},{"company":"Behavioral Autism Therapies","position":"Behavioral Therapist","point1":"\u2022 Utilized and trained others in ABA techniques to improve learning, communication, and social development","point2":"\u2022 Collected data of maladaptive behaviors, summarized behaviors using the Antecedent Behavior Consequence model, and graphed progress in targeted areas using Microsoft Excel","point3":"\u2022 Created and presented material that was implemented in the company","fromDate":"2/2015","toDate":"12/2016"},{"company":"AG Cleaning Services","position":"Human Resources/Operations Manager","point1":"\u2022 Supported management on employee performance and employee relations issues, ensuring policies and practices were maintained.","point2":"\u2022 Established performance metrics and tracked results to optimize productivity and quality","point3":"\u2022 Partnered with key internal customers to support the achievement of business objectives","fromDate":"2/2009","toDate":"11/2014"}]}')}},[[21,1,2]]]);
//# sourceMappingURL=main.f7c9441e.chunk.js.map