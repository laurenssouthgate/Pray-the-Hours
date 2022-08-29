const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);
// startDate represents the date at which the tone of the week is reset to Tone One
let startDate;
let today = new Date();

//empty variables to be used later
let pascha;
let troparion;
let kontakion;
let feastTroparion;

//one week in miliseconds
const oneWeek = 604800000;

//retrieves the date of Pascha for next few years
const paschaDate = function() {
    if (today.getFullYear() === 2022) {
        pascha = new Date('2022-04-24');
    }
    if (today.getFullYear() === 2023) {
        pascha = new Date('2023-04-16');
    };
    if (today.getFullYear() === 2024) {
        pascha = new Date('2024-05-05');
    };
    if (today.getFullYear() === 2025) {
        pascha = new Date('2025-04-20');
    };
    if (today.getFullYear() === 2026) {
        pascha = new Date('2026-04-12');
    };
    if (today.getFullYear() === 2027) {
        pascha = new Date('2027-05-02');
    };
    if (today.getFullYear() === 2028) {
        pascha = new Date('2028-04-16');
    };
    if (today.getFullYear() === 2029) {
        pascha = new Date('2029-04-08');
    };
    if (today.getFullYear() === 2030) {
        pascha = new Date('2030-04-28');
    };
    if (today.getFullYear() === 2031) {
        pascha = new Date('2031-04-13');
    };
    if (today.getFullYear() === 2032) {
        pascha = new Date('2032-05-02');
    };
    if (today.getFullYear() === 2033) {
        pascha = new Date('2033-04-24');
    };
    if (today.getFullYear() === 2034) {
        pascha = new Date('2034-04-09');
    };
    return pascha;
}

paschaDate();

//the tone is reset one week after pascha this is used for the start date
const calculateStartDate = function() {
    if (today.getFullYear() === 2022) {
        startDate = new Date('2022-08-21');
    }
    else {
        startDate = pascha.getTime() + oneWeek;
        startDate = new Date(startDate);
    };
    return startDate;
};

calculateStartDate();

//code that creates an 8 weekly cycle to get the 8 tones
function diffInDays(a, b){
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function get_week(startDate, today) {
    var cycle = 8;
    var days = diffInDays(startDate, today);
    var weeks = Math.floor(days / 7);
    var week_num = ((weeks % cycle) + cycle) % cycle;
    return week_num
  }
//this sets the tone of the week
let tone = get_week(startDate, today) + 1;

//a function to select a tag and edit the innerHTML
const selector = function(tag, text) {
    var e = document.querySelectorAll(tag);
    for (var i = 0; i < e.length; i++){
        e[i].innerHTML = text;
    }
    return e;
};

//accesses the Sunday troparia and kontakia JSON file, and then sets the troparion and kontakion according to the tone
const sundayTropariaKontatiaReq = new XMLHttpRequest();
sundayTropariaKontatiaReq.open('GET', './sunday-troparia-kontakia.json');
sundayTropariaKontatiaReq.onload = function() {
    const sundayTropariaKontatia = JSON.parse(sundayTropariaKontatiaReq.responseText);
    if (today.getDay() === 0){
        if (tone === 1){
            troparion = selector('.troparion', sundayTropariaKontatia[0].troparion);
            kontakion = selector('.kontakion', sundayTropariaKontatia[0].kontakion);
        }
        else if (tone === 2){
            troparion = selector('.troparion', sundayTropariaKontatia[1].troparion);
            kontakion = selector('.kontakion', sundayTropariaKontatia[1].kontakion);
            }
        else if (tone === 3){
            troparion = selector('.troparion', sundayTropariaKontatia[2].troparion);
            kontakion = selector('.kontakion', sundayTropariaKontatia[2].kontakion);
        }
        else if (tone === 4){
            troparion = selector('.troparion', sundayTropariaKontatia[3].troparion);
            kontakion = selector('.kontakion', sundayTropariaKontatia[3].kontakion);
        }
        else if (tone === 5){
            troparion = selector('.troparion', sundayTropariaKontatia[4].troparion);
            kontakion = selector('.kontakion', sundayTropariaKontatia[4].kontakion);
        }
        else if (tone === 6){
            troparion = selector('.troparion', sundayTropariaKontatia[5].troparion);
            kontakion = selector('.kontakion', sundayTropariaKontatia[5].kontakion);
        }
        else if (tone === 7){
            troparion = selector('.troparion', sundayTropariaKontatia[6].troparion);
            kontakion = selector('.kontakion', sundayTropariaKontatia[6].kontakion);
        }
        else if (tone === 8){
            troparion = selector('.troparion', sundayTropariaKontatia[7].troparion);
            kontakion = selector('.kontakion', sundayTropariaKontatia[7].kontakion);
        };
        return troparion, kontakion;
    };
};
sundayTropariaKontatiaReq.send();

//retrieves the daily troparia and kontakia from the JSON file and sets the troparion and kontakion based on the day of the week
const dailyTropariaKontakiaReq = new XMLHttpRequest();
dailyTropariaKontakiaReq.open('GET', './daily-troparia-kontakia.json');
dailyTropariaKontakiaReq.onload = function() {
    const dailyTropariaKontakia = JSON.parse(dailyTropariaKontakiaReq.responseText);
    if (today.getDay() === 1){
        troparion = selector('.troparion', dailyTropariaKontakia[0].troparion);
        kontakion = selector('.kontakion', dailyTropariaKontakia[0].kontakion);
    }
    else if (today.getDay() === 2){
        troparion = selector('.troparion', dailyTropariaKontakia[1].troparion);
        kontakion = selector('.kontakion', dailyTropariaKontakia[1].kontakion);
    }
    else if (today.getDay() === 4){
        troparion = selector('.troparion', dailyTropariaKontakia[3].troparion);
        kontakion = selector('.kontakion', dailyTropariaKontakia[3].kontakion);
    }
    else if (today.getDay() === 6){
        troparion = selector('.troparion', dailyTropariaKontakia[4].troparion);
        kontakion = selector('.kontakion', dailyTropariaKontakia[4].kontakion);
    }
    else if (today.getDay() === 3 || today.getDay() === 5) {
        troparion = selector('.troparion', dailyTropariaKontakia[2].troparion);
        kontakion = selector('.kontakion', dailyTropariaKontakia[2].kontakion);
    };
    return troparion, kontakion;
};
dailyTropariaKontakiaReq.send();

//retrieves data from Sunday feasts JSON file and sets special troparion and kontakion based around the number of weeks before or after Pascha
const sundayFeastsReq = new XMLHttpRequest();
sundayFeastsReq.open('GET', './sunday-feasts.json');
sundayFeastsReq.onload = function() {
    const sundayFeast = JSON.parse(sundayFeastsReq.responseText);
    if (today.getTime() === pascha.getTime()) {
        feastTroparion = selector('.feast-troparion', sundayFeast[0].troparion);
        kontakion = selector('.kontakion', sundayFeast[0].kontakion);
    };
    if (today.getTime() === pascha.getTime() + oneWeek) {
        feastTroparion = selector('.feast-troparion', sundayFeast[1].troparion);
        kontakion = selector('.kontakion', sundayFeast[1].kontakion);
    };
    if (today.getTime() === pascha.getTime() + (oneWeek * 2)) {
        feastTroparion = selector('.feast-troparion', sundayFeast[2].troparion);
        kontakion = selector('.kontakion', sundayFeast[2].kontakion);
    };
    if (today.getTime() === pascha.getTime() + (oneWeek * 3)) {
        feastTroparion = selector('.feast-troparion', sundayFeast[3].troparion);
        kontakion = selector('.kontakion', sundayFeast[3].kontakion);
    };
    if (today.getTime() === pascha.getTime() + (oneWeek * 4)) {
        feastTroparion = selector('.feast-troparion', sundayFeast[4].troparion);
    };
    if (today.getTime() === pascha.getTime() + (oneWeek * 5)) {
        feastTroparion = selector('.feast-troparion', sundayFeast[5].troparion);
        kontakion = selector('.kontakion', sundayFeast[5].kontakion);
    };
    if (today.getTime() === pascha.getTime() + (oneWeek * 6)) {
        feastTroparion = selector('.feast-troparion', sundayFeast[6].troparion);
        kontakion = selector('.kontakion', sundayFeast[6].kontakion);
    };
    if (today.getTime() === pascha.getTime() + (oneWeek * 7)) {
        feastTroparion = selector('.feast-troparion', sundayFeast[7].troparion);
        kontakion = selector('.kontakion', sundayFeast[7].kontakion);
    };
    if (today.getTime() === pascha.getTime() + (oneWeek * 8)) {
        feastTroparion = selector('.feast-troparion', sundayFeast[8].troparion);
        kontakion = selector('.kontakion', sundayFeast[8].kontakion);
    };
    if (today.getTime() === pascha.getTime() + (oneWeek * 9)) {
        feastTroparion = selector('.feast-troparion', sundayFeast[9].troparion);
        kontakion = selector('.kontakion', sundayFeast[9].kontakion);
    };
    if (today.getTime() === pascha.getTime() - oneWeek) {
        feastTroparion = selector('.feast-troparion', sundayFeast[10].troparion);
        kontakion = selector('.kontakion', sundayFeast[10].kontakion);
    };
    if (today.getTime() === pascha.getTime() - (oneWeek * 2)) {
        feastTroparion = selector('.feast-troparion', sundayFeast[11].troparion);
        kontakion = selector('.kontakion', sundayFeast[11].kontakion);
    };
    if (today.getTime() === pascha.getTime() - (oneWeek * 3)) {
        feastTroparion = selector('.feast-troparion', sundayFeast[12].troparion);
        kontakion = selector('.kontakion', sundayFeast[12].kontakion);
    };
    if (today.getTime() === pascha.getTime() - (oneWeek * 4)) {
        feastTroparion = selector('.feast-troparion', sundayFeast[13].troparion);
        kontakion = selector('.kontakion', sundayFeast[13].kontakion);
    };
    if (today.getTime() === pascha.getTime() - (oneWeek * 5)) {
        feastTroparion = selector('.feast-troparion', sundayFeast[14].troparion);
        kontakion = selector('.kontakion', sundayFeast[14].kontakion);
    };
    if (today.getTime() === pascha.getTime() - (oneWeek * 6)) {
        feastTroparion = selector('.feast-troparion', sundayFeast[15].troparion);
        kontakion = selector('.kontakion', sundayFeast[15].kontakion);
    };
    if (today.getTime() === pascha.getTime() - (oneWeek * 7)) {
        kontakion = selector('.kontakion', sundayFeast[16].kontakion);
    };
    if (today.getTime() === pascha.getTime() - (oneWeek * 8)) {
        kontakion = selector('.kontakion', sundayFeast[17].kontakion);
    };
    if (today.getTime() === pascha.getTime() - (oneWeek * 9)) {
        kontakion = selector('.kontakion', sundayFeast[18].kontakion);
    };
    if (today.getTime() === pascha.getTime() - (oneWeek * 10)) {
        feastTroparion = selector('.feast-troparion', sundayFeast[19].troparion);
        kontakion = selector('.kontakion', sundayFeast[19].kontakion);
    };
    return feastTroparion, kontakion;
};
sundayFeastsReq.send();

//gets data from fixed feasts JSON file and sets troparia and kontakia for the fixed feasts in the year
const fixedFeastsReq = new XMLHttpRequest();
fixedFeastsReq.open('GET', './fixed-feasts.json');
fixedFeastsReq.onload = function() {
    const fixedFeast = JSON.parse(fixedFeastsReq.responseText);
    if (today.getDate() === 21 && today.getMonth() === 8) {
        feastTroparion = selector('.feast-troparion', fixedFeast[0].troparion);
        kontakion = selector('.kontakion', fixedFeast[0].kontakion);
    }
    if (today.getDate() === 27 && today.getMonth() === 8) {
        feastTroparion = selector('.feast-troparion', fixedFeast[1].troparion);
        kontakion = selector('.kontakion', fixedFeast[1].kontakion);
    }
    if (today.getDate() === 4 && today.getMonth() === 11) {
        feastTroparion = selector('.feast-troparion', fixedFeast[2].troparion);
        kontakion = selector('.kontakion', fixedFeast[2].kontakion);
    }
    if (today.getDate() === 7 && today.getMonth() === 0) {
        feastTroparion = selector('.feast-troparion', fixedFeast[3].troparion);
        kontakion = selector('.kontakion', fixedFeast[3].kontakion);
    }
    if (today.getDate() === 19 && today.getMonth() === 0) {
        feastTroparion = selector('.feast-troparion', fixedFeast[4].troparion);
        kontakion = selector('.kontakion', fixedFeast[4].kontakion);
    }
    if (today.getDate() === 15 && today.getMonth() === 1) {
        feastTroparion = selector('.feast-troparion', fixedFeast[5].troparion);
        kontakion = selector('.kontakion', fixedFeast[5].kontakion);
    }
    if (today.getDate() === 7 && today.getMonth() === 3) {
        feastTroparion = selector('.feast-troparion', fixedFeast[6].troparion);
        kontakion = selector('.kontakion', fixedFeast[6].kontakion);
    }
    if (today.getDate() === 19 && today.getMonth() === 7) {
        feastTroparion = selector('.feast-troparion', fixedFeast[10].troparion);
        kontakion = selector('.kontakion', fixedFeast[10].kontakion);
    }
    if (today.getDate() === 28 && today.getMonth() === 7) {
        feastTroparion = selector('.feast-troparion', fixedFeast[11].troparion);
        kontakion = selector('.kontakion', fixedFeast[11].kontakion);
    }
    else {
        void[0];
    };
    return feastTroparion, kontakion;
};
fixedFeastsReq.send();

const repeatedPartsReq = new XMLHttpRequest();
repeatedPartsReq.open('GET', './repeated-parts.json');
repeatedPartsReq.onload = function(){
    const repeatedParts = JSON.parse(repeatedPartsReq.responseText);
    const oCome = selector('.o-come', repeatedParts[0].text);
    const gloryBoth = selector('.glory-both', repeatedParts[1].text);
    const alleluia = selector('.alleluia', repeatedParts[2].text);
    const mercyThree = selector('.mercy-3', repeatedParts[3].text);
    const glory = selector('.glory', repeatedParts[4].text);
    const both = selector('.both', repeatedParts[5].text);
    const trisagion = selector('.trisagion', repeatedParts[6].text);
    const mercyFourty = selector('.mercy-40', repeatedParts[7].text);
    const hours = selector('.hours', repeatedParts[8].text);
    const moreHonourable = selector('.more-honourable', repeatedParts[9].text);
    const holyFathers = selector('.holy-fathers', repeatedParts[10].text);
    const heavenlyKing = selector('.heavenly-king', repeatedParts[11].text);
    const mercyTwelve = selector('.mercy-12', repeatedParts[12].text);
    const trulyMeet = selector('.truly-meet', repeatedParts[13].text);
    return oCome, gloryBoth, alleluia, mercyThree, glory, both, trisagion, mercyFourty, hours, moreHonourable, holyFathers, heavenlyKing, mercyTwelve, trulyMeet;
};
repeatedPartsReq.send();
