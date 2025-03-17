/*ТЗ: 
Фильтрация книг по цене 
Дан массив книг (например, [{ title: "Книга 1", price: 300 }, { title: "Книга 2", price: 500 }, ...]). 
Напишите функцию, которая возвращает новый массив, содержащий только книги дешевле 400 рублей.
*/

// Вот решение с использованием метода массива filter:
function filterBooks(books) {
  return books.filter(book => book.price < 400);
}

// Пример использования с мок-массивом "books"
const books = [
  { title: "Книга 1", price: 300 },
  { title: "Книга 2", price: 500 },
  { title: "Книга 3", price: 399 },
  { title: "Книга 4", price: 400 }
];

console.log(filterBooks(books));
// Вывод:
// [
//   {title: "Книга 1", price: 300},
//   {title: "Книга 3", price: 399}
// ]