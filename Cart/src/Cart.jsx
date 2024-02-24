import { useState, useEffect } from "react";
import "./Cart.css";
function Cart(){
    const [Total, setTotal] = useState(0);
    const [products, setproducts] = useState([{
        "name": "Samsung Galaxy S8",
        "price": 399.99,
        "image": "https://www.course-api.com/images/cart/phone-1.png",
        "count": 1,
    },
    {
        "name": "Google Pixel",
        "price": 499.99,
        "image": "https://www.course-api.com/images/cart/phone-2.png",
        "count": 1,
    },
    {
        "name": "Xiaomi Redmi Note 2",
        "price": 699.99,
        "image": "https://www.course-api.com/images/cart/phone-3.png",
        "count": 1,
    },
    {
        "name": "Samsung Galaxy S7",
        "price": 599.99,
        "image": "https://www.course-api.com/images/cart/phone-4.png",
        "count": 1,
    },
    ])
    const [Items, setItems] = useState(products.length);
    function calculateTotal(){
        setTotal(0);
        products.forEach(item =>{
            setTotal(Total => Total + (item.price * item.count));
        })
    }
    function increaseCount(elem){
        const updatedProducts = [...products];
        updatedProducts[elem] = {
            ...updatedProducts[elem],
            count: updatedProducts[elem].count + 1,
        }
        setproducts(updatedProducts);
        setItems(Items + 1);
    }
    function decreaseCount(elem){
        if (products[elem].count - 1 > 0){
            const updatedProducts = [...products];
            updatedProducts[elem] = {
                ...updatedProducts[elem],
                count: updatedProducts[elem].count - 1,
            }
            setproducts(updatedProducts);
            setItems(Items - 1);
        }
    }
    function removeItem(Name){
        setproducts(products.filter(item => item.name != Name));
    };
    useEffect(()=>{
        calculateTotal();
        let newCount = 0;
        products.forEach(item => {
            newCount += item.count;
        })
        setItems(newCount);
    }, [products])
    return(
        <>
            <nav className="navbar">
                <div className="title">UseReducer</div>
                <div className="Cart"><i class="fa-solid fa-cart-plus"></i><span>{Items}</span></div>
            </nav>
            <div className="myBag">YOUR BAG</div>
            <div className="thecart">
                {products.length > 0 ? products.map((prod, idx) => (<div className="items">
                    <img src={prod.image} alt="" className="item-image"/>
                    <div className="info">
                        <div className="name">{prod.name}</div>
                        <div className="price">${prod.price}</div>
                        <div className="remove" onClick={()=> removeItem(prod.name)}><span>Remove</span></div>
                    </div>
                    <div className="options">
                        <i class="fa-solid fa-chevron-up" onClick={() => increaseCount(idx)}></i>
                        <span>{prod.count}</span>
                        <i class="fa-solid fa-chevron-down" onClick={() => decreaseCount(idx)}></i>
                    </div>
                </div>)) : <div className="Empty">Is Empty.</div>}
            </div>
            
            <hr />
            <div className="billing">
                <span>Total</span>
                <div className="total-price">${Total.toFixed(2)}</div>
            </div>
            <div className="remove-all">
                <button onClick={() => setproducts([])}>Clear Cart</button>
            </div>
        </>
    );
}
export default Cart;