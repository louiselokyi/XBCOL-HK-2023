var p0Time = [
    '08:30',
    '1',
    '1',
    '2',
    '12',
    '123',
    '4',
    '4',
    '4',
    '4'
]

var p0Schedule = [
    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12 ">Canada</p>',

    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12 ">Canada</p>',


    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12 ">Canada</p>',

    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12 ">Canada</p>',


    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12 ">Canada</p>',


    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12 ">Canada</p>',


    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12 ">Canada</p>',


    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12 ">Canada</p>',


    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12 ">Canada</p>',


    '<p class="my-0"><b>Team NW-A1</b></p>' +
    '<p class="my-0 fs-12 ">Canada</p>'
];

var p0Flat = [
    'pl',
    'pl',
    'pl',
    'pl',
    'pl',
    'pl',
    'pl',
    'pl',
    'pl',
    'pl'
]

var p01 = document.getElementById('p01');
var p02 = document.getElementById('p02');

for (let i = 0; i < p0Schedule.length; i++) {
    if (i >= 5) {
        p02.innerHTML += (
            '<div class="w-20 px-0" id="p01">' +
            '<div class="cell">' +
            '<span class="flag-icon flag-icon-' + p0Flat[i] + '"></span>' +
            '<p class="my-0 fw-700">' + p0Time[i] + '</p>' +
            p0Schedule[i] +
            '</div>' +
            '</div>'
        );
    } else {
        p01.innerHTML += (
            '<div class="w-20 px-0" id="p01">' +
            '<div class="cell">' +
            '<span class="flag-icon flag-icon-' + p0Flat[i] + '"></span>' +
            '<p class="my-0 fw-700">' + p0Time[i] + '</p>' +
            p0Schedule[i] +
            '</div>' +
            '</div>'
        );
    }

}