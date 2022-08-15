window.onload = () => {
    let button = document.querySelector("#button");
    
    button.addEventListener("click", calculate);
};

function calculate() {

    let ans;

    let N1 = parseInt(document
        .querySelector("#n1").value);

    let N2 = parseInt(document
        .querySelector("#n2").value);

    let operator = (document
        .querySelector("#operator").value);

    if (N1 == "" || isNaN(N1))
        alert("Invalid");

    else if (N2 === "" || isNaN(N2))
        alert("Invalid");

    else {

        if (operator == '+') {
            alert(N1 + N2);
        }
        else if (operator == '-') {
            alert(N1 - N2);
        }
        else if (operator == '*') {
            alert(N1 * N2);
        }
        else {
            alert(N1 / N2);
        }

    }
}