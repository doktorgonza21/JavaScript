// 4***:
// Преобразовать задание 3* таким образом, 
// чтобы возраст вводится используя функцию 
// prompt в привязанной верстке.
// Сделал с формочкой ввода и кнопкой "submit"

let age_2 = 18;

let age_3 = 60;

document.querySelector("#bt1").onclick = yourAge;

function yourAge() {
    
  const age = Number(document.querySelector("#age5").value);
   
  if (!age && typeof document.querySelector("#age5").value != 'number' || age <=0 || age >=120) {
    return alert('Technical work.');
  }
  if (age < age_2) {
    return alert(`You don’t have access cause your age is ${age}, It’s less then ${age_2}.`);
  }
  if (age >= age_2 && age < age_3) {
    return alert('Welcome  !');
  }
  if (age > age_3) {
    return alert('Keep calm and look Culture channel.');
  }
  return alert('Technical work.'); 
}

