!function(e){var i={};function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,i,t){n.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,i){if(1&i&&(e=n(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var a in e)n.d(t,a,function(i){return e[i]}.bind(null,a));return t},n.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(i,"a",i),i},n.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},n.p="",n(n.s=0)}([function(e,i,n){"use strict";n.r(i);const t={backText:{en:"back",pl:"powrót"},about_link:{en:"about me",pl:"o mnie"},about_description:{en:"<p>I am Javascript Developer with almost year of experience in developing websites and apps based on HTML5 (and Bootstrap library), CSS3 (and precompiler Sass), also using Javascript i jQuery. </p> \n        <p> Last half year I was intensely trening Javascript programming, including Node.js (mostly Express framework and MySQL databases) and React (with MobX). I have also small experience in production of Electron desktop apps. <p/> \n        <p>I'm looking for a job, in which I will have possibility to develop towards being fullstack or backend Javascript Developer. I'm considering also learning React Native.</p>",pl:"<p>Jestem Javascript Developerem z prawie rocznym doświadczeniem w budowaniu stron w oparciu od HTML5 (oraz bibliotekę Bootstrap), CSS3 (oraz prekompilator Sass), a także Javascript i jQuery. </p> \n        <p> Ostatnie pół roku intensywnie ćwiczyłem jednak samo programowanie w Javascript, a także Node.js (głównie Express oraz bazy danych MySQL) i React (wraz z MobX). Mam też małe doświadczenie w produkowaniu aplikacji desktopowych z użyciem Electron. <p/> \n        <p>Szukam pracy, w której będę miał możliwość rozwijania się w interesujących mnie kierunkach - fullstack lub backend Javascript Developer. Rozważam też naukę React Native.</p>"},skills_link:{en:"my skills",pl:"moje umiejętności"},skills_title_dev:{en:"Developer skills <br/> <em>Press icons to read more</em>",pl:"Umiejętności programistyczne <br/> <em>Naciśnij ikonę, aby przeczytać więcej</em>"},js_title:{en:"My Javascript skills:",pl:"Moje umiejętności w Javascript:"},js_list:{en:"\n            <li> I skilfully use newest version of ECMAScript (even up to ES2019) </li>\n            <li> I'm able to use documentation (e.g. MDN) </li>\n            <li> I try to maintain clean code, I use JSDoc3 to describe and comment my work </li>\n            <li> I can write most of the browser code without using heavy dependecies like jQuery </li>\n            <li> I know basics of code debugging, I'm analytical thinker when it comes to problem solving </li>\n            <li> I know Node.js and React </li>\n            <li> ...and many more for you to find out during recruitment talk! </li>\n        ",pl:"\n            <li> Umiejętnie posługuję się najnowszą wersją ECMAScript (nawet do ES2019) </li>\n            <li> Potrafię korzystać z dokumentacji (m.in. MDN) </li>\n            <li> Staram się utrzymywać czysty kod, korzystam z JSDoc3 do opisu i komentarzy </li>\n            <li> Potrafię programować bez użycia jQuery czy innych ciężkich zależności </li>\n            <li> Znam podstawy debugowania kodu, umiem myśleć analitycznie w poszukiwaniu problemu </li>\n            <li> Znam Node.js i React </li>\n            <li> ... i wiele więcej do odkrycia podczas rozmowy kwalifikacyjnej! </li>\n        "},react_title:{en:"My React skills:",pl:"Moje umiejętności w React:"},react_list:{en:"\n            <li> I really solidly know basics of React </li>\n            <li> I use MobX to state managment of big applications (although I'll gladly learn Redux) </li>\n            <li> I've experience in building big application in React </li>\n            <li> I know theorically Hooks, I use stateless functional components, where it is possible and it makes sense </li>\n        ",pl:"\n            <li> Znam bardzo solidnie podstawy Reacta </li>\n            <li> Korzystam z MobX do state managment przy dużych aplikacjach (aczkolwiek chętnie nauczę się Redux) </li>\n            <li> Mam doświadczenie w budowanie bardzo dużej aplikacji w React </li>\n            <li> Znam teorię Hooków, korzystam ze stateless functional components, gdzie jest to sensowne </li>\n        "},node_title:{en:"My Node.js skills:",pl:"Moje umiejętności w Node.js:"},node_list:{en:"\n            <li> I created my own API while building large application </li>\n            <li> I used manly Express.js </li>\n            <li> I've little working experience with Electron to build desktop applications based on React and Node.js </li>\n            <li> I've used MySQL database </li>\n            <li> I know basics of WebSockets </li>\n        ",pl:"\n            <li> Stworzyłem własne API przy budowie dużej aplikacji </li>\n            <li> Korzystałem głównie z Express.js </li>\n            <li> Mam małe doświadczenie w korzystaniu z Electrona do budowy aplikacji desktopowych w oparciu od React i Node.js </li>\n            <li> Korzystałem z baz danych MySQL </li>\n            <li> Znam podstawy WebSockets </li>\n        "},html_title:{en:"My HTML5 skills:",pl:"Moje umiejętności w HTML5:"},html_list:{en:"\n            <li> I well know Bootstrap library </li>\n            <li> I used WebAudio API </li>\n            <li> I know how to handle with canvas rendering to create interactive elements </li>\n            <li> I used WebSockets while building basic application </li>\n        ",pl:"\n            <li> Znam dobrze bibliotekę Bootstrap </li>\n            <li> Korzystałem z API do WebAudio </li>\n            <li> Potrafię użyć canvas w przeglądarce do tworzenia interaktywnych elementów </li>\n            <li> Korzystałem z WebSockets przy budowie podstawowej aplikacji </li>\n        "},sass_title:{en:"My Sass/CSS3 skills:",pl:"Moje umiejętności w Sass/CSS3:"},sass_list:{en:"\n            <li> I know advanced styling in CSS </li>\n            <li> I use CSS transitions and animations </li>\n            <li> I use and create SVG graphics (and sprites) and animate them with CSS </li>\n            <li> I know how to use variables, mixins and more in Sass </li>\n        ",pl:"\n            <li> Znam zaawansowane użycie CSS </li>\n            <li> Korzystam z animacji i przejść w CSS </li>\n            <li> Korzystam z i tworzę grafiki SVG (i sprite) i animuję je z pomocą CSS</li>\n            <li> Potrafię korzystać ze zmiennych, mixin i innych możliwości Sass </li>\n        "},skills_title_soft:{en:"Soft skills",pl:"Umiejętności miękkie"},soft_skill_org:{en:'\n        <h6>Organization and project managment</h6>\n        <p>\n            I got 3 years of experience in project and team managment (as a team leader as well as active member) in the biggest polish NGO. <br/>\n            As scout instructor I learned to manage both project and permanent teams. I know and use planning and situation analysis techniques. \n            <br/>\n            See example: <br/><a href="./data/plan.pdf" target="_blank">strategic plan of Scout Group I created</a>.\n        </p>',pl:'\n        <h6>Organizacja i zarządzanie projektami</h6>\n        <p>\n            Mam 3 letnie doświadczenie w zarządzaniu projektami i zespołami (zarówno jako ich aktywny członek jak i lider) w największym polskim NGO.\n            <br/>\n            Jako instruktor harcerski nauczyłem się zarządzać zarówno zespołami projektowymi, jak i ciągłymi. Znam i korzystam z technik analizy sytuacji i planowania. \n            <br/>\n            Zobacz na przykładzie: <br/><a href="./data/plan.pdf" target="_blank">plan strategiczny Szczepu, który stworzyłem</a>.\n        </p>'},soft_skill_cs:{en:"\n        <h6>Customer service</h6>\n        <p>\n            I have yearly experience in work with clients as a employee of movie set equipment rental company. My responsibilites consisted of keeping in touch with clients (e.g. telephone duty), answering their needs, advising and paperwork - checking emails, managing reservations.\n            <br/>\n            Outside of office I had direct contact with client as an PA (movie set assistant).\n        </p>",pl:"\n        <h6>Obsługa klienta</h6>\n        <p>\n            Mam roczne doświadczenie w pracy z klientami jako pracownik wypożyczalni sprzętu filmowego. Moją odpowiedzialnością było pozostawanie z klientami w ciągłym kontakcie (np. w formie dyżurów telefonicznych), odpowiadanie na ich potrzeby, doradzanie oraz kwestie biurowe - odpisywanie na emaile, zarządzanie rezerwacjami. \n            <br/>\n            Poza pracą biurową miałem też bezpośrednią styczność z klientem jako asystent na planach i sztukach.\n        </p>"},soft_skill_q:{en:"\n        <h6>Ability to ask the right questions</h6>\n        <p>\n        I'm not afraid to have doubts and present my opinion. I know how to read documentations and I always seek a solution to the problem before asking the question to someone with more knowledge.\n        </p>",pl:"\n        <h6>Umiejętność zadawania właściwych pytań</h6>\n        <p>\n        Nie boję się mieć wątpliwości i przedstawiać swoją opinię. Umiem czytać dokumentację i zawsze szukam rozwiązania problemu zanim zadam pytanie komuś z większą wiedzą.\n        </p>"},skills_title_other:{en:"Other skills",pl:"Pozostałe umiejętności"},portfolio_link:{en:"my works",pl:"moje prace"},contact_link:{en:"contact",pl:"kontakt"},translate:e=>{Object.keys(t).forEach(i=>{let n=document.getElementById(i);console.log(n),n&&(n.innerHTML=t[i][e])})}};var a=t;window.onload=(()=>{o(),l(),setTimeout(()=>{s()},5200),r()});const o=()=>{let e=document.getElementById("langSwitch");var i=window.navigator.userLanguage||window.navigator.language;document.documentElement.lang=i,"pl"===i?(e.innerHTML="<p><b>PL</b>|EN</p>",a.translate("pl")):(e.innerHTML="<p>PL|<b>EN</b></p>",a.translate("en")),e.onclick=(()=>{i="pl"===i?"en":"pl",document.documentElement.lang=i,"pl"===i?(e.innerHTML="<p><b>PL</b>|EN</p>",a.translate("pl")):(e.innerHTML="<p>PL|<b>EN</b></p>",a.translate("en"))})},l=()=>{let e=document.getElementById("underline");e.style.width="100%",setTimeout(()=>{e.style.height="calc(100%)"},3100)},s=()=>{document.getElementById("menu").style.opacity=1,document.querySelectorAll("#menu .link").forEach((e,i)=>{e.onclick=(()=>{0!==i&&(e.parentElement.parentElement.style.marginTop=8*-i+"rem"),e.parentElement.style.left="50%",e.parentElement.style.transform="translate(-50%, 0)",console.log(e.firstChild);let n=e.firstChild.href.split("#")[1].concat("_content"),t=document.getElementById(n);t.style.display="block";let a=document.getElementById("welcomeAnimation").offsetHeight;setTimeout(()=>{t.style.height=`calc(100vh - 7.5rem - ${a}px)`},10);let o=document.getElementById("back");setTimeout(()=>{o.style.opacity=1},1e3),o.onclick=(()=>{e.parentElement.parentElement.style.marginTop=0,e.parentElement.style.left="5px",e.parentElement.style.transform="",t.style.height=0,setTimeout(()=>{t.style.display="none"},2e3),o.style.opacity=0})})})},r=()=>{Array.from(document.getElementsByClassName("toggleModal")).forEach(e=>{e.onclick=(()=>{let i=e.attributes["data-modal-target"].value,n=document.getElementById(i),t=n.getElementsByClassName("backdrop")[0],a=n.getElementsByClassName("modal-content")[0];"block"===n.style.display?(t.style.opacity=0,a.style.top="-200vh",setTimeout(()=>{n.style.display="none"},800)):(n.style.display="block",setTimeout(()=>{t.style.opacity=.6,a.style.top=0},20))})})}}]);