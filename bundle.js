!function(e){var a={};function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=a,i.d=function(e,a,n){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)i.d(n,t,function(a){return e[a]}.bind(null,t));return n},i.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="",i(i.s=0)}([function(e,a,i){"use strict";i.r(a);const n={backText:{en:"back",pl:"powrót"},about_link:{en:"about me",pl:"o mnie"},about_description:{en:"<p>I am Javascript Developer with year of experience in developing websites and apps based on HTML5 (and Bootstrap library), CSS3 (and precompiler Sass), also using Javascript and jQuery. </p> \n        <p> Last half year I was intensely trening Javascript programming, including Node.js (mostly Express framework and MySQL databases) and React (with MobX). I have also experience in production of Electron desktop apps. <p/>\n        <p> Beside technical skills, as an scouting leader - educator and instructor, good communication, responsibility for own work and team, creativity and wide perspective are important for me and help me to resolve hardest problems and achive highest goals. </p>\n        <p>I'm looking for a job, in which I will have possibility to develop towards being Fullstack Javascript Developer or Team Leader.I would love to learn React Native.</p>",pl:"<p>Jestem Javascript Developerem. Mam za sobą roczne doświadczenie w budowaniu stron w oparciu o HTML5 (oraz bibliotekę Bootstrap), CSS3 (oraz prekompilator Sass) oraz Javascript i jQuery. </p>\n        <p>Ostatnie pół roku poświęciłem na intensywne ćwiczenia i doskonalenie swoich umiejętności. Programowałem w Javascript, a także Node.js (głównie Express oraz bazy danych MySQL) i React (wraz z MobX). Mam także doświadczenie w produkowaniu aplikacji desktopowych z użyciem Electron.</p>\n        <p>Poza umiejętnościami technicznymi, jako instruktor ZHP - wychowawca i szkoleniowiec, ważne są dla mnie dobra komunikacja, odpowiedzialność za swoją pracę i zespół w którym pracuję, a także kreatywność i szeroka perspektywa, które pomagają w rozwiązywaniu największych problemów i najwyżej zawieszonych poprzeczek.</p>\n        <p>Szukam pracy, w której będę miał możliwość rozwijania się jako Fullstack Javascript Developer lub Team Leader. Chętnie nauczę się również React Native.</p>"},skills_link:{en:"my skills",pl:"moje umiejętności"},skills_title_dev:{en:"Developer skills <br/> <em>Press icons to read more</em>",pl:"Umiejętności programistyczne <br/> <em>Naciśnij ikonę, aby przeczytać więcej</em>"},js_title:{en:"My Javascript skills:",pl:"Moje umiejętności w Javascript:"},js_list:{en:"\n            <li> I skilfully use newest version of ECMAScript (even up to ES2019) </li>\n            <li> I'm able to use documentation (e.g. MDN) </li>\n            <li> I try to maintain clean code, I use JSDoc3 to describe and comment my work </li>\n            <li> I can write most of the browser code without using heavy dependecies like jQuery </li>\n            <li> I know basics of code debugging, I'm analytical thinker when it comes to problem solving </li>\n            <li> I know Node.js and React </li>\n            <li> ...and many more for you to find out during recruitment talk! </li>\n        ",pl:"\n            <li> Umiejętnie posługuję się najnowszą wersją ECMAScript (nawet do ES2019) </li>\n            <li> Potrafię korzystać z dokumentacji (m.in. MDN) </li>\n            <li> Staram się utrzymywać czysty kod, korzystam z JSDoc3 do opisu i komentarzy </li>\n            <li> Potrafię programować bez użycia jQuery czy innych ciężkich zależności </li>\n            <li> Znam podstawy debugowania kodu, umiem myśleć analitycznie w poszukiwaniu problemu </li>\n            <li> Znam Node.js i React </li>\n            <li> ... i wiele więcej do odkrycia podczas rozmowy kwalifikacyjnej! </li>\n        "},react_title:{en:"My React skills:",pl:"Moje umiejętności w React:"},react_list:{en:"\n            <li> I really solidly know basics of React </li>\n            <li> I use MobX to state managment of big applications (although I'll gladly learn Redux) </li>\n            <li> I've experience in building big application in React </li>\n            <li> I know theorically Hooks, I use stateless functional components, where it is possible and it makes sense </li>\n        ",pl:"\n            <li> Znam bardzo solidnie podstawy Reacta </li>\n            <li> Korzystam z MobX do state managment przy dużych aplikacjach (aczkolwiek chętnie nauczę się Redux) </li>\n            <li> Mam doświadczenie w budowanie bardzo dużej aplikacji w React </li>\n            <li> Znam teorię Hooków, korzystam ze stateless functional components, gdzie jest to sensowne </li>\n        "},node_title:{en:"My Node.js skills:",pl:"Moje umiejętności w Node.js:"},node_list:{en:"\n            <li> I created my own API while building large application </li>\n            <li> I used manly Express.js </li>\n            <li> I've little working experience with Electron to build desktop applications based on React and Node.js </li>\n            <li> I've used MySQL database </li>\n            <li> I know basics of WebSockets </li>\n        ",pl:"\n            <li> Stworzyłem własne API przy budowie dużej aplikacji </li>\n            <li> Korzystałem głównie z Express.js </li>\n            <li> Mam małe doświadczenie w korzystaniu z Electrona do budowy aplikacji desktopowych w oparciu od React i Node.js </li>\n            <li> Korzystałem z baz danych MySQL </li>\n            <li> Znam podstawy WebSockets </li>\n        "},html_title:{en:"My HTML5 skills:",pl:"Moje umiejętności w HTML5:"},html_list:{en:"\n            <li> I well know Bootstrap library </li>\n            <li> I used WebAudio API </li>\n            <li> I know how to handle with canvas rendering to create interactive elements </li>\n            <li> I used WebSockets while building basic application </li>\n        ",pl:"\n            <li> Znam dobrze bibliotekę Bootstrap </li>\n            <li> Korzystałem z API do WebAudio </li>\n            <li> Potrafię użyć canvas w przeglądarce do tworzenia interaktywnych elementów </li>\n            <li> Korzystałem z WebSockets przy budowie podstawowej aplikacji </li>\n        "},sass_title:{en:"My Sass/CSS3 skills:",pl:"Moje umiejętności w Sass/CSS3:"},sass_list:{en:"\n            <li> I know advanced styling in CSS </li>\n            <li> I use CSS transitions and animations </li>\n            <li> I use and create SVG graphics (and sprites) and animate them with CSS </li>\n            <li> I know how to use variables, mixins and more in Sass </li>\n        ",pl:"\n            <li> Znam zaawansowane użycie CSS </li>\n            <li> Korzystam z animacji i przejść w CSS </li>\n            <li> Korzystam z i tworzę grafiki SVG (i sprite) i animuję je z pomocą CSS</li>\n            <li> Potrafię korzystać ze zmiennych, mixin i innych możliwości Sass </li>\n        "},skills_title_soft:{en:"Soft skills",pl:"Umiejętności miękkie"},soft_skill_org:{en:'\n        <h6>Organization and project managment</h6>\n        <p>\n            I got 3 years of experience in project and team managment (as a team leader as well as active member) in the biggest polish NGO. <br/>\n            As scout instructor I learned to manage both project and permanent teams. I know and use planning and situation analysis techniques. \n            <br/>\n            See example: <br/><a href="./data/plan.pdf" target="_blank">strategic plan of Scout Group I created</a>.\n        </p>',pl:'\n        <h6>Organizacja i zarządzanie projektami</h6>\n        <p>\n            Mam 3 letnie doświadczenie w zarządzaniu projektami i zespołami (zarówno jako ich aktywny członek jak i lider) w największym polskim NGO.\n            <br/>\n            Jako instruktor harcerski nauczyłem się zarządzać zarówno zespołami projektowymi, jak i ciągłymi. Znam i korzystam z technik analizy sytuacji i planowania. \n            <br/>\n            Zobacz na przykładzie: <br/><a href="./data/plan.pdf" target="_blank">plan strategiczny Szczepu, który stworzyłem</a>.\n        </p>'},soft_skill_cs:{en:"\n        <h6>Customer service</h6>\n        <p>\n            I have yearly experience in work with clients as a employee of movie set equipment rental company. My responsibilites consisted of keeping in touch with clients (e.g. telephone duty), answering their needs, advising and paperwork - checking emails, managing reservations.\n            <br/>\n            Outside of office I had direct contact with client as an PA (movie set assistant).\n        </p>",pl:"\n        <h6>Obsługa klienta</h6>\n        <p>\n            Mam roczne doświadczenie w pracy z klientami jako pracownik wypożyczalni sprzętu filmowego. Moją odpowiedzialnością było pozostawanie z klientami w ciągłym kontakcie (np. w formie dyżurów telefonicznych), odpowiadanie na ich potrzeby, doradzanie oraz kwestie biurowe - odpisywanie na emaile, zarządzanie rezerwacjami. \n            <br/>\n            Poza pracą biurową miałem też bezpośrednią styczność z klientem jako asystent na planach i sztukach.\n        </p>"},soft_skill_q:{en:"\n        <h6>Ability to ask the right questions</h6>\n        <p>\n        I'm not afraid to have doubts and present my opinion. I know how to read documentations and I always seek a solution to the problem before asking the question to someone with more knowledge.\n        </p>",pl:"\n        <h6>Umiejętność zadawania właściwych pytań</h6>\n        <p>\n        Nie boję się mieć wątpliwości i przedstawiać swoją opinię. Umiem czytać dokumentację i zawsze szukam rozwiązania problemu zanim zadam pytanie komuś z większą wiedzą.\n        </p>"},skills_title_other:{en:"Other skills",pl:"Pozostałe umiejętności"},git_desc:{en:"\n        <h6>Git</h6>\n        <p>\n        I know and use Git for version control. I used it as CLI as well as with Git Kraken. I have also a short working experience with SVN.\n        </p>",pl:"\n        <h6>Git</h6>\n        <p>Znam i korzystam z Git jako systemu kontroli wersji. Używałem go zarówno w formie CLI jaki w postaci aplikacji Git Kraken. Mam też krótkie doświadczenie w pracy z SVN.</p>"},visualstudio_desc:{en:"\n        <h6>Visual Studio Code</h6>\n        <p>I use Visual Studio Code as my main IDE. I use Emmet and many extensions for faster workflow.</p>",pl:"\n        <h6>Visual Studio Code</h6>\n        <p>Korzystam z Visual Studio Code jako mojego głównego IDE. Korzystam z Emmet i wielu rozszerzeń do szybszego tempa pracy.</p>"},svg_desc:{en:"\n        <h6>SVG</h6>\n        <p>I use and project SVG graphics, including CSS animating them.</p>",pl:"\n        <h6>SVG</h6>\n        <p>Korzystam z i projektuję grafiki, w tym animuję je za pomocą CSS.</p>"},ubuntu_desc:{en:"\n        <h6>Ubuntu</h6>\n        <p>My preferred operating system is Ubuntu. I know basics of bash and I use npm and snap to fast forward libraries installion for projects. I want to learn Docker.</p>",pl:"\n        <h6>Ubuntu</h6>\n        <p>Moim preferowanym systemem operacyjnym jest Ubuntu. Znam podstawy bash i używam npm oraz snap do przyspieszenia instalacji bibliotek do projektów. Chcę nauczyć się Dockera.</p>"},portfolio_link:{en:"my works",pl:"moje prace"},works_title:{en:"Some of my works",pl:"Część moich prac"},cr_title:{en:"cinerentALL - fullstack SERN application",pl:"cinerentALL - aplikacja fullstack SERN"},cr_desc:{en:"\n        <p> Application I created from scratch using React (+MobX, reactstrap and ag-grid) on frontend and Node.js/Express(+MySQL database) on the back. <br/>\n        Because of licence I can't show whole source code, instead I linked short documentation and presentation of application usage. </p>\n        ",pl:"\n        <p> Aplikacja, którą stworzyłem od podstaw z użyciem React (+MobX, reactstrap i ag-grid) na froncie oraz Node.js/Express(+bazy danych MySQL) na backu. <br/>\n        Ze względu na licencję nie udostępniam całego kodu źródłowego, jedynie krótką dokumentację oraz prezentację z działania aplikacji. </p>\n        "},cr_presentation:{en:"Presentation",pl:"Prezentacja"},guider_title:{en:"GuideR - Wordpress website",pl:"Guider - strona Wordpress"},guider_desc:{en:"<p> One of my first commercial projects. Simple WP child theme. Main tasks were fast time of development (one week), working with graphics designer (vector graphics in background and doves, design) and creating it bilingually. If I had to upgrade this site now I would create some loading system and optimize network performance.</p>",pl:'<p> Jeden z moich pierwszych komercyjnych projektów. Prosty motyw "dziecko" w WP. Głównymi zadaniami był szybki czas stworzenia działającej wersji (tydzień), współpraca z graficzką (grafiki wektorowe w tle, gołębie na stronie, design) i tworzenie jej dwujęzycznie. Gdybym miał ją teraz poprawiać dodałbym system ładowania i zoptymalizował jego czas.</p>'},tree_title:{en:"Random Tree Generator",pl:"Generator Drzew"},tree_desc:{en:"<p> One of my first JS projects. Created back in 2017 when I was learning p5.js and drawing in HTML5 Canvas. Inspirated by brilliant <a href='https://www.youtube.com/user/shiffman' target='_blank'> Daniel Shiffman </a>.</p>",pl:"<p> Jeden z moich pierwszych projektów w JS. Stworzony w 2017, gdy uczyłem się p5.js i rysowania w HTML5 Canvas. Zainspirowany genialnym <a href='https://www.youtube.com/user/shiffman' target='_blank'> Danielem Shiffman </a>.</p>"},animatu_title:{en:"Animatu - HTML static website",pl:"Animatu - statyczna strona HTML"},animatu_desc:{en:'<p> My first "serious" HTML static website created for a friend who runs animation company for children. The whole concept was giving colorful and fun website. </p>',pl:'<p> Moje pierwsza "poważna" strona statyczna HTML stworzona dla znajomej, które prowadzi firmę animacyjną dla dzieci. Ideą było stworzenie zabawnej i kolorowej strony. </p>'},ball_title:{en:"Ball Game - quick project for fun",pl:"Gra z piłką - szybki projekt dla zabawy"},ball_desc:{en:'<p> A quick one day build for fun. I created "balance the ball" game from scratch using HTML5 Canvas and device orientation events. <b> Of course it works for mobile only. </b> </p>',pl:"<p> Szybki, jednodniowy projekt dla zabawy. Stworzyłem grę z balansowaniem piłką od zera używając HTML5 Canvas i eventów device orientation. <b> Oczywiście działa tylko na urządzeniach mobilnych </b> </p>"},audio_title:{en:"Beatpad - Web Audio API application",pl:"BeatPad - aplikacja Web Audio API"},audio_desc:{en:"<p> Another quick build for fun. This time I created drumpad with hardcoded samples from scratch. Main challenge was working with audiobuffers to record the sound to main channels at the same time. I learned something about Blobs and ArrayBuffers during this challenge. </p>",pl:'<p> Kolejny szybki projekt dla zabawy. Tym razem stworzyłem aplikację "drumpad" z ustalonymi samplami. Głównym wyzywaniem było korzystanie z audiobuffers, aby nagrywać na kilku ścieżkach jednocześnie. Nauczyłem się czegoś o Blobs i ArrayBuffers podczas tego wyzwania. </p>'},contact_link:{en:"contact",pl:"kontakt"},contact_me:{en:'\n        <p> Contact me at </p>\n        <a href="mailto:karolnovljakovic@gmail.com?Subject=You\'re%20hired!" target="_top"> karolnovljakovic@gmail.com </a>\n        <p> or use this form </p>\n        ',pl:'\n        <p> Napisz do mnie na </p>\n        <a href="mailto:karolnovljakovic@gmail.com?Subject=You\'re%20hired!" target="_top"> karolnovljakovic@gmail.com </a>\n        <p> lub użyj tego formularza </p>\n        '},contact_email:{en:"Your email",pl:"Twój email"},contact_topic:{en:"Topic of your email",pl:"Temat twojego emaila"},contact_message:{en:"Your message...",pl:"Twoja wiadomość..."},contact_button:{en:"send",pl:"wyślij"},translate:e=>{Object.keys(n).forEach(a=>{let i=document.getElementById(a);console.log(i),i&&("INPUT"!==i.tagName&&"TEXTAREA"!==i.tagName?i.innerHTML=n[a][e]:i.placeholder=n[a][e])})}};var t=n;window.onload=(()=>{o(),r(),setTimeout(()=>{l()},2200),s()});const o=()=>{let e=document.getElementById("langSwitch");var a=window.navigator.userLanguage||window.navigator.language;document.documentElement.lang=a,"pl"===a?(e.innerHTML="<p><b>PL</b>|EN</p>",t.translate("pl")):(e.innerHTML="<p>PL|<b>EN</b></p>",t.translate("en")),e.onclick=(()=>{a="pl"===a?"en":"pl",document.documentElement.lang=a,"pl"===a?(e.innerHTML="<p><b>PL</b>|EN</p>",t.translate("pl")):(e.innerHTML="<p>PL|<b>EN</b></p>",t.translate("en"))})},r=()=>{let e=document.getElementById("underline");e.style.width="100%",setTimeout(()=>{e.style.height="calc(100%)"},1100)},l=()=>{document.getElementById("menu").style.opacity=1;let e=document.querySelectorAll("#menu .link");e.forEach((a,i)=>{a.onclick=(()=>{let n=window.innerWidth<600?10.5:8.5;0!==i&&(a.parentElement.parentElement.style.marginTop=-i*(n-1)+"rem"),a.parentElement.style.left="50%",a.parentElement.style.transform="translate(-50%, 0)";let t=a.firstChild.href.split("#")[1].concat("_content"),o=document.getElementById(t);o.style.display="block";let r=document.getElementById("welcomeAnimation").offsetHeight;setTimeout(()=>{o.style.height=`calc(100vh - ${n}rem - ${r}px)`},10);let l=Array.from(e).reduce((e,a)=>e.concat(a.getElementsByTagName("a")[0]),[]).filter(e=>e.id!==a.getElementsByTagName("a")[0].id),s=document.getElementById("back");setTimeout(()=>{s.style.opacity=1,l.forEach(e=>{e.parentElement.style.pointerEvents="none",e.parentElement.style.opacity="0"})},1e3),s.onclick=(()=>{l.forEach(e=>{e.parentElement.style.pointerEvents="auto",e.parentElement.style.opacity="1"}),a.parentElement.parentElement.style.marginTop=0,a.parentElement.style.left="5px",a.parentElement.style.transform="",o.style.height=0,setTimeout(()=>{o.style.display="none"},1e3),s.style.opacity=0})})})},s=()=>{Array.from(document.getElementsByClassName("toggleModal")).forEach(e=>{e.onclick=(()=>{let a=e.attributes["data-modal-target"].value,i=document.getElementById(a),n=i.getElementsByClassName("backdrop")[0],t=i.getElementsByClassName("modal-content")[0];"block"===i.style.display?(n.style.opacity=0,t.style.top="-200vh",setTimeout(()=>{i.style.display="none"},800)):(i.style.display="block",setTimeout(()=>{n.style.opacity=.6,t.style.top=0},20))})})}}]);