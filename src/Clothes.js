import Buttons from "./Buttons";
import { data } from './data';
import {useState} from 'react';
import Logic from "./Logic";


function Clothes(){

    const [ dresses, setDresses] = useState(data);
    
    const shosenClothes =(searchTerm)=>{
        const newList= data.filter(element =>
            element.searchTerm === searchTerm);
            setDresses(newList);

    }
    
    return(     <div >
        <div className="top">
        <h1>Одежда</h1>
        <Buttons filtrerClothes={shosenClothes} />
        <Logic formula={dresses} />
        </div>

</div>
    )
}

export default Clothes;