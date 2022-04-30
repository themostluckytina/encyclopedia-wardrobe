import { dataThree } from './dataThree';
import { useState } from 'react';
import LogicTies from "./LogicTies";




function Ties(){

    const [ties, setTies] = useState(dataThree);

    const tieList = (sort) => {
    const newTieList = dataThree.filter(neck =>
        neck.sort===sort);
    setTies(newTieList)    

   }

    
    return( <div className="top">
        <div className="main">
            <h1>Галстуки</h1>
            <img src='https://obliqo.ru/wp-content/uploads/2021/08/vse-vidy-galstukov-fasony-i-tkani-dizajn-vidy-uzlov-i-jetiket.jpg' width={420} alt='tie'/>

            <h3>Полоска ткани, которую особым, импозантным образом обвязывают вокруг шеи (это и есть галстук), практического смысла не имеет и одеждой не считается. Галстук не греет, не прикрывает, но без него мужской костюм теряет презентабельность, торжественность и строгость. Носимый когда-то египетской знатью, аристократами Китая и римскими легионерами, галстук и сегодня – знак благополучия и символ социального статуса.</h3>
            
        <div>
            <button className="change" onClick={()=>tieList('scarf')} >Галстук-платок</button>
        </div>
        
            

            <LogicTies newTies={ties} />
        </div>
        <div className="main">
            <h2>Виды узлов галстука</h2>
            <p className='class'>Ни галстук, ни нашейный платок не завязывают произвольно. Узлы – важнейший компонент, определяющий характер галстука, его стилистику. Специалисты насчитывают не менее 85 видов галстучных узлов, расскажем о некоторых.</p>
        </div>

        <div className="main">
            <h3 className="toTie">Бабочка</h3>
            <img src='https://obliqo.ru/wp-content/uploads/2021/08/vidy-uzlov-dlja-galstuka.jpg' width={350} alt='tie' />
            <p className="about">Формируют его из узкого галстука, сшитого из ткани, держащей форму. Такой узел затягивают крепко, чтобы избежать лишних складок и вмятин. Считается, что бабочка, завязанная вручную, обладает особенным шармом.</p>
        </div>
        <div className="main">
        <h3 className="toTie">Бальтус</h3>
            <img src='https://obliqo.ru/wp-content/uploads/2021/08/vse-vidy-uzlom-zhdja-galstuka-baltus.jpg' width={350} alt='tie' />
            <p className="about">Крупный, широкий, замысловатый узел, пригодный для длинных и легких, но не очень широких галстуков. На прочих моделях и, особенно, на галстуках с подкладкой бальтус выглядит громоздко. Balthus knot подходит широким воротникам и статным, плечистым мужчинам.</p>
        </div>
        <div className="main">
        <h3 className="toTie">Виндзорский узел</h3>
            <img src='https://obliqo.ru/wp-content/uploads/2021/08/vindzorskij-uzel-dlja-galstuka-kak-zavjazat-foto.jpg' width={350} alt='tie' />
            <p className="about">У него корректная треугольная форма, солидный, но сбалансированный объем и ширина, позволяющая создать драпировку. Поэтому Vindsor knot подходит любому костюму, росту и комплекции. Правда, виндзорский узел непросто завязать самостоятельно, и он не годится для жестких, армированных галстуков.</p>
        </div>
        <div className="main">
        <h3 className="toTie">Двойной узел</h3>
            <img src='https://obliqo.ru/wp-content/uploads/2021/08/dvojnoj-uzel-dlja-galstuka.jpg' width={350} alt='tie' />
            <p className="about">Похож на узел Виктории, но, во-первых, крепче, а во-вторых, компактнее. Double knot соотносится с неофициальным образом и вяжется на галстуках из негрубого текстиля.</p>
        </div>
        <div className="main">
        <h3 className="toTie">Пластрон</h3>
            <img src='https://obliqo.ru/wp-content/uploads/2021/08/uzel-plastron-shema.jpg' width={350} alt='tie' />
            <p className="about">Речь об узле, типичном для нашейного платка, который надевают под жилет на бракосочетание. Пластроновый узел выразительный и красочный, даже изощренный.</p>
        </div>
        <div className="main">
        <h3 className="toTie">Простой узел</h3>
            <img src='https://obliqo.ru/wp-content/uploads/2021/08/prostoj-uzel-dlja-galstuka-foto.jpg' width={350} alt='tie' />
            <p className="about">Он же четвертной и, из-за сходства с поводьями конного экипажа, четырехплетный. Завязать галстук способом Four-in-Hand под силу даже новичку. Итог стараний – конический, чуть удлиненный, лаконичный пучок. Четвертной стыкуется с любым воротником и годится для любого повода.</p>
        </div>

        <div>
        <img src='https://mblx.ru/wp-content/uploads/2017/11/Hranenie-galstukov.jpg' width={600} alt='clothes'/>
    </div>
        
        </div>
    )
}

export default Ties;