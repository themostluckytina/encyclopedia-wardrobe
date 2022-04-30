import { useState } from 'react';



function LogicTies({newTies}){

    const [showMore, setShowMore] = useState(false);

    return(<div className="products">

        {newTies.map((tie =>{
        const {id, kind, text, look} = tie;

    return( <div key={id}>

        <div className="product-card">
            <img src={look} width={300} height={200} alt='cloth' />
        </div> 
        <div className='box'>
            <h3 className='name'>{kind} </h3>
            <p className='description'>{showMore ? text : text.substring(0,50) + '...'} 
            <button className='hide' onClick={()=> setShowMore(!showMore)}>{showMore ? 'Скрыть' : 'Далее'}</button>
            </p>
        </div>

    </div>)
        }))}

<div>

</div>

    </div>
    )
}

export default LogicTies;