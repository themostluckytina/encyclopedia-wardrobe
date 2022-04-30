
import { useState } from 'react';




function LogicPants({ newPants}){

    const [ showMore, setShowMore] = useState(false);

    return (<div className="products">

        { newPants.map((apple =>{
            const{id, call, words, toSee} = apple;

    return(<div key={id}>

        <div className="product-card">
            <img src={toSee} width={300} height={200} alt='cloth' />
        </div> 
        <div className='box'>
            <h3 className='name'>{call} </h3>
            <p className='description'>{showMore ? words : words.substring(0, 50) + '....'}
            <button className='hide' onClick={()=> setShowMore(!showMore)}>{showMore ? 'Скрыть' : 'Далее'}</button>
            </p>
        </div>
        </div>)
        }))}
    </div>)
}

export default LogicPants;
