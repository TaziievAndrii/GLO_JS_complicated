const num = 266219;
let arrNum = num.toString().split("").reduce((x, y) => x * y);
let degree = arrNum ** 3;

let lang = "ru";

if (lang === "ru") {
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else if (lang === "en") {
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
} else {
    console.log("язык не опознан");
}

switch (lang) {
    case "ru":
        console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
        break;
    case "en":
        console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
        break;
    default:
        console.log("язык не опознан");
}

const langArray = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(langArray[lang]);

let namePerson = "Артем";
console.log(namePerson === "Артем" ? "директор" :
    namePerson === "Александр" ? "преподаватель" : "студент");


console.log("[arrNum]", arrNum);
console.log("[degree]", degree);
console.log("[degree]", degree.toString().slice(0, 2));