let lastExpr = "";
const opers = ["+", "-", "*", "/", ""];

function addZero() {
    document.getElementById("res").innerHTML += "0";
    lastExpr = "0";
}

function addOne() {
    document.getElementById("res").innerHTML += "1";
    lastExpr = "1";
}

function clearAll() {
    document.getElementById("res").innerHTML = "";
    lastExpr = "";
}

function addPlus() {
    document.getElementById("res").innerHTML += opers.includes(lastExpr) ? "" : "+";
    lastExpr = "+";
}

function addMinus() {
    document.getElementById("res").innerHTML += opers.includes(lastExpr) ? "" : "-";
    lastExpr = "-";
}

function addMul() {
    document.getElementById("res").innerHTML += opers.includes(lastExpr) ? "" : "*";
    lastExpr = "*";
}

function addDiv() {
    document.getElementById("res").innerHTML += opers.includes(lastExpr) ? "" : "/";
    lastExpr = "/";
}

function calc() {
    if (opers.includes(lastExpr) || !document.getElementById("res").innerHTML.match(/[+|\-|*|\/]+/g)) {
        return;
    }
    let expr = document.getElementById("res").innerHTML;
    expr = expr.replace(/(\d+)/g, el => parseInt(el, 2));
    document.getElementById("res").innerHTML = eval(expr).toString(2);
}