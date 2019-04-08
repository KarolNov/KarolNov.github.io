const translation = {
    "backText": {
        en: "back",
        pl: "powrót"
    },
    "about_link": {
        en: "about me",
        pl: "o mnie"
    },
    "about_description": {
        en: `<p>I am Javascript Developer with almost year of experience in developing websites and apps based on HTML5 (and Bootstrap library), CSS3 (and precompiler Sass), also using Javascript i jQuery. </p> 
        <p> Last half year I was intensely trening Javascript programming, including Node.js (mostly Express framework and MySQL databases) and React (with MobX). I have also small experience in production of Electron desktop apps. <p/> 
        <p>I'm looking for a job, in which I will have possibility to develop towards being fullstack or backend Javascript Developer. I'm considering also learning React Native.</p>`,
        pl: 
        `<p>Jestem Javascript Developerem z prawie rocznym doświadczeniem w budowaniu stron w oparciu od HTML5 (oraz bibliotekę Bootstrap), CSS3 (oraz prekompilator Sass), a także Javascript i jQuery. </p> 
        <p> Ostatnie pół roku intensywnie ćwiczyłem jednak samo programowanie w Javascript, a także Node.js (głównie Express oraz bazy danych MySQL) i React (wraz z MobX). Mam też małe doświadczenie w produkowaniu aplikacji desktopowych z użyciem Electron. <p/> 
        <p>Szukam pracy, w której będę miał możliwość rozwijania się w interesujących mnie kierunkach - fullstack lub backend Javascript Developer. Rozważam też naukę React Native.</p>`
    },
    "skills_link": {
        en: "my skills",
        pl: "moje umiejętności"
    },
    "skills_title_dev": {
        en: "Developer skills <br/> <em>Press icons to read more</em>",
        pl: "Umiejętności programistyczne <br/> <em>Naciśnij ikonę, aby przeczytać więcej</em>"
    },
    "js_title": {
        en: "My Javascript skills:",
        pl: "Moje umiejętności w Javascript:"
    },
    "js_list": {
        en: 
        `
            <li>
        `,
        pl:
        `
            <li> Umiejętnie posługuję się najnowszą wersją ECMAScript (nawet do ES2019) </li>
            <li> Potrafię korzystać z dokumentacji (m.in. MDN) </li>
            <li> Staram się utrzymywać czysty kod, korzystam z JSDoc3 do opisu i komentarzy</li>
        `
    },
    "skills_title_soft": {
        en: "Soft skills",
        pl: "Umiejętności miękkie"
    },
    "soft_skill_org": {
        en: `
        <h6>Organization and project managment</h6>
        <p>
            I got 3 years of experience in project and team managment (as a team leader as well as active member) in the biggest polish NGO. <br/>
            As scout instructor I learned to manage both project and permanent teams. I know and use planning and situation analysis techniques. 
            <br/>
            See example: <br/><a href="./data/plan.pdf" target="_blank">strategic plan of Scout Group I created</a>.
        </p>`,
        pl: `
        <h6>Organizacja i zarządzanie projektami</h6>
        <p>
            Mam 3 letnie doświadczenie w zarządzaniu projektami i zespołami (zarówno jako ich aktywny członek jak i lider) w największym polskim NGO.
            <br/>
            Jako instruktor harcerski nauczyłem się zarządzać zarówno zespołami projektowymi, jak i ciągłymi. Znam i korzystam z technik analizy sytuacji i planowania. 
            <br/>
            Zobacz na przykładzie: <br/><a href="./data/plan.pdf" target="_blank">plan strategiczny Szczepu, który stworzyłem</a>.
        </p>`
    },
    "soft_skill_cs": {
        en: `
        <h6>Customer service</h6>
        <p>
            I have yearly experience in work with clients as a employee of movie set equipment rental company. My responsibilites consisted of keeping in touch with clients (e.g. telephone duty), answering their needs, advising and paperwork - checking emails, managing reservations.
            <br/>
            Outside of office I had direct contact with client as an PA (movie set assistant).
        </p>`,
        pl: `
        <h6>Obsługa klienta</h6>
        <p>
            Mam roczne doświadczenie w pracy z klientami jako pracownik wypożyczalni sprzętu filmowego. Moją odpowiedzialnością było pozostawanie z klientami w ciągłym kontakcie (np. w formie dyżurów telefonicznych), odpowiadanie na ich potrzeby, doradzanie oraz kwestie biurowe - odpisywanie na emaile, zarządzanie rezerwacjami. 
            <br/>
            Poza pracą biurową miałem też bezpośrednią styczność z klientem jako asystent na planach i sztukach.
        </p>`
    },
    "soft_skill_q": {
        en: `
        <h6>Ability to ask the right questions</h6>
        <p>
        I'm not afraid to have doubts and present my opinion. I know how to read documentations and I always seek a solution to the problem before asking the question to someone with more knowledge.
        </p>`,
        pl: `
        <h6>Umiejętność zadawania właściwych pytań</h6>
        <p>
        Nie boję się mieć wątpliwości i przedstawiać swoją opinię. Umiem czytać dokumentację i zawsze szukam rozwiązania problemu zanim zadam pytanie komuś z większą wiedzą.
        </p>`
    },
    "portfolio_link": {
        en: "my works",
        pl: "moje prace"
    },
    "contact_link": {
        en: "contact",
        pl: "kontakt"
    },

}

translation.translate = (lang)=>{
    Object.keys(translation).forEach((key)=>{
        let doc = document.getElementById(key)
        console.log(doc);
        if(doc){
        doc.innerHTML = translation[key][lang]
        }
    })
}

export default translation;