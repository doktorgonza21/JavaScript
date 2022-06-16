// // 2*:
// // Преобразовать задание 1* таким образом, чтобы первым делом в
//    функции проверялся тип данных. И если он не Number - кидалась ошибка.


let age_2 = 18;

let age_3 = 60;

function yourAge(age_1) {
  

  if (typeof age_1 != 'number' || age_1 <=0 || age_1 >=120) {
    return console.log('Technical work.');
  }
  if (age_1 < age_2) {
    return console.log(`You don’t have access cause your age is ${age_1}, It’s less then ${age_2}.`);
  }
  if (age_1 >= age_2 && age_1 <= age_3) {
    return console.log('Welcome  !');
  }
  if (age_1 > age_3) {
    return console.log('Keep calm and look Culture channel.');
  }
}

yourAge()
yourAge('');
yourAge(0);
yourAge('0');
yourAge(false);
yourAge(true);
yourAge(undefined);
yourAge('adsad');
yourAge('!%&@');
yourAge('12asd')
yourAge(-1);
yourAge('-1');
yourAge(1);
yourAge('1');
yourAge(21);
yourAge('21');
yourAge(60);
yourAge('60');
yourAge(61);
yourAge('61');
yourAge(121);
yourAge('121');
