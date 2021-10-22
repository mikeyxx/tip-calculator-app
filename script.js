document.querySelector('.reset-btn').style.textTransform = "uppercase";
const bill = document.querySelector('.bill-input');
const people = document.querySelector('.people-input');
const btn5 = document.querySelector('.five-percent');
const btn10 = document.querySelector('.ten-percent');
const btn15 = document.querySelector('.fifteen-percent');
const btn25 = document.querySelector('.twenty-five-percent');
const btn50 = document.querySelector('.fifty-percent');
const custom = document.querySelector('.custom-btn');

const person = document.querySelector('.tip-person');
const T_people = document.querySelector('.tip-total');
const peopleContainer = document.querySelector('.people-wrap');
const inputContainer = document.querySelector('.input-wrap');

const reset = document.querySelector('.reset-btn');

let billValue = 0;
let billAmount = function() {
    bill.addEventListener('keyup', function() {
        billValue = bill.value;
        return billValue
    })
}
billValue = billAmount();

let peopleValue = 0;
let peopleAmount = function() {
    people.addEventListener('keyup', function() {
        peopleValue = people.value;
        return peopleValue
    })
}
peopleValue = peopleAmount();


let tipAmount = 0;
let totalPerson = 0;

function calculateTip(value) {
    if (!peopleValue) {
        peopleContainer.classList.add('invalid');
    } else {
        peopleContainer.classList.remove('invalid');
    }

    tipAmount = (billValue * value) / peopleValue;
    tipAmount = Math.round(tipAmount)
    // console.log(tipAmount);
    person.textContent = `$${tipAmount}`;

    totalPerson = (billValue / peopleValue) + tipAmount;
    totalPerson = Math.round(totalPerson);
    T_people.textContent = `$${totalPerson}`;
}

btn5.addEventListener('click', () => {
        calculateTip(0.05);
    });
btn10.addEventListener('click', () => {
        calculateTip(0.1);
    });
btn15.addEventListener('click', () => {
        calculateTip(0.15);
    });
btn25.addEventListener('click', () => {
        calculateTip(0.25);
    });
btn50.addEventListener('click', () => {
        calculateTip(0.5);
    });

let customValue = 0;
custom.addEventListener('keyup', function() {
    customValue = custom.value;
    calculateTip(customValue / 100);
})


reset.addEventListener('click', () => {
    person.textContent = `$0.00`;
    T_people.textContent = `$0.00`;
    bill.value = "";
    people.value = "";
    custom.value = "";
    peopleContainer.classList.remove('invalid');
});


