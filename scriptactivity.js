//add cart
let count = 0;
let cart = {};

if (localStorage.getItem("count")) {
    count = parseInt(localStorage.getItem("count"));
}

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

updateCart();

let btns = document.querySelectorAll(".addCart button");

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.addEventListener("click", add);
}

function add(event) {
    let id = event.target.dataset.id;

if (id in cart) {
    cart[id].qty++;
} else {
    let cartItem = {
        qty: 1
    };
    cart[id] = cartItem
}

    count++;

    console.log(cart);

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    document.getElementById("count").textContent = count;
    localStorage.setItem("count", count);
}



//location

const a = document.getElementById("loc");

function getLocation () {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        a.innerHtml = "Geolocation not allowed"
    }

}

function showPosition(position){
    a.innerHtml = "Latitude:" + position.coords.latitude + "<br> Longitude:" + position.coords.longitude;
}
//uppercase
let firstTxt = "uppercase"
let result = firstTxt.toUpperCase();

document.getElementById('upCase').innerHTML = result;

//
function calc() {
    const x = parseInt(document.getElementById("first").value);
    const y = parseInt(document.getElementById("second").value);
    const z = x+y;

    if (z % 2 == 0 ) {
        document.getElementById("ans1").innerHTML = "Answer: " + z;
        document.getElementById("ans2").innerHTML = "Answer is even";
    }
    else if (z % 3 == 0) {
        document.getElementById("ans1").innerHTML = "Answer: " + z;
        document.getElementById("ans2").innerHTML = "Answer is odd";
        return false;
    }
}

//
let lowTxt = "LOWERCASE"
let lowResult = lowTxt.toLowerCase();

document.getElementById('lowCase').innerHTML = lowResult;

//
const number= prompt("enter a number: ");
//check if number is greater than 0
if (number > 0 ) {
    document.getElementById('positive').innerHTML = "The number is positive";
}

//check if the number is 0
else if (number == 0) {
    document.getElementById('integers').innerHTML = "The number is zero";
}
