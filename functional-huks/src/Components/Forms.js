import React,{useState} from 'react';
import Button from './button/Button';
import MyInput from './MyInput/MyInput';
const Forms = ({create})=>{
    const [car,setCar] = useState({title:'',type:'',price:''})

    function addNewCar(e){
           e.preventDefault();
           console.log(car)
        const newCar={
            ...car,
            id:Date.now()
        }
        create(newCar)
        setCar({title:'',type:'',price:''})
    }
    return (
         <form style={{display:'block',margin:'30px'}}>
             <div>
             <MyInput type="text"
                      placeholder="Название машины"
                      value={car.modelCars}
                      onChange={e=>setCar({...car,title:e.target.value})}
            />
            <MyInput type="text"
                      placeholder="Тип"
                      value={car.type}
                      onChange={e=>setCar({...car,type:e.target.value})}       
            />
             <MyInput type="text"
                       placeholder="Цена"
                       value={car.price}
                       onChange={e=>setCar({...car,price:e.target.value})}        
            />
             </div>
            
             <Button onClick={addNewCar} style={{width:'100px',height:'35px'}}>Добавить машину</Button>
         </form>
    )
}
export default Forms