const calc = (a,b,p) => {
    if (!a || !b || !p) {
        return "please provide all params";
    } 

    switch (p) {
        case '+': {
            return (a + b);
            break;
        }
        case '-': {
            return (a - b);
            break;
        }
        case '*': {
            return (a * b);
            break;
        }
        case '/': {
            return (a / b);
            break;
        }
        default : {
            return null;
        }
    }
}

exports.calc = calc;