function Buttons({filtrerClothes}){


    return( <div className="cont">

        <button className="change" onClick={()=>filtrerClothes('coats')} >Верхняя одежда</button>
        <button className="change" onClick={()=> filtrerClothes('dresses')} >Легкая одежда</button>
        <button className="change" onClick={() =>filtrerClothes('underwear') }>Нижнее белье</button>
       
    </div>)
    
}



export default Buttons;