const menuWrap = document.querySelectorAll(".menu-wrap");
const toggler = document.querySelector(".toggler");
const menu = document.querySelector(".menu");
const lyrics = document.getElementById("lyrics");
const komet = document.getElementById("komet");
const erdwaerts = document.getElementById("erdwaerts");
const zombieland = document.getElementById("zombieland");
const gotterdamerung = document.getElementById("gotterdamerung");
const heuchler = document.getElementById("heuchler");
const funf = document.getElementById("funf");
const herzwerkII = document.getElementById("herzwerkII");
const himmelfahrt = document.getElementById("himmelfahrt");
const kopfschuss = document.getElementById("kopfschuss");
const werBistDu = document.getElementById("werBistDu");
const herzwerk = document.getElementById("herzwerk");

// Komet --------------------------------------------------------------------------------------------

const dataKomet = [{
        url: "https://youtu.be/7POrguoThHg",
        text: "Vorhang Auf",
    },
    {
        url: "https://youtu.be/lIfHab76HLw",
        text: "Komet",
    },
    {
        url: "https://youtu.be/LHb_t9NoDZ8",
        text: "Scherben bringen Glück",
    },
    {
        url: "https://youtu.be/6T76DInoRiU",
        text: "Von Oben",
    },
    {
        url: "https://youtu.be/tTGriCvkp_w",
        text: "Tiefenrausch",
    },
    {
        url: "https://youtu.be/xLNnNDpexXo",
        text: "Schwarz oder Weiß",
    },
    {
        url: "https://youtu.be/-mcKB8NAqis",
        text: "Nicht in meinem Namen",
    },
    {
        url: "https://youtu.be/gQx_NSaATGY",
        text: "Trau Dich",
    },
    {
        url: "https://youtu.be/7WfHV2qA6p8",
        text: "Nicht Genug",
    },
];

function showKometMenu() {
    if ((document.querySelector(".toggler").checked = true)) {
        localStorage.setItem("dataKomet", JSON.stringify(dataKomet));
        const songsKomet = JSON.parse(localStorage.getItem("dataKomet"));
        for (var i = 0; i < songsKomet.length; i++) {
            const a_komet = document.createElement("a");
            a_komet.setAttribute("href", songsKomet[i].url);
            const li_komet = document.createElement("li");
            a_komet.appendChild(document.createTextNode(songsKomet[i].text));
            li_komet.append(a_komet);
            lyrics.appendChild(li_komet);
        }
    }
}

function showPage() {
    document.querySelector(".toggler").checked = false;
    localStorage.clear();
    while (lyrics.hasChildNodes()) {
        lyrics.removeChild(lyrics.firstChild);
    }
}

komet.addEventListener("click", showKometMenu);
toggler.addEventListener("click", showPage);

// Erdwaerts ---------------------------------------------------------------------------------------------

const dataErdwaerts = [{
        url: "https://youtu.be/miX7nsO3_OY",
        text: "Wer Hat Angst Vorm Schwarzen Mann",
    },
    {
        url: "https://youtu.be/5vioEMZGkFc",
        text: "Ist das Verrückt?",
    },
    {
        url: "https://youtu.be/_IwkDVFbHFg",
        text: "Glorreiche Zeiten",
    },
    {
        url: "https://youtu.be/um3IlRsRGz0",
        text: "Einsam",
    },
    {
        url: "https://youtu.be/GZwaXj-xwZQ",
        text: "Teufel",
    },
    {
        url: "https://youtu.be/YmH8IqI_moQ",
        text: "Jordan",
    },
];

function showErdwaertsMenu() {
    if ((document.querySelector(".toggler").checked = true)) {
        localStorage.setItem("dataErdwaerts", JSON.stringify(dataErdwaerts));
        const songsErdwaerts = JSON.parse(localStorage.getItem("dataErdwaerts"));

        for (var i = 0; i < songsErdwaerts.length; i++) {
            const a_erdw = document.createElement("a");
            a_erdw.setAttribute("href", songsErdwaerts[i].url);

            const li_erdw = document.createElement("li");

            a_erdw.appendChild(document.createTextNode(songsErdwaerts[i].text));

            li_erdw.append(a_erdw);

            lyrics.appendChild(li_erdw);
        }
    }
}

erdwaerts.addEventListener("click", showErdwaertsMenu);
toggler.addEventListener("click", showPage);

// Zombieland ---------------------------------------------------------------------------------------

const dataZombie = [{
        url: "https://youtu.be/m8MX_JSTsVo",
        text: "Zombieland",
    },
    {
        url: "https://youtu.be/FyDFm0Giv-w",
        text: "Rotermond",
    },
    {
        url: "https://youtu.be/HFYsO7pMWD4",
        text: "Himmelsstürmer",
    },
    {
        url: "https://youtu.be/bvauYiSnizI",
        text: "Unter Strom",
    },
    {
        url: "https://youtu.be/ZqVKI-QC-3w",
        text: "Fanatisch",
    },
    {
        url: "https://youtu.be/zdJ6qpC07d8",
        text: "Wir könnten Götter sein",
    },
    {
        url: "https://youtu.be/bI99lIRK9Yw",
        text: "Schwarzer Engel",
    },
    {
        url: "https://youtu.be/64TNT3dv_k8",
        text: "Für Immer",
    },
    {
        url: "https://youtu.be/AJr_zBEQh94",
        text: "Lieblingsfeind",
    },
    {
        url: "https://youtu.be/jT9_PDRg7v8",
        text: "Gegen den Wind",
    },
    {
        url: "https://youtu.be/pLnb3Sn_CCw",
        text: "Frei ",
    },
    {
        url: "https://youtu.be/DT8PPahnHlI",
        text: "Hurra - wir leben noch ",
    },
    {
        url: "https://youtu.be/0bfc1kePLP0",
        text: "Herz aus Stein",
    },
    {
        url: "https://youtu.be/GHGRgL61V00",
        text: "Augenblick (Piano Version)",
    },
];

function showZombielandMenu() {
    if ((document.querySelector(".toggler").checked = true)) {
        localStorage.setItem("dataZombie", JSON.stringify(dataZombie));
        const songsZombie = JSON.parse(localStorage.getItem("dataZombie"));
        for (var i = 0; i < songsZombie.length; i++) {
            const a_zombi = document.createElement("a");
            a_zombi.setAttribute("href", songsZombie[i].url);

            const li_zombi = document.createElement("li");

            a_zombi.appendChild(document.createTextNode(songsZombie[i].text));

            li_zombi.append(a_zombi);

            lyrics.appendChild(li_zombi);
        }
    }
}

zombieland.addEventListener("click", showZombielandMenu);
toggler.addEventListener("click", showPage);

//Götterdämmerung -------------------------------------------------------------------------------------

const dataGotter = [{
        url: "https://youtu.be/fzhF6e7uK64",
        text: "Jagdzeit",
    },
    {
        url: "https://youtu.be/xIbZbPin6rk",
        text: "Heute Nacht",
    },
    {
        url: "https://youtu.be/As6UQOoqve8",
        text: "Keine Zeit",
    },
    {
        url: "https://youtu.be/xWKWBD_VxKw",
        text: "Das Licht am Ende der Welt",
    },
    {
        url: "https://youtu.be/Om83BGuMvKM",
        text: "Rabenvater",
    },
    {
        url: "https://youtu.be/0v6ZRTCFTxI",
        text: "Prellbock",
    },
    {
        url: "https://youtu.be/_I1wC_hYoJE",
        text: "Mann im Mond ",
    },
    {
        url: "https://youtu.be/MZq8RkFNbFg",
        text: "Feindbild",
    },
    {
        url: "https://youtu.be/8ahpXdFmVMg",
        text: "Herz aus Gold",
    },
    {
        url: "https://youtu.be/sJbD2TUy_lg",
        text: "Abendstern",
    },
    {
        url: "https://youtu.be/7kbMrnQVZ0U",
        text: "Kopf oder Zahl  ",
    },
];

function showGotterMenu() {
    if ((document.querySelector(".toggler").checked = true)) {
        localStorage.setItem("dataGotter", JSON.stringify(dataGotter));
        const songsGotter = JSON.parse(localStorage.getItem("dataGotter"));
        for (var i = 0; i < songsGotter.length; i++) {
            const a_gotter = document.createElement("a");
            a_gotter.setAttribute("href", songsGotter[i].url);

            const li_gotter = document.createElement("li");

            a_gotter.appendChild(document.createTextNode(songsGotter[i].text));

            li_gotter.append(a_gotter);

            lyrics.appendChild(li_gotter);
        }
    }
}

gotterdamerung.addEventListener("click", showGotterMenu);
toggler.addEventListener("click", showPage);

// Heuchler------------------------------------------------------------------------------------------

const dataHeuchler = [{
        url: "https://youtu.be/tL07x_Hj9pE",
        text: "Heuchler",
    },
    {
        url: "https://youtu.be/Bg8XOqAEmVA",
        text: "Das Tier",
    },
    {
        url: "https://youtu.be/dxjQsOTinds",
        text: "Ebenbild ",
    },
    {
        url: "https://youtu.be/sgKXCTdWyh4",
        text: "Mann von Welt",
    },
    {
        url: "https://youtu.be/B2UNkr1h1kg",
        text: "Fauler Zauber",
    },
    {
        url: "https://youtu.be/Oeftwcrz3DQ",
        text: "Mein Gral",
    },
    {
        url: "https://youtu.be/75bs9YIZUcw",
        text: "L'Aventure ",
    },

    {
        url: "https://youtu.be/QaMFc1ZMfP0",
        text: "Schau in mein Herz",
    },
    {
        url: "https://youtu.be/QdtGp6XpXXU",
        text: "Kaltes Grab",
    },
    {
        url: "https://youtu.be/mCH4Pkq05Is",
        text: "Alles nur Lüge ",
    },
];

function showHeuchlerMenu() {
    if ((document.querySelector(".toggler").checked = true)) {
        localStorage.setItem("dataHeuchler", JSON.stringify(dataHeuchler));
        const songsHeuchler = JSON.parse(localStorage.getItem("dataHeuchler"));
        for (var i = 0; i < songsHeuchler.length; i++) {
            const a_heuchler = document.createElement("a");
            a_heuchler.setAttribute("href", songsHeuchler[i].url);

            const li_heuchler = document.createElement("li");

            a_heuchler.appendChild(document.createTextNode(songsHeuchler[i].text));

            li_heuchler.append(a_heuchler);

            lyrics.appendChild(li_heuchler);
        }
    }
}

heuchler.addEventListener("click", showHeuchlerMenu);
toggler.addEventListener("click", showPage);

// Megaherz 5 --------------------------------------------------------------------------

const dataFunf = [{
        url: "https://youtu.be/mD8QtcKvks8",
        text: "Dein Herz schlägt",
    },
    {
        url: "https://youtu.be/AWexo9iYDJc",
        text: "Göttlich",
    },
    {
        url: "https://youtu.be/PSoYVl3u_8A",
        text: "Ja Genau ",
    },
    {
        url: "https://youtu.be/MC9xkVVJv44",
        text: "Gott sein 04",
    },
    {
        url: "https://youtu.be/XhEci5n6mMI",
        text: "Wann wirst du gehen",
    },
    {
        url: "https://youtu.be/UO6VUrADlDc",
        text: "Mach dich frei",
    },
    {
        url: "https://youtu.be/Z2kDgVE0B7s",
        text: "Eigentlich ",
    },
    {
        url: "https://youtu.be/Jw_BPPybnK0",
        text: "Zeig mir dein Gesicht",
    },
    {
        url: "https://youtu.be/4J7LghSY4WY",
        text: "Ebbe & Flut",
    },
    {
        url: "https://youtu.be/IAscgrp7C7o",
        text: " Komm rüber (Im Schattenland) ",
    },
    {
        url: "https://youtu.be/sPtVyqDWABU",
        text: "Weiter",
    },
    {
        url: "https://youtu.be/V2l5WMK-uFE",
        text: "Es tut weh",
    },
    {
        url: "https://youtu.be/-Er7k8jNl_Q",
        text: "Augenblick",
    },
];

function showFunfMenu() {
    if ((document.querySelector(".toggler").checked = true)) {
        localStorage.setItem("dataFunf", JSON.stringify(dataFunf));
        const songsFunf = JSON.parse(localStorage.getItem("dataFunf"));
        for (var i = 0; i < songsFunf.length; i++) {
            const a_funf = document.createElement("a");
            a_funf.setAttribute("href", songsFunf[i].url);

            const li_funf = document.createElement("li");

            a_funf.appendChild(document.createTextNode(songsFunf[i].text));

            li_funf.append(a_funf);

            lyrics.appendChild(li_funf);
        }
    }
}

funf.addEventListener("click", showFunfMenu);
toggler.addEventListener("click", showPage);

// Herzwerk II ------------------------------------------------------------------------------------------

const dataHerzwerkII = [{
        url: "https://youtu.be/34USU91WK1Y",
        text: "Herzblut",
    },
    {
        url: "https://youtu.be/p2rwGAaBOZs",
        text: "Glass und Tränen",
    },
    {
        url: "https://youtu.be/jSHRMxmVSCI",
        text: "I.M. Rumpelstilzchen  ",
    },
    {
        url: "https://youtu.be/oVdzeTMtmgM",
        text: "5. März ",
    },
    {
        url: "https://youtu.be/RYo14_kWX_E",
        text: "F.F.F. (Fleisch für Fantasie)",
    },
    {
        url: "https://youtu.be/exsZYYGat_o",
        text: "Hand auf's Herz",
    },
    {
        url: "https://youtu.be/wbknfHz33_U",
        text: "Zu den Sternen  ",
    },
    {
        url: "https://youtu.be/vHFR20F_40w",
        text: "Heute schon gelebt ",
    },
    {
        url: "https://youtu.be/min6CyW6LTQ",
        text: "An deinem Grab",
    },
    {
        url: "https://youtu.be/aLd8-4VPOiM",
        text: "Perfekte Droge",
    },

    {
        url: "https://youtu.be/fzgZdly6VzU",
        text: " Spiel Nicht...  ",
    },
    {
        url: "https://youtu.be/RQDzWHrv89c",
        text: "Gold",
    },
    {
        url: "https://youtu.be/nd3WWiy1qIo",
        text: "Es brennt",
    },
];

function showHerzwerkIIMenu() {
    if ((document.querySelector(".toggler").checked = true)) {
        localStorage.setItem("dataHerzwerkII", JSON.stringify(dataHerzwerkII));
        const songsHerzwerkII = JSON.parse(localStorage.getItem("dataHerzwerkII"));
        for (var i = 0; i < songsHerzwerkII.length; i++) {
            const a_herzwerkII = document.createElement("a");
            a_herzwerkII.setAttribute("href", songsHerzwerkII[i].url);

            const li_herzwerkII = document.createElement("li");

            a_herzwerkII.appendChild(
                document.createTextNode(songsHerzwerkII[i].text)
            );

            li_herzwerkII.append(a_herzwerkII);

            lyrics.appendChild(li_herzwerkII);
        }
    }
}

herzwerkII.addEventListener("click", showHerzwerkIIMenu);

// Himmelfahrt -------------------------------------------------------------------------------------------

const dataHimmel = [{
        url: "https://youtu.be/z89ZPvX6WF4",
        text: "Du oder Ich",
    },
    {
        url: "https://youtu.be/9G3qOgB-NWY",
        text: "Himmelfahrt ",
    },
    {
        url: "https://youtu.be/FbIylWJRyL8",
        text: "Showdown",
    },
    {
        url: "https://youtu.be/tOlZAnxal8E",
        text: "Menschmaschine  ",
    },
    {
        url: "https://youtu.be/p5fDbJNqBP8",
        text: "Windkind",
    },
    {
        url: "https://youtu.be/UHMoKzTGzP8",
        text: "Falscher Götter ",
    },
    {
        url: "https://youtu.be/QQX2zGzOZ-s",
        text: "Ruf mich an",
    },
    {
        url: "https://youtu.be/dEtmNG6b0QQ",
        text: "Hurra - Wir leben noch",
    },
    {
        url: "https://youtu.be/ycBSRvvd-5I",
        text: "Das Licht am Ende der Welt ",
    },
    {
        url: "https://youtu.be/hIljePHVLxU",
        text: "Beiss Mich  ",
    },

    {
        url: "https://youtu.be/CHWFMGlOye8",
        text: "Tötet den DJ   ",
    },
    {
        url: "https://youtu.be/odiB3tIbWpg",
        text: "Tanz auf dem Vulkan ",
    },
];

function showHimmelMenu() {
    if ((document.querySelector(".toggler").checked = true)) {
        localStorage.setItem("dataHimmel", JSON.stringify(dataHimmel));
        const songsHimmel = JSON.parse(localStorage.getItem("dataHimmel"));
        for (var i = 0; i < songsHimmel.length; i++) {
            const a_himmel = document.createElement("a");
            a_himmel.setAttribute("href", songsHimmel[i].url);

            const li_himmel = document.createElement("li");

            a_himmel.appendChild(document.createTextNode(songsHimmel[i].text));

            li_himmel.append(a_himmel);

            lyrics.appendChild(li_himmel);
        }
    }
}

himmelfahrt.addEventListener("click", showHimmelMenu);

// Kopfschuss ---------------------------------------------------------------------------------

const dataKopf = [{
        url: "https://youtu.be/Br_vUl_iyP8",
        text: "Liebestöter",
    },
    {
        url: "https://youtu.be/AgNPwXuLlR0",
        text: "Kopfschuss ",
    },
    {
        url: "https://youtu.be/j3B459Av3u0",
        text: "Herz aus Stein  ",
    },
    {
        url: "https://youtu.be/6nb_EWKLj8M",
        text: "Miststück ",
    },
    {
        url: "https://youtu.be/bhOzn9mdp58",
        text: " Burn ",
    },
    {
        url: "https://youtu.be/uhivsy6UBUw",
        text: "Rappunzel ",
    },
    {
        url: "https://youtu.be/UYs231hVLdY",
        text: "Blender",
    },
    {
        url: "https://youtu.be/War7rzEDZw8",
        text: "Jordan",
    },
    {
        url: "https://youtu.be/YDN-DX8A72E",
        text: "Freiflug ",
    },
    {
        url: "https://youtu.be/JvgNvuhZ3nM",
        text: "Meine Sünde   ",
    },
    {
        url: "https://youtu.be/yQIY7nKYMnI",
        text: "Schizophren",
    },
    {
        url: "https://youtu.be/Jebq7zCJBck",
        text: "Rock me Amadeus",
    },
];

function showKopfschussMenu() {
    if ((document.querySelector(".toggler").checked = true)) {
        localStorage.setItem("dataKopf", JSON.stringify(dataKopf));
        const songsKopf = JSON.parse(localStorage.getItem("dataKopf"));
        for (var i = 0; i < songsKopf.length; i++) {
            const a_kopf = document.createElement("a");
            a_kopf.setAttribute("href", songsKopf[i].url);

            const li_kopf = document.createElement("li");

            a_kopf.appendChild(document.createTextNode(songsKopf[i].text));

            li_kopf.append(a_kopf);

            lyrics.appendChild(li_kopf);
        }
    }
}

kopfschuss.addEventListener("click", showKopfschussMenu);

// Wer bist du -------------------------------------------------------------------------------

const dataWerbist = [{
        url: "https://youtu.be/bvuK3R8AGMQ",
        text: "Gott sein ",
    },
    {
        url: "https://youtu.be/izewpkMaVDI",
        text: "Wer bist du  ",
    },
    {
        url: "https://youtu.be/S5KrIFbfH-4",
        text: "Schläg Zurück  ",
    },
    {
        url: "https://youtu.be/eIqUr2VKo90",
        text: "Das Leben ",
    },
    {
        url: "https://youtu.be/cMCQc3QxMDM",
        text: "Finsternis",
    },
    {
        url: "https://youtu.be/zrBo6o95UQY",
        text: "Licht ",
    },
    {
        url: "https://youtu.be/Aa4U6YnEQxc",
        text: "Negativ",
    },
    {
        url: "https://youtu.be/P-rE52CY-JU",
        text: "Kopf durch die Wand ",
    },
    {
        url: "https://youtu.be/ZF8bpUtJ3v4",
        text: "Müde ",
    },
    {
        url: "https://youtu.be/t9oqf41XrO4",
        text: "Kröne der Schöpfung ",
    },
    {
        url: "https://youtu.be/kA3_S32CCVo",
        text: "Tanzen gehen",
    },
    {
        url: "https://youtu.be/E2HNeBJndtM",
        text: "Die Gedanken sind frei",
    },
    {
        url: "https://youtu.be/yz4EaErceSU",
        text: "Hänschenklein Siebenundneunzig ",
    },
];

function showWerBistDuMenu() {
    if ((document.querySelector(".toggler").checked = true)) {
        localStorage.setItem("dataWerbist", JSON.stringify(dataWerbist));
        const songsWerbist = JSON.parse(localStorage.getItem("dataWerbist"));
        for (var i = 0; i < songsWerbist.length; i++) {
            const a_werbist = document.createElement("a");
            a_werbist.setAttribute("href", songsWerbist[i].url);

            const li_werbist = document.createElement("li");

            a_werbist.appendChild(document.createTextNode(songsWerbist[i].text));

            li_werbist.append(a_werbist);

            lyrics.appendChild(li_werbist);
        }
    }
}

werBistDu.addEventListener("click", showWerBistDuMenu);

// Herzwerk -------------------------------------------------------------------

const dataHerzwerk = [{
        url: "https://youtu.be/E94RcCiiU7M",
        text: "Die Kröne der Schöpfung - An einem Kind ",
    },
    {
        url: "https://youtu.be/_Q06H06Hw5E",
        text: "Zeit  ",
    },
    {
        url: "https://youtu.be/D8DAEH-zdf8",
        text: "Teufel im Leib  ",
    },
    {
        url: "https://youtu.be/G2cTBy97P6I",
        text: "Komm her ",
    },
    {
        url: "https://youtu.be/pLlJjOlO0Ow",
        text: "Hänschenklein 1995",
    },
    {
        url: "https://youtu.be/S_jik-WiRHM",
        text: "Wir sterben jung",
    },
    {
        url: "https://youtu.be/KbscMv0XqBE",
        text: "Sexodus ",
    },
    {
        url: "https://youtu.be/r3zoDz0Si8k",
        text: "Spring in die Schlucht ",
    },
    {
        url: "https://youtu.be/tdd2O2AYyNw",
        text: "Die Kröne der Schöpfung - Das Ende",
    },
];

function showHerzwerk() {
    if ((document.querySelector(".toggler").checked = true)) {
        localStorage.setItem("dataHerzwerk", JSON.stringify(dataHerzwerk));
        const songsHerzwerk = JSON.parse(localStorage.getItem("dataHerzwerk"));
        for (var i = 0; i < songsHerzwerk.length; i++) {
            const a_herzwerk = document.createElement("a");
            a_herzwerk.setAttribute("href", songsHerzwerk[i].url);

            const li_herzwerk = document.createElement("li");

            a_herzwerk.appendChild(document.createTextNode(songsHerzwerk[i].text));

            li_herzwerk.append(a_herzwerk);

            lyrics.appendChild(li_herzwerk);
        }
    }
}

herzwerk.addEventListener("click", showHerzwerk);