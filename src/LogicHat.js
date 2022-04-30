
import { useState } from 'react' ;

function LogicHat({newHat}){

    const [showMore, setShowMore] = useState(false);

    return(<div className="products">
            
        {newHat.map((head =>{
            const {id, toSay, about, photo} = head;

            return( <div key={id}>

            <div className="product-card">
                <img src={photo} width={300}  alt='cloth' />
            </div>
            <div className='box'>
                <h3 className='name'>{toSay} </h3>
                <p className='description'>{showMore ? about : about.substring(0, 50) + '....'}
                <button className='hide' onClick={()=> setShowMore(!showMore)}>{showMore ? 'Скрыть' : 'Далее'}</button>
                
                 </p>
            </div>
            </div>)
        }))}



    </div>)
}
export default LogicHat;