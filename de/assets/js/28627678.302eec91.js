(self.webpackChunkstudyu_docs=self.webpackChunkstudyu_docs||[]).push([[95],{9942:(e,s,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/study_docker_infrastructure_v3.44e4959.2406.png 2406w",images:[{path:t.p+"assets/ideal-img/study_docker_infrastructure_v3.44e4959.2406.png",width:2406,height:1923}],src:t.p+"assets/ideal-img/study_docker_infrastructure_v3.44e4959.2406.png",toString:function(){return t.p+"assets/ideal-img/study_docker_infrastructure_v3.44e4959.2406.png"},placeholder:void 0,width:2406,height:1923},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkUlEQVR4nE2P2QrFIAxE/f+/9LUVWq1LXdpcTiDlBgbFySy61pqAOafc9y29dznPU1JKwrzvq3Dbton3XpdyznqWUhTP8+gy4yBxgIgxqjtvtVYZY6iQNGeKtZYCkijcEO77LsdxiMPpuq5vCdgdJ6AdiQ0h6CcQ/HdE8HWExNq64sAQjZP93FkcwNUirast/gCZ3jhYZRqHqgAAAABJRU5ErkJggg=="}},5860:(e,s,t)=>{"use strict";t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=t(5893),i=t(1151),r=t(5944),a=t(9942),d=t.n(a),o=t(9069);const l={},c="StudyU Self-Hosting",u={unversionedId:"deployment/selfhosting",id:"deployment/selfhosting",title:"StudyU Self-Hosting",description:"The following guide describes the necessary steps in order to deploy a self-hosted instance",source:"@site/docs/05-deployment/selfhosting.mdx",sourceDirName:"05-deployment",slug:"/deployment/selfhosting",permalink:"/de/docs/deployment/selfhosting",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/de/docs/category/deployment"},next:{title:"Development",permalink:"/de/docs/category/development"}},h={},p=[{value:"Component Overview",id:"component-overview",level:2},{value:"Docker Container",id:"docker-container",level:2},{value:"Supabase",id:"supabase",level:3},{value:"StudyU",id:"studyu",level:3},{value:"Security",id:"security",level:2},{value:"System Requirements",id:"system-requirements",level:2},{value:"Get Started with the StudyU CLI",id:"get-started-with-the-studyu-cli",level:2},{value:"Quick Start",id:"quick-start",level:2}];function y(e){const s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",strong:"strong",h3:"h3",ul:"ul",li:"li",code:"code",ol:"ol",del:"del"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"studyu-self-hosting",children:"StudyU Self-Hosting"}),"\n",(0,n.jsxs)(s.p,{children:["The following guide describes the necessary steps in order to deploy a self-hosted instance\nof StudyU. In case you just want to use StudyU, read on at ",(0,n.jsx)(s.a,{href:"/docs/basics/studyu-platform",children:"The StudyU Platform"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"component-overview",children:"Component Overview"}),"\n",(0,n.jsxs)(s.p,{children:["The StudyU application comprises the ",(0,n.jsx)(s.strong,{children:"StudyU App"})," and the ",(0,n.jsx)(s.strong,{children:"StudyU Designer"}),". The StudyU App enables participants to\ntake part in N-of-1 trials created using the StudyU Designer. It is accessible in the main app stores, as well as\nthrough a web application.\nThe StudyU Designer is exclusively available as a web application, facilitating clinicians in designing and conducting\nN-of-1 trials."]}),"\n",(0,n.jsxs)(s.p,{children:["All application data is managed by ",(0,n.jsx)(s.strong,{children:"Supabase"}),", serving as a middleware framework connecting a Postgres database with\nthe StudyU components. Supabase functions as a self-hosted alternative to Firebase, offering API, authentication, and\nstorage functionalities. It is linked with a ",(0,n.jsx)(s.strong,{children:"PostgreSQL database"})," that stores all of StudyU\u2019s data. The data is\nstored persistently on-premise inside a docker volume."]}),"\n",(0,n.jsxs)(s.p,{children:["The connection between the user's device and Supabase is directly established between the user client and the Supabase\n",(0,n.jsx)(s.strong,{children:"reverse proxy"}),". This reverse proxy maps the various\n",(0,n.jsx)(s.a,{href:"https://supabase.com/docs/guides/self-hosting",children:"Supabase components"})," to a single port, simplifying the self-hosting\nprocess."]}),"\n",(0,n.jsx)(o.Z,{caption:"Overview of the components used to self-host a dockerized StudyU instance",children:(0,n.jsx)(r.Z,{img:d()})}),"\n",(0,n.jsx)(s.h2,{id:"docker-container",children:"Docker Container"}),"\n",(0,n.jsxs)(s.p,{children:["Below is a list of all containers involved in a full setup of StudyU. We recommend using our\n",(0,n.jsx)(s.a,{href:"#get-started-with-the-studyu-cli",children:"StudyU CLI"})," to start and\nmanage your individual setup. You can read more about the different ways to run StudyU\n",(0,n.jsx)(s.a,{href:"https://github.com/hpi-studyu/studyu/tree/dev/docker#overview",children:"here"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"supabase",children:"Supabase"}),"\n",(0,n.jsxs)(s.p,{children:["StudyU depends on Supabase as its backend, performing various important tasks to ensure the proper functioning of StudyU.\nSupabase itself is made up of different services (you can learn more about them\n",(0,n.jsx)(s.a,{href:"https://supabase.com/docs/guides/self-hosting#architecture",children:"here"}),"). All of these services are necessary for StudyU to\nwork correctly. Each service is managed separately in its own container. The current Supabase setup consists of the\nfollowing containers:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"supabase-db (the actual database. Can also be run on a separate machine)"}),"\n",(0,n.jsx)(s.li,{children:"supabase-realtime"}),"\n",(0,n.jsx)(s.li,{children:"supabase-imgproxy"}),"\n",(0,n.jsx)(s.li,{children:"supabase-studio"}),"\n",(0,n.jsx)(s.li,{children:"supabase-kong"}),"\n",(0,n.jsx)(s.li,{children:"supabase-auth"}),"\n",(0,n.jsx)(s.li,{children:"supabase-meta"}),"\n",(0,n.jsx)(s.li,{children:"supabase-edge-functions"}),"\n",(0,n.jsx)(s.li,{children:"supabase-rest"}),"\n",(0,n.jsx)(s.li,{children:"supabase-storage"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"studyu",children:"StudyU"}),"\n",(0,n.jsx)(s.p,{children:"StudyU has three containers: one for the StudyU App, one for the StudyU Designer, and a third one called studyu-proxy.\nThis third container, studyu-proxy, works as a reverse proxy for web requests directed towards StudyU or Supabase.\nThe studyu-proxy container is only necessary if you're planning to self-host Supabase without running the studyu-app\nor studyu-designer on the same server. Do not run studyu-app or studyu-designer concurrently with studyu-proxy.\nHere's the comprehensive list of all containers:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"studyu-app"}),"\n",(0,n.jsx)(s.li,{children:"studyu-designer"}),"\n",(0,n.jsx)(s.li,{children:"studyu-proxy (acts as a reverse proxy to Supabase. Only needed if neither studyu-app nor studyu-designer are started)"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"security",children:"Security"}),"\n",(0,n.jsxs)(s.p,{children:["Access to all components requires authentication, accomplished through the\n",(0,n.jsx)(s.a,{href:"https://supabase.com/docs/learn/auth-deep-dive/auth-deep-dive-jwts",children:"Supabase JWT implementation"}),". Users of the StudyU\nDesigner are required to register an account (using an email and password) upon their initial usage, and subsequently,\nlog in before being able to utilize the system."]}),"\n",(0,n.jsx)(s.p,{children:"In the case of the StudyU App, anonymous accounts are automatically generated upon first usage and are persistently\nstored on the user\u2019s device. User accounts are collectively managed alongside the StudyU data on the local Supabase\ninstance and are not stored elsewhere."}),"\n",(0,n.jsx)(s.p,{children:"Moreover, access to all generated data, including studies and participant information, is safeguarded by Supabase\npostgres policies. The policies ensures that no unauthorized access to the data can happen."}),"\n",(0,n.jsx)(s.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,n.jsxs)(s.p,{children:["The StudyU and Supabase setup runs with ",(0,n.jsx)(s.code,{children:"Docker"})," and ",(0,n.jsx)(s.code,{children:"Docker Compose"}),". Consequently, any system supporting the Docker\nEngine will be sufficient (Linux, Windows, macOS, or other UNIX-like systems). Running the system on AWS with ECS should\nbe possible in general, however, this has yet to be verified."]}),"\n",(0,n.jsx)(s.p,{children:"For a setup with a limited number of users, we recommend the following system requirements:"}),"\n",(0,n.jsx)(s.p,{children:"Essential:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"VM with a 4-core CPU and 16 GB RAM"}),"\n",(0,n.jsx)(s.li,{children:"Docker installation"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Optional:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Internet access, e.g. via reverse proxy with forwarded ports, including SSH for maintenance and HTTP or HTTPS"}),"\n",(0,n.jsx)(s.li,{children:"SSL Certificates (highly recommended!)"}),"\n",(0,n.jsx)(s.li,{children:"Regular Backup capabilities for Supabase (cronjob, etc.)"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"get-started-with-the-studyu-cli",children:"Get Started with the StudyU CLI"}),"\n",(0,n.jsxs)(s.p,{children:["We have developed a StudyU CLI tool to streamline the process of setting up StudyU. Since there are multiple ways how to\nassemble a self-hosted version of StudyU, further guidance is available in the ",(0,n.jsx)(s.code,{children:"docker/README.txt"})," file in the\n",(0,n.jsx)(s.a,{href:"https://github.com/hpi-studyu/studyu/blob/dev/docker/README.md",children:"StudyU GitHub repository"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Clone the official ",(0,n.jsx)(s.a,{href:"https://github.com/hpi-studyu/studyu",children:"StudyU repository"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"git clone https://github.com/hpi-studyu/studyu"})}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsxs)(s.del,{children:["If you want to run a productive environment, checkout the ",(0,n.jsx)(s.code,{children:"master"})," branch."]})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.del,{children:(0,n.jsx)(s.code,{children:"git checkout master"})})}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsxs)(s.li,{children:["Switch to the ",(0,n.jsx)(s.code,{children:"studyu/docker"})," directory."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"cd studyu/docker"})}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsx)(s.li,{children:"Configure the StudyU CLI."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"./studyu-cli config"})}),"\n",(0,n.jsxs)(s.ol,{start:"5",children:["\n",(0,n.jsx)(s.li,{children:"Start your individual setup."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"./studyu-cli start"})})]})}const g=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(y,e)})):y(e)}},9069:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});t(7294);const n={figcaption:"figcaption_pIkn"};var i=t(5893);function r(e){return(0,i.jsxs)("figure",{children:[e.children,(0,i.jsx)("figcaption",{className:n.figcaption,children:e.caption})]})}}}]);