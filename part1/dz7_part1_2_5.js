// 4***:
// Преобразовать задание 3* таким образом, 
// чтобы возраст вводится используя функцию 
// prompt в привязанной верстке

let age_2 = 18;

let age_3 = 60;

const age_1 = prompt("Type your age:");

yourAge(age_1);

function yourAge(age_1) {
    
  const age = +age_1;
   
  if (!age && typeof age_1 != 'number' || age <=0 || age >=120) {
    return alert('Technical work.');
  }
  if (age_1 < age_2) {
    return alert(`You don’t have access cause your age is ${age_1}, It’s less then ${age_2}.`);
  }
  if (age_1 >= age_2 && age_1 < age_3) {
    return alert('Welcome  !');
  }
  if (age_1 > age_3) {
    return alert('Keep calm and look Culture channel.');
  }
  return alert('Technical work.'); 
}

