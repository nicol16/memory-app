import './memory.css';
import {useState} from 'react';
import Card from "./Card";

export default function Cards({item}) {


    const [items, setItems] = useState([
        {id: 1, img: './html.png', stat: "active"},
        {id: 1, img: './html.png', stat: ""},
        {id: 2, img: './css.png', stat: "correct"},
        {id: 2, img: './css.png', stat: ""},
        {id: 3, img: './js.png', stat: ""},
        {id: 3, img: './js.png', stat: "wrong"},
        {id: 4, img: './angular.png', stat: ""},
        {id: 4, img: './angular.png', stat: ""},
        {id: 5, img: './node.png', stat: ""},
        {id: 5, img: './node.png', stat: ""},
        {id: 6, img: './scss.png', stat: ""},
        {id: 6, img: './scss.png', stat: ""},
        {id: 7, img: './vue.png', stat: ""},
        {id: 7, img: './vue.png', stat: ""},
        {id: 8, img: './react.png', stat: ""},
        {id: 8, img: './react.png', stat: ""}
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)


    function check(current) {
        if (items[current].id == items[prev].id) {
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setPrev(-1)
        } else {
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)

            }, 1000)
        }

    }


    function handleClick(id) {
        if (prev === -1) {
            setItems([...items])
            setPrev(id)
        } else {
            check(id)
        }
    }

    return (

        <div className="container-memory">
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick}/>
            ))}


        </div>

    );
}
