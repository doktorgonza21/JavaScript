// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, 
// которая и будет выводиться в консоль (как в условии смайлик), 
// а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function smile(sm, st) {
for (let a = 1, sd = ''; a <= st; a++) {
    sd += sm;
    console.log(sd);
  }
}

smile(':)', 10)