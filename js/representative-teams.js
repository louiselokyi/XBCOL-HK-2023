// var uniRowLeft = [
//     '102',
//     '009',
//     '634',
//     '220',
//     '380',
//     '258'
// ];



// var uniRowRight = [
//     '102',
//     '009',
//     '634',
//     '220',
//     '380',
//     '258'
// ];


var teamNameRowLeft = [
    'Ascension',
    'Blockio',
    'i-Landy',
    'Microcent',
    'Beacon Blockchain Group',
    'TWOS '
];

var pjNameIdForRowLeft = [
    'Blockchain Technology for Aviation Inventory Management',
    'Ukwazi',
    'i-Landy',
    'Microcent',
    'Beacon Blockchain Group',
    'Optimise Payment Practice in HK Construction Industry by Blockchain Technology'
];

var imgLeft = [
    'polyu.png',
    'cityu.png',
    'cityu.png',
    'cityu.png',
    'hku.png',
    'polyu.png'

];

var teamNameRowRight = [
    'Blockchain Health Credentials',
    'Fintech Passionate',
    'ILBC',
    'BCrew',
    'The Spearheads',
    'WM'
];

var pjNameForRowRight = [
    'Blockchain Health Credentials',
    'SmartLending',
    'TrustLand',
    'BCred: A Blockchain Solution for Academic Credentials',
    'Spearchain',
    'Blockchain-based Organizational Whistleblowing System'
];

var imgRight = [
    'cityu.png',
    'hku.png',
    'cuhk.png',
    'cuhk.png',
    'hkust.png',
    'polyu.png'
];

var repTeams = document.getElementById('repTeams');

for (let i = 0; i < pjNameIdForRowLeft.length; i++) {
    repTeams.innerHTML += (
        '<div class="row mt-4" >' +
        '<div class="col-md-6 col-sm-12">' +
        '<div class="row  justify-content-sm-center justify-content-xs-center ">' +
        '<div class="col-4 my-auto right">' +
        '<img src="./images/2020-HKBCOL-Finalists/uni/' + imgLeft[i] + '" class="">' +
        '</div>' +
        '<div class="col-8 my-auto">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowLeft[i] + '</b></p>' +
        // '<p class="mx-0 my-0 fs-14 textBlack w-100">  ' + pjNameIdForRowLeft[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">' + uniRowLeft[i] + '</p>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '<div class="col-md-6 col-sm-12">' +
        '<div class="row  justify-content-sm-center justify-content-xs-center">' +
        '<div class=" col-4 my-auto right">' +
        '<img src="./images/2020-HKBCOL-Finalists/uni/' + imgRight[i] + '" class="">' +
        '</div>' +
        '<div class="col-8 my-auto">' +
        '<p class="mx-0 my-0 fs-14 textBlack line-h-1 w-100"><b>' + teamNameRowRight[i] + '</b></p>' +
        // '<p class="mx-0 my-0 fs-14 textBlack w-100">  ' + pjNameForRowRight[i] + '</p>' +
        // '<p class="mx-0 my-0 fs-12 textBlack w-100">' + uniRowRight[i] + '</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
}