/*==================== TRANSLATION WITH i18n ===================*/

let langList = ['en', 'es', 'zh'];
// let url = `/public/i18n/${langList[0]}.json`; //local
let url = `./public/i18n/${langList[0]}.json`; //server

// we fetch it once and use that one response/result in multiple places via the promise chain
let storedData = fetch(url)
    .then((response) => {
        return response.json()
        //json = JSON.parse(data);
    });
// we keep the promise from then rather than the promise from fetch
storedData.then((data) => {
    translateHeader(data)
}).catch((error) => {
    console.log(error)
})
storedData.then((data) => {
    translateHomeSection(data)
}).catch((error) => {
    console.log(error);
})
storedData.then((data) => {
    translateAboutMeSection(data)
}).catch((error) => {
    console.log(error);
})
storedData.then((data) => {
    translateSkillsSection(data)
}).catch((error) => {
    console.log(error);
})
storedData.then((data) => {
    translateQualfctionSection(data)
}).catch((error) => {
    console.log(error);
})
storedData.then((data) => {
    translateServicesSection(data)
}).catch((error) => {
    console.log(error);
})
storedData.then((data) => {
    translatePortfolioSec(data)
}).catch((error) => {
    console.log(error);
})
storedData.then((data) => {
    translateContactSection(data)
}).catch((error) => {
    console.log(error);
})

let translateHeader = (data) => {
    $("a[href*=home]").text(data.header.navHome).prepend("<i class='uil uil-estate nav__icon'></i>");
    $("a[href*=about]").text(data.header.navAbout).prepend("<i class='uil uil-user nav__icon'></i>");
    $("a[href*=skills]").text(data.header.navSkills).prepend("<i class='uil uil-file-alt nav__icon'></i>");
    $("a[href*=services]").text(data.header.navServices).prepend("<i class='uil uil-briefcase-alt nav__icon'></i>");
    $("a[href*=portfolio]").text(data.header.navPortfolio).prepend("<i class='uil uil-scenery nav__icon'></i>");
    $("a[href*=contact]").text(data.header.navContact).prepend(" <i class='uil uil-message nav__icon'></i>");
}

let translateHomeSection = (data) => {
    document.getElementsByTagName('h1')[0].innerText = data.homeSec.homeTitle;
    document.getElementsByTagName('h3')[0].innerText = data.homeSec.homeSubtitle;
    document.getElementsByClassName('home__description')[0].innerText = data.homeSec.homeDescription;
    $("#contactButton").text(data.homeSec.contactButton);
    $("#contactButton").append("<i class='uil uil-message button__icon'></i>");
    $("#scrollspan").text(data.homeSec.scrollButton).prepend("<i class='uil uil-mouse-alt home__scroll-mouse'></i>").append("<i class='uil uil-arrow-down homw_scroll-arrow'></i>");
}

let translateAboutMeSection = (data) => {
    $("#about").find("h2").text(data.aboutMeSec.secTitle);
    $("#about").find("span").text(data.aboutMeSec.secSubtitle);
    $("#about").find("p").text(data.aboutMeSec.description);
    $("#about").find("a").text(data.aboutMeSec.downloadButton).append("<i class='uil uil-download-alt button__icon'></i>")
}

let translateSkillsSection = (data) => {
    $("#skills").find("h2").text(data.skillsSec.secTitle);
    $("#skills").find("span").text(data.skillsSec.secSubtitle);
    $("#skills1").find("h1").text(data.skillsSec.skills1);
    $("#skills2").find("h1").text(data.skillsSec.skills2);
    $("#skills3").find("h1").text(data.skillsSec.skills3);
}

let translateQualfctionSection = (data) => {
    $(".qualh2").text(data.qualfctionSec.secTitle);
    $(".qualspan").text(data.qualfctionSec.secSubtitle);
    $("div[data-target*=education]").text(data.qualfctionSec.education).prepend(" <i class='uil uil-graduation-cap qualification__icon'></i>");
    $("div[data-target*=languages]").text(data.qualfctionSec.languages).prepend(" <i class='uil uil-english-to-chinese qualification__icon'></i>");
    $("#qualification1").find("h3").text(data.qualfctionSec.qualification1.qualTitle);
    $("#qualification1").find("span").text(data.qualfctionSec.qualification1.qualSubtitle);
    $("#qualification2").find("h3").text(data.qualfctionSec.qualification2.qualTitle);
    $("#qualification2").find("span").text(data.qualfctionSec.qualification2.qualSubtitle);
    $("#qualification3").find("h3").text(data.qualfctionSec.qualification3.qualTitle);
    $("#qualification3").find("span").text(data.qualfctionSec.qualification3.qualSubtitle);
    $("#language1").find("h3").text(data.qualfctionSec.langs.language1);
    $("#language1").find("span").text(data.qualfctionSec.langs.langSubtitle1);
    $("#language2").find("h3").text(data.qualfctionSec.langs.language2);
    $("#language3").find("h3").text(data.qualfctionSec.langs.language3);
    $("#language4").find("h3").text(data.qualfctionSec.langs.language4);
}

let translateServicesSection = (data) => {
    $("#services").find("h2").text(data.servicesSec.secTitle);
    $("#services").find("span").not(".services__button").text(data.servicesSec.secSubtitle);

    let spans = $(".services__button");
    spans.each((ind, ele) => {
        ele.innerText = data.servicesSec.viewmore;
    });
    $(".services__button").append("<i class='uil uil-arrow-right button__icon'></i>");

    $("#frontTitle").html(data.servicesSec.frontend);
    $("#backTitle").html(data.servicesSec.backend);
    $("#modalFrontend h4").html(data.servicesSec.frontTitleModal);
    $("#modalBackend h4").html(data.servicesSec.backTitleModal);

    $("#modalSeo li:nth-child(1) p").text(data.servicesSec.modalSeo.li1);
    $("#modalSeo li:nth-child(2) p").text(data.servicesSec.modalSeo.li2);
    $("#modalSeo li:nth-child(3) p").text(data.servicesSec.modalSeo.li3);
    $("#modalSeo li:nth-child(4) p").text(data.servicesSec.modalSeo.li4);

    $("#modalFrontend li:nth-child(1) p").text(data.servicesSec.modalFrontend.li1);
    $("#modalFrontend li:nth-child(2) p").text(data.servicesSec.modalFrontend.li2);

    $("#modalBackend li:nth-child(1) p").text(data.servicesSec.modalBackend.li1);
    $("#modalBackend li:nth-child(2) p").text(data.servicesSec.modalBackend.li2);
}

let translatePortfolioSec = (data) => {
    $("#portfolio").find("h2").text(data.portfolioSec.secTitle);
    $("#portfolio").find("span.section__subtitle").text(data.portfolioSec.secSubtitle);

    $("#project1 h3").text(data.portfolioSec.project1.title);
    $("#project1 p").text(data.portfolioSec.project1.description);

    $("#project2 h3").text(data.portfolioSec.project2.title);
    $("#project2 p").text(data.portfolioSec.project2.description);

    $("#project3 h3").text(data.portfolioSec.project3.title);
    $("#project3 p").text(data.portfolioSec.project3.description);
}

let translateContactSection = (data) => {
    $("#contact").find("h2").text(data.contactSec.secTitle);
    $("#contact").find("span.section__subtitle").text(data.contactSec.secSubtitle);
    $("#contact h3:last").text(data.contactSec.locationh3);
    $("#contact span:last").text(data.contactSec.locationSpan);
    $(".footer__subtitle").text(data.contactSec.footerSubtitle);
}



let select = document.getElementById("selectLang");
langList.forEach(lang => {
    let option = document.createElement('option');
    option.innerText = lang;
    option.value = lang;
    select.appendChild(option);
});

select.addEventListener('change', (event) => {
    // let urlSelect = `/public/i18n/${event.target.value}.json`; //local
    let urlSelect = `i18n/${event.target.value}.json`; //server
    let storedDataSelect = fetch(urlSelect)
        .then((response) => {
            return response.json()
        });
    storedDataSelect.then((data) => {
        translateHeader(data)
    }).catch((error) => {
        console.log(error)
    })
    storedDataSelect.then((data) => {
        translateHomeSection(data)
    }).catch((error) => {
        console.log(error);
    });
    storedDataSelect.then((data) => {
        translateAboutMeSection(data)
    }).catch((error) => {
        console.log(error);
    });
    storedDataSelect.then((data) => {
        translateSkillsSection(data)
    }).catch((error) => {
        console.log(error);
    });
    storedDataSelect.then((data) => {
        translateQualfctionSection(data)
    }).catch((error) => {
        console.log(error);
    });
    storedDataSelect.then((data) => {
        translateServicesSection(data)
    }).catch((error) => {
        console.log(error);
    });
    storedDataSelect.then((data) => {
        translatePortfolioSec(data)
    }).catch((error) => {
        console.log(error);
    });
    storedDataSelect.then((data) => {
        translateContactSection(data)
    }).catch((error) => {
        console.log(error);
    });
});


