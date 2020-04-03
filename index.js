const factorial = (value) => {
    if (value === 0 || value === 1)
        return 1;

    for (let num = value - 1; num >= 1; num--) {
        value *= num;
    }
    return value;
}

const reverse = (str) => {
    return str.split("").reverse().join("");
}

let inputArray = ["nasi", "goreng", "bakar"];

const arrayReverse = (inputArray) => {
    let revArray = inputArray.reverse();
    return revArray;
}

const gradeNilai = (nilai) => {
    if (nilai <= 60 && nilai >= 0) {
        console.log("Grade : F");
    } else if (nilai <= 70 && nilai >=61) {
        console.log("Grade : D");
    } else if (nilai <= 80 && nilai >=71) {
        console.log("Grade : C");
    } else if (nilai <= 90 && nilai >=81) {
        console.log("Grade : B");
    } else if (nilai <= 100 &&  nilai >=91) {
        console.log("Grade : A");
    }
}

