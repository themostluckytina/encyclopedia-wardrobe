import { useState } from 'react';

import { dataHats } from './dataHats';
import LogicHat from './LogicHat';



function Hats(){

    const [hats, setHats] = useState(dataHats);
    

    const onlyForLady =(sex)=>{
      const newList= dataHats.filter(element =>
          element.sex === sex);
          setHats(newList);


    }

return (<div className="top">
  
    <div className="main">

      <h1>ГОЛОВНЫЕ УБОРЫ</h1>
      <img src='https://avatars.mds.yandex.net/get-zen_doc/61014/pub_5c9b82adfa932f00b4b38385_5c9b877e01483e00b47ce503/scale_1200' width={450} alt='tie'/>
      <h3>С давних пор головные уборы являются неотъемлемой частью практически любого образа. При этом они выполняют сразу несколько функций: практическую, защищая голову от зноя, холода или ветра, и декоративную, привлекая внимание к лицу, подчёркивая индивидуальность и расставляя нужные акценты.</h3>
    </div>

    <div>
            <button className="change" onClick={()=> onlyForLady('lady')}>Для женщин</button>
        </div>

    <LogicHat newHat={hats}/>

    <div>
      <img src='https://avatars.mds.yandex.net/get-zen_doc/1878571/pub_5fbdf7396ea65c24b35bd89c_5fbdf7564b9b1b331d7752f2/scale_1200' width={600}  alt='clothes'/>
    </div>




</div>

  
 
)
}

export default Hats;