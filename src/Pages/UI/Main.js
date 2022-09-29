import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import Item from '../Item/Item';
import Personal from '../PersonalInfo/Personal';
import './Main.css';

const Main = () => {

    const [items, setItems] = useState([]);
    const [cart, setAddCart] = useState([])

    const handleAddToList = (item)=>{
        console.log(item);
        const newCart = [...cart, item]
        setAddCart(newCart)

    }

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className='main-container'>

            <div className="items-container ">

                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                        handleAddToList={handleAddToList}
                    ></Item>)
                }
            </div>
            <div className="cart-container">
                
                    <Cart></Cart>
                    <Personal></Personal>
                    <Break></Break>
                    <Exercise 
                    cart={cart}
                    ></Exercise>
                    
                   
                    
            </div>
        </div>
    );
};

export default Main;