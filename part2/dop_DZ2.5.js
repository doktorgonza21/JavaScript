// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function palindrom(stroka) {
    var a = /[\W]/g                                                                                                                                          
    var lowReg = stroka.toLowerCase().replace(a, '')
    var obratka = lowReg.split('').reverse().join('') 
    return console.log(obratka === lowReg)
    
  }
  palindrom("abba, ABBA, Abba, aBBa, AbbA")