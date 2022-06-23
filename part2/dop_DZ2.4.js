// // 3**.  Написать функцию, которая принимает на вход слово.
// Задача функции посчитать и вывести в консоль, сколько в слове гласных,
// и сколько согласных букв.
// // e.g. function getWordStructure(word)
// // В консоли:
// // Слово (word) состоит из  (число) гласных и (число) согласных букв

// // Проверки: 'case', 'Case', 'Check-list'

function bukCount(stroka) {
  let vowel = "aeiouAEIOU";
  let consonant = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let vow = 0;
  let cons = 0;

  for (let a = 0; a < stroka.length; a++) {
    for (let b = 0; b < vowel.length; b++) {
      if (stroka[a] == vowel[b]) {
        vow++;
      }
    }
    for (let c = 0; c < consonant.length; c++) {
      if (stroka[a] == consonant[c]) {
        cons++;
      }
    }
  }
  console.log(`Слово ${stroka} состоит из ${vow} гласных и ${cons} согласных букв`);
}

bukCount("Aa-CC-co");
