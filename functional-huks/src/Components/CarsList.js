import React from 'react';
import ItemCars from './ItemCars';
import '../App.css'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
const CarsList = ({cars,remove})=>{

    if(!cars.length){
        return(
            <div style={{textAlign:"center"}}>Машин больше нет!</div>
        )
    }
    return(
        <div>
            <h1 style={{textAlign:'center'}}>Список Автомобилей</h1>
            <TransitionGroup> {/*Анимация удаления и добавления */}
                {cars.map((car,index)=>{
                   return <CSSTransition
                            key={car.id}
                            timeout={500}
                            classNames="car"
                     >
                       <ItemCars remove={remove}  car={car} number={index+1}/>
                    </CSSTransition>
                })}
            </TransitionGroup>
        </div>
    )
}


export default CarsList