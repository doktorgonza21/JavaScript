// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) { Ваши преобразования }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61


let age_2 = 18;

let age_3 = 60;

function yourAge(age_1) {
    if (age_1 < age_2) {
    return `You don’t have access cause your age is ${age_1}, It’s less then ${age_2}.`
    } 
    if (age_1 >= age_2 && age_1 < age_3) {
    return 'Welcome  !'
    }
    if (age_1 > age_3) {
    return 'Keep calm and look Culture channel.'
    }
    return 'Technical work.'
    };

console.log(yourAge());
console.log(yourAge(12));
console.log(yourAge(23));
console.log(yourAge(61));
console.log(yourAge('asdad'));
