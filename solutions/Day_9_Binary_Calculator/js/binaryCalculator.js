let lastExpr = "";
const opers = ["+", "-", "*", "/", ""];
let res = document.getElementById("res");

function calc(value) {
    switch (value) {
        case '0':
            res.innerHTML += "0";
            lastExpr = "0";
            break;
        case '1':
            res.innerHTML += "1";
            lastExpr = "1";
            break;
        case 'c':
            res.innerHTML = "";
            lastExpr = "";
            break;
        case '+':
            res.innerHTML += opers.includes(lastExpr) ? "" : "+";
            lastExpr = "+";
            break;
        case '-':
            res.innerHTML += opers.includes(lastExpr) ? "" : "-";
            lastExpr = "-";
            break;
        case '*':
            res.innerHTML += opers.includes(lastExpr) ? "" : "*";
            lastExpr = "*";
            break;
        case '/':
            res.innerHTML += opers.includes(lastExpr) ? "" : "/";
            lastExpr = "/";
            break;
        case 'o':
            if (opers.includes(lastExpr) || !res.innerHTML.match(/[+|\-|*|\/]+/g)) {
                return;
            }
            let expr = res.innerHTML;
            expr = expr.replace(/(\d+)/g, el => parseInt(el, 2));
            res.innerHTML = eval(expr).toString(2);
    }
}