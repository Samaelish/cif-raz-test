document.addEventListener('DOMContentLoaded', () => {
  let bookCount = 0;
  const cartDiv = document.getElementById('cartItems');
  const addButton = document.getElementById('addButton');
  let bookList = null;

  addButton.addEventListener('click', () => {
    bookCount++;

    // Создаем список при первом клике
    if (!bookList) {
      bookList = document.createElement('ul');
      cartDiv.appendChild(bookList);
    }

    // Создаем новый элемент списка
    const newBook = document.createElement('li');
    newBook.textContent = `Книга ${bookCount}`;
    bookList.appendChild(newBook);
  });
});