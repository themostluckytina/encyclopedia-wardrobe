import { useState } from 'react';
import { dataHome } from './dataHome'



function Home(){

    const [clothes, setClothes] = useState(0);
    
    const {foto} = dataHome[clothes];
    
    const pushBack=()=>{
        setClothes((clothes =>{
            clothes--;
            if(clothes< 0){
                clothes =dataHome.length-1
            }
            return clothes
        }))
    }

    const pushNext=()=>{
        setClothes((clothes =>{
            clothes++;
            if(clothes > dataHome.length-1){
                clothes=0
            }
            return clothes
        }))
    }

    return( <div className="main">

        <div className="main">
            <h1>Энциклопедия</h1>
            <h2 className='our'> нашего гардероба</h2>
        </div>
        <div className="main">
            <img src={foto} width={300} height={400} alt='pic' />
        </div>
        <div>
        <button onClick={pushBack} className='next'>назад</button>
        <button onClick={pushNext} className='next'>вперед</button>
        </div>
       
       <div>
       <p class="end">© 2022 VP-dev Company, Inc. · Все права защищены.</p>
       <p className='plus'>Источник: https://obliqo.ru/</p>
       </div>
        </div>
    )
}
export default Home;