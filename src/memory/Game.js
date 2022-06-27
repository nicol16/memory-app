import Cards from './Cards';
import './memory.css';

export default function Game(){

    return(

        <div className="app-memory">

        <h1>Memory Game - React</h1>

            <div className="container-memory">

          <Cards/>

            </div>

        </div>
    )
}
