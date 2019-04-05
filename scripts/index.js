import translation from './translation';

window.onload = ()=>{
    langSwitch();
    welcomeAnimation();
    setTimeout(()=>{
        showMenu();
    }, 5200);
}

const langSwitch = ()=>{
    let switcher = document.getElementById("langSwitch");
    var language = window.navigator.userLanguage || window.navigator.language;
    document.documentElement.lang = language;
    if(language==="pl"){
        switcher.innerHTML = "<p><b>PL</b>|EN</p>";
        translation.translate("pl");
    }else{
        switcher.innerHTML = "<p>PL|<b>EN</b></p>";
        translation.translate("en");
    }

    switcher.onclick = ()=>{
        if(language==="pl"){
            language="en";
        }else{
            language="pl";
        }
        document.documentElement.lang = language;
        if(language==="pl"){
            switcher.innerHTML = "<p><b>PL</b>|EN</p>";
            translation.translate("pl");
        }else{
            switcher.innerHTML = "<p>PL|<b>EN</b></p>";
            translation.translate("en");
        }
    }
}

const welcomeAnimation = ()=>{
    let slideFirst = document.getElementById('underline');
    slideFirst.style.width = "100%";
    setTimeout(()=>{
        slideFirst.style.height = "calc(100%)"
    }, 3100)
}

const showMenu = ()=>{
    //order h1 and it's content elements so they are not stacked one on another
    let menu = document.getElementById('menu');
    menu.style.opacity = 1;
    let navs = document.querySelectorAll('#menu .link');
    navs.forEach((h,i)=>{
        h.onclick = ()=>{
            //slide menu to the top
            if(i!==0){
                h.parentElement.parentElement.style.marginTop = -i*8+"rem";
            }
            //slide this link to the left and center
            h.parentElement.style.left = "50%";
            h.parentElement.style.transform = "translate(-50%, 0)"
            //show proper content
            console.log(h.firstChild);
            let link = h.firstChild.href.split("#")[1].concat("_content");
            let content = document.getElementById(link);
            content.style.display = "block";
            setTimeout(()=>{
                content.style.height = "100vh";
            }, 10);
            //back button function
            let back = document.getElementById('back');
            setTimeout(()=>{
                back.style.opacity = 1;
            }, 1000);
            back.onclick = ()=>{
                h.parentElement.parentElement.style.marginTop = 0;
                h.parentElement.style.left = "5px";
                h.parentElement.style.transform = "";
                content.style.height = 0;
                setTimeout(()=>{
                    content.style.display = "none";
                }, 2000);
                back.style.opacity = 0;
            }
        }
    })
    
}