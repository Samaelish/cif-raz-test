import React from 'react'
import './BookCard.css'

const BookCard = ({
  title = 'лорем название',
  author = 'лорем автор',
  description = 'лорем описание',
  price = '333',
  onAddToCart,
}) => {
  return (
    <div className='book-card'>
      <h2 className='book-title'>{title}</h2>
      <h3 className='book-author'>{author}</h3>
      <p className='book-description'>{description}</p>
      <div className='book-footer'>
        <span className='book-price'>${price}</span>
        <button className='add-to-cart-btn' onClick={() => onAddToCart({ title, author, price })}>
          Добавить в корзину
        </button>
      </div>
    </div>
  )
}

export default BookCard
