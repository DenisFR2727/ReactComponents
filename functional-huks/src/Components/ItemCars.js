import React from 'react';
import Button from './button/Button';
import './style.css';
const ItemCars = (props)=>{
    return (
        <div className="list_cars">
            {props.number}.
            {props.car.title}
            <p>Type:</p>
            <div>{props.car.type}</div>
            <p>Price:</p>
            <p>{props.car.price}</p>
           <Button onClick={()=>props.remove(props.car)}>Удалить</Button>
        </div>
    )
}
export default ItemCars 