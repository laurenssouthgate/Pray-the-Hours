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
let feastName;

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


//accesses the Sunday troparia and kontakia JSON file, and then sets the troparion and kontakion according to the tone
$.ajax({
	type: 'GET',
	url: 'https://raw.githubusercontent.com/laurenssouthgate/Pray-the-Hours/main/sunday-troparia-kontakia.json',
    dataType: 'json',
	success: function(data) {
		if (today.getDay() === 0){
			$.each(data, function(i) {
				if (i + 1 === tone) {
					dailyTroparion = $('.daily-troparion').html(data[i].troparion);
					kontakion = $('.kontakion').html(data[i].kontakion);
				}
            });
        };
    }
});
//retrieves the daily troparia and kontakia from the JSON file and sets the troparion and kontakion based on the day of the week
$.ajax({
    type: 'GET',
    url: 'https://raw.githubusercontent.com/laurenssouthgate/Pray-the-Hours/main/daily-troparia-kontakia.json',
    dataType: 'json',
    success: function(data) {
        $.each(data, function(i) {
            if (today.getDay === 0) {
                void[0];
            };
            if (today.getDay() === i + 1) {
                dailyTroparion = $('.daily-troparion').html(data[i].troparion);
                kontakion = $('.kontakion').html(data[i].kontakion);
            };
        });
    }
});

$.ajax({
    type: 'GET',
    url: 'https://raw.githubusercontent.com/laurenssouthgate/Pray-the-Hours/main/daily-feasts.json',
    dataType: 'json',
    success: function(data) {
        $.each(data, function(i){
            if (today.getDate() === data[i].day && today.getMonth() === data[i].month) {
                feastName = $('.feast-name').html('<i>' + data[i].name + ':</i>');
                feastTroparion = $('.feast-troparion').html(data[i].troparion);
                kontakion = $('.kontakion').html(data[i].kontakion);
            };
        });
    }
});


//retrieves data from Sunday feasts JSON file and sets special troparion and kontakion based around the number of weeks before or after Pascha
$.ajax({
    type: 'GET',
    url: 'https://raw.githubusercontent.com/laurenssouthgate/Pray-the-Hours/main/sunday-feasts.json',
    dataType: 'json',
    success: function(data) {
        let d = lentStart;
        $.each(data, function(i){
            if (today.getTime() === d){
                kontakion = "";
                feastTroparion = $('.feast-troparion').html(data[i].troparion);
                kontakion = $('.kontakion').html(data[i].kontakion);
            };
            d = d + oneWeek;
        });
    }
});

//takes repeated parts from the JSON file and inserts them into the HTML file where needed

$.ajax({
    type: 'GET',
    url: 'https://raw.githubusercontent.com/laurenssouthgate/Pray-the-Hours/main/repeated-parts.json',
    dataType: 'json',
    success: function(data) {
        const oCome = $('.o-come').html(data[0].text);
        const gloryBoth = $('.glory-both').html(data[1].text);
        const alleluia = $('.alleluia').html(data[2].text);
        const mercyThree = $('.mercy-3').html(data[3].text);
        const glory = $('.glory').html(data[4].text);
        const both = $('.both').html(data[5].text);
        const trisagion = $('.trisagion').html(data[6].text);
        const mercyFourty = $('.mercy-40').html(data[7].text);
        const hours = $('.hours').html(data[8].text);
        const moreHonourable = $('.more-honourable').html(data[9].text);
        const holyFathers = $('.holy-fathers').html(data[10].text);
        const heavenlyKing = $('.heavenly-king').html(data[11].text);
        const mercyTwelve = $('.mercy-12').html(data[12].text);
        const trulyMeet = $('.truly-meet').html(data[13].text); 
        return oCome, gloryBoth, alleluia, mercyThree, glory, both, trisagion, mercyFourty, hours, moreHonourable, holyFathers, heavenlyKing, mercyTwelve, trulyMeet;
    }
});




