"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10],{6010:function(A,e,a){a.d(e,{default:function(){return r}});var t=a(7437),E=a(2265),s=a(7648),B=a(3145),g=a(9376);function Q(){let[A,e]=(0,E.useState)(!0);return(0,E.useEffect)(()=>{{let A=localStorage.getItem("theme");if(A){let a="dark"===A;e(a),document.documentElement.classList.toggle("dark",a)}else document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")}},[]),(0,t.jsx)("button",{onClick:()=>{let a=!A;e(a),document.documentElement.classList.toggle("dark",a),localStorage.setItem("theme",a?"dark":"light")},className:"p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-primary-dark/50 transition-colors duration-200 focus:outline-none","aria-label":"Toggle dark mode",children:A?(0,t.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):(0,t.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})}var i=a(3490);function r(){let[A,e]=(0,E.useState)(!1),[a,r]=(0,E.useState)(!1),l=(0,g.usePathname)();(0,E.useEffect)(()=>{let A=()=>{window.scrollY>20?r(!0):r(!1)};return window.addEventListener("scroll",A),()=>window.removeEventListener("scroll",A)},[]);let o=[{name:"Home",href:"/"},{name:"Features",href:"/features"},{name:"Roadmap",href:"/roadmap"},{name:"FAQ",href:"/faq"},{name:"Beta Access",href:"/beta"}];return(0,t.jsxs)("nav",{className:"fixed w-full z-50 transition-all duration-300 ".concat(a?"bg-white/80 backdrop-blur-sm dark:bg-primary-dark/80":"bg-transparent"),children:[(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,t.jsxs)("div",{className:"flex justify-between h-16 items-center",children:[(0,t.jsx)("div",{className:"flex-shrink-0",children:(0,t.jsxs)(s.default,{href:"/",className:"flex items-center",children:[(0,t.jsx)(B.default,{src:i.L.logo.light,alt:"Reveal Logo",width:120,height:40,className:"hidden dark:block",priority:!0}),(0,t.jsx)(B.default,{src:i.L.logo.dark,alt:"Reveal Logo",width:120,height:40,className:"block dark:hidden",priority:!0})]})}),(0,t.jsx)("div",{className:"hidden md:block",children:(0,t.jsxs)("div",{className:"ml-10 flex items-center space-x-8",children:[o.map(A=>(0,t.jsx)(s.default,{href:A.href,className:"".concat(l===A.href?"text-primary dark:text-primary-100":"text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-90"," px-3 py-2 text-sm font-medium transition-colors duration-200"),children:A.name},A.name)),(0,t.jsx)(Q,{})]})}),(0,t.jsxs)("div",{className:"md:hidden flex items-center",children:[(0,t.jsx)(Q,{}),(0,t.jsxs)("button",{onClick:()=>{e(!A)},className:"custom-hamburger ml-4","aria-expanded":A,"aria-label":"Toggle navigation menu",children:[(0,t.jsx)("span",{className:"".concat(A?"rotate-45 translate-y-2":"")}),(0,t.jsx)("span",{className:"".concat(A?"opacity-0":"")}),(0,t.jsx)("span",{className:"".concat(A?"-rotate-45 -translate-y-2":"")})]})]})]})}),(0,t.jsx)("div",{className:"".concat(A?"max-h-screen opacity-100":"max-h-0 opacity-0"," md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-primary-dark shadow-lg"),children:(0,t.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:o.map(A=>(0,t.jsx)(s.default,{href:A.href,className:"".concat(l===A.href?"bg-primary/10 text-primary dark:text-primary-100":"text-gray-700 dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-primary-dark/50"," block px-3 py-2 rounded-md text-base font-medium"),onClick:()=>e(!1),children:A.name},A.name))})})]})}},3490:function(A,e,a){a.d(e,{L:function(){return u}});var t=a(7425),E=a(2073),s=a(8733),B=a(7345),g=a(852),Q=a(9591),i=a(3667),r=a(3702),l=a(9129),o=a(637),d=a(9983),h=a(5186),c=a(3322),n=a(9493),z=a(6346),O=a(824),w=a(1272),x=a(5759);let u={logo:{dark:t.default,light:E.default,blue:s.default,default:t.default},hero:{main:B.default,secondary:g.default},avatars:{ava1:Q.default,ava2:i.default},backgrounds:{drone2:r.default,drone3:l.default,drone5:o.default,web3:d.default,web4:g.default},mockups:{mainScreen:z.default,achievements:h.default,profileScreen:O.default,profileScreen2:w.default,profileScreen3:x.default,advantureMockup:c.default,advantureMockup2:n.default}}},9591:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/ava-1.7d35c26f.jpg",height:287,width:300,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAAP/EABQBAQAAAAAAAAAAAAAAAAAAAAX/2gAMAwEAAhADEAAAAQMf/8QAFRABAQAAAAAAAAAAAAAAAAAAEiL/2gAIAQEAAQUCkf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABUQAQEAAAAAAAAAAAAAAAAAAABh/9oACAEBAAY/Aq//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/IV//2gAMAwEAAgADAAAAEAf/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QDL//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QXb//xAAaEAACAgMAAAAAAAAAAAAAAAABIQAxQWGR/9oACAEBAAE/EHzA7LfKn//Z",blurWidth:8,blurHeight:8}},3667:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/ava-2.7692f0f1.jpg",height:210,width:210,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABnRQ//8QAFRABAQAAAAAAAAAAAAAAAAAAEiL/2gAIAQEAAQUCk//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/AVv/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwEL/8QAFhAAAwAAAAAAAAAAAAAAAAAAADFB/9oACAEBAAY/Aoj/xAAYEAACAwAAAAAAAAAAAAAAAAAAEQFRkf/aAAgBAQABPyFy0Wz/2gAMAwEAAgADAAAAEPv/xAAWEQEBAQAAAAAAAAAAAAAAAAARACH/2gAIAQMBAT8Qcy//xAAWEQEBAQAAAAAAAAAAAAAAAAARACH/2gAIAQIBAT8QB2//xAAZEAEAAgMAAAAAAAAAAAAAAAABABEhUWH/2gAIAQEAAT8QBLLFcE0cn//Z",blurWidth:8,blurHeight:8}},5186:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/achivka.6fa2fd23.jpg",height:1333,width:2e3,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABkKD/xAAWEAEBAQAAAAAAAAAAAAAAAAACAwH/2gAIAQEAAQUCtZvP/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Br//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AY//xAAYEAACAwAAAAAAAAAAAAAAAAAAERIxQf/aAAgBAQAGPwKTvD//xAAYEAACAwAAAAAAAAAAAAAAAAAAAREhYf/aAAgBAQABPyGcW2dI/9oADAMBAAIAAwAAABD3/8QAFREBAQAAAAAAAAAAAAAAAAAAADH/2gAIAQMBAT8Qt//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxBuX//EABgQAQADAQAAAAAAAAAAAAAAAAEAESEx/9oACAEBAAE/EM5RVQh2p//Z",blurWidth:8,blurHeight:5}},3322:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/advanture_map.9504259e.jpg",height:894,width:1534,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABmQn/xAAUEAEAAAAAAAAAAAAAAAAAAABB/9oACAEBAAEFAj//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAVEAEBAAAAAAAAAAAAAAAAAAAAMf/aAAgBAQAGPwKP/8QAFxABAQEBAAAAAAAAAAAAAAAAATEAIf/aAAgBAQABPyHiylu//9oADAMBAAIAAwAAABAH/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGBABAAMBAAAAAAAAAAAAAAAAAQARYXH/2gAIAQEAAT8QGsDsmT//2Q==",blurWidth:8,blurHeight:5}},9493:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/advanture_map2.92919f89.jpg",height:894,width:1534,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABhBP/xAAVEAEBAAAAAAAAAAAAAAAAAAACAf/aAAgBAQABBQKI0f/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABkQAAEFAAAAAAAAAAAAAAAAAAABAgMScf/aAAgBAQAGPwKqxt0//8QAGBAAAgMAAAAAAAAAAAAAAAAAAREAITH/2gAIAQEAAT8hEmCzRn//2gAMAwEAAgADAAAAEAv/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPxCv/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Qj//EABcQAQEBAQAAAAAAAAAAAAAAAAERACH/2gAIAQEAAT8QnzYDVaNet3//2Q==",blurWidth:8,blurHeight:5}},3702:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/drone-2.bcdfdd9b.jpg",height:1107,width:1600,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABgAj/xAAWEAADAAAAAAAAAAAAAAAAAAAAAxL/2gAIAQEAAQUCZJ//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwGP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECMf/aAAgBAgEBPwGcR//EABYQAAMAAAAAAAAAAAAAAAAAAAABIf/aAAgBAQAGPwKI/8QAFxAAAwEAAAAAAAAAAAAAAAAAAAERMf/aAAgBAQABPyHZwp//2gAMAwEAAgADAAAAEAv/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPxCH/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQBR/9oACAECAQE/EEhGX//EABcQAAMBAAAAAAAAAAAAAAAAAAERQQD/2gAIAQEAAT8QM28HN//Z",blurWidth:8,blurHeight:6}},9129:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/drone-3.79baa536.jpg",height:1026,width:1600,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABhiQ//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAgBAQABBQKMZ//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABgRAAIDAAAAAAAAAAAAAAAAAAACAxEx/9oACAECAQE/AWka9P/EABUQAQEAAAAAAAAAAAAAAAAAAAAx/9oACAEBAAY/Ao//xAAWEAEBAQAAAAAAAAAAAAAAAAARAAH/2gAIAQEAAT8hBjP/2gAMAwEAAgADAAAAEA//xAAWEQEBAQAAAAAAAAAAAAAAAAARADH/2gAIAQMBAT8QTL//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EFP/xAAYEAEBAAMAAAAAAAAAAAAAAAABIQARMf/aAAgBAQABPxAABN0j3P/Z",blurWidth:8,blurHeight:5}},637:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/drone-4.821ff7bc.jpg",height:899,width:1600,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAGAAP/EABUQAQEAAAAAAAAAAAAAAAAAAAIx/9oACAEBAAEFAjP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8BdP/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABcQAQADAAAAAAAAAAAAAAAAAAEAIUH/2gAIAQEAAT8hulyf/9oADAMBAAIAAwAAABDz/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEx/9oACAEDAQE/EHT/xAAVEQEBAAAAAAAAAAAAAAAAAAAAMf/aAAgBAgEBPxCz/8QAFxABAAMAAAAAAAAAAAAAAAAAAQAhMf/aAAgBAQABPxCpBcT/2Q==",blurWidth:8,blurHeight:4}},7345:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/hero.821ff7bc.jpg",height:899,width:1600,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAGAAP/EABUQAQEAAAAAAAAAAAAAAAAAAAIx/9oACAEBAAEFAjP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAWEQADAAAAAAAAAAAAAAAAAAAAATH/2gAIAQIBAT8BdP/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABcQAQADAAAAAAAAAAAAAAAAAAEAIUH/2gAIAQEAAT8hulyf/9oADAMBAAIAAwAAABDz/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEx/9oACAEDAQE/EHT/xAAVEQEBAAAAAAAAAAAAAAAAAAAAMf/aAAgBAgEBPxCz/8QAFxABAAMAAAAAAAAAAAAAAAAAAQAhMf/aAAgBAQABPxCpBcT/2Q==",blurWidth:8,blurHeight:4}},8733:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/logo-blue.0c62d565.svg",height:135,width:464,blurWidth:0,blurHeight:0}},7425:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/logo-dark.f481d758.svg",height:135,width:464,blurWidth:0,blurHeight:0}},2073:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/logo-light.b4deda24.svg",height:135,width:464,blurWidth:0,blurHeight:0}},6346:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/main_screen_mockup.71856279.png",height:1206,width:588,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAMFBMVEVQWlg/SEknN0ooMzxOUlR6g39eVkcxNziHjYtQYlh6d2JHO0JcXmFjZ2pwe2qSmJam+b+3AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKUlEQVR4nAXBhwEAIAjAsLIEnP9/a4KMGeS4QLcTVQeJ5/gmMTNhqeoHD2gAtQGYXl8AAAAASUVORK5CYII=",blurWidth:4,blurHeight:8}},1272:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/profile_countries_visited_mockup.b4f87349.png",height:2e3,width:1333,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAM1BMVEWQjIA7PT8uPU1tVVYPITZDPUhOU10fISlMaXFZVlVvdnwfL0BvdXwOITlCUmVpcXgkMkb3a61xAAAADXRSTlMSSuPm4PHmDwAz4tzcFa1/cgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC1JREFUeJxj4OBk5ORgYODi52FnYGDjY2JnYGBmZQGxeUEkE5hkFeBmZwCrBAAYNAEChMNqswAAAABJRU5ErkJggg==",blurWidth:5,blurHeight:8}},824:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/profile_scratch_map_mockup.e959c4c3.png",height:2e3,width:1333,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAP1BMVEWJhn8+QEc3d6JAUGJxbWspLjcdL0AaLkBMaXE9OT5zSUNOXGVQZHgaZZd0e4BIPUcuf7JhcXx3dXQlLTxQWmLYnyrfAAAAD3RSTlMS5eXb4kreDwAy4t/i4OVsG0F/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nB3KSRKAIBAEwRJwmhFZBP7/ViLMc5L99gzvjoIwqqB9RZBmElzLBE838c8DHZ0BONvrQsQAAAAASUVORK5CYII=",blurWidth:5,blurHeight:8}},5759:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/timeline_mockup.5d60289b.png",height:2262,width:1122,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAPFBMVEUsLywJFSU3P0wTHCh+bm9iZGs0JisWHysyO0cbIC0JEiBTV1suNjsIECAYIzWChYtjbHpUUiV7cnacn6Zu132eAAAADXRSTlP86urh0tzq9vrr1/X+Zd6A5wAAAAlwSFlzAAAOwwAADsMBx2+oZAAAACtJREFUeJwFwYcRACAIALG3YjlAdP9dTSiqi3FOZvjbEAECEzFNiNFp1+sHF+0BIf9o30wAAAAASUVORK5CYII=",blurWidth:4,blurHeight:8}},9983:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/web3.3da4a5c6.jpg",height:4540,width:6591,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABuI//xAAVEAEBAAAAAAAAAAAAAAAAAAADAf/aAAgBAQABBQJhKn//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwGP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAGBAAAgMAAAAAAAAAAAAAAAAAABIBETH/2gAIAQEABj8CdcuT/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAERITH/2gAIAQEAAT8hwelgVH//2gAMAwEAAgADAAAAEP8A/8QAFREBAQAAAAAAAAAAAAAAAAAAACH/2gAIAQMBAT8Qp//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8QeQ//xAAZEAEAAgMAAAAAAAAAAAAAAAABABEhMaH/2gAIAQEAAT8QdAbkSuXtz//Z",blurWidth:8,blurHeight:6}},852:function(A,e,a){a.r(e),e.default={src:"/_next/static/media/web4.2de24c82.jpg",height:2832,width:4240,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABrBz/AP/EABYQAQEBAAAAAAAAAAAAAAAAAAIDEf/aAAgBAQABBQKup//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABgQAAIDAAAAAAAAAAAAAAAAAAIRAAET/9oACAEBAAY/As2hsJ//xAAXEAADAQAAAAAAAAAAAAAAAAAAEUGR/9oACAEBAAE/IaQGs//aAAwDAQACAAMAAAAQ9//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABkQAQACAwAAAAAAAAAAAAAAAAEAESFBcf/aAAgBAQABPxDaoEDJQDfJ/9k=",blurWidth:8,blurHeight:5}}}]);