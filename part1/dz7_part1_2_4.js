// 3**:
// Преобразовать 2* таким образом, чтобы значение
// '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось,
// преобразовываясь в number

let age_2 = 18;

let age_3 = 60;

function yourAge(age_1) {
  
  const age = +age_1;
 

  if ((!age && typeof age_1 != "number" || age_1 === true) || age <= 0 || age >= 120) {
    return "Technical work.";
  }
  if (age_1 < age_2) {
    return `You don’t have access cause your age is ${age_1}, It’s less then ${age_2}.`;
  }
  if (age_1 >= age_2 && age_1 <= age_3) {
    return "Welcome  !";
  }
  return "Keep calm and look Culture channel.";
}

console.log(yourAge())
console.log(yourAge(''));
console.log(yourAge(0));
console.log(yourAge('0'));
console.log(yourAge(false));
console.log(yourAge(true));
console.log(yourAge(undefined));
console.log(yourAge('adsad'));
console.log(yourAge('!%&@'));
console.log(yourAge('12asd'));
console.log(yourAge(-1));
console.log(yourAge('-1'));
console.log(yourAge(1));
console.log(yourAge('1'));
console.log(yourAge(21));
console.log(yourAge('21'));
console.log(yourAge(60));
console.log(yourAge('60'));
console.log(yourAge(61));
console.log(yourAge('61'));
console.log(yourAge(121));
console.log(yourAge('121'));

