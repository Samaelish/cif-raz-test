import React, { useState } from 'react'
import BookCard from './components/BookCard'
import Cart from './components/Cart'

const App = () => {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = book => {
    setCartItems([...cartItems, { ...book, id: Date.now() }])
  }

  const handleRemoveFromCart = bookId => {
    setCartItems(cartItems.filter(item => item.id !== bookId))
  }

  return (
    <div>
      <BookCard title='Властелин Колец' author='Джон Толкиен' price={29.99} onAddToCart={handleAddToCart} />
      <BookCard title='Михаил Булгаков' author='Мастер и Маргарита' price={39.99} onAddToCart={handleAddToCart} />

      <Cart items={cartItems} onRemoveItem={handleRemoveFromCart} />
    </div>
  )
}

export default App
