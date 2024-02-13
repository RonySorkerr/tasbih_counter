const subhanallaBtn = document.getElementById('Subhanallah_Counter');

const subhanallahCountDisplay = document.getElementById('counting_items_sbhn');

const subhanallaResetBtn = document.getElementById('startOver');

// how many times the user want to read
const inputValue = document.getElementById('inputValueSubhanallah');


const alhamdulillahBtn = document.getElementById('alhamdulillah_count');


const alhamdulillahCountDisplay = document.getElementById('counting_items_alhm');


const allahuakbarBtn = document.getElementById('count_allahuakbar');

const allahuakbarCountDisplay = document.getElementById('counting_items_allahuakbar');

let subhanallaCountValue = 0;
let alhamdulillahCountvalue = 0;
let allahuakbarCountValue = 0;

let totalCount = subhanallaCountValue + alhamdulillahCountvalue + allahuakbarCountValue;

// document.getElementById('totalCounter').innerText = totalCount;

const totalValue= document.getElementById('')
subhanallaBtn.addEventListener('click', function () {
    subhanallaCountValue += 1;
    subhanallahCountDisplay.innerText = subhanallaCountValue;
    totalCount.innerText = subhanallaCountValue;
})

subhanallaResetBtn.addEventListener('click', function () {
    subhanallaCountValue = 0;
    subhanallahCountDisplay.innerText = subhanallaCountValue;
})



alhamdulillahBtn.addEventListener('click', function () {
    alhamdulillahCountvalue += 1;
    alhamdulillahCountDisplay.innerText = alhamdulillahCountvalue;
    totalCount.innerText = alhamdulillahCountvalue;
})

allahuakbarBtn.addEventListener('click', function () {
    allahuakbarCountValue += 1;
    allahuakbarCountDisplay.innerText = allahuakbarCountValue;
})

totalCount = subhanallaCountValue + alhamdulillahCountvalue + allahuakbarCountValue;