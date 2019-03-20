const translation = {
    "backText": {
        en: "back",
        pl: "powrót"
    },
    "about": {
        en: "about me",
        pl: "o mnie"
    },
    "portfolio": {
        en: "my works",
        pl: "moje prace"
    },
    "contact": {
        en: "contact",
        pl: "kontakt"
    }
}

translation.translate = (lang)=>{
    Object.keys(translation).forEach((key)=>{
        let doc = document.getElementById(key)
        doc.innerHTML = translation[key][lang]
    })
}

export default translation;