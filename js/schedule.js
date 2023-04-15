var p0Schedule = [
    '<p class="my-0 fw-700">14:30</p>' +
    '<p class="my-0"><b>Team 102</b></p>',


    '<p class="my-0 fw-700">14:30</p>' +
    '<p class="my-0"><b>Team 380</b></p>',


    '<p class="my-0 fw-700">14:30</p>' +
    '<p class="my-0"><b>Team 917</b></p>',

    '<p class="my-0 fw-700">14:30</p>' +
    '<p class="my-0"><b>Team 999</b></p>',


    '<p class="my-0 fw-700">14:30</p>' +
    '<p class="my-0"><b>Team 586</b></p>',

    '<p class="my-0 fw-700">14:30</p>' +
    '<p class="my-0"><b>Team 990</b></p>'
];

var p1Schedule = [
    '<p class="my-0 fw-700">15:00</p>' +
    '<p class="my-0"><b>Team 009</b></p>',


    '<p class="my-0 fw-700">15:00</p>' +
    '<p class="my-0"><b>Team 258</b></p>',


    '<p class="my-0 fw-700">15:00</p>' +
    '<p class="my-0"><b>Team 755</b></p>',

    '<p class="my-0 fw-700">15:00</p>' +
    '<p class="my-0"><b>Team 328</b></p>',

    '<p class="my-0 fw-700">15:00</p>' +
    '<p class="my-0"><b>Team 858</b></p>',


    '<p class="my-0 fw-700">15:00</p>' +
    '<p class="my-0"><b>Team 201</b></p>'
];

var p2Schedule = [
    '<p class="my-0 fw-700">15:30</p>' +
    '<p class="my-0"><b>Team 634</b></p>',


    '<p class="my-0 fw-700">15:30</p>' +
    '<p class="my-0"><b>Team 118</b></p>',


    '<p class="my-0 fw-700">15:30</p>' +
    '<p class="my-0"><b>Team 487</b></p>',

    '<p class="my-0 fw-700">15:30</p>' +
    '<p class="my-0"><b>Team 267</b></p>',


    '<p class="my-0 fw-700">15:30</p>' +
    '<p class="my-0"><b>Team 773</b></p>',


    '<p class="my-0 fw-700">15:30</p>' +
    '<p class="my-0"><b>Team 737</b></p>'
];

var p3Schedule = [
    '<p class="my-0 fw-700">16:00</p>' +
    '<p class="my-0"><b>Team 220</b></p>',


    '<p class="my-0 fw-700">16:00</p>' +
    '<p class="my-0"><b>Team 236</b></p>',


    '<p class="my-0 fw-700">16:00</p>' +
    '<p class="my-0"><b>Team 506</b></p>',

    '<p class="my-0 fw-700">16:00</p>' +
    '<p class="my-0"><b>Team 105</b></p>',

    '<p class="my-0 fw-700">16:00</p>' +
    '<p class="my-0"><b>Team 167</b></p>',


    '<p class="my-0 fw-700">16:00</p>' +
    '<p class="my-0"><b>Team 606 </b></p>'
];

// total 24
var hkbcolFinalists = [
    // 'magic-chain',
    // 'magic-chain',
    // 'magic-chain',
    // 'magic-chain',
    // 'magic-chain'
]


var p0 = document.getElementById('p0');
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');

for (let i = 0; i < p0Schedule.length; i++) {
    p0.innerHTML += (
        '<div class="w-20 px-0" id="" style="cursor: pointer">' +
        '<div class="cell" onclick="showWeb(0)">' +
        p0Schedule[i] +
        '</div>' +
        '</div>'
    );

    p1.innerHTML += (
        '<div class="w-20 px-0" id="" style="cursor: pointer">' +
        '<div class="cell" onclick="showWeb(0)">' +
        p1Schedule[i] +
        '</div>' +
        '</div>'
    );

    p2.innerHTML += (
        '<div class="w-20 px-0" id="" style="cursor: pointer">' +
        '<div class="cell" onclick="showWeb(0)">' +
        p2Schedule[i] +
        '</div>' +
        '</div>'
    );

    p3.innerHTML += (
        '<div class="w-20 px-0" id="" style="cursor: pointer">' +
        '<div class="cell" onclick="showWeb(0)">' +
        p3Schedule[i] +
        '</div>' +
        '</div>'
    );

}

function showWeb(index) {
    // window.open('https://hk.ibcol.org/2020-HKBCOL-Finalists/' + hkbcolFinalists[index] + '.html');
}


var openingLeft = [
    '102',
    '009',
    '634',
    '220',
    '380',
    '258',
    '118',
    '236',
    '917',
    '755',
    '487',
    '506'
];

var openingRight = [
    '999',
    '328',
    '737',
    '105',
    '586',
    '858',
    '773',
    '167',
    '990',
    '201',
    '267',
    '606'
];

var opTime = [
    '10:00',
    '10:15',
    '10:30',
    '10:45',
    '11:00',
    '11:15',
    '11:30',
    '11:45',
    '12:00',
    '12:15',
    '12:30',
    '12:45'
]

var op = document.getElementById('Opening');

for (let i = 0; i < openingLeft.length; i++) {
    op.innerHTML += (
        '<div class="w-50 px-0" id="" style="cursor: pointer">' +
        '<div class="cell2" onclick="showWeb(0)">' +
        '<p class="my-0 fw-700">' + opTime[i] + '</p>' +
        '<p class="my-0"><b>Team ' + openingLeft[i] + '</b></p>' +
        '</div>' +
        '</div>' +

        '<div class="w-50 px-0" id="" style="cursor: pointer">' +
        '<div class="cell2" onclick="showWeb(0)">' +
        '<p class="my-0 fw-700">' + opTime[i] + '</p>' +
        '<p class="my-0"><b>Team ' + openingRight[i] + '</b></p>' +
        '</div>' +
        '</div>'
    );
}

var pitchDiv = document.getElementById('pitchDiv');
var expoDiv = document.getElementById('expoDiv');

function showPitch() {
    if (pitchDiv.style.display === "none") {
        pitchDiv.style.display = "block";
    } else {
        pitchDiv.style.display = "none";
    }
}


function showExpo() {

    if (expoDiv.style.display === "none") {
        expoDiv.style.display = "block";

    } else {
        expoDiv.style.display = "none";
    }

}