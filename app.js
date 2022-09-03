//some js to handle the menu animations
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

//one week in miliseconds
const oneWeek = 604800000;

let dailyTroparion;
let dailyKontakion;
let feastTroparion;

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

const lentStart = pascha.getTime() - (oneWeek * 10);

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
        for (var i = 0; i < sundayTropariaKontatia.length; i++){
            if (i + 1 === tone) {
                dailyTroparion = selector('.daily-troparion', sundayTropariaKontatia[i].troparion);
                kontakion = selector('.kontakion', sundayTropariaKontatia[i].kontakion);
            };
        };
    };
    return dailyTroparion, kontakion;
};
sundayTropariaKontatiaReq.send();

//retrieves the daily troparia and kontakia from the JSON file and sets the troparion and kontakion based on the day of the week
const dailyTropariaKontakiaReq = new XMLHttpRequest();
dailyTropariaKontakiaReq.open('GET', './daily-troparia-kontakia.json');
dailyTropariaKontakiaReq.onload = function() {
    const dailyTropariaKontakia = JSON.parse(dailyTropariaKontakiaReq.responseText);
    for (var i = 0; i < dailyTropariaKontakia.length; i++){
        if (today.getDay === 0) {
            void[0];
        };
        if (today.getDay() === i + 1){
            dailyTroparion = selector('.daily-troparion', dailyTropariaKontakia[i].troparion);
            kontakion = selector('.kontakion', dailyTropariaKontakia[i].kontakion);
        }
    };
    return dailyTroparion, kontakion;
};
dailyTropariaKontakiaReq.send();

const calendarOfFeastsReq = new XMLHttpRequest();
calendarOfFeastsReq.open('GET', './daily-feasts.json');
calendarOfFeastsReq.onload = function(){
    const calendarOfFeasts = JSON.parse(calendarOfFeastsReq.responseText);
    for (var i = 0; i < calendarOfFeasts.length; i++){
        if(today.getDate() === calendarOfFeasts[i].day && today.getMonth() === calendarOfFeasts[i].month){
            feastTroparion = selector('.feast-troparion', calendarOfFeasts[i].troparion);
            kontakion = selector('.kontakion', calendarOfFeasts[i].kontakion);
        };
    };
    return feastTroparion, kontakion;
};
calendarOfFeastsReq.send();


//retrieves data from Sunday feasts JSON file and sets special troparion and kontakion based around the number of weeks before or after Pascha
const sundayFeastsReq = new XMLHttpRequest();
sundayFeastsReq.open('GET', './sunday-feasts.json');
sundayFeastsReq.onload = function() {
    const sundayFeast = JSON.parse(sundayFeastsReq.responseText);
    let d = lentStart;
    for (var i = 0; i < sundayFeast.length; i++){
        if (today.getTime() === d){
            kontakion = "";
            feastTroparion = selector('.feast-troparion', sundayFeast[i].troparion);
            kontakion = selector('.kontakion', sundayFeast[i].kontakion);
        };
        d = d + oneWeek;

    };
    return feastTroparion, kontakion;
};
sundayFeastsReq.send();

//takes repeated parts from the JSON file and inserts them into the HTML file where needed
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




