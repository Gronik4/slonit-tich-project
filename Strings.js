/**
 * Реализовать функцию, чтобы наша строка начиналась с большой буквы, независимо от того, что ввел пользователь.
 */
function lineCapitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const str1 = "hello world!";
const str2 = "Получить символ, который занимает: указанную позицию";
console.log(lineCapitalize(str1));
console.log(lineCapitalize(str2));
/**
 * Функция, которая возвращает, по необходимости укороченную строку, в конце которой стоит троеточие. Кроме того,
 *  строка не должна обрезаться посредине слова. Обрезаем строку по пробелу или по символу знака препинания (,.!?:;)
 */
function stringClipping(str, number) {
  let shortString;
  let index = 0;
  const stop = ",.;:?!-";
  if (str.length > number) {
    for (let i = number; i < str.length; i++) {
        if (str[i] === " ") {
          index = i;
          break;
        } else {
          for (let j = 0; j < stop.length; j++) {
            if (str[i] === stop[j]) {
              index = i;
              break;
            }
          }
        }
      }
    shortString = str.slice(0, index) + "...";
  } else {shortString = str;}
  return shortString;
}

console.log(stringClipping(str2, 30));
/**
 * Функция на вход получает 2 строки, а на выходе возвращает true/false в зависимости от того, является хотя бы одна из строк 
 * (не важно какая) подстрокой другой строки. Если да, то возвращается true. В противном случае - false.
 */
function checkingSubstring(str1, str2) {
  if(str1.includes(str2) || str2.includes(str1)) {return true;} else {return false;}
}

const string2 = "Получить символ, который занимает: указанную позицию";
const string1 = "Получить символ,";
console.log(checkingSubstring(string1, string2));
