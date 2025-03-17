import React from 'react'
import './Cart.css'

const Cart = ({ items, onRemoveItem }) => {
  return (
    <div className='cart-container'>
      <h2 className='cart-title'>Корзина ({items.length})</h2>
      {items.length === 0 ? (
        <p className='cart-empty-message'>Ваша корзина пуста</p>
      ) : (
        <ul className='cart-list'>
          {items.map(item => (
            // Не понял по тз, должна ли книга удаляться по клику "на неё" или по клику на кнопку внутри неё. В ТЗ кнопки нет, но это странный вариант. Поэтому добавил кнопку и сделал оба варианта.
            <div key={item.id} className='cart-item' onClick={() => onRemoveItem(item.id)}>
              <div>
                <h4>{item.title}</h4>
                <p>Author: {item.author}</p>
                <p>Price: ${item.price}</p>
              </div>
              <button className='cart-delete-btn' onClick={() => onRemoveItem(item.id)}>
                x
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart
