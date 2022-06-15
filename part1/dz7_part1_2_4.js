// 3**:
// Преобразовать 2* таким образом, чтобы значение
// '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось,
// преобразовываясь в number

let age_2 = 18;

let age_3 = 60;

function yourAge(age_1) {
  
  const age = +age_1;

  if ((!age && typeof age_1 != "number") || age <= 0 || age >= 120) {
    return "Technical work.";
  }
  if (age_1 < age_2) {
    return `You don’t have access cause your age is ${age_1}, It’s less then ${age_2}.`;
  }
  if (age_1 >= age_2 && age_1 < age_3) {
    return "Welcome  !";
  }
  return "Keep calm and look Culture channel.";
}

console.log(yourAge("1"));
