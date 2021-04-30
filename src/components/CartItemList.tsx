import React from 'react';
import { Button, Card, Col, Row } from 'reactstrap';
import {ICartItem} from '../interfaces/interfaces';

interface Props{
    cartItem:ICartItem;
    removeItem(itemNameToRemove:string):void;
}

const CartItemList=({cartItem,removeItem}:Props)=> {
    return (
        <Card className='p-1 my-1'>
            <Row className='ml-4 mr-1 my-2'>
            <Col xs={5} md={5}><h5>{cartItem.itemName}</h5></Col>
            <Col xs={5} md={5}><h5>{cartItem.itemQuantity}</h5></Col>            
            <Col xs={2} md={2}>
                <Button className="btn-danger" onClick={()=>{removeItem(cartItem.itemName)}}>Remove</Button>
                </Col>
            </Row>
        </Card>

    )
}

export default CartItemList
