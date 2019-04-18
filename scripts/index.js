import translation from './translation';

window.onload = () => {
    langSwitch();
    welcomeAnimation();
    setTimeout(() => {
        showMenu();
    }, 5200);
    handleModals();
}

const langSwitch = () => {
    let switcher = document.getElementById("langSwitch");
    var language = window.navigator.userLanguage || window.navigator.language;
    document.documentElement.lang = language;
    if (language === "pl") {
        switcher.innerHTML = "<p><b>PL</b>|EN</p>";
        translation.translate("pl");
    } else {
        switcher.innerHTML = "<p>PL|<b>EN</b></p>";
        translation.translate("en");
    }

    switcher.onclick = () => {
        if (language === "pl") {
            language = "en";
        } else {
            language = "pl";
        }
        document.documentElement.lang = language;
        if (language === "pl") {
            switcher.innerHTML = "<p><b>PL</b>|EN</p>";
            translation.translate("pl");
        } else {
            switcher.innerHTML = "<p>PL|<b>EN</b></p>";
            translation.translate("en");
        }
    }
}

const welcomeAnimation = () => {
    let slideFirst = document.getElementById('underline');
    slideFirst.style.width = "100%";
    setTimeout(() => {
        slideFirst.style.height = "calc(100%)"
    }, 3100)
}

const showMenu = () => {
    //order h1 and it's content elements so they are not stacked one on another
    let menu = document.getElementById('menu');
    menu.style.opacity = 1;
    let navs = document.querySelectorAll('#menu .link');
    navs.forEach((h, i) => {
        h.onclick = () => {
            let rem = window.innerWidth < 600 ? 10.5 : 8.5
            //slide menu to the top
            if (i !== 0) {
                h.parentElement.parentElement.style.marginTop = -i * (rem-1) + "rem";
            }
            //slide this link to the left and center
            h.parentElement.style.left = "50%";
            h.parentElement.style.transform = "translate(-50%, 0)"
            //show proper content
            let link = h.firstChild.href.split("#")[1].concat("_content");
            let content = document.getElementById(link);
            content.style.display = "block";
            let titleHeight = document.getElementById("welcomeAnimation").offsetHeight;
            setTimeout(() => {
                content.style.height = `calc(100vh - ${rem}rem - ${titleHeight}px)`;
            }, 10);
            //back button function
            let back = document.getElementById('back');
            setTimeout(() => {
                back.style.opacity = 1;
            }, 1000);
            back.onclick = () => {
                h.parentElement.parentElement.style.marginTop = 0;
                h.parentElement.style.left = "5px";
                h.parentElement.style.transform = "";
                content.style.height = 0;
                setTimeout(() => {
                    content.style.display = "none";
                }, 2000);
                back.style.opacity = 0;
            }
        }
    })
}

const handleModals = () => {
    let toggles = Array.from(document.getElementsByClassName("toggleModal"));

    toggles.forEach(el => {
        el.onclick = () => {
            let target = el.attributes["data-modal-target"].value;
            let modal = document.getElementById(target);
            let backdrop = modal.getElementsByClassName("backdrop")[0];
            let modalContent = modal.getElementsByClassName("modal-content")[0];
            let shown = (modal.style.display === "block");

            if (!shown) {
                modal.style.display = "block";
                setTimeout(() => {
                    backdrop.style.opacity = 0.6;
                    modalContent.style.top = 0;
                }, 20)
            } else {
                backdrop.style.opacity = 0;
                modalContent.style.top = "-200vh";
                setTimeout(() => {
                    modal.style.display = "none";
                }, 800);
            }
        }
    })

}