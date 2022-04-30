import { useState } from 'react';


function LogicShoes({formulaShoes}){

    const [showMore, setShowMore] = useState(false);
    
    return(<div className="products">

        {formulaShoes.map((thing =>{
        
        const {id, sort, view, picture} = thing;

    return( <div key={id}>

        <div className="product-card">
            <img src={picture} width={300} height={200} alt='cloth' />
        </div>
        <div className='box'>
            <h3 className='name'>{sort} </h3>
            <p className='description'>{showMore ? view : view.substring(0,50) + '.....'} 
            <button className='hide' onClick={()=> setShowMore(!showMore)}>{showMore ? 'Скрыть' : 'Далее'}</button>
            </p>
        </div>

    </div>

            )
        }))}

    </div>
    )
}
export default LogicShoes;