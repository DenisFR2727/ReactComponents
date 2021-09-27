import React,{useState,useMemo,useEffect} from 'react'
import CarsList from './Components/CarsList';
import Forms from './Components/Forms';
import MyModal from './Components/MyModal/MyModal';
import CarsFilter from './Components/CarsFilter';
import Button from './Components/button/Button';
import axios from 'axios';
function App(props){

  useEffect(()=>{
    fetchPosts()
  },[])// пустой масив - колбек отработает один раз
const [cars,setCars] = useState([
      {
        id:1,
        title:'Nissan R35 GT-R',
        type:'Sport car',
        price: 110000
        },
        
        {
        id:2,
        title:'Audi RS',
        type:'Pas­sen­ger car',
        price: 100000
        },
        
        {
        id:3,
        title:'Ford GT',
        type:'Pas­sen­ger car',
        price: 50000
        }
])
// Состояние модалки
const [modal, setModal] = useState(false)

const [filter,setFilter] = useState({sort:'', query:''})
const sortedCar = useMemo(()=>{
           console.log('Функция отработала')
        if(filter.sort){
          return [...cars].sort((a,b)=>a[filter.sort] <b[filter.sort] ? -1 : 1)
      }
          return cars;
},[filter.sort,cars]) 
       // sortedAndSearchedCars передаем в <CarList /> Отсортирован и отфильтрован 
const sortedAndSearchedCars = useMemo(()=>{
          return sortedCar.filter(car=> car.title.toLowerCase().includes(filter.query.toLowerCase()))
},[filter.query,sortedCar])  /*масив зависимостей*/
    //Добавление авто 
    function createCar(newCar){
             setCars([...cars,newCar])
             setModal(false)
    }
    //Удаление авто из списка
    function removeCar(car){
             setCars(cars.filter(c=>c.id !==car.id))
    }
    // fetch axios
    async function fetchPosts(){
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
          setCars(response.data)
          console.log(response.data)
    }
  return (
    <div className="App">
       
      <Button onClick={fetchPosts}>GET POST</Button>
     
      <Button onClick={()=>setModal(true)} style={{width:'100px',height:'35px',margin:'20px'}}>
           Добавить авто
      </Button>
           <MyModal visible={modal} setVisible={setModal}  >
                 <Forms create={createCar}/>  {/*Форма внутри модального окна*/}
           </MyModal>
          
           <CarsFilter filter={filter} 
                       setFilter={setFilter} 
           />
         
               <CarsList remove={removeCar} cars={sortedAndSearchedCars}/>
                      
    </div>
  );
}
export default App;
