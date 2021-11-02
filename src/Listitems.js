import React from 'react';
import './Listitems.css';
import deleteItems from './App';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Listitems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className='list' key={item.key}>
            <p>{item.text}
                <span>
                    <button className="faicons"
                    onClick={ () => props.delete(item.key)}
                    ></button>
                </span>
            </p>

        </div>
    })
    return (
        <div>{listItems}</div>
    )
}

export default Listitems;