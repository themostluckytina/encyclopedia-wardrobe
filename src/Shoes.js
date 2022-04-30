import { dataTwo } from './dataTwo';
import {useState} from 'react';
import LogicShoes from './LogicShoes';


 
function Shoes(){

    const[ shoes, setShoes] = useState(dataTwo);

    const femaleShoes =(heels )=>{
    const heelShoes = shoes.filter( heal=>
        heal.heels === heels);
        setShoes(heelShoes)

    }


    
    return( <div className="main">
        <div className="main">
            <h1> Обувь</h1>
            <h3>Уделяя должное внимание одежде, многие из нас недооценивают обувь. А ведь именно она делает наш образ завершенным. И обувь способна кардинально его изменить. Например, импозантные туфли на шпильке превращают обычное платье в вечерний наряд. А качественные мужские лоферы придают солидности и респектабельности человеку в джинсах.</h3>

            <div>
            <button className="change" onClick={()=>femaleShoes('female')}>Женская обувь</button>
        </div>

        <LogicShoes formulaShoes={shoes} />
            
            
            <img src='https://remontobuvi.org/wp-content/uploads/2018/08/img3.jpg' width={600} alt='clothes'/>
        </div>

</div>
)
}
export default Shoes;