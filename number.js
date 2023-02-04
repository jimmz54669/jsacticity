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