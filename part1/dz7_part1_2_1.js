// Вам нужно вывести в консоль числа от 1 до 100. 
//       Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
//       Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
//       Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”. 
//       // Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.


let x = 100;

for (x = 1; x <= 100; x++) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log(`Число ${x} делится без остатка на 3 и на 5!`);
  } else if (x % 3 == 0) {
    console.log(`Число ${x} делится без остатка на 3!`);
  } else if (x % 5 == 0) {
    console.log(`Число ${x} делится без остатка на 5!`);
  } else {
    console.log(x);
  }
}
