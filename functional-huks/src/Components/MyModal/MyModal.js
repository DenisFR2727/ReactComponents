import React from'react';
import cl from './myModal.module.css'
const MyModal =({children,visible,setVisible})=>{

     const rootClasses =[cl.myModal] 

           if(visible){
                 rootClasses.push(cl.active)
           }

    return(
       //*Добавление двух класов с помощью join по пробелу
         <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>   
             <div className={cl.myModalContent} onClick={(e)=>e.stopPropagation()}> {/* e.stopPropagation() - при клике на контент модалки - модалка не закроется */}
                 {children}
             </div>

         </div>
    )
}
export default MyModal;