'use strict';

// Задаем недели на русском и английском
const ruWeek = "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье";
const enWeek = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
const lang = "ru";

// выводим неделю использовуя IF
if (lang === "ru") {
    console.log(ruWeek);
} else if (lang === "en") {
    console.log(enWeek);
} else {
    console.log("язык не опознан");
}

//Выводим неделю используя switch
switch (lang) {
    case "ru":
        console.log(ruWeek);
        break;
    case "en":
        console.log(enWeek);
        break;
    default:
        console.log("язык не опознан");
}

// Выводим неделю используя многомерный массив
const langArray = {
    ru: [ruWeek],
    en: [enWeek]
};
console.log(langArray[lang]);

// Выводим обращение к сотруднику используя тернарные операторы
let namePerson = "";
console.log(namePerson === "Артем" ? "директор" :
    namePerson === "Александр" ? "преподаватель" : "студент");