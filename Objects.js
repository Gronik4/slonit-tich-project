/**
 * метод, который на вход получает объект, а на выходе возвращает число, соответствующее сумме всех числовых полей.
 */
function OutSum(object) {
  let sum = 0;
  for(let key in object) {
    if(typeof object[key] === 'number') {
      sum += object[key];
    }
  }
  return sum;
}
const obj = {a: 1, b: 2, c: 3, sum: 10, mult: 20, d: '4', e: '5'};
console.log(OutSum(obj));
/**
 * Задача со звездочкой - то же самое. Но вместо просто числа с суммой полей метод возвращает массив с названиями полей, 
 * причем эти названия полей отсортированы по убыванию.
 */
function OutSortElements(object){
  let elements = [];
  for(let key in object) {
    if(typeof object[key] === 'number') {
      elements.push(key);
    }
  }
  elements.sort((a, b) => object[b] - object[a]);
  return elements;
}
console.log(OutSortElements(obj));
