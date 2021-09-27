import React from 'react';
import MyInput from './MyInput/MyInput';
import Select from '../Components/select/Select'
const CarsFilter = ({filter,setFilter})=>{
    return(
        <div>
        <MyInput style={{margin:'0 15px'}}
                placeholder="Поиск по названию авто"
                value={filter.query}
                onChange={e=>setFilter({...filter,query:e.target.value})}
        />
        <Select defaultValue="Сортировка по"
                value={filter.sort}
                onChange={selectedSort=> setFilter({...filter,sort:selectedSort})}
                options={[
                  {value:'type', name:'По типу'},
                  {value:'price', name:'По цене'}
                ]}
        />  
        </div>
    )
}
export default CarsFilter;