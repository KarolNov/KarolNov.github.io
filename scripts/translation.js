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