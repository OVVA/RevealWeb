(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{4279:function(e,t,a){Promise.resolve().then(a.t.bind(a,5878,23)),Promise.resolve().then(a.t.bind(a,2972,23)),Promise.resolve().then(a.bind(a,3322)),Promise.resolve().then(a.bind(a,9493)),Promise.resolve().then(a.bind(a,9591)),Promise.resolve().then(a.bind(a,3667)),Promise.resolve().then(a.bind(a,5186)),Promise.resolve().then(a.bind(a,3702)),Promise.resolve().then(a.bind(a,9129)),Promise.resolve().then(a.bind(a,637)),Promise.resolve().then(a.bind(a,7345)),Promise.resolve().then(a.bind(a,8733)),Promise.resolve().then(a.bind(a,7425)),Promise.resolve().then(a.bind(a,2073)),Promise.resolve().then(a.bind(a,6346)),Promise.resolve().then(a.bind(a,1272)),Promise.resolve().then(a.bind(a,824)),Promise.resolve().then(a.bind(a,5759)),Promise.resolve().then(a.bind(a,9983)),Promise.resolve().then(a.bind(a,852)),Promise.resolve().then(a.bind(a,1154)),Promise.resolve().then(a.bind(a,6449)),Promise.resolve().then(a.bind(a,6010))},1154:function(e,t,a){"use strict";a.d(t,{default:function(){return o}});var r=a(7437),n=a(2265),s=a(6498);function o(){let[e,t]=(0,n.useState)(""),[a,o]=(0,n.useState)(""),[i,l]=(0,n.useState)(!1),[d,c]=(0,n.useState)(!1),[m,u]=(0,n.useState)(""),h=(0,n.useRef)(null),p=(0,n.useRef)(null),y=(0,n.useRef)(null);(0,n.useEffect)(()=>{p.current&&s.ZP.fromTo(p.current,{opacity:.5},{opacity:.8,duration:2,repeat:-1,yoyo:!0,ease:"sine.inOut"})},[]);let x=()=>{if(y.current){let e=y.current;e.innerHTML="";for(let t=0;t<100;t++){let t=document.createElement("div"),a=10*Math.random()+5;t.style.position="absolute",t.style.width="".concat(a,"px"),t.style.height="".concat(a,"px"),t.style.background="hsl(".concat(360*Math.random(),", 100%, 50%)"),t.style.borderRadius="50%",t.style.opacity="".concat(.7*Math.random()+.3),t.style.left="".concat(100*Math.random(),"%"),t.style.top="".concat(100*Math.random(),"%"),e.appendChild(t),s.ZP.fromTo(t,{y:-20,scale:0},{y:"".concat(300*Math.random()+100),x:"".concat((Math.random()-.5)*200),rotation:360*Math.random(),scale:1,opacity:0,duration:2*Math.random()+1,ease:"power1.out",onComplete:()=>{e.contains(t)&&e.removeChild(t)}})}}},g=async r=>{r.preventDefault(),c(!0),u("");try{(await fetch("https://formspree.io/f/your-form-id",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,email:e})})).ok?(l(!0),x(),o(""),t("")):u("Something went wrong. Please try again.")}catch(e){u("Failed to submit. Please check your connection and try again.")}finally{c(!1)}};return(0,r.jsxs)("section",{id:"beta-signup",className:"py-20 relative overflow-hidden",children:[(0,r.jsx)("div",{ref:p,className:"absolute inset-0 -z-10 bg-gradient-radial from-primary-beam to-transparent opacity-70"}),(0,r.jsx)("div",{className:"container mx-auto px-4 relative",children:(0,r.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,r.jsxs)("div",{className:"text-center mb-10",children:[(0,r.jsxs)("h2",{className:"text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white",children:["Join the ",(0,r.jsx)("span",{className:"text-primary",children:"Explorer"})," waiting list"]}),(0,r.jsx)("p",{className:"text-xl text-gray-700 dark:text-gray-300",children:"Be among the first to chart unknown territories with Reveal"})]}),i?(0,r.jsxs)("div",{className:"bg-white/80 dark:bg-primary-dark/80 backdrop-blur-sm rounded-lg p-8 text-center relative overflow-hidden",children:[(0,r.jsx)("div",{ref:y,className:"absolute inset-0 overflow-hidden pointer-events-none"}),(0,r.jsx)("h3",{className:"text-2xl font-bold text-primary mb-4",children:"Thanks for joining!"}),(0,r.jsx)("p",{className:"text-gray-700 dark:text-gray-300 mb-6",children:"We'll notify you when your invitation is ready"}),(0,r.jsx)("button",{onClick:()=>l(!1),className:"px-6 py-2 bg-primary-80 text-white rounded-full hover:bg-primary-90 transition-all duration-300",children:"Sign up another"})]}):(0,r.jsxs)("form",{ref:h,onSubmit:g,className:"bg-white/80 dark:bg-primary-dark/80 backdrop-blur-sm rounded-lg p-8 shadow-lg",children:[m&&(0,r.jsx)("div",{className:"mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 dark:bg-red-900/30 dark:text-red-300",children:m}),(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("label",{htmlFor:"name",className:"block text-gray-700 dark:text-gray-300 font-medium mb-2",children:"Your Name"}),(0,r.jsx)("input",{type:"text",id:"name",value:a,onChange:e=>o(e.target.value),className:"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white/50 dark:bg-gray-800/50",placeholder:"John Doe",required:!0})]}),(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-gray-700 dark:text-gray-300 font-medium mb-2",children:"Email Address"}),(0,r.jsx)("input",{type:"email",id:"email",value:e,onChange:e=>t(e.target.value),className:"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white/50 dark:bg-gray-800/50",placeholder:"you@example.com",required:!0})]}),(0,r.jsxs)("button",{type:"submit",disabled:d,className:"w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 flex justify-center items-center",children:[d?(0,r.jsx)("span",{className:"inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}):null,d?"Submitting...":"Request Beta Access"]})]})]})})]})}},6449:function(e,t,a){"use strict";a.d(t,{default:function(){return o}});var r=a(7437),n=a(2265);let s=[{question:"What makes Reveal different from other map applications?",answer:"Unlike traditional maps that show everything upfront, Reveal uses a 'fog of war' mechanic similar to strategy games. You start with a foggy map that only reveals areas as you physically explore them, creating a personalized exploration experience that encourages real-world adventure."},{question:"Does Reveal work offline?",answer:"Yes! Reveal is designed to work offline once you've initially loaded an area. Your exploration data is cached locally and syncs when you reconnect to the internet, making it perfect for hiking in remote areas or traveling where data connections are limited."},{question:"How accurate is the GPS tracking?",answer:"Reveal uses intelligent algorithms to maximize GPS accuracy while preserving battery life. In urban areas, accuracy is typically within 5-10 meters. In open areas, accuracy improves to 3-5 meters. You can also adjust tracking frequency in settings for your preferred balance of accuracy and battery usage."},{question:"What historical journeys can I compare my routes to?",answer:"Reveal includes famous exploration routes like the Silk Road, Magellan's voyage, Lewis & Clark's expedition, Marco Polo's journey, and many more. We're constantly adding new historical routes based on user requests and seasonal themes."},{question:"Will Reveal drain my battery?",answer:"Reveal is designed to be battery-efficient. It uses intelligent tracking that adjusts based on your movement patterns. When stationary, it minimizes GPS polling, and you can customize tracking frequency in settings for optimal battery life on your device."},{question:"Can I import my existing GPX tracks from other apps?",answer:"Yes, our upcoming update will support importing GPX, KML, and other common tracking formats. This will allow you to visualize your previous adventures in Reveal's unique style and include them in your exploration statistics and achievements."},{question:"Is there a social aspect to Reveal?",answer:"Absolutely! You can share your exploration maps, achievements, and journey milestones with friends. Our upcoming features include exploration challenges, collaborative mapping, and the ability to create custom routes for friends to follow."},{question:"How do achievements work?",answer:"Achievements are earned by reaching exploration milestones, discovering new areas, completing routes, and matching portions of historical journeys. Each achievement earns you explorer points and unique badges that showcase your exploration style and preferences."}];function o(){let[e,t]=(0,n.useState)(null),a=a=>{t(e===a?null:a)};return(0,r.jsx)("section",{className:"py-20 bg-gray-50 dark:bg-gray-900",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"text-center mb-16",children:[(0,r.jsxs)("h2",{className:"text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white",children:["Frequently Asked ",(0,r.jsx)("span",{className:"text-primary",children:"Questions"})]}),(0,r.jsx)("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",children:"Everything you need to know about the Reveal exploration experience"})]}),(0,r.jsx)("div",{className:"max-w-3xl mx-auto",children:(0,r.jsx)("div",{className:"space-y-4",children:s.map((t,n)=>(0,r.jsxs)("div",{className:"bg-white dark:bg-primary-dark/30 rounded-lg shadow-md overflow-hidden",children:[(0,r.jsxs)("button",{className:"w-full text-left p-4 flex justify-between items-center focus:outline-none",onClick:()=>a(n),"aria-expanded":e===n,children:[(0,r.jsx)("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:t.question}),(0,r.jsx)("svg",{className:"w-5 h-5 text-primary transition-transform duration-300 ".concat(e===n?"transform rotate-180":""),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),(0,r.jsx)("div",{className:"transition-all duration-300 ease-in-out overflow-hidden ".concat(e===n?"max-h-96 opacity-100":"max-h-0 opacity-0"),children:(0,r.jsx)("p",{className:"p-4 text-gray-600 dark:text-gray-300",children:t.answer})})]},n))})}),(0,r.jsxs)("div",{className:"mt-16 text-center",children:[(0,r.jsx)("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"Still have questions? We're happy to help!"}),(0,r.jsxs)("a",{href:"mailto:support@revealapp.com",className:"inline-flex items-center text-primary hover:text-primary-dark dark:hover:text-primary-100 transition-colors",children:[(0,r.jsx)("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Contact Support"]})]})]})})}}},function(e){e.O(0,[922,718,498,10,971,117,744],function(){return e(e.s=4279)}),_N_E=e.O()}]);