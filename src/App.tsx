import React, { ChangeEvent, FC, useState } from 'react'
import { Button, Card, Col, Input, Label, Row } from 'reactstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartItemList from './components/CartItemList'
import { ICartItem } from './interfaces/interfaces'

const App: FC = () => {
  const [item, setItem] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(0)
  const [cart, setCart] = useState<ICartItem[]>([])
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'item') setItem(event.target.value)
    else setQuantity(Number(event.target.value))
  }
  const addToCart = (): void => {
    const newItem = {
      itemName: item,
      itemQuantity: quantity
    }
    setCart([...cart, newItem])
    console.log('cart', cart)
    setItem('')
    setQuantity(0)
  }

  const removeItem = (itemNameToRemove: string): void => {
    setCart(
      cart.filter(item => {
        return item.itemName !== itemNameToRemove
      })
    )
  }

  return (
    <div className='App my-4 container'>
      <h3 className='text-center'>Add Item To Cart</h3>
      <Card className='my-4 p-3'>
        <Row>
          <Col md={8} xs={12}>
            <Label for="item">Item Name: </Label>
            <Input
              type='text'
              value={item}
              name='item'
              className='Item'
              placeholder='Item Name'
              onChange={handleChange}
            />
          </Col>
          <Col md={4} xs={12}>
          <Label for="quantiity">Quantity:</Label>
            <Input
              type='number'
              value={quantity}
              name='quantity'
              className='Quantity'
              placeholder='Item Quantity'
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={12}>
            <Button
              style={{ width: '100%' }}
              onClick={addToCart}
              className='my-3 btn-info'
            >
              {' '}
              Add To Cart
            </Button>
          </Col>
        </Row>
      </Card>
      <div className='my-4'>
        <h3 className='text-center'>Cart</h3>
        {cart.map((cartItem: ICartItem, key: number) => {
          return (
            <CartItemList
              key={key}
              cartItem={cartItem}
              removeItem={removeItem}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
