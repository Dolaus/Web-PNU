function printInstruct() {
    console.log(
        "Instruction\n" +
        'triangle(7, "leg", 18, "hypotenuse");\n' +
        " Enter as in the sample above,  значення першого аргументу тип пешого аргументу\n" +
        " the value of the first argument is the type of the first argument\n" +
        " the value of the second argument is the type of the second argument\n" 
        
    );
}


function printTable() {
    console.log(
        "Table\n" +
        " Symbol          Represents                                           \n" +
        " leg             The leg of a triangle                                \n" +
        " hypotenuse      The hypotenuse of a triangle                         \n" +
        " adjacent angle  The angle between the hypotenuse and an adjacent leg \n" +
        " opposite angle  The angle between the hypotenuse and the opposite leg\n" +
        " angle           The acute angle of the triangle                      \n" 
    );
}


function triangle(value1, type1, value2, type2) {
    if (!value1 || !value2 || !type1 || !type2) {
        console.log("failed");
        console.log("pls input parametrs");
        return;
    } else if (value1 < 1 || value2 < 1 ) {
        console.log("failed");
        console.log("Zero or negative input");
        return;
    }
    if (type1 === "leg" && type2 === "leg") {
        let C = Math.sqrt(Math.pow(value1, 2) + Math.pow(value2, 2));

        if (value1 + value2 > C && value1 + C > value2 && value2 + C > value1) {
            console.log("a = " + value2 + "\n" + "b = " + value2 + "\n" + "c = " + C);
            let alpha = Math.atan(value1 / value2) / (Math.PI/180);
            let beta = Math.atan(value2 / value1) / (Math.PI/180);
            console.log(   "alpha = " + beta +"\n" + "beta = " + alpha);
            console.log("success");
            return;
        }
        console.log("failed");
        console.log("chek your params");
        return;
    } else if (
        (type1 === "leg" && type2 === "hypotenuse") ||
        (type2 === "leg" && type1 === "hypotenuse")
    ) {
        let B, C;
        if (type1 === "leg") {
            B = value1;
            C = value2;
        } else if (type2 === "leg") {
            C = value1;
            B = value2;
        } else {
            console.log("failed");
            return;
        }
        if (B > C) {
            console.log("Hypotenuse must be longer than the leg");
            console.log("failed");
            return;
        }
        let A = Math.sqrt(Math.pow(C, 2) - Math.pow(B, 2));
        if (B + C > A && B + A > C && C + A > B) {
            console.log("a = " + B + "\n" + "b = " + A + "\n" + "c = " + C);
            let alpha = Math.atan(A / B) / (Math.PI/180);
            let beta = Math.atan(B / A) / (Math.PI/180);
            console.log(   "alpha = " + beta +"\n" + "beta = " + alpha);
            console.log("success");
            return;
        }
        console.log("failed");
        console.log("chek your params");
        return;
    } else if (
        (type1 === "leg" && type2 === "adjacent angle") ||
        (type2 === "leg" && type1 === "adjacent angle")
    ) {
        let B, alpha;
        if (type1 === "leg") {
            B = value1;
            alpha = value2;
        } else if (type2 === "leg") {
            B = value2;
            alpha = value1;
        } else {
            console.log("failed");
            return;
        }
        if (alpha >= 90) {
            console.log("adjacent must be less 90");
            console.log("failed");
            return;
        }
        let C = B / Math.cos(alpha * (Math.PI/180));
        let A = B * Math.tan(alpha * (Math.PI/180));
        if (B + C > A && B + A > C && C + A > B) {
            console.log("a = " + B + "\n" + "b = " + A + "\n" + "c = " + C);
            let beta = 90 - alpha;
            console.log(   "alpha = " + beta +"\n" + "beta = " + alpha);
            console.log("success");
            return;
        }
        console.log("failed");
        console.log("chek your params");
        return;
    } else if (
        (type1 === "leg" && type2 === "opposite angle") ||
        (type2 === "leg" && type1 === "opposite angle")
    ) {
        let B, beta;
        if (type1 === "leg") {
            B = value1;
            beta = value2;
        } else if (type2 === "leg") {
            B = value2;
            beta = value1;
        } else {
            console.log("failed");
            return;
        }
        if (beta >= 90) {
            console.log("opposite must be less 90");
            console.log("failed");
            return;
        }
        let C = B / Math.sin(beta * (Math.PI/180));
        let A = Math.sqrt(C * C - B * B);
        if (B + C > A && B + A > C && C + A > B) {
            console.log("a = " + B + "\n" + "b = " + A + "\n" + "c = " + C);
            let alpha = 90 - beta;
            console.log(   "alpha = " + beta +"\n" + "beta = " + alpha);
            console.log("success");
            return;
        }
        console.log("failed");
        console.log("chek your params");
        return;
    } else if (
        (type1 === "angle" && type2 === "hypotenuse") ||
        (type2 === "angle" && type1 === "hypotenuse")
    ) {
        let C, beta;
        if (type1 === "angle") {
            beta = value1;
            C = value2;
        } else if (type2 === "angle") {
            beta = value2;
            C = value1;
        } else {
            console.log("failed");
            return;
        }
        if (beta >= 90) {
            console.log("angle must be less 90");
            console.log("failed");
            return;
        }
        let A = C * Math.sin(beta * (Math.PI/180));
        let B = C * Math.cos(beta * (Math.PI/180));
        if (B + C > A && B + A > C && C + A > B) {
            console.log("a = " + B + "\n" + "b = " + A + "\n" + "c = " + C);
            let alpha = 90 - beta;
            console.log(   "alpha = " + beta +"\n" + "beta = " + alpha);
            console.log("success");
            return;
        }
        console.log("failed");
        console.log("chek your params");
        return;
    }
    console.log("check my instructions");
    return;
}


function RunApp() {
  printTable();
  printInstruct();
}

RunApp();