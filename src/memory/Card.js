export default function Card({item, id, handleClick}){

//    Si item.stat existe pondra active + item.stat, sino pondra un item vacio.
const itemClass = item.stat ? " active " + item.stat : ' ';


    return(

         <div className={'card' + itemClass} onClick={() => handleClick(id)}>
             <img src={item.img} alt=""/>
         </div>


    );
}
