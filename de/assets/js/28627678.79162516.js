(self.webpackChunkstudyu_docs=self.webpackChunkstudyu_docs||[]).push([[95],{9942:(e,s,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/study_docker_infrastructure_v3.44e4959.2406.png 2406w",images:[{path:n.p+"assets/ideal-img/study_docker_infrastructure_v3.44e4959.2406.png",width:2406,height:1923}],src:n.p+"assets/ideal-img/study_docker_infrastructure_v3.44e4959.2406.png",toString:function(){return n.p+"assets/ideal-img/study_docker_infrastructure_v3.44e4959.2406.png"},placeholder:void 0,width:2406,height:1923},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkUlEQVR4nE2P2QrFIAxE/f+/9LUVWq1LXdpcTiDlBgbFySy61pqAOafc9y29dznPU1JKwrzvq3Dbton3XpdyznqWUhTP8+gy4yBxgIgxqjtvtVYZY6iQNGeKtZYCkijcEO77LsdxiMPpuq5vCdgdJ6AdiQ0h6CcQ/HdE8HWExNq64sAQjZP93FkcwNUirast/gCZ3jhYZRqHqgAAAABJRU5ErkJggg=="}},5860:(e,s,n)=>{"use strict";n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var t=n(5893),i=n(1151),r=n(5944),a=n(9942),o=n.n(a),d=n(9069);const c={},l="StudyU Self-Hosting",u={unversionedId:"deployment/selfhosting",id:"deployment/selfhosting",title:"StudyU Self-Hosting",description:"The following guide describes the necessary steps in order to deploy a self-hosted instance",source:"@site/docs/05-deployment/selfhosting.mdx",sourceDirName:"05-deployment",slug:"/deployment/selfhosting",permalink:"/de/docs/deployment/selfhosting",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/de/docs/category/deployment"},next:{title:"Development",permalink:"/de/docs/category/development"}},h={},p=[{value:"Component Overview",id:"component-overview",level:2},{value:"Docker Container",id:"docker-container",level:2},{value:"Supabase",id:"supabase",level:3},{value:"StudyU",id:"studyu",level:2},{value:"Security",id:"security",level:2},{value:"System Requirements",id:"system-requirements",level:2},{value:"Get Started",id:"get-started",level:2}];function y(e){const s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",strong:"strong",h3:"h3",ul:"ul",li:"li",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"studyu-self-hosting",children:"StudyU Self-Hosting"}),"\n",(0,t.jsxs)(s.p,{children:["The following guide describes the necessary steps in order to deploy a self-hosted instance\nof StudyU. In case you just want to use StudyU, read on at ",(0,t.jsx)(s.a,{href:"/docs/basics/studyu-platform",children:"The StudyU Platform"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"component-overview",children:"Component Overview"}),"\n",(0,t.jsxs)(s.p,{children:["The StudyU application comprises the ",(0,t.jsx)(s.strong,{children:"StudyU App"})," and the ",(0,t.jsx)(s.strong,{children:"StudyU Designer"}),". The StudyU App enables participants to\ntake part in N-of-1 trials created using the StudyU Designer. It is accessible in the main app stores, as well as\nthrough a web application.\nThe StudyU Designer is exclusively available as a web application, facilitating clinicians in designing and conducting\nN-of-1 trials."]}),"\n",(0,t.jsxs)(s.p,{children:["All application data is managed by ",(0,t.jsx)(s.strong,{children:"Supabase"}),", serving as a middleware framework connecting a Postgres database with\nthe StudyU components. Supabase functions as a self-hosted alternative to Firebase, offering API, authentication, and\nstorage functionalities. It is linked with a ",(0,t.jsx)(s.strong,{children:"PostgreSQL database"})," that stores all of StudyU\u2019s data. The data is\nstored persistently on-premise inside a docker volume."]}),"\n",(0,t.jsxs)(s.p,{children:["The connection between the user's device and Supabase is directly established between the user client and the Supabase\n",(0,t.jsx)(s.strong,{children:"reverse proxy"}),". This reverse proxy maps the various\n",(0,t.jsx)(s.a,{href:"https://supabase.com/docs/guides/self-hosting",children:"Supabase components"})," to a single port, simplifying the self-hosting\nprocess."]}),"\n",(0,t.jsx)(d.Z,{caption:"Overview of the components used to self-host a dockerized StudyU instance",children:(0,t.jsx)(r.Z,{img:o()})}),"\n",(0,t.jsx)(s.h2,{id:"docker-container",children:"Docker Container"}),"\n",(0,t.jsx)(s.h3,{id:"supabase",children:"Supabase"}),"\n",(0,t.jsxs)(s.p,{children:["StudyU depends on Supabase as its backend, performing various important tasks to ensure the proper functioning of StudyU.\nSupabase itself is made up of different services (you can learn more about them\n",(0,t.jsx)(s.a,{href:"https://supabase.com/docs/guides/self-hosting#architecture",children:"here"}),", and all of these services are\nnecessary for StudyU to work correctly. Each service is managed separately in its own container. The current Supabase\nsetup consists of the following containers:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"supabase-db (the actual database)"}),"\n",(0,t.jsx)(s.li,{children:"supabase-realtime"}),"\n",(0,t.jsx)(s.li,{children:"supabase-imgproxy"}),"\n",(0,t.jsx)(s.li,{children:"supabase-studio"}),"\n",(0,t.jsx)(s.li,{children:"supabase-kong"}),"\n",(0,t.jsx)(s.li,{children:"supabase-auth"}),"\n",(0,t.jsx)(s.li,{children:"supabase-meta"}),"\n",(0,t.jsx)(s.li,{children:"supabase-edge-functions"}),"\n",(0,t.jsx)(s.li,{children:"supabase-rest"}),"\n",(0,t.jsx)(s.li,{children:"supabase-storage"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"studyu",children:"StudyU"}),"\n",(0,t.jsx)(s.p,{children:"StudyU has three containers: one for the StudyU App, one for the StudyU Designer, and a third one called studyu-proxy.\nThis third container, studyu-proxy, works as a reverse proxy for web requests directed towards StudyU or Supabase.\nThe studyu-proxy container is only necessary if you're planning to self-host Supabase without running the studyu-app\nor studyu-designer on the same server. Do not run studyu-app or studyu-designer concurrently with studyu-proxy.\nHere's the comprehensive list of all containers:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"studyu-app"}),"\n",(0,t.jsx)(s.li,{children:"studyu-designer"}),"\n",(0,t.jsx)(s.li,{children:"studyu-proxy (acts as a reverse proxy to Supabase. Only needed if neither studyu-app nor studyu-designer are started)"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"security",children:"Security"}),"\n",(0,t.jsxs)(s.p,{children:["Access to all components requires authentication, accomplished through the\n",(0,t.jsx)(s.a,{href:"https://supabase.com/docs/learn/auth-deep-dive/auth-deep-dive-jwts",children:"Supabase JWT implementation"}),". Users of the StudyU\nDesigner are required to register an account (using an email and password) upon their initial usage, and subsequently,\nlog in before being able to utilize the system."]}),"\n",(0,t.jsx)(s.p,{children:"In the case of the StudyU App, anonymous accounts are automatically generated upon first usage and are persistently\nstored on the user\u2019s device. User accounts are collectively managed alongside the StudyU data on the local Supabase\ninstance and are not stored elsewhere."}),"\n",(0,t.jsx)(s.p,{children:"Moreover, access to all generated data, including studies and participant information, is safeguarded by Supabase\npostgres policies. The policies ensures that no unauthorized access to the data can happen."}),"\n",(0,t.jsx)(s.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,t.jsxs)(s.p,{children:["The StudyU and Supabase setup runs with ",(0,t.jsx)(s.code,{children:"Docker"})," and ",(0,t.jsx)(s.code,{children:"Docker Compose"}),". Consequently, any system supporting the Docker\nEngine will be sufficient (Linux, Windows, macOS, or other UNIX-like systems). Running the system on AWS with ECS should\nbe possible in general, however, this has yet to be verified."]}),"\n",(0,t.jsx)(s.p,{children:"For a setup with a limited number of users, we recommend the following system requirements:"}),"\n",(0,t.jsx)(s.p,{children:"Essential:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"VM with a 4-core CPU and 16 GB RAM"}),"\n",(0,t.jsx)(s.li,{children:"Docker installation"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Optional:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Internet access, e.g. via reverse proxy with forwarded ports, including SSH for maintenance and HTTP or HTTPS"}),"\n",(0,t.jsx)(s.li,{children:"SSL Certificates (highly recommended!)"}),"\n",(0,t.jsx)(s.li,{children:"Regular Backup capabilities for Supabase (cronjob, etc.)"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"get-started",children:"Get Started"}),"\n",(0,t.jsxs)(s.p,{children:["We have developed a StudyU CLI tool to streamline the process of setting up StudyU. Instructions are provided in the\n",(0,t.jsx)(s.code,{children:"docker"})," directory within the ",(0,t.jsx)(s.a,{href:"https://github.com/hpi-studyu/studyu/blob/dev/docker/README.md",children:"StudyU GitHub repository"}),"."]})]})}const g=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(y,e)})):y(e)}},9069:(e,s,n)=>{"use strict";n.d(s,{Z:()=>r});n(7294);const t={figcaption:"figcaption_pIkn"};var i=n(5893);function r(e){return(0,i.jsxs)("figure",{children:[e.children,(0,i.jsx)("figcaption",{className:t.figcaption,children:e.caption})]})}}}]);