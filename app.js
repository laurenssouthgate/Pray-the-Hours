const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);

var startDate = new Date('2022-08-21');
var today = new Date();

if (today > new Date('2023-04-23')) {
    startDate = new Date('2023-04-23');
};
if (today > new Date('2024-05-12')) {
    startDate = new Date('2024-05-12');
};
if (today > new Date('2025-04-27')) {
    startDate = new Date('2025-04-27');
};
if (today > new Date('2026-04-19')) {
    startDate = new Date('2026-04-19');
};
if (today > new Date('2027-05-09')) {
    startDate = new Date('2027-05-09');
};
if (today > new Date('2028-04-23')) {
    startDate = new Date('2028-04-23');
};
if (today > new Date('2029-04-15')) {
    startDate = new Date('2029-04-15');
};
if (today > new Date('2030-05-04')) {
    startDate = new Date('2030-05-04');
};
if (today > new Date('2031-04-20')) {
    startDate = new Date('2031-04-20');
};
if (today > new Date('2032-05-09')) {
    startDate = new Date('2032-05-09');
};
if (today > new Date('2033-04-31')) {
    startDate = new Date('2033-04-31');
};
if (today > new Date('2034-04-16')) {
    startDate = new Date('2034-04-16');
};



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

var test_date = new Date('2023-04-30');
    for (var i = 0; i < 8 + 1; i++) {
        console.log(test_date.toString() + " is on week #" + (get_week(startDate, test_date) + 1));
        test_date.setDate(test_date.getDate() + 7);
}

var tone = get_week(startDate, today) + 1;


const selector = function(tag, text) {
    var e = document.querySelectorAll(tag);
    for (var i = 0; i < e.length; i++){
        e[i].innerHTML = text;
    }
    return e;
};

const dailyTroparion = function() {
    if (today.getDay() === 0){
        if (tone === 1){
            var troparion = selector('.troparion', "When the stone had been sealed by the Jews, and the soldiers were guarding Thine immaculate Body, \
                Thou didst arise on the third day, O Saviour, granting life unto the world. Wherefore, the Hosts of the heavens cried out to Thee, O Life giver: \
                Glory to Thy Resurrection, O Christ. Glory to Thy Kingdom. Glory to Thy dispensation, O only Lover of mankind.");
        }
        else if (tone === 2){
            var troparion = selector('.troparion', "When Thou didst descend unto death, O Life Immortal, then didst Thou slay hades with the lightning of Thy Divinity. And when Thou \
            didst also raise the dead out of the nethermost depths, all the Hosts of the heavens cried out: O Life-giver, Christ our God, glory be to Thee.");
        }
        else if (tone === 3){
            var troparion = selector('.troparion', "Let the heavens be glad; let earthly things rejoice; for the Lord hath wrought might with His arm. He hath trampled down death by death; \
            the firstborn of the dead hath He become. From the belly of hades hath He delivered us and hath granted to the wrold great mercy.");
        }
        else if (tone === 4){
            var troparion = selector('.troparion', "Having learned the joyful proclaimation of the Resurrection from the angel, and having cast off the ancestral condemnation, the women \
            disciples of the Lord spake to the apostles exultantly: Death is despoiled and Christ God is risen, granting to the world great mercy.");
        }
        else if (tone === 5){
            var troparion = selector('.troparion', "Let us the faithful, praise and worship the Word Who is co-unoriginate with the Father and the Spirit, and Who was born of the Virgin \
            for our salvation; for He was pleased to ascend the Cross in the flesh and to endure death, and to raise the dead by His glorious Resurrection.");
        }
        else if (tone === 6){
            var troparion = selector('.troparion',"Angleic Hosts were above Thy tomb, and they that guarded Thee became as dead. And Mary stood by the grave seeking Thine immaculate Body.\
            Thou didst despoil hades and wast not tempted by it. Thou didst meet the Virgin and didst grant us life. O Thou who didst rise from the dead, O Lord, glory be to Thee.");
        }
        else if (tone === 7){
            var troparion = selector('.troparion', "Thou didst destroy death by Thy Cross, Thou didst open Paradise to the theif. Thou didst change the lamentation of the Myrrh-bearers, \
            and Thou didst command Thine Apostles to proclaim that Thou didst arise, O Christ God, and grantest to the world great mercy.");
        }
        else{
            var troparion = selector('.troparion', "From on high didst Thou descend, O Compassionate One; to burial of three days hast Thou submitted that Thou mightest free us from our passions. \
            O our Life and Resurrection, O Lord, glory be to Thee");
        };
    }
    else if (today.getDay() === 1){
        var troparion = selector('.troparion', "Supreme Commanders of the heavenly hosts, we unworthy ones implore you that by your supplications ye will encircle us with the \
            shelter of the wings of your immaterial glory, and guard us who fall down before you and fervently cry: Deliver us from dangers since ye are the Marshals of the Hosts on high.");
    }
    else if (today.getDay() === 2){
        var troparion = selector('.troparion', "The memory of the righteous is celebrated with hymns of praise, but the Lord's testimony is sufficient for thee, O Forerunner; for thou hast proved \
            to be truly even more venerable than the prophets, since thou wast granted to baptize in the running waters Him Whom they proclaimed. Wherefore having contested for the truth \
            thou didst rejoice to announce the good tidings even to those in hades: that God hath appeared in the flesh, taking away the sin of the world and granting us great mercy.");
    }
    else if (today.getDay() === 4){
        var troparion = selector('.troparion', "The truth of things revealed thee to thy flock as a rule of faith, an icon of meekness and a teacher of temperance; therefore thou hast \
            achieved the heights by humility, riches by poverty. O Father and Hierarch Nicholas, intercede with Christ God that our souls be saved");
    }
    else if (today.getDay() === 6){
        var troparion = selector('.troparion', "O Thou Who by the depth of Thy wisdom, out of love for mankind, dost provide all things, and grantest unto all that which is profitable \
            O only Creator: Grant rest, O Lord, to the souls of Thy servants, for in Thee have they placed their hope, O our Creator and Fashioner and God.")
    }
    else {
        var troparion = selector('.troparion', "Save, O Lord, Thy people, and bless Thine inheritance; grant Thou unto Orthodox Christians victory over enemies; and by the power \
            of Thy Cross do Thou preserve Thy commonwealth");
    };
    return troparion;
}

const dailyKontakion = function() {
    if (today.getDay() === 0){
        if (tone === 1){
            var kontakion = selector('.kontakion', "As God, Thou didst arise from the tomb in glory, and Thou didst raise the world together with Thyself. \
            And mortal nature praiseth Thee as God, and death hath vanished. And Adam danceth, O Master, and Eve, now freed from fetters, rejoiceth as she creith out: \
            Thou art He, O Christ, that grantest unto all resurrection.");
        }
        else if (tone === 2){
            var kontakion = selector('.kontakion', "Thou didst arise from the tomb, O omnipotent Saviour, and hades was terrified on beholding the wonder; and the dead arose, and creation \
            at the sight thereof rejoiceth with Thee. And Adam also is joyful, and the world, O my Saviour, praiseth Thee for ever.");
        }
        else if (tone === 3){
            var kontakion = selector('.kontakion', "Thou didst arise today from the tomb, O Merciful One, and didst lead us out of the gates of death. Today Adam danceth and Eve rejoiceth; \
            and together with them both the Prophets and the Patriarchs unceasingly praise the divine might of Thine authority.");
        }
        else if (tone === 4){
            var kontakion = selector('.kontakion', "My Saviour and Redeemer hath, as God, raised up the earthborn from the grave and from their fetters, and He hath broken the gates of hades, \
            and, as Master, hath risen on the third day.");
        }
        else if (tone === 5){
            var kontakion = selector('.kontakion', "Unto hades, O my Saviour, didst Thou descend, and having broken its gates as One omnipotent, Thou, as Creator, didst raise up the dead together with Thyself. \
            And Thou didst break the sting of death, and didst deliver Adam from the curse, O Lover of mankind. Wherefore, we all cry unto Thee: Save us, O Lord.");
        }
        else if (tone === 6){
            var kontakion = selector('.kontakion',"Having by His life-bestowing hand raised up all the dead out of the dark abysses, Christ God, the Giver of Life, hath bestowed the Resurrection \
            upon the fallen human race; for He is the Saviour of all, the Resurrection, and the Life, and the God of all.");
        }
        else if (tone === 7){
            var kontakion = selector('.kontakion', "No longer will the dominion of death be able to keep men captive; for Christ hath decended, demolishing and destroying the powers thereof. \
            Hades is bound; the Prophets rejoice with one voice, saying: A Saviour hath come for them that have faith. Come forth, ye faithful, for the Resurrection.");
        }
        else{
            var kontakion = selector('.kontakion', "Having arised from the tomb, Thou didst raise up the dead and didst resurrect Adam. Eve also danceth at Thy Resurrection, and the ends of the world celebrate \
            Thine arising from the dead, O Greatly-merciful One.");
        };
    }
    else if (today.getDay() === 1){
        var kontakion = selector('.kontakion', "Supreme Commanders of God and ministers of the Divine Glory, guides of men and leaders of the angels, ask for what it to our profit \
            and for great mercy, since ye are the Supreme Commanders of the Bodiless Hosts.");
    }
    else if (today.getDay() === 2){
        var kontakion = selector('.kontakion', "O Prophet of God and Forerunner of grace, having obtained thy head from the earth as a most sacred rose, we ever receive healings \
            for again, as of old in the world, thou preachest repentance.");
    }
    else if (today.getDay() === 4){
        var kontakion = selector('.kontakion', "In Myra, O Saint, thou didst prove to be a minister of things sacred: for havign fulfilled the Gospel of Christ, O righteous one, \
            thou didst lay down thy life for thy people, and didst save the innocent from death. Wherefore, thou wast sanctified, as a great initiate of the grace of God.");
    }
    else if (today.getDay() === 6){
        var kontakion = selector('.kontakion', "With the saints give rest, O Christ to the souls of Thy servants, where there is neither sorrow, nor sighing, but life everlasting.")
    }
    else {
        var kontakion = selector('.kontakion', "O Thou Who wast lifted up willingly on the Cross, bestow Thy mercies upon the new community named after Thee, O Christ God; gladden with \
            Thy power the Orthodox Christians, granting them victory over enemies; may they have as Thy help the weapon of peace, the invincible trophy.");
    };
    return kontakion;
}

dailyTroparion();
dailyKontakion();
const oCome = selector('.o-come', "O come, let us worship God our King.<br />\
    O come, let us worship and fall down before Christ our King and God.<br />\
    O come, let us worship and fall down before Christ Himself, our King and God.");
const gloryBoth = selector('.glory-both', "Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen.");
const alleluia = selector('.alleluia', "Alleluia, alleluia, alleluia. Glory to Thee O God (x3)");
const mercyThree = selector('.mercy-3', "Lord, have mercy (x3)");
const glory = selector('.glory', "Glory to the Father, and to the Son, and to the Holy Spirit.");
const both = selector('.both', "Both now and ever, and unto the ages of ages. Amen.");
const trisagion = selector('.trisagion', "Holy God, Holy Mighty, Holy Immortal, have mercy on us (x3)\
    <p>Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen</p>\
    <p>O Most Holy Trinity, have mercy on us. O Lord, blot out our sins. O Master, pardon our iniquities. O Holy One, visit and heal our infirmities for Thy name's sake.</p>\
    <p>Lord, have mercy (x3)</p>\
    <p>Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen</p>\
    <p>Our Father, Who art in the heavens, hallowed by Thy name. Thy kingdom come, Thy will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us \
    our debts, as we forgive our debtors; and lead us not into temptation, but deliver us from the evil one.</p>\
    <p>Through the prayers of our Holy Fathers, O Lord Jesus Christ our God, have mercy on us. Amen.</p>");
const mercyFourty = selector('.mercy-40', "Lord, have mercy (x40)");
const hours = selector('.hours', "Thou who at all times and at every hour, in heaven and on earth, art worshipped and glorified, O Christ God, Who art long suffering, \
    plenteous in mercy, most compassionate, Who lovest the righteous and hast mercy on sinners, Who callest all to salvation through the promise of good things to come: \
    Receive, O Lord, our prayers at this hour, and guide our life toward Thy commandments. Sanctify our souls, make chaste our bodies, correct our thoughts, and deliver \
    us from every sorrow, evil, and pain. Compass us about with Thy holy angels that, guarded and guided by their array, we may attain to the unity of the faith and the \
    knowledge of Thine unapproachable glory; for blessed art Thou unto the ages of ages.");
const moreHonourable = selector('.more-honourable', "More honourable than the Cherubim, and beyond compare more glorious than the Seraphim, who without corruption gavest birth to God the Word,\
    the very Theotokos, thee do we magnify.");
const holyFathers = selector('.holy-fathers', "Through the prayers of our Holy Fathers, O Lord Jesus Christ our God, have mercy on us. Amen");
const heavenlyKing = selector('.heavenly-king', "O Heavenly King, Comforter, Spirit of Truth, Who art everywhere present and fillest all things, Treasury of good things and Giver of \
    life: Come and dwell in us, and cleanse us from all impurity, and save our souls, O Good One.")
const mercyTwelve = selector('.mercy-12', "Lord, have mercy (x12)")

